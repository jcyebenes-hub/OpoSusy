import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, CheckCircle, Award, FileText, ArrowRight, ArrowLeft, ShieldAlert, Sparkles, RefreshCw, X, LayoutGrid, Trophy, Crown } from 'lucide-react';
import { Question, UserStats, ExamSessionResult } from '../types';
import { BANCO_PREGUNTAS, CASOS_PRACTICOS_OFICIALES } from '../data/questions';
import { calculateOfficialScore, saveExamResult, evaluateTestCompletionForPuzzle } from '../utils/storage';
import { PUZZLE_PIECES } from '../data/puzzle';
import { shuffleQuestionOptions } from '../utils/shuffle';

interface SimulacroOficialViewProps {
  userStats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
  onAskAITutor: (topicId?: number) => void;
  onTestActiveChange?: (active: boolean) => void;
  onNavigateToPuzzle?: () => void;
}

export const SimulacroOficialView: React.FC<SimulacroOficialViewProps> = ({
  userStats,
  onUpdateStats,
  onAskAITutor,
  onTestActiveChange,
  onNavigateToPuzzle
}) => {
  const [examType, setExamType] = useState<'ejercicio1' | 'ejercicio2' | 'completo'>('ejercicio1');
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [isPlantillaOpen, setIsPlantillaOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<'ej1' | 'break' | 'ej2' | 'finished'>('ej1');
  const [unlockedPiecesInSimulacro, setUnlockedPiecesInSimulacro] = useState<string[]>([]);

  // Exam state
  const [questionsEj1, setQuestionsEj1] = useState<Question[]>([]);
  const [answersEj1, setAnswersEj1] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | null>>({});
  const [doubtfulEj1, setDoubtfulEj1] = useState<Record<number, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Time remaining in seconds
  const [secondsRemaining, setSecondsRemaining] = useState<number>(90 * 60);

  // Ejercicio 2 state
  const [selectedCaseId, setSelectedCaseId] = useState<'SUPUESTO-A' | 'SUPUESTO-B'>('SUPUESTO-A');
  const [questionsEj2, setQuestionsEj2] = useState<Question[]>([]);
  const [answersEj2, setAnswersEj2] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | null>>({});

  // Final Results
  const [examResult, setExamResult] = useState<ExamSessionResult | null>(null);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isExamRunning && currentStep !== 'finished' && currentStep !== 'break') {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isExamRunning, currentStep]);

  const startExam = (type: 'ejercicio1' | 'ejercicio2' | 'completo') => {
    setExamType(type);

    if (type === 'ejercicio1' || type === 'completo') {
      // 60 distinct official questions randomly selected from the bank with shuffled options A-B-C-D
      const shuffled = [...BANCO_PREGUNTAS].sort(() => 0.5 - Math.random());
      const final60: Question[] = shuffled.slice(0, 60).map((q, idx) => ({
        ...shuffleQuestionOptions(q),
        id: `EXAM-${idx + 1}`
      }));

      setQuestionsEj1(final60);
      setAnswersEj1({});
      setDoubtfulEj1({});
      setCurrentIndex(0);
      setSecondsRemaining(90 * 60); // 90 min
      setCurrentStep('ej1');
    } else {
      // Direct to Ejercicio 2 with shuffled options
      const chosenCase = CASOS_PRACTICOS_OFICIALES.find((c) => c.id === selectedCaseId)!;
      setQuestionsEj2(chosenCase.questions.map((q) => shuffleQuestionOptions(q)));
      setAnswersEj2({});
      setCurrentIndex(0);
      setSecondsRemaining(60 * 60); // 60 min
      setCurrentStep('ej2');
    }

    setIsExamRunning(true);
    setExamResult(null);
    onTestActiveChange?.(true);
  };

  const handleAutoSubmit = () => {
    alert('¡Tiempo agotado! Se procede a la recogida y corrección oficial de la plantilla de examen.');
    if (currentStep === 'ej1') {
      if (examType === 'completo') {
        setCurrentStep('break');
      } else {
        calculateAndFinishResults();
      }
    } else if (currentStep === 'ej2') {
      calculateAndFinishResults();
    }
  };

  const startEjercicio2 = () => {
    const chosenCase = CASOS_PRACTICOS_OFICIALES.find((c) => c.id === selectedCaseId)!;
    setQuestionsEj2(chosenCase.questions);
    setAnswersEj2({});
    setCurrentIndex(0);
    setSecondsRemaining(60 * 60); // 60 min
    setCurrentStep('ej2');
  };

  const calculateAndFinishResults = () => {
    // Ej 1 scores
    let aciertos1 = 0;
    let errores1 = 0;
    let score1 = 0;

    if (questionsEj1.length > 0) {
      questionsEj1.forEach((q, idx) => {
        const ans = answersEj1[idx];
        if (ans === q.correcta) aciertos1++;
        else if (ans) errores1++;
      });
      score1 = calculateOfficialScore(aciertos1, errores1, questionsEj1.length);
    }

    // Ej 2 scores
    let aciertos2 = 0;
    let errores2 = 0;
    let score2 = 0;

    if (questionsEj2.length > 0) {
      questionsEj2.forEach((q, idx) => {
        const ans = answersEj2[idx];
        if (ans === q.correcta) aciertos2++;
        else if (ans) errores2++;
      });
      score2 = calculateOfficialScore(aciertos2, errores2, questionsEj2.length);
    }

    const passed1 = questionsEj1.length > 0 ? score1 >= 5.0 : true;
    const passed2 = questionsEj2.length > 0 ? score2 >= 5.0 : true;
    const passed = passed1 && passed2;

    // Convocatoria scaling: Ej 1 max 60 pts, Ej 2 max 40 pts -> Total = (score1 * 6) + (score2 * 4) = max 100
    const finalPoints100 = (score1 * 6) + (score2 * 4);

    const result: ExamSessionResult = {
      id: `sim_${Date.now()}`,
      date: new Date().toISOString(),
      mode: examType === 'completo' ? 'simulacro_completo' : 'simulacro_ej1',
      totalQuestions: questionsEj1.length + questionsEj2.length,
      correctAnswers: aciertos1 + aciertos2,
      aciertos: aciertos1 + aciertos2,
      wrongAnswers: errores1 + errores2,
      errores: errores1 + errores2,
      blankAnswers: (questionsEj1.length - (aciertos1 + errores1)) + (questionsEj2.length - (aciertos2 + errores2)),
      blancos: (questionsEj1.length - (aciertos1 + errores1)) + (questionsEj2.length - (aciertos2 + errores2)),
      score: examType === 'ejercicio1' ? score1 : examType === 'ejercicio2' ? score2 : finalPoints100 / 10,
      passed,
      timeSpentSeconds: 0
    };

    setExamResult(result);
    saveExamResult(result);
    setCurrentStep('finished');
    setIsExamRunning(false);
    onTestActiveChange?.(false);

    // Evaluate puzzle piece unlocks (including Pieza 12: Simulacro Oficial >= 9.00)
    const scoreOn10 = result.score;
    const { updatedStats: puzzleStats, newUnlockedPieces } = evaluateTestCompletionForPuzzle(
      userStats,
      scoreOn10,
      [...questionsEj1, ...questionsEj2],
      true
    );
    setUnlockedPiecesInSimulacro(newUnlockedPieces);

    // Update user stats
    const updatedStats = {
      ...puzzleStats,
      completedTests: (puzzleStats.completedTests || 0) + 1,
      points: puzzleStats.points + (passed ? 150 : 40)
    };
    onUpdateStats(updatedStats);
  };

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 1. Initial Selection / Launch Screen
  if (!isExamRunning && currentStep !== 'finished') {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Award className="w-3.5 h-3.5" />
            SIMULACRO ESTRICTO · BASES OFICIALES SANT JOAN D'ALACANT (OPE 2026)
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Examen Oficial: Ejercicio 1 y Ejercicio 2
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Simula las condiciones reales de la oposición en el aula de examen: cronómetro regresivo, 4 alternativas, penalización por error de un tercio de pregunta (-0.33) y nota mínima eliminatoria de 5.0 en cada prueba.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-1.5">
              <span className="text-amber-400 text-xs font-bold uppercase">Ejercicio 1 (Eliminatorio)</span>
              <div className="text-sm font-bold text-white">60 Preguntas Tipo Test · 90 Minutos</div>
              <p className="text-slate-400 text-xs">
                Sobre los 40 temas del programa (8 General + 32 Específica). Puntuación de 0 a 60 puntos (mínimo 30 para superar).
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-1.5">
              <span className="text-amber-400 text-xs font-bold uppercase">Ejercicio 2 (Eliminatorio)</span>
              <div className="text-sm font-bold text-white">Supuesto Práctico · 60 Minutos</div>
              <p className="text-slate-400 text-xs">
                Resolución de un caso práctico propuesto por el tribunal relacionado con las funciones de monitora. Puntuación de 0 a 40 puntos.
              </p>
            </div>
          </div>
        </div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-400 transition-all">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black text-sm">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base">Solo Ejercicio 1</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Test oficial de 60 preguntas sobre el temario general y específico. 90 minutos de tiempo reglamentario.
              </p>
            </div>
            <button
              onClick={() => startExam('ejercicio1')}
              className="w-full py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              Comenzar Ejercicio 1 (90 min)
            </button>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-indigo-400 transition-all">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-black text-sm">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base">Solo Ejercicio 2</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Resolución del Supuesto Práctico oficial (Escuela Estival o Estudio Vigilado) con 10 preguntas y 60 minutos.
              </p>
              <div className="pt-2">
                <label className="text-[11px] font-bold text-slate-600 block mb-1">Elegir caso práctico:</label>
                <select
                  value={selectedCaseId}
                  onChange={(e) => setSelectedCaseId(e.target.value as any)}
                  className="w-full text-xs p-1.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800"
                >
                  <option value="SUPUESTO-A">Supuesto A: Escuela Estival (Olas calor & ACNEAE)</option>
                  <option value="SUPUESTO-B">Supuesto B: Estudio Vigilado (Acoso & Negligencia)</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => startExam('ejercicio2')}
              className="w-full py-2.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              Comenzar Ejercicio 2 (60 min)
            </button>
          </div>

          <div className="bg-gradient-to-b from-blue-50 to-indigo-50/50 rounded-2xl p-5 border-2 border-blue-600 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center font-black text-sm">
                  1+2
                </div>
                <span className="text-[10px] font-bold bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full uppercase">
                  Simulación Total
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base">Simulacro Completo</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ejercicio 1 (60 preguntas) + Pausa reglamentaria + Ejercicio 2 (Supuesto Práctico). Puntuación conjunta sobre 100 puntos y desempate oficial.
              </p>
            </div>
            <button
              onClick={() => startExam('completo')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              Iniciar Oposición Completa
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Break Between Exercises (when doing full simulation)
  if (currentStep === 'break') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900">
            ¡Ejercicio 1 Finalizado y Entregado!
          </h2>
          <p className="text-xs text-slate-600">
            En la convocatoria oficial se realiza un breve descanso antes del comienzo del segundo ejercicio.
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-2 text-xs">
          <span className="font-bold text-slate-800">Segundo Ejercicio: Supuesto Práctico (60 min)</span>
          <p className="text-slate-600">
            Elige el supuesto oficial que deseas defender ante el tribunal de Sant Joan d'Alacant:
          </p>
          <select
            value={selectedCaseId}
            onChange={(e) => setSelectedCaseId(e.target.value as any)}
            className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg text-slate-800 font-medium"
          >
            <option value="SUPUESTO-A">Supuesto A: Escuela Estival Municipal (Olas de calor, TEA y alergias)</option>
            <option value="SUPUESTO-B">Supuesto B: Estudio Vigilado y Aula Concilia (Acoso escolar y negligencia)</option>
          </select>
        </div>

        <button
          onClick={startEjercicio2}
          className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
        >
          Comenzar Ejercicio 2 (Supuesto Práctico)
        </button>
      </div>
    );
  }

  // 3. Finished Results Screen
  if (currentStep === 'finished' && examResult) {
    const isTotalPassed = examResult.passed;

    return (
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="text-center space-y-2 border-b border-slate-100 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Acta de Calificación Oficial del Tribunal
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {isTotalPassed ? '¡APTA EN LA OPOSICIÓN! C1 OBTENIDO' : 'NO SUPERADA · REPASO REQUERIDO'}
          </h2>
          <p className="text-xs text-slate-500">
            Convocatoria Monitora Infantil · Ayuntamiento de Sant Joan d'Alacant · Puesto nº 204
          </p>

          <div className="inline-flex items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-200 min-w-[220px] mt-4">
            <div className="text-center">
              <span className="text-4xl sm:text-5xl font-black text-blue-700">
                {examResult.score.toFixed(2)}
              </span>
              <span className="text-xs block font-bold text-slate-500 mt-1 uppercase">
                Puntuación Oficial Final
              </span>
              <span
                className={`inline-block mt-2 text-xs font-bold px-3 py-0.5 rounded-full ${
                  isTotalPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}
              >
                {isTotalPassed ? 'APTO / EN BOLSA DE TRABAJO' : 'ELIMINADA (< 5.0)'}
              </span>
            </div>
          </div>
        </div>

        {/* Desglose Estadístico */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="text-xl font-bold text-emerald-800">{examResult.correctAnswers}</div>
            <div className="text-xs text-emerald-600 font-semibold">Aciertos Totales</div>
          </div>
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
            <div className="text-xl font-bold text-rose-800">{examResult.wrongAnswers}</div>
            <div className="text-xs text-rose-600 font-semibold">Errores (-1/3 cada uno)</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-xl font-bold text-slate-700">{examResult.blankAnswers}</div>
            <div className="text-xs text-slate-500 font-semibold">No Contestadas</div>
          </div>
        </div>

        {/* 🧩 Puzzle Piece Unlocked Card in Simulacro */}
        {unlockedPiecesInSimulacro.length > 0 && (
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl p-5 text-white shadow-lg border border-blue-800 text-left space-y-3 animate-in zoom-in-95">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                  ¡Pieza Épica del Mural Desbloqueada!
                </span>
              </div>
              {onNavigateToPuzzle && (
                <button
                  onClick={() => {
                    setCurrentStep('ej1');
                    setIsExamRunning(false);
                    onTestActiveChange?.(false);
                    onNavigateToPuzzle();
                  }}
                  className="text-xs font-bold text-amber-300 hover:text-white underline cursor-pointer"
                >
                  Ver Mural del Puzzle →
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {unlockedPiecesInSimulacro.map((pId) => {
                const pieceDef = PUZZLE_PIECES.find(p => p.id === pId);
                if (!pieceDef) return null;
                return (
                  <div key={pId} className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                      #{pieceDef.number}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {pieceDef.title}
                      </div>
                      <div className="text-[10px] text-amber-200">
                        {pieceDef.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Cláusula de desempate oficial */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 space-y-1">
          <span className="font-bold flex items-center gap-1 text-amber-900">
            <Award className="w-4 h-4 text-amber-700" />
            Criterio de Desempate Convocatoria Sant Joan d'Alacant:
          </span>
          <p className="leading-relaxed">
            Las bases establecen que, en caso de empate en la puntuación total acumulada, la posición final en la bolsa de trabajo y adjudicación de la plaza nº 204 se dirimirá a favor del opositor que haya obtenido la mayor calificación en el segundo ejercicio (supuesto práctico).
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              setCurrentStep('ej1');
              setIsExamRunning(false);
              onTestActiveChange?.(false);
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Volver al Menú de Simulacros
          </button>
          {onNavigateToPuzzle && (
            <button
              onClick={() => {
                setCurrentStep('ej1');
                setIsExamRunning(false);
                onTestActiveChange?.(false);
                onNavigateToPuzzle();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 text-slate-950 text-xs font-black transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Trophy className="w-4 h-4" />
              <span>Ver Mural del Puzzle</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // 4. Active Exam Running (Ejercicio 1 or Ejercicio 2)
  const isEj1 = currentStep === 'ej1';
  const activeQuestions = isEj1 ? questionsEj1 : questionsEj2;
  const activeAnswers = isEj1 ? answersEj1 : answersEj2;
  const currentQ = activeQuestions[currentIndex] || activeQuestions[0];
  const selectedAns = activeAnswers[currentIndex];

  const handleSelectAnswer = (opt: 'A' | 'B' | 'C' | 'D') => {
    if (isEj1) {
      setAnswersEj1((prev) => ({ ...prev, [currentIndex]: opt }));
    } else {
      setAnswersEj2((prev) => ({ ...prev, [currentIndex]: opt }));
    }
  };

  const handleClearAnswer = () => {
    if (isEj1) {
      setAnswersEj1((prev) => ({ ...prev, [currentIndex]: null }));
    } else {
      setAnswersEj2((prev) => ({ ...prev, [currentIndex]: null }));
    }
  };

  const toggleDoubtful = () => {
    if (isEj1) {
      setDoubtfulEj1((prev) => ({ ...prev, [currentIndex]: !prev[currentIndex] }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-100 flex flex-col h-[100dvh] w-full overflow-hidden select-none">
      {/* 1. Ultra-compact Exam Top Bar (~44px) */}
      <header className="h-11 shrink-0 bg-slate-950 text-white px-3 sm:px-4 flex items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-7 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-black text-[11px] shrink-0">
            {isEj1 ? 'EJ1' : 'EJ2'}
          </span>
          <span className="text-xs font-semibold text-slate-200 truncate">
            Pregunta <strong className="text-white">{currentIndex + 1}</strong> de {activeQuestions.length}
          </span>
        </div>

        {/* Real Countdown Timer */}
        <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
          <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-mono text-xs sm:text-sm font-black text-amber-300">
            {formatTimer(secondsRemaining)}
          </span>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlantillaOpen(true)}
            className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors cursor-pointer"
            title="Ver cuadrícula de respuestas"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Plantilla</span>
            <span className="text-[10px] text-blue-300 font-bold">
              ({Object.values(activeAnswers).filter(Boolean).length}/{activeQuestions.length})
            </span>
          </button>

          <button
            onClick={() => {
              if (confirm('¿Confirmas la entrega oficial de la plantilla de examen?')) {
                if (isEj1 && examType === 'completo') {
                  setCurrentStep('break');
                } else {
                  calculateAndFinishResults();
                }
              }
            }}
            className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer"
          >
            Entregar
          </button>

          <button
            onClick={() => {
              if (confirm('¿Deseas abandonar el simulacro oficial en curso? Se perderán las respuestas no guardadas.')) {
                setIsExamRunning(false);
                onTestActiveChange?.(false);
              }
            }}
            className="text-xs font-semibold p-1 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
            title="Salir del examen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="h-1 w-full bg-slate-200 shrink-0">
        <div
          className="bg-blue-600 h-full transition-all duration-200"
          style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
        />
      </div>

      {/* 2. Main Question & Options Canvas (Zero Scroll) */}
      <main className="flex-1 min-h-0 w-full max-w-2xl mx-auto px-3 py-2 sm:px-4 sm:py-3 flex flex-col justify-between overflow-hidden">
        {/* Question Statement Card */}
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-xs shrink-0 max-h-[34vh] overflow-y-auto">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              Pregunta nº {currentIndex + 1}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleDoubtful}
                className={`text-[11px] px-2 py-0.5 rounded border font-semibold transition-colors cursor-pointer ${
                  doubtfulEj1[currentIndex]
                    ? 'bg-amber-100 border-amber-300 text-amber-800 font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {doubtfulEj1[currentIndex] ? '★ Dudosa' : '☆ Marcar dudosa'}
              </button>

              {selectedAns && (
                <button
                  onClick={handleClearAnswer}
                  className="text-[11px] text-slate-400 hover:text-rose-600 underline cursor-pointer"
                >
                  Blanco
                </button>
              )}
            </div>
          </div>

          <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {currentQ.enunciado}
          </h2>
        </div>

        {/* 4 Choices (A, B, C, D) */}
        <div className="flex flex-col gap-2 my-auto shrink-0">
          {(['A', 'B', 'C', 'D'] as const).map((opt) => {
            const isSelected = selectedAns === opt;

            return (
              <button
                key={opt}
                onClick={() => handleSelectAnswer(opt)}
                className={`w-full min-h-[44px] py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xl border text-left flex items-center gap-2.5 sm:gap-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/30 text-blue-950 font-bold shadow-xs'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800 shadow-xs'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'bg-blue-700 text-white border-blue-700'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {opt}
                </span>
                <span className="text-xs sm:text-sm leading-snug flex-1 font-medium">
                  {currentQ.opciones[opt]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Empty placeholder to balance flex space */}
        <div className="shrink-0 text-center">
          <p className="text-[11px] text-slate-400">
            Fórmula oficial: Puntuación = (Aciertos − Errores/3) / {activeQuestions.length} × 10
          </p>
        </div>
      </main>

      {/* 3. Bottom Controls Bar (~48px) */}
      <footer className="h-12 shrink-0 bg-white border-t border-slate-200 px-3 sm:px-4 flex items-center justify-between gap-2 shadow-xs">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        <span className="text-xs text-slate-500 font-semibold">
          {currentIndex + 1} / {activeQuestions.length}
        </span>

        {currentIndex === activeQuestions.length - 1 ? (
          <button
            onClick={() => {
              if (confirm('¿Confirmas la entrega final de tu examen?')) {
                if (isEj1 && examType === 'completo') {
                  setCurrentStep('break');
                } else {
                  calculateAndFinishResults();
                }
              }
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs cursor-pointer"
          >
            <span>Entregar</span>
            <CheckCircle className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs cursor-pointer"
          >
            <span>Siguiente</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </footer>

      {/* 4. Plantilla Modal Overlay */}
      {isPlantillaOpen && (
        <div className="fixed inset-0 z-60 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
            <div className="p-3.5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">Plantilla de Respuestas</h3>
                <p className="text-[11px] text-slate-500">
                  {Object.values(activeAnswers).filter(Boolean).length} de {activeQuestions.length} preguntas respondidas
                </p>
              </div>
              <button
                onClick={() => setIsPlantillaOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 overflow-y-auto flex-1">
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-1.5">
                {activeQuestions.map((_, idx) => {
                  const ans = activeAnswers[idx];
                  const isCurrent = currentIndex === idx;
                  const isDoubt = doubtfulEj1[idx];

                  let bg = 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100';
                  if (ans) {
                    bg = 'bg-blue-600 text-white border-blue-600 font-bold';
                  }
                  if (isDoubt) {
                    bg = 'bg-amber-100 text-amber-800 border-amber-400 font-bold';
                  }
                  if (isCurrent) {
                    bg += ' ring-2 ring-slate-900';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setIsPlantillaOpen(false);
                      }}
                      className={`h-9 rounded-lg border text-xs flex flex-col items-center justify-center transition-all cursor-pointer ${bg}`}
                    >
                      <span className="text-[10px] leading-none opacity-80">{idx + 1}</span>
                      <span className="text-xs leading-none font-black">{ans || '-'}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs" /> Respondida
                <span className="w-2.5 h-2.5 bg-amber-100 border border-amber-400 rounded-xs ml-1" /> Dudosa
                <span className="w-2.5 h-2.5 bg-white border border-slate-200 rounded-xs ml-1" /> Blanco
              </div>
              <button
                onClick={() => setIsPlantillaOpen(false)}
                className="px-3 py-1 bg-slate-900 text-white rounded-lg text-[11px] font-bold cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
