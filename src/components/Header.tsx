import React from 'react';
import { Award, Flame, AlertTriangle, MessageSquareCode, CheckCircle, ShieldAlert, Sparkles, Trophy } from 'lucide-react';
import { UserStats } from '../types';
import { getUnlockedPuzzlePiecesCount } from '../utils/storage';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userStats: UserStats;
  onOpenAITutor: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userStats,
  onOpenAITutor
}) => {
  const unlockedPuzzleCount = getUnlockedPuzzlePiecesCount(userStats);

  const navItems = [
    { id: 'tutoria', label: '1. Tutoría Temario', badge: '40 Temas' },
    { id: 'test', label: '2. Test & Bloques', badge: 'A medida' },
    { id: 'simulacro', label: '3. Simulacro Oficial', badge: 'Examen Real' },
    { id: 'puzzle', label: '4. 🏆 Puzzle Plaza nº 204', badge: `${unlockedPuzzleCount}/12`, highlight: true },
    { id: 'juegos', label: '5. Trivial & Juegos', badge: 'Dados y Quesitos' },
    { id: 'supuestos', label: '6. Casos Prácticos', badge: 'Ej. 2' },
    { id: 'plan', label: '7. Plan de Estudio', badge: 'Personal' },
    { id: 'seguimiento', label: '8. Mi Progreso & Fallos', badge: `${userStats.errorBank.length} errores` }
  ];

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40 shadow-xs">
      {/* Main Brand & User Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-700/20">
            OP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                OPO-PRO <span className="text-blue-700">· Sant Joan</span>
              </h1>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase tracking-wide">
                Élite C1
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Preparador oficial · Monitora Infantil de Educación · Ayto. Sant Joan d'Alacant
            </p>
          </div>
        </div>

        {/* User Stats, Streak & Quick Actions */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          <button
            onClick={() => setActiveTab('puzzle')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300 text-amber-900 text-xs font-bold hover:bg-amber-100 transition-all cursor-pointer shadow-xs"
            title="Ver el Mural del Puzzle de la Plaza nº 204"
          >
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>Puzzle: {unlockedPuzzleCount}/12</span>
            {(userStats.perfect10sStreak || 0) > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-900 text-[10px] font-black">
                🔥 {userStats.perfect10sStreak} diez{userStats.perfect10sStreak === 1 ? '' : 'es'}
              </span>
            )}
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <Flame className="w-4 h-4 text-amber-600 fill-amber-500 animate-pulse" />
            <span>Racha: {userStats.streakDays} {userStats.streakDays === 1 ? 'día' : 'días'}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-semibold">
            <Award className="w-4 h-4 text-indigo-600" />
            <span>{userStats.points} pts</span>
          </div>

          {userStats.errorBank.length > 0 && (
            <button
              onClick={() => setActiveTab('seguimiento')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold hover:bg-rose-100 transition-colors"
              title="Ver banco de errores"
            >
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Banco Fallos: {userStats.errorBank.length}</span>
            </button>
          )}

          <button
            onClick={onOpenAITutor}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-xs font-bold shadow-sm hover:from-blue-800 hover:to-indigo-800 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Tutor IA OPO-PRO</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex space-x-1 overflow-x-auto no-scrollbar py-1 text-sm border-t border-slate-100">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`tab-btn-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs md:text-sm font-semibold whitespace-nowrap rounded-t-lg transition-colors border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-blue-700 text-blue-700 bg-blue-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-blue-200 text-blue-900' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {item.badge}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
