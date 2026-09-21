import React, { useState } from 'react';
import { Calendar, CheckCircle2, Circle, Clock, Award, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { UserStats } from '../types';

interface PlanEstudioViewProps {
  userStats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
  onNavigateToTopic: (topicId: number) => void;
}

interface PlanTask {
  id: string;
  week: number;
  day: string;
  title: string;
  topicIds: number[];
  type: 'lectura' | 'test' | 'supuesto' | 'repaso';
  durationMin: number;
  completed: boolean;
}

export const PlanEstudioView: React.FC<PlanEstudioViewProps> = ({
  userStats,
  onUpdateStats,
  onNavigateToTopic
}) => {
  const [weeksCount, setWeeksCount] = useState<number>(12);
  const [dailyHours, setDailyHours] = useState<number>(2);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  // Initial generated plan tasks
  const [tasks, setTasks] = useState<PlanTask[]>([
    { id: 'p1', week: 1, day: 'Lunes', title: 'Tema 1: Constitución Española (Derechos fundamentales y amparo)', topicIds: [1], type: 'lectura', durationMin: 90, completed: true },
    { id: 'p2', week: 1, day: 'Martes', title: 'Test de evaluación Tema 1 (Fórmula oficial A - E/3)', topicIds: [1], type: 'test', durationMin: 30, completed: true },
    { id: 'p3', week: 1, day: 'Miércoles', title: 'Tema 2: Estatuto de Autonomía de la Comunitat Valenciana', topicIds: [2], type: 'lectura', durationMin: 90, completed: false },
    { id: 'p4', week: 1, day: 'Jueves', title: 'Tema 3: TREBEP (Derechos, deberes y régimen disciplinario)', topicIds: [3], type: 'lectura', durationMin: 120, completed: false },
    { id: 'p5', week: 1, day: 'Viernes', title: 'Batería de Test Temas 1 a 3 + Repaso de fallos en OPO-PRO', topicIds: [1, 2, 3], type: 'repaso', durationMin: 60, completed: false },

    { id: 'p6', week: 2, day: 'Lunes', title: 'Tema 4: Ley 39/2015 (Plazos, silencio administrativo y nulidad)', topicIds: [4], type: 'lectura', durationMin: 120, completed: false },
    { id: 'p7', week: 2, day: 'Martes', title: 'Tema 5: Presupuesto municipal y TRLRHL', topicIds: [5], type: 'lectura', durationMin: 90, completed: false },
    { id: 'p8', week: 2, day: 'Miércoles', title: 'Tema 6: Ley 7/1985 LRBRL (Competencias municipales en educación)', topicIds: [6], type: 'lectura', durationMin: 90, completed: false },
    { id: 'p9', week: 2, day: 'Jueves', title: 'Temas 7 y 8: Régimen jurídico local y Transparencia CV', topicIds: [7, 8], type: 'lectura', durationMin: 90, completed: false },
    { id: 'p10', week: 2, day: 'Viernes', title: 'Primer Simulacro Parcial: Parte General (Temas 1 a 8)', topicIds: [1, 2, 3, 4, 5, 6, 7, 8], type: 'test', durationMin: 60, completed: false },

    { id: 'p11', week: 3, day: 'Lunes', title: 'Tema 9: Desarrollo psicoevolutivo 6-12 años (Estadios de Piaget)', topicIds: [9], type: 'lectura', durationMin: 90, completed: false },
    { id: 'p12', week: 3, day: 'Martes', title: 'Tema 10 y 11: Psicomotricidad, lateralidad y ZDP de Vygotsky', topicIds: [10, 11], type: 'lectura', durationMin: 90, completed: false },
    { id: 'p13', week: 3, day: 'Miércoles', title: 'Tema 13, 14 y 15: Inclusión, Decreto 104/2018 CV, DUA y TEA', topicIds: [13, 14, 15], type: 'lectura', durationMin: 120, completed: false },
    { id: 'p14', week: 3, day: 'Jueves', title: 'Caso Práctico A (Escuela Estival · Ajustes TEA y Ola de Calor)', topicIds: [15, 32], type: 'supuesto', durationMin: 90, completed: false },
    { id: 'p15', week: 3, day: 'Viernes', title: 'Test intensivo de Bloque Inclusión y Diversidad', topicIds: [13, 14, 15], type: 'test', durationMin: 60, completed: false }
  ]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const newCompleted = !t.completed;
          if (newCompleted) {
            onUpdateStats({ ...userStats, points: userStats.points + 25 });
          }
          return { ...t, completed: newCompleted };
        }
        return t;
      })
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  const currentWeekTasks = tasks.filter((t) => t.week === selectedWeek);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Intro Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              PLANIFICADOR ESTRATÉGICO DE ESTUDIO
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Cronograma Personalizado de Oposición
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Estructurado para asegurar una vuelta completa a los 40 temas, simulacros semanales y entrenamiento de casos prácticos antes del examen oficial.
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 min-w-[200px] text-center space-y-2">
            <div className="text-xs text-slate-400 font-bold uppercase">Progreso del Plan</div>
            <div className="text-3xl font-black text-amber-400">{progressPercent}%</div>
            <div className="text-[11px] text-slate-300">
              {completedCount} de {tasks.length} objetivos cumplidos
            </div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-400 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Configuration Selectors */}
        <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">Semanas de preparación:</span>
            <select
              value={weeksCount}
              onChange={(e) => setWeeksCount(Number(e.target.value))}
              className="bg-slate-800 border border-slate-700 text-white rounded-lg px-2.5 py-1 text-xs"
            >
              <option value={8}>8 Semanas (Intensivo Express)</option>
              <option value={12}>12 Semanas (Recomendado estándar)</option>
              <option value={16}>16 Semanas (Profundización)</option>
              <option value={24}>24 Semanas (Largo plazo)</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">Dedicación diaria:</span>
            <select
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="bg-slate-800 border border-slate-700 text-white rounded-lg px-2.5 py-1 text-xs"
            >
              <option value={1}>1 hora / día</option>
              <option value={2}>2 horas / día</option>
              <option value={3}>3 horas / día</option>
              <option value={4}>4+ horas / día (Exclusiva)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Week Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].slice(0, weeksCount).map((wk) => (
          <button
            key={wk}
            onClick={() => setSelectedWeek(wk)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedWeek === wk
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Semana {wk}
          </button>
        ))}
      </div>

      {/* Tasks of Selected Week */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm sm:text-base font-black text-slate-900">
            Objetivos y Actividades · Semana {selectedWeek}
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            {currentWeekTasks.filter((t) => t.completed).length} de {currentWeekTasks.length} completados
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {currentWeekTasks.length > 0 ? (
            currentWeekTasks.map((t) => (
              <div
                key={t.id}
                className={`py-3.5 flex items-start gap-3 transition-colors ${
                  t.completed ? 'opacity-70' : ''
                }`}
              >
                <button
                  onClick={() => toggleTask(t.id)}
                  className="mt-0.5 text-blue-700 hover:scale-110 transition-transform cursor-pointer"
                >
                  {t.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {t.day}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        t.type === 'lectura'
                          ? 'bg-blue-50 text-blue-700'
                          : t.type === 'test'
                          ? 'bg-amber-50 text-amber-800'
                          : t.type === 'supuesto'
                          ? 'bg-indigo-50 text-indigo-800'
                          : 'bg-emerald-50 text-emerald-800'
                      }`}
                    >
                      {t.type}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {t.durationMin} min
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm font-bold mt-1 leading-snug ${
                      t.completed ? 'line-through text-slate-400' : 'text-slate-900'
                    }`}
                  >
                    {t.title}
                  </p>
                </div>

                {t.topicIds.length > 0 && (
                  <button
                    onClick={() => onNavigateToTopic(t.topicIds[0])}
                    className="p-1.5 text-slate-400 hover:text-blue-700 rounded-lg hover:bg-slate-50 cursor-pointer"
                    title="Ir a tutoría de este tema"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-slate-500">
              Semana de consolidación, simulacros completos y vueltas rápidas con OPO-PRO.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
