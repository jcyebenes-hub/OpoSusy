import React, { useState } from 'react';
import { FileText, MapPin, CheckCircle2, AlertTriangle, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PracticalCase, UserStats } from '../types';
import { CASOS_PRACTICOS_OFICIALES } from '../data/questions';
import { calculateOfficialScore, recordQuestionAnswer } from '../utils/storage';

interface SupuestosPracticosViewProps {
  userStats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
  onAskAITutor: (topicId?: number) => void;
}

export const SupuestosPracticosView: React.FC<SupuestosPracticosViewProps> = ({
  userStats,
  onUpdateStats,
  onAskAITutor
}) => {
  const [selectedCase, setSelectedCase] = useState<PracticalCase>(CASOS_PRACTICOS_OFICIALES[0]);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | null>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectCase = (c: PracticalCase) => {
    setSelectedCase(c);
    setUserAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (qIndex: number, opt: 'A' | 'B' | 'C' | 'D') => {
    if (showResults) return;
    setUserAnswers((prev) => ({ ...prev, [qIndex]: opt }));
  };

  const handleSubmit = () => {
    let currentStats = { ...userStats };
    selectedCase.questions.forEach((q, idx) => {
      const ans = userAnswers[idx];
      const isCorrect = ans === q.correcta;
      currentStats = recordQuestionAnswer(currentStats, q, isCorrect);
    });
    onUpdateStats(currentStats);
    setShowResults(true);
  };

  // Score
  let aciertos = 0;
  let errores = 0;
  selectedCase.questions.forEach((q, idx) => {
    const ans = userAnswers[idx];
    if (ans === q.correcta) aciertos++;
    else if (ans) errores++;
  });
  const finalScore = calculateOfficialScore(aciertos, errores, selectedCase.questions.length);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Intro Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            EJERCICIO 2 DE LA OPOSICIÓN · SUPUESTOS PRÁCTICOS
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Casos Prácticos Oficiales de Sant Joan d'Alacant
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
            El segundo ejercicio evalúa la capacidad de resolución de situaciones reales en las actividades infantiles municipales. Recuerda que el tribunal dirime los empates mediante la nota de este ejercicio.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {CASOS_PRACTICOS_OFICIALES.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSelectCase(c)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCase.id === c.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {c.id === 'SUPUESTO-A' ? 'Caso A: Escuela Estival' : 'Caso B: Estudio Vigilado'}
            </button>
          ))}
        </div>
      </div>

      {/* Case Description Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-blue-700 text-white">
              {selectedCase.id}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              {selectedCase.location}
            </div>
          </div>
          <button
            onClick={() => onAskAITutor(selectedCase.questions[0].tema)}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Debatir este caso con Tutor OPO-PRO
          </button>
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {selectedCase.title}
        </h3>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed font-normal">
          {selectedCase.context}
        </div>
      </div>

      {/* Result summary if submitted */}
      {showResults && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Calificación del Supuesto Práctico (sobre 10)
          </span>
          <div className="text-4xl font-black text-blue-700">{finalScore.toFixed(2)}</div>
          <div className="text-xs text-slate-600">
            Aciertos: <strong className="text-emerald-700">{aciertos}</strong> · Errores:{' '}
            <strong className="text-rose-700">{errores}</strong> · Nota mínima exigida: 5.00
          </div>
          <span
            className={`inline-block text-xs font-bold px-3 py-0.5 rounded-full ${
              finalScore >= 5 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }`}
          >
            {finalScore >= 5 ? 'SUPUESTO SUPERADO (APTO)' : 'NO SUPERADO (< 5.0)'}
          </span>
        </div>
      )}

      {/* 10 Case Questions */}
      <div className="space-y-4">
        {selectedCase.questions.map((q, qIdx) => {
          const userAns = userAnswers[qIdx];
          const isCorrect = userAns === q.correcta;

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  Cuestión {qIdx + 1} · Tema {q.tema}
                </span>
                {showResults && (
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {isCorrect ? 'Correcta (+1 pto)' : 'Incorrecta (-0.33 pts)'}
                  </span>
                )}
              </div>

              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {q.enunciado}
              </h4>

              <div className="space-y-2">
                {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                  const isSelected = userAns === opt;
                  const isAnswerKey = q.correcta === opt;

                  let optStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';
                  if (showResults) {
                    if (isAnswerKey) {
                      optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isSelected && !isAnswerKey) {
                      optStyle = 'bg-rose-50 border-rose-500 text-rose-950';
                    } else {
                      optStyle = 'opacity-60 bg-slate-50 border-slate-200';
                    }
                  } else if (isSelected) {
                    optStyle = 'bg-blue-50 border-blue-600 ring-1 ring-blue-600 font-bold text-blue-950';
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(qIdx, opt)}
                      disabled={showResults}
                      className={`w-full p-3 rounded-xl border text-left text-xs flex items-start gap-2.5 transition-all cursor-pointer ${optStyle}`}
                    >
                      <span className="w-5 h-5 rounded-md bg-white border border-slate-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {opt}
                      </span>
                      <span className="flex-1 leading-relaxed">{q.opciones[opt]}</span>
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-blue-900">Fundamentación Oficial OPO-PRO:</span>
                  <p className="text-slate-800 leading-relaxed">{q.explicacion}</p>
                  <div className="text-[10px] text-blue-800 font-mono pt-1">
                    {q.referencia}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submission CTA */}
      {!showResults && (
        <div className="text-center pt-2">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 transition-all cursor-pointer"
          >
            Corregir Supuesto Práctico Oficial
          </button>
        </div>
      )}
    </div>
  );
};
