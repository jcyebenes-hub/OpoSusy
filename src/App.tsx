import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TutoriaTemarioView } from './components/TutoriaTemarioView';
import { TestView } from './components/TestView';
import { SimulacroOficialView } from './components/SimulacroOficialView';
import { JuegosGamificacionView } from './components/JuegosGamificacionView';
import { SupuestosPracticosView } from './components/SupuestosPracticosView';
import { PlanEstudioView } from './components/PlanEstudioView';
import { SeguimientoFallosView } from './components/SeguimientoFallosView';
import { PuzzlePlazaView } from './components/PuzzlePlazaView';
import { AITutorModal } from './components/AITutorModal';
import { UserStats, Question } from './types';
import { loadUserStats, saveUserStats } from './utils/storage';
import { Sparkles, MessageSquare, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('tutoria');
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats());
  const [isAITutorOpen, setIsAITutorOpen] = useState<boolean>(false);
  const [aiTutorTopic, setAiTutorTopic] = useState<number | undefined>(undefined);
  const [targetTopicForTest, setTargetTopicForTest] = useState<number | undefined>(undefined);
  const [customTestQuestions, setCustomTestQuestions] = useState<Question[] | undefined>(undefined);
  const [isImmersiveTestActive, setIsImmersiveTestActive] = useState<boolean>(false);

  useEffect(() => {
    saveUserStats(userStats);
  }, [userStats]);

  const handleUpdateStats = (newStats: UserStats) => {
    setUserStats(newStats);
    saveUserStats(newStats);
  };

  const handleOpenAITutor = (topicId?: number) => {
    setAiTutorTopic(topicId);
    setIsAITutorOpen(true);
  };

  const handleSelectTopicForTest = (topicId: number) => {
    setTargetTopicForTest(topicId);
    setCustomTestQuestions(undefined);
    setActiveTab('test');
  };

  const handleStartCustomTestWithErrors = (questions: Question[]) => {
    setCustomTestQuestions(questions);
    setTargetTopicForTest(undefined);
    setActiveTab('test');
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans antialiased">
      {/* App Header (Hidden during immersive test mode) */}
      {!isImmersiveTestActive && (
        <Header
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          userStats={userStats}
          onOpenAITutor={() => handleOpenAITutor()}
        />
      )}

      {/* Main Content Area */}
      <main className={`flex-1 w-full mx-auto ${isImmersiveTestActive ? 'p-0 max-w-none h-[100dvh] overflow-hidden' : 'max-w-7xl px-4 sm:px-6 py-6 sm:py-8'}`}>
        {activeTab === 'tutoria' && (
          <TutoriaTemarioView
            userStats={userStats}
            onSelectTopicForTest={handleSelectTopicForTest}
            onAskAITutor={handleOpenAITutor}
          />
        )}

        {activeTab === 'test' && (
          <TestView
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            initialTopicId={targetTopicForTest}
            onAskAITutor={handleOpenAITutor}
            onTestActiveChange={setIsImmersiveTestActive}
            onNavigateToPuzzle={() => setActiveTab('puzzle')}
          />
        )}

        {activeTab === 'simulacro' && (
          <SimulacroOficialView
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            onAskAITutor={handleOpenAITutor}
            onTestActiveChange={setIsImmersiveTestActive}
            onNavigateToPuzzle={() => setActiveTab('puzzle')}
          />
        )}

        {activeTab === 'puzzle' && (
          <PuzzlePlazaView
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            onStartTestForPiece={(themes) => {
              if (themes.length > 0) {
                setTargetTopicForTest(themes[0]);
              }
              setActiveTab('test');
            }}
            onGoToSimulacro={() => setActiveTab('simulacro')}
          />
        )}

        {activeTab === 'juegos' && (
          <JuegosGamificacionView
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            onNavigateToPuzzle={() => setActiveTab('puzzle')}
          />
        )}

        {activeTab === 'supuestos' && (
          <SupuestosPracticosView
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            onAskAITutor={handleOpenAITutor}
          />
        )}

        {activeTab === 'plan' && (
          <PlanEstudioView
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            onNavigateToTopic={(tId) => {
              handleSelectTopicForTest(tId);
            }}
          />
        )}

        {activeTab === 'seguimiento' && (
          <SeguimientoFallosView
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            onStartCustomTestWithErrors={handleStartCustomTestWithErrors}
            onAskAITutor={handleOpenAITutor}
          />
        )}
      </main>

      {/* Floating Action Button for AI Tutor OPO-PRO */}
      {!isImmersiveTestActive && (
        <div className="fixed bottom-5 right-5 z-30">
          <button
            onClick={() => handleOpenAITutor()}
            className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-2xl shadow-xl shadow-blue-700/30 hover:scale-105 transition-all duration-200 cursor-pointer border border-blue-400/30"
            aria-label="Abrir tutor de IA OPO-PRO"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-blue-700" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-black tracking-wide">TUTOR OPO-PRO</div>
              <div className="text-[10px] text-blue-200">Consultar dudas al instante</div>
            </div>
          </button>
        </div>
      )}

      {/* AI Tutor Modal */}
      <AITutorModal
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
        initialTopic={aiTutorTopic}
      />

      {/* Official Footnote / Legal Context & Convocatoria Activa - Debajo del todo */}
      <footer className="mt-12 border-t border-slate-200 bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              CONVOCATORIA ACTIVA
            </span>
            <span className="font-semibold text-slate-100">
              Ayto. Sant Joan d'Alacant · OPE 2026 · Monitora Infantil (C1, Carrera)
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              BOP Alicante nº 179 (21/09/2026, edicto nº 7150) · Turno Libre (Oposición pura, sin méritos)
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://santjoandalacant.sedelectronica.es"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors underline decoration-dotted font-medium flex items-center gap-1"
            >
              Sede Electrónica Oficial
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
              1 Plaza Vacante (Puesto nº 204)
            </span>
          </div>
        </div>

        <div className="border-t border-slate-800 bg-slate-950/50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-blue-600 text-white font-black text-[10px] flex items-center justify-center">
                OP
              </div>
              <span>
                <strong className="text-slate-200">OPO-PRO · Sant Joan</strong> · Plataforma Oficial de Preparación Técnica C1
              </span>
            </div>
            <span>Ayuntamiento de Sant Joan d'Alacant · Oposición Turno Libre</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
