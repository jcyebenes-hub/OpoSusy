import React, { useState } from 'react';
import { Award, Flame, Play, CheckCircle2, XCircle, RotateCcw, HelpCircle, ArrowRight, Shuffle, Sparkles, Dices } from 'lucide-react';
import { UserStats, PasapalabraItem, Flashcard, TrueFalseItem, FillBlankItem, ColumnMatchItem } from '../types';
import { PASAPALABRA_ROSCO, FLASHCARDS_LIST, TRUE_FALSE_LIST, FILL_BLANKS_LIST, COLUMN_MATCH_CHALLENGES } from '../data/games';
import { TrivialBoardView } from './TrivialBoardView';

interface JuegosGamificacionViewProps {
  userStats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
  onNavigateToPuzzle?: () => void;
}

export const JuegosGamificacionView: React.FC<JuegosGamificacionViewProps> = ({
  userStats,
  onUpdateStats,
  onNavigateToPuzzle
}) => {
  const [activeGame, setActiveGame] = useState<'trivial' | 'rosco' | 'flashcards' | 'tf' | 'fill' | 'columns'>('trivial');

  // --- 1. PASAPALABRA ROSCO STATE ---
  const [roscoIndex, setRoscoIndex] = useState<number>(0);
  const [roscoInput, setRoscoInput] = useState<string>('');
  const [roscoStatus, setRoscoStatus] = useState<Record<string, 'pending' | 'correct' | 'wrong'>>({});
  const [roscoFinished, setRoscoFinished] = useState<boolean>(false);

  // --- 2. FLASHCARDS STATE ---
  const [fcIndex, setFcIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // --- 3. VERDADERO O FALSO STATE ---
  const [tfIndex, setTfIndex] = useState<number>(0);
  const [tfFeedback, setTfFeedback] = useState<{ isCorrect: boolean; show: boolean } | null>(null);
  const [tfScore, setTfScore] = useState<number>(0);

  // --- 4. RELLENAR HUECOS STATE ---
  const [fbIndex, setFbIndex] = useState<number>(0);
  const [fbSelected, setFbSelected] = useState<string | null>(null);

  // --- 5. RELACIONAR COLUMNAS STATE ---
  const [cmIndex, setCmIndex] = useState<number>(0);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});

  // ---------------- ROSCO HANDLERS ----------------
  const currentRoscoItem: PasapalabraItem = PASAPALABRA_ROSCO[roscoIndex];

  const handleRoscoAnswer = () => {
    const cleanUser = roscoInput.trim().toUpperCase();
    const target = currentRoscoItem.word.toUpperCase();
    const isCorrect = cleanUser === target;

    const newStatus: Record<string, 'pending' | 'correct' | 'wrong'> = {
      ...roscoStatus,
      [currentRoscoItem.letter]: isCorrect ? 'correct' : 'wrong'
    };
    setRoscoStatus(newStatus);
    setRoscoInput('');

    // Award points
    if (isCorrect) {
      onUpdateStats({ ...userStats, points: userStats.points + 15 });
    }

    advanceRosco(newStatus);
  };

  const handleRoscoPass = () => {
    setRoscoInput('');
    advanceRosco(roscoStatus);
  };

  const advanceRosco = (statusMap: Record<string, 'pending' | 'correct' | 'wrong'>) => {
    // Find next pending letter
    let nextIdx = (roscoIndex + 1) % PASAPALABRA_ROSCO.length;
    let iterations = 0;
    while (statusMap[PASAPALABRA_ROSCO[nextIdx].letter] && iterations < PASAPALABRA_ROSCO.length) {
      nextIdx = (nextIdx + 1) % PASAPALABRA_ROSCO.length;
      iterations++;
    }

    if (iterations >= PASAPALABRA_ROSCO.length) {
      setRoscoFinished(true);
    } else {
      setRoscoIndex(nextIdx);
    }
  };

  const resetRosco = () => {
    setRoscoIndex(0);
    setRoscoInput('');
    setRoscoStatus({});
    setRoscoFinished(false);
  };

  // ---------------- TRUE/FALSE HANDLERS ----------------
  const currentTf = TRUE_FALSE_LIST[tfIndex];

  const handleTfChoice = (userChoice: boolean) => {
    const isCorrect = userChoice === currentTf.isTrue;
    setTfFeedback({ isCorrect, show: true });
    if (isCorrect) {
      setTfScore((prev) => prev + 1);
      onUpdateStats({ ...userStats, points: userStats.points + 10 });
    }
  };

  const nextTf = () => {
    setTfFeedback(null);
    if (tfIndex < TRUE_FALSE_LIST.length - 1) {
      setTfIndex((prev) => prev + 1);
    } else {
      alert(`¡Ronda de V/F finalizada! Puntuación: ${tfScore + (tfFeedback?.isCorrect ? 1 : 0)} / ${TRUE_FALSE_LIST.length}`);
      setTfIndex(0);
      setTfScore(0);
    }
  };

  // ---------------- FILL IN THE BLANK ----------------
  const currentFb = FILL_BLANKS_LIST[fbIndex];

  const handleFbSelect = (opt: string) => {
    setFbSelected(opt);
    if (opt === currentFb.hiddenWord) {
      onUpdateStats({ ...userStats, points: userStats.points + 15 });
    }
  };

  const nextFb = () => {
    setFbSelected(null);
    setFbIndex((prev) => (prev + 1) % FILL_BLANKS_LIST.length);
  };

  // ---------------- COLUMN MATCHING ----------------
  const currentCm = COLUMN_MATCH_CHALLENGES[cmIndex];

  const handleMatchSelect = (rightText: string) => {
    if (!selectedLeft) return;
    const pair = currentCm.pairs.find((p) => p.left === selectedLeft);
    if (pair && pair.right === rightText) {
      setMatchedPairs((prev) => ({ ...prev, [selectedLeft]: rightText }));
      setSelectedLeft(null);
      onUpdateStats({ ...userStats, points: userStats.points + 20 });
    } else {
      alert('¡Asociación incorrecta! Revisa la normativa del tema.');
      setSelectedLeft(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Game Mode Navigation */}
      <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: 'trivial', label: '1. 🎲 Trivial Opositor (Dados & Quesitos)' },
          { id: 'rosco', label: '2. 🔤 El Rosco (A-Z)' },
          { id: 'flashcards', label: '3. 🗂️ Flashcards' },
          { id: 'tf', label: '4. ⚖️ Verdadero o Falso' },
          { id: 'fill', label: '5. 🧩 Rellenar Hueco' },
          { id: 'columns', label: '6. 🔗 Relacionar Columnas' }
        ].map((g) => (
          <button
            key={g.id}
            onClick={() => setActiveGame(g.id as any)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeGame === g.id
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* GAME 1: TRIVIAL OPOSITOR */}
      {activeGame === 'trivial' && (
        <TrivialBoardView
          userStats={userStats}
          onUpdateStats={onUpdateStats}
          onNavigateToPuzzle={onNavigateToPuzzle}
        />
      )}

      {/* GAME 2: EL ROSCO PASAPALABRA */}
      {activeGame === 'rosco' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                El Rosco de la Monitora Infantil · Sant Joan d'Alacant
              </h3>
              <p className="text-xs text-slate-500">
                26 letras del abecedario basadas en los 40 temas oficiales del temario
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                Aciertos: {Object.values(roscoStatus).filter((s) => s === 'correct').length}
              </span>
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                Fallos: {Object.values(roscoStatus).filter((s) => s === 'wrong').length}
              </span>
              <button
                onClick={resetRosco}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                title="Reiniciar Rosco"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Letter wheel grid */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-4 bg-slate-900 rounded-2xl">
            {PASAPALABRA_ROSCO.map((item, idx) => {
              const status = roscoStatus[item.letter];
              const isCurrent = idx === roscoIndex;

              let bg = 'bg-blue-900/60 text-blue-200 border-blue-800';
              if (status === 'correct') bg = 'bg-emerald-500 text-white border-emerald-400';
              if (status === 'wrong') bg = 'bg-rose-500 text-white border-rose-400';
              if (isCurrent) bg += ' ring-2 ring-amber-400 scale-110 shadow-lg';

              return (
                <div
                  key={item.letter}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border text-xs font-black flex items-center justify-center transition-all ${bg}`}
                >
                  {item.letter}
                </div>
              );
            })}
          </div>

          {/* Definition Box */}
          {!roscoFinished ? (
            <div className="space-y-4 max-w-xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold">
                LETRA {currentRoscoItem.letter} · {currentRoscoItem.startsOrContains} la {currentRoscoItem.letter}
              </div>

              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                "{currentRoscoItem.definition}"
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
                <input
                  type="text"
                  value={roscoInput}
                  onChange={(e) => setRoscoInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleRoscoAnswer();
                  }}
                  placeholder="Escribe la palabra oficial..."
                  className="w-full sm:flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-center uppercase tracking-wider font-bold text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  autoFocus
                />
                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <button
                    onClick={handleRoscoAnswer}
                    disabled={!roscoInput.trim()}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white font-bold text-xs shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    Responder
                  </button>
                  <button
                    onClick={handleRoscoPass}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    Pasapalabra
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-6 space-y-4">
              <h4 className="text-xl font-black text-slate-900">¡Rosco Oficial Completado!</h4>
              <p className="text-sm text-slate-600">
                Has acertado {Object.values(roscoStatus).filter((s) => s === 'correct').length} de 26 términos oficiales.
              </p>
              <button
                onClick={resetRosco}
                className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold cursor-pointer"
              >
                Jugar Otro Rosco
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 2: FLASHCARDS */}
      {activeGame === 'flashcards' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                Flashcards de Memoria Rápida
              </h3>
              <p className="text-xs text-slate-500">
                Tarjeta {fcIndex + 1} de {FLASHCARDS_LIST.length} · Pulsa la tarjeta para voltear
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700">
              Tema {FLASHCARDS_LIST[fcIndex].tema} · {FLASHCARDS_LIST[fcIndex].tag}
            </span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[240px] max-w-lg mx-auto p-8 rounded-2xl border-2 border-dashed border-blue-300 bg-gradient-to-b from-blue-50/40 to-slate-50 flex flex-col items-center justify-center text-center cursor-pointer shadow-xs hover:border-blue-500 transition-all select-none"
          >
            {!isFlipped ? (
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                  Pregunta Clave (Anverso)
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900">
                  {FLASHCARDS_LIST[fcIndex].front}
                </p>
                <span className="text-[11px] text-slate-400 block pt-2">
                  (Haz clic para ver la respuesta jurídica/pedagógica)
                </span>
              </div>
            ) : (
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                  Respuesta Oficial (Reverso)
                </span>
                <p className="text-base sm:text-lg font-bold text-emerald-950 whitespace-pre-line leading-relaxed">
                  {FLASHCARDS_LIST[fcIndex].back}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setIsFlipped(false);
                setFcIndex((prev) => (prev - 1 + FLASHCARDS_LIST.length) % FLASHCARDS_LIST.length);
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Anterior
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setFcIndex((prev) => (prev + 1) % FLASHCARDS_LIST.length);
              }}
              className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              Siguiente Tarjeta
            </button>
          </div>
        </div>
      )}

      {/* GAME 3: VERDADERO O FALSO */}
      {activeGame === 'tf' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6 max-w-xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              Pregunta {tfIndex + 1} de {TRUE_FALSE_LIST.length}
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Aciertos: {tfScore}
            </span>
          </div>

          <div className="text-center space-y-4 py-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Tema {currentTf.tema} · Convocatoria Sant Joan
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              "{currentTf.statement}"
            </p>
          </div>

          {!tfFeedback?.show ? (
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              <button
                onClick={() => handleTfChoice(true)}
                className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
              >
                VERDADERO
              </button>
              <button
                onClick={() => handleTfChoice(false)}
                className="py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
              >
                FALSO
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in">
              <div
                className={`p-4 rounded-xl text-xs space-y-1.5 ${
                  tfFeedback.isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-950' : 'bg-rose-50 border border-rose-200 text-rose-950'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5">
                  {tfFeedback.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ¡Respuesta Correcta! (+10 pts)
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      ¡Incorrecto! La afirmación es {currentTf.isTrue ? 'VERDADERA' : 'FALSA'}
                    </>
                  )}
                </div>
                <p className="leading-relaxed">{currentTf.explanation}</p>
              </div>

              <div className="text-center">
                <button
                  onClick={nextTf}
                  className="px-6 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer"
                >
                  Siguiente Afirmación
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* GAME 4: RELLENAR HUECOS */}
      {activeGame === 'fill' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6 max-w-xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
              Desafío Normativo Literal
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {fbIndex + 1} de {FILL_BLANKS_LIST.length}
            </span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm leading-relaxed text-slate-900 font-medium">
            {currentFb.fullText.replace(currentFb.hiddenWord, '__________')}
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-600 block">
              Selecciona el término o plazo exacto de la ley:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentFb.options.map((opt) => {
                const isSelected = fbSelected === opt;
                const isCorrect = opt === currentFb.hiddenWord;

                let btnClass = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800';
                if (fbSelected) {
                  if (isCorrect) btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  else if (isSelected) btnClass = 'bg-rose-50 border-rose-500 text-rose-950';
                }

                return (
                  <button
                    key={opt}
                    onClick={() => !fbSelected && handleFbSelect(opt)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${btnClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {fbSelected && (
            <div className="pt-2 text-center">
              <button
                onClick={nextFb}
                className="px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold cursor-pointer"
              >
                Siguiente Artículo
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 5: RELACIONAR COLUMNAS */}
      {activeGame === 'columns' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-lg font-black text-slate-900">
              {currentCm.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Haz clic en un elemento de la izquierda y luego en su correspondiente de la derecha
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left column */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-600 uppercase">Concepto / Órgano</span>
              {currentCm.pairs.map((pair) => {
                const isMatched = !!matchedPairs[pair.left];
                const isSelected = selectedLeft === pair.left;
                return (
                  <button
                    key={pair.left}
                    disabled={isMatched}
                    onClick={() => setSelectedLeft(pair.left)}
                    className={`w-full p-3 rounded-xl border text-xs text-left font-bold transition-all cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60'
                        : isSelected
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/30 text-blue-900'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    {pair.left} {isMatched && '✓'}
                  </button>
                );
              })}
            </div>

            {/* Right column (shuffled) */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-600 uppercase">Función / Definición</span>
              {currentCm.pairs.map((pair) => {
                const isMatched = Object.values(matchedPairs).includes(pair.right);
                return (
                  <button
                    key={pair.right}
                    disabled={isMatched}
                    onClick={() => handleMatchSelect(pair.right)}
                    className={`w-full p-3 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    {pair.right} {isMatched && '✓'}
                  </button>
                );
              })}
            </div>
          </div>

          {Object.keys(matchedPairs).length === currentCm.pairs.length && (
            <div className="text-center p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
              <div className="font-bold text-emerald-900 text-sm">
                ¡Todas las parejas relacionadas con éxito! (+80 pts)
              </div>
              <button
                onClick={() => {
                  setMatchedPairs({});
                  setCmIndex((prev) => (prev + 1) % COLUMN_MATCH_CHALLENGES.length);
                }}
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold cursor-pointer"
              >
                Siguiente Desafío de Columnas
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
