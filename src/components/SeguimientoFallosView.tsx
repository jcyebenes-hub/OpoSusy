import React, { useState } from 'react';
import { AlertTriangle, Award, CheckCircle2, Flame, RotateCcw, Sparkles, BookOpen, Trash2, ArrowRight } from 'lucide-react';
import { UserStats, Question } from '../types';
import { getQuestionsFromErrorBank, recordQuestionAnswer } from '../utils/storage';
import { TEMARIO_COMPLETO } from '../data/temario';

interface SeguimientoFallosViewProps {
  userStats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
  onStartCustomTestWithErrors: (questions: Question[]) => void;
  onAskAITutor: (topicId?: number) => void;
}

export const SeguimientoFallosView: React.FC<SeguimientoFallosViewProps> = ({
  userStats,
  onUpdateStats,
  onStartCustomTestWithErrors,
  onAskAITutor
}) => {
  const errorQuestions = getQuestionsFromErrorBank(userStats.errorBank || []);
  const [retryingQuestionId, setRetryingQuestionId] = useState<string | null>(null);
  const [retryAnswer, setRetryAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [retrySuccess, setRetrySuccess] = useState<boolean | null>(null);

  const handleRetrySubmit = (q: Question) => {
    if (!retryAnswer) return;
    const isCorrect = retryAnswer === q.correcta;
    setRetrySuccess(isCorrect);

    if (isCorrect) {
      // Corrected! Remove from error bank
      const updated = recordQuestionAnswer(userStats, q, true);
      onUpdateStats(updated);
      setTimeout(() => {
        setRetryingQuestionId(null);
        setRetryAnswer(null);
        setRetrySuccess(null);
      }, 1200);
    }
  };

  const handleClearAllErrors = () => {
    if (confirm('¿Deseas reiniciar y vaciar completamente tu Banco de Errores?')) {
      onUpdateStats({ ...userStats, errorBank: [] });
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Puntos OPO-PRO</span>
            <Award className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            {userStats.points}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Nivel C1 Activo</div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Racha de Estudio</span>
            <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            {userStats.streakDays} {userStats.streakDays === 1 ? 'día' : 'días'}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Constancia diaria</div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Temas Dominados</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            {userStats.masteredThemes.length} / 40
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">&gt; 70% de acierto</div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Banco de Fallos</span>
            <AlertTriangle className="w-4 h-4 text-rose-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-rose-600 mt-2">
            {userStats.errorBank.length}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Pendientes de superar</div>
        </div>
      </div>

      {/* ERROR BANK SECTION */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-slate-900">
                Banco de Errores Activo
              </h3>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200">
                {errorQuestions.length} preguntas
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Cada fallo cometido se guarda aquí. Al responderlo correctamente, se elimina automáticamente del banco.
            </p>
          </div>

          {errorQuestions.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onStartCustomTestWithErrors(errorQuestions)}
                className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                Hacer Test solo con mis Fallos
              </button>
              <button
                onClick={handleClearAllErrors}
                className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition-colors"
                title="Vaciar todo el banco"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {errorQuestions.length > 0 ? (
          <div className="space-y-4">
            {errorQuestions.map((q) => {
              const isRetrying = retryingQuestionId === q.id;

              return (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded">
                      Tema {q.tema} · {q.referencia}
                    </span>
                    <button
                      onClick={() => {
                        setRetryingQuestionId(isRetrying ? null : q.id);
                        setRetryAnswer(null);
                        setRetrySuccess(null);
                      }}
                      className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
                    >
                      {isRetrying ? 'Cerrar reintento' : 'Repasar y Superar Fallo'}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {q.enunciado}
                  </p>

                  {/* If retrying, show options */}
                  {isRetrying ? (
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <div className="grid grid-cols-1 gap-1.5">
                        {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setRetryAnswer(opt)}
                            className={`p-2 rounded-lg border text-xs text-left transition-colors ${
                              retryAnswer === opt
                                ? 'bg-blue-100 border-blue-600 font-bold text-blue-900'
                                : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-800'
                            }`}
                          >
                            <span className="font-bold mr-1.5">{opt})</span> {q.opciones[opt]}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => handleRetrySubmit(q)}
                          disabled={!retryAnswer}
                          className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white text-xs font-bold transition-all cursor-pointer"
                        >
                          Verificar Respuesta
                        </button>
                        {retrySuccess === true && (
                          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> ¡Fallo superado y eliminado!
                          </span>
                        )}
                        {retrySuccess === false && (
                          <span className="text-xs font-bold text-rose-700">
                            Respuesta incorrecta. ¡Revisa la fundamentación!
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                      <div className="font-bold text-slate-900">
                        Respuesta Correcta Oficial: <span className="text-emerald-700">{q.correcta}) {q.opciones[q.correcta]}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{q.explicacion}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              ¡Tu Banco de Errores está limpio!
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Has superado todos los fallos acumulados o aún no has cometido errores. Continúa practicando simulacros.
            </p>
          </div>
        )}
      </div>

      {/* 40 Topics Mastery Heatmap */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
            Mapa de Cobertura y Dominio de los 40 Temas
          </h3>
          <span className="text-xs text-slate-500">
            Verde: Dominado (&gt;=70%) · Gris: En preparación
          </span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
          {TEMARIO_COMPLETO.map((t) => {
            const isMastered = userStats.masteredThemes.includes(t.number);
            const stats = userStats.themeStats[t.number];

            return (
              <div
                key={t.number}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  isMastered
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : stats && stats.attempts > 0
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}
                title={`Tema ${t.number}: ${t.title}`}
              >
                <div className="text-xs font-black">T{t.number}</div>
                <div className="text-[10px] mt-0.5">
                  {stats ? `${stats.correct}/${stats.attempts}` : '-'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges and Achievements */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
          Insignias y Logros de Oposición
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {userStats.badges.map((b) => {
            const isUnlocked = !!b.unlockedAt;

            return (
              <div
                key={b.id}
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  isUnlocked
                    ? 'bg-gradient-to-r from-amber-50/60 to-white border-amber-300'
                    : 'bg-slate-50 border-slate-200 opacity-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isUnlocked ? 'bg-amber-400 text-slate-900 font-bold' : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">{b.title}</div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{b.desc}</p>
                  {isUnlocked && (
                    <span className="text-[10px] font-bold text-amber-700 block mt-1">
                      ★ Desbloqueada
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
