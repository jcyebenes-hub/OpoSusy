import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, XCircle, HelpCircle, Sparkles, Filter, ChevronRight, AlertTriangle, ArrowRight, X, Trophy, Crown, Star, Flame, Shuffle, Layers } from 'lucide-react';
import { Question, UserStats } from '../types';
import { BANCO_PREGUNTAS } from '../data/questions';
import { TEMARIO_COMPLETO } from '../data/temario';
import { calculateOfficialScore, recordQuestionAnswer, evaluateTestCompletionForPuzzle } from '../utils/storage';
import { PUZZLE_PIECES } from '../data/puzzle';
import { shuffleQuestionOptions, shuffleArray, getThematicBlockForTopic } from '../utils/shuffle';

interface TestViewProps {
  userStats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
  initialTopicId?: number;
  onAskAITutor: (topicId?: number) => void;
  onTestActiveChange?: (active: boolean) => void;
  onNavigateToPuzzle?: () => void;
}

export const TestView: React.FC<TestViewProps> = ({
  userStats,
  onUpdateStats,
  initialTopicId,
  onAskAITutor,
  onTestActiveChange,
  onNavigateToPuzzle
}) => {
  // Test configuration
  const [selectedTopic, setSelectedTopic] = useState<number | 'all' | 'general' | 'especifica'>(
    initialTopicId || 'all'
  );
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [completeWithBlock, setCompleteWithBlock] = useState<boolean>(true);
  const [mode, setMode] = useState<'practica' | 'examen'>('practica'); // practica: immediate feedback; examen: deferred
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [isAiGenerating, setIsAiGenerating] = useState<boolean>(false);

  // Active test execution state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | null>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [unlockedPiecesInSession, setUnlockedPiecesInSession] = useState<string[]>([]);
  const [isPerfect10InSession, setIsPerfect10InSession] = useState<boolean>(false);

  // Helper to count questions per topic in the bank
  const getTopicBankCount = (topicNum: number) => {
    return BANCO_PREGUNTAS.filter((q) => q.tema === topicNum).length;
  };

  // Filter bank questions based on selection and guarantee full requested questionCount
  const startTest = (customQuestions?: Question[]) => {
    let pool: Question[] = [];

    if (customQuestions && customQuestions.length > 0) {
      pool = customQuestions;
    } else if (selectedTopic === 'general') {
      pool = BANCO_PREGUNTAS.filter((q) => q.categoria === 'General');
    } else if (selectedTopic === 'especifica') {
      pool = BANCO_PREGUNTAS.filter((q) => q.categoria === 'Especifica');
    } else if (typeof selectedTopic === 'number') {
      const topicQuestions = BANCO_PREGUNTAS.filter((q) => q.tema === selectedTopic);

      if (completeWithBlock && topicQuestions.length < questionCount) {
        // Prioritize topic questions first
        const shuffledTopicQuestions = shuffleArray(topicQuestions);
        const relatedThemes = getThematicBlockForTopic(selectedTopic).filter(t => t !== selectedTopic);
        const relatedQuestions = shuffleArray(BANCO_PREGUNTAS.filter(q => relatedThemes.includes(q.tema)));

        pool = [...shuffledTopicQuestions, ...relatedQuestions];

        // If still fewer than requested (e.g., 30 questions requested on a small block),
        // cycle with randomized order so the test is guaranteed to fulfill questionCount
        if (pool.length < questionCount && pool.length > 0) {
          while (pool.length < questionCount) {
            pool = [...pool, ...shuffleArray(pool)];
          }
        }
      } else {
        pool = topicQuestions;
      }
    } else {
      pool = [...BANCO_PREGUNTAS];
    }

    if (pool.length === 0) {
      alert("No hay preguntas en el banco para este filtro. Intenta con 'Todos los temas' o pulsa 'Generar con IA'.");
      return;
    }

    // Shuffle pool of questions
    const shuffledPool = shuffleArray(pool);
    const selectedRaw = shuffledPool.slice(0, Math.min(questionCount, shuffledPool.length));

    // CRITICAL: DYNAMICALLY SHUFFLE OPTIONS (A, B, C, D) FOR EVERY QUESTION
    // This alters the letter position of the correct answer every single time,
    // preventing memorization of fixed option positions.
    const selected = selectedRaw.map((q) => shuffleQuestionOptions(q));

    setQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
    setIsTestActive(true);
    onTestActiveChange?.(true);
  };

  const handleGenerateWithAI = async () => {
    setIsAiGenerating(true);
    const targetTopic = typeof selectedTopic === 'number' ? selectedTopic : Math.floor(Math.random() * 40) + 1;
    try {
      const response = await fetch('/api/gemini/generate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: targetTopic,
          difficulty: 'media',
          type: 'test'
        })
      });

      if (!response.ok) {
        throw new Error('Error al generar pregunta con IA');
      }

      const newQ = await response.json();
      startTest([newQ]);
    } catch (e) {
      console.error(e);
      alert('No se pudo generar la pregunta con IA en este momento. Usando banco oficial.');
      startTest();
    } finally {
      setIsAiGenerating(false);
    }
  };

  const handleAnswerSelect = (optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (userAnswers[currentIndex] !== undefined && userAnswers[currentIndex] !== null && mode === 'practica') {
      return; // already answered in practice mode
    }

    const currentQ = questions[currentIndex];
    const isCorrect = optionKey === currentQ.correcta;

    setUserAnswers((prev) => ({ ...prev, [currentIndex]: optionKey }));

    if (mode === 'practica') {
      setShowExplanation(true);
      const updatedStats = recordQuestionAnswer(userStats, currentQ, isCorrect);
      onUpdateStats(updatedStats);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    let currentStats = { ...userStats };
    if (mode === 'examen') {
      questions.forEach((q, idx) => {
        const ans = userAnswers[idx];
        const isCorrect = ans === q.correcta;
        currentStats = recordQuestionAnswer(currentStats, q, isCorrect);
      });
    }

    // Calculate score
    let currentAciertos = 0;
    let currentErrores = 0;
    questions.forEach((q, idx) => {
      const ans = userAnswers[idx];
      if (ans === q.correcta) currentAciertos++;
      else if (ans) currentErrores++;
    });
    const currentFinalScore = calculateOfficialScore(currentAciertos, currentErrores, questions.length);

    // Evaluate for puzzle
    const { updatedStats, newUnlockedPieces, isPerfect10 } = evaluateTestCompletionForPuzzle(
      currentStats,
      currentFinalScore,
      questions,
      false
    );

    setUnlockedPiecesInSession(newUnlockedPieces);
    setIsPerfect10InSession(isPerfect10);
    onUpdateStats(updatedStats);
    setIsFinished(true);
    onTestActiveChange?.(false);
  };

  // Stats calculation
  const totalQuestions = questions.length;
  let aciertos = 0;
  let errores = 0;
  let noContestadas = 0;

  questions.forEach((q, idx) => {
    const ans = userAnswers[idx];
    if (!ans) {
      noContestadas++;
    } else if (ans === q.correcta) {
      aciertos++;
    } else {
      errores++;
    }
  });

  const finalScore = calculateOfficialScore(aciertos, errores, totalQuestions);

  // Setup / Config Screen
  if (!isTestActive) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Generador de Test Oficial a Medida
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Practica con la fórmula oficial del tribunal: <span className="font-mono font-semibold text-slate-700">Nota = (Aciertos − Errores/3) / Total × 10</span>
              </p>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                4 Opciones (A, B, C, D)
              </span>
            </div>
          </div>

          {/* Config options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Topic Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>Ámbito Temático</span>
                <span className="text-[10px] font-semibold text-slate-500 normal-case">
                  {BANCO_PREGUNTAS.length} preguntas en banco oficial
                </span>
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === 'all' || val === 'general' || val === 'especifica') {
                    setSelectedTopic(val);
                  } else {
                    setSelectedTopic(Number(val));
                  }
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              >
                <option value="all">Todos los temas (Batería Completa 1 a 40 · {BANCO_PREGUNTAS.length} preguntas)</option>
                <option value="general">Parte General (Temas 1 a 8 · {BANCO_PREGUNTAS.filter(q => q.categoria === 'General').length} preguntas)</option>
                <option value="especifica">Parte Específica (Temas 9 a 40 · {BANCO_PREGUNTAS.filter(q => q.categoria === 'Especifica').length} preguntas)</option>
                <optgroup label="Temas Individuales (Sant Joan d'Alacant)">
                  {TEMARIO_COMPLETO.map((t) => {
                    const count = getTopicBankCount(t.number);
                    return (
                      <option key={t.number} value={t.number}>
                        Tema {t.number}: {t.title.slice(0, 48)}{t.title.length > 48 ? '...' : ''} ({count} {count === 1 ? 'pregunta' : 'preguntas'})
                      </option>
                    );
                  })}
                </optgroup>
              </select>
            </div>

            {/* Question Count */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>Número de Preguntas</span>
                <span className="text-[10px] font-semibold text-blue-600 normal-case">
                  Elige 30 para test completo
                </span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 20, 30].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setQuestionCount(count)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      questionCount === count
                        ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {count} {count === 30 ? '★' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Thematic Block Complement Guarantee Banner (for specific topics) */}
            {typeof selectedTopic === 'number' && (
              <div className="md:col-span-2 bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 text-xs text-blue-950 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-bold flex items-center gap-1.5 text-blue-900">
                    <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                    Garantía de Test Completo ({questionCount} preguntas)
                  </span>
                  <label className="inline-flex items-center gap-2 cursor-pointer font-bold text-blue-800 bg-white px-2.5 py-1 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={completeWithBlock}
                      onChange={(e) => setCompleteWithBlock(e.target.checked)}
                      className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                    />
                    <span>Completar con Bloque Afín ({getThematicBlockForTopic(selectedTopic).map(n => `T${n}`).join(', ')})</span>
                  </label>
                </div>
                <p className="text-[11px] text-blue-800 leading-relaxed">
                  {completeWithBlock ? (
                    <>
                      Al solicitar un test de <strong>{questionCount} preguntas</strong>, se cargarán primero las preguntas del <strong>Tema {selectedTopic}</strong> ({getTopicBankCount(selectedTopic)} disponibles) y se completará automáticamente con los temas de su bloque pedagógico afín para que realices una sesión extensa, rica y sin interrupciones.
                    </>
                  ) : (
                    <>
                      Modo estricto mono-tema: se evaluarán únicamente las <strong>{getTopicBankCount(selectedTopic)} preguntas</strong> exclusivas del Tema {selectedTopic}.
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Randomization Alert Note */}
            <div className="md:col-span-2 flex items-center gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
              <Shuffle className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="leading-snug">
                <strong className="text-slate-800">Orden de respuestas A-B-C-D aleatorizado:</strong> En cada intento, las 4 opciones se permutan aleatoriamente para evitar aprenderse de memoria la posición de la letra correcta.
              </span>
            </div>

            {/* Test Mode */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Modalidad Didáctica
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setMode('practica')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    mode === 'practica'
                      ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-600/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900">Modo Práctica Didáctico</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Explicación jurídica y pedagógica inmediata tras cada respuesta para aprender los fundamentos y trampas oficiales al instante.
                  </p>
                </div>

                <div
                  onClick={() => setMode('examen')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    mode === 'examen'
                      ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-600/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900">Modo Examen Estricto</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Sin respuestas intermedias. Resultados, desglose de fallos y calificación oficial detallada al concluir la sesión.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={handleGenerateWithAI}
              disabled={isAiGenerating}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-200 text-indigo-700 hover:bg-indigo-50 font-bold text-xs transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
              <span>{isAiGenerating ? 'Generando con IA...' : 'Generar Pregunta Nueva con IA'}</span>
            </button>

            <button
              type="button"
              onClick={() => startTest()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Comenzar Test ({questionCount} preguntas)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Finished Results Screen
  if (isFinished) {
    const isApproved = finalScore >= 5.0;

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-slate-100 text-slate-700">
              Resultado de la Sesión de Test
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {isApproved ? '¡Aprobado! Excelente rendimiento' : 'No superado · Necesita repaso'}
            </h2>
            <p className="text-xs text-slate-500">
              Conforme a la fórmula oficial: (Aciertos − Errores/3) / {totalQuestions} × 10
            </p>
          </div>

          {/* Big Score Card */}
          <div className="inline-flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-200 min-w-[200px]">
            <span className="text-4xl sm:text-5xl font-black text-blue-700">
              {finalScore.toFixed(2)}
            </span>
            <span className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">
              Calificación sobre 10
            </span>
            <span
              className={`mt-2 text-xs font-bold px-3 py-0.5 rounded-full ${
                isApproved ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
              }`}
            >
              {isApproved ? 'APTO (Mínimo 5.0 exigido)' : 'NO APTO (< 5.0)'}
            </span>
          </div>

          {/* 🌟 Special Gamification: Pleno de Oro (Nota 10) Fanfare Banner */}
          {isPerfect10InSession && (
            <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-2xl p-5 text-slate-950 shadow-lg border-2 border-amber-300 text-left relative overflow-hidden animate-in zoom-in-95">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                  <Crown className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-slate-950 text-amber-300">
                      ★ PLENO DE ORO HISTÓRICO ★
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      ¡10.00 / 10.00 IMPECABLE!
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-950 mt-0.5">
                    ¡Cero errores! Dominio perfecto del tribunal
                  </h4>
                  <p className="text-xs text-slate-900 font-medium">
                    Tu racha de 10s sube a <strong>{userStats.perfect10sStreak || 1} consecutivos</strong> · <strong>+100 pts de honor</strong>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 🧩 Newly Unlocked Puzzle Pieces Notification */}
          {unlockedPiecesInSession.length > 0 && (
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl p-5 text-white shadow-lg border border-blue-800 text-left space-y-3 animate-in slide-in-from-top-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                    ¡Pieza del Mural de la Plaza Desbloqueada!
                  </span>
                </div>
                {onNavigateToPuzzle && (
                  <button
                    onClick={() => {
                      setIsTestActive(false);
                      onTestActiveChange?.(false);
                      onNavigateToPuzzle();
                    }}
                    className="text-xs font-bold text-amber-300 hover:text-white underline cursor-pointer"
                  >
                    Ver en el Mural →
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {unlockedPiecesInSession.map((pId) => {
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

          {/* OPO-PRO Coaching on 10.00 requirement for puzzle */}
          {!isPerfect10InSession && (
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-left text-xs text-slate-600 flex items-start gap-2.5">
              <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 fill-amber-400" />
              <div>
                <strong className="text-slate-800 font-bold">Reto del Mural (Plaza nº 204): </strong>
                <span>
                  Para encajar la ficha de este bloque y reclamar la plaza nº 204 necesitas el <strong>10.00</strong>. Tu nota ha sido <strong>{finalScore.toFixed(2)}</strong>. ¡Vuelve a intentarlo para conseguir el Pleno de Oro!
                </span>
              </div>
            </div>
          )}

          {/* Breakdown Grid */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <div className="text-xl font-bold text-emerald-800">{aciertos}</div>
              <div className="text-[11px] text-emerald-600 font-semibold">Aciertos</div>
            </div>
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-center">
              <div className="text-xl font-bold text-rose-800">{errores}</div>
              <div className="text-[11px] text-rose-600 font-semibold">Errores (-{((errores / 3) * (10 / totalQuestions)).toFixed(2)} pts)</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <div className="text-xl font-bold text-slate-700">{noContestadas}</div>
              <div className="text-[11px] text-slate-500 font-semibold">En blanco</div>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="text-left space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Revisión Detallada de Preguntas
            </h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correcta;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border text-xs space-y-2 ${
                      !userAns
                        ? 'bg-slate-50 border-slate-200'
                        : isCorrect
                        ? 'bg-emerald-50/60 border-emerald-200'
                        : 'bg-rose-50/60 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">
                        Pregunta {idx + 1} · Tema {q.tema}
                      </span>
                      <span
                        className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                          !userAns
                            ? 'bg-slate-200 text-slate-700'
                            : isCorrect
                            ? 'bg-emerald-200 text-emerald-900'
                            : 'bg-rose-200 text-rose-900'
                        }`}
                      >
                        {!userAns ? 'En blanco' : isCorrect ? 'Correcta' : 'Fallada'}
                      </span>
                    </div>

                    <p className="font-medium text-slate-900">{q.enunciado}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
                      <div>
                        Tu respuesta:{' '}
                        <span className="font-bold">
                          {userAns ? `${userAns}) ${q.opciones[userAns]}` : 'Ninguna'}
                        </span>
                      </div>
                      <div>
                        Respuesta correcta:{' '}
                        <span className="font-bold text-emerald-800">
                          {q.correcta}) {q.opciones[q.correcta]}
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700 text-[11px] leading-relaxed">
                      <span className="font-bold text-blue-900">Fundamento OPO-PRO: </span>
                      {q.explicacion}
                      <div className="mt-1 text-[10px] text-slate-500 font-mono">
                        Ref: {q.referencia}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setIsTestActive(false);
                onTestActiveChange?.(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Volver a Configuración
            </button>
            {onNavigateToPuzzle && (
              <button
                onClick={() => {
                  setIsTestActive(false);
                  onTestActiveChange?.(false);
                  onNavigateToPuzzle();
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 text-slate-950 text-xs font-black transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
              >
                <Trophy className="w-4 h-4" />
                <span>Ver Mural del Puzzle</span>
              </button>
            )}
            <button
              onClick={() => startTest()}
              className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Repetir Nuevo Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Test Question Screen (Full-Screen Immersive Zero-Scroll)
  const currentQ = questions[currentIndex];
  const selectedAnswer = userAnswers[currentIndex];
  const isAnswered = selectedAnswer !== undefined && selectedAnswer !== null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-100 flex flex-col h-[100dvh] w-full overflow-hidden select-none">
      {/* 1. Ultra-compact Header Bar (~44px) */}
      <header className="h-11 shrink-0 bg-white border-b border-slate-200 px-3 sm:px-4 flex items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 shrink-0">
            Tema {currentQ.tema}
          </span>
          <span className="text-xs font-semibold text-slate-700 truncate">
            Pregunta <strong className="text-slate-900">{currentIndex + 1}</strong> de {totalQuestions}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md hidden md:inline-flex items-center gap-1">
            <Shuffle className="w-2.5 h-2.5 text-indigo-600" />
            <span>Opciones A-B-C-D aleatorias</span>
          </span>

          {mode === 'practica' ? (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-md hidden sm:inline-block">
              Modo Práctica
            </span>
          ) : (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-md hidden sm:inline-block">
              Modo Examen
            </span>
          )}

          <button
            onClick={() => {
              if (confirm('¿Deseas salir del test en curso?')) {
                setIsTestActive(false);
                onTestActiveChange?.(false);
              }
            }}
            className="text-xs font-semibold px-2.5 py-1 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
            title="Salir del test"
          >
            <X className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="h-1 w-full bg-slate-200 shrink-0">
        <div
          className="bg-blue-700 h-full transition-all duration-200"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* 2. Main Question & Options Canvas (Zero Scroll: 100% viewport visible) */}
      <main className="flex-1 min-h-0 w-full max-w-2xl mx-auto px-3 py-2 sm:px-4 sm:py-3 flex flex-col justify-between overflow-hidden">
        {/* Question Statement Card */}
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-xs shrink-0 max-h-[34vh] overflow-y-auto">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              Parte {currentQ.categoria}
            </span>
            <span className="text-[10px] font-medium text-slate-400 capitalize">
              Nivel {currentQ.dificultad}
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {currentQ.enunciado}
          </h2>
        </div>

        {/* 4 Choices (A, B, C, D) */}
        <div className="flex flex-col gap-2 my-auto shrink-0">
          {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
            const isSelected = selectedAnswer === optKey;
            const isCorrect = currentQ.correcta === optKey;

            let btnClass = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800 shadow-xs';

            if (mode === 'practica' && showExplanation) {
              if (isCorrect) {
                btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500';
              } else if (isSelected && !isCorrect) {
                btnClass = 'bg-rose-50 border-rose-500 text-rose-950 ring-1 ring-rose-500';
              } else {
                btnClass = 'opacity-50 bg-slate-50 border-slate-200';
              }
            } else if (isSelected) {
              btnClass = 'bg-blue-50 border-blue-600 text-blue-950 font-bold ring-1 ring-blue-600';
            }

            return (
              <button
                key={optKey}
                onClick={() => handleAnswerSelect(optKey)}
                disabled={mode === 'practica' && showExplanation}
                className={`w-full min-h-[44px] py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xl border text-left flex items-center gap-2.5 sm:gap-3 transition-all cursor-pointer ${btnClass}`}
              >
                <span
                  className={`w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'bg-blue-700 text-white border-blue-700'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {optKey}
                </span>
                <span className="text-xs sm:text-sm leading-snug flex-1 font-medium">
                  {currentQ.opciones[optKey]}
                </span>
                {mode === 'practica' && showExplanation && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {mode === 'practica' && showExplanation && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Practice Mode Explanation Box (Compact with internal scroll if long, never breaking layout) */}
        {mode === 'practica' && showExplanation && (
          <div className="p-2.5 rounded-xl bg-blue-50/90 border border-blue-200 text-xs shrink-0 max-h-[22vh] overflow-y-auto animate-in fade-in">
            <div className="font-bold text-blue-900 flex items-center justify-between gap-1 text-[11px] mb-1">
              <span className="flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                Fundamento OPO-PRO:
              </span>
              <span className="text-[10px] font-mono text-blue-700/80 truncate">
                Ref: {currentQ.referencia}
              </span>
            </div>
            <p className="text-slate-800 text-[11px] leading-relaxed">
              {currentQ.explicacion}
            </p>
          </div>
        )}
      </main>

      {/* 3. Bottom Navigation Bar (Ultra-compact ~48px) */}
      <footer className="h-12 shrink-0 bg-white border-t border-slate-200 px-3 sm:px-4 flex items-center justify-between gap-2 shadow-xs">
        <button
          onClick={() => onAskAITutor(currentQ.tema)}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-700 px-2 py-1.5 rounded-lg transition-colors cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="hidden sm:inline">Duda Tutor IA</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleNext}
            disabled={!isAnswered && mode === 'practica'}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
          >
            <span>{currentIndex < totalQuestions - 1 ? 'Siguiente Pregunta' : 'Finalizar Test'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};
