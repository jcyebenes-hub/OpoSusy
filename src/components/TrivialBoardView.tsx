import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Award,
  ArrowRight,
  Dices,
  Flame,
  HelpCircle,
  Compass,
  Zap,
  Info
} from 'lucide-react';
import { UserStats, Question } from '../types';
import {
  TrivialColor,
  TRIVIAL_CATEGORIES,
  COLOR_ORDER,
  getTrivialQuestionForCategory
} from '../data/trivial';
import {
  BOARD_NODES,
  BoardNode,
  getReachableNodes
} from '../data/trivialBoard';
import { unlockRandomPuzzlePiece } from '../utils/storage';

interface TrivialBoardViewProps {
  userStats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
  onNavigateToPuzzle?: () => void;
}

export const TrivialBoardView: React.FC<TrivialBoardViewProps> = ({
  userStats,
  onUpdateStats,
  onNavigateToPuzzle
}) => {
  // Player wedges collected
  const [collectedWedges, setCollectedWedges] = useState<Record<TrivialColor, boolean>>({
    blue: false,
    yellow: false,
    green: false,
    orange: false,
    purple: false,
    red: false
  });

  // Current board position: starts at center hub
  const [currentNodeId, setCurrentNodeId] = useState<string>('center');
  const [dieValue, setDieValue] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [reachableNodeIds, setReachableNodeIds] = useState<string[]>([]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Turn state: 'awaiting_roll' | 'awaiting_move' | 'answering_question' | 'round_result'
  const [turnState, setTurnState] = useState<'awaiting_roll' | 'awaiting_move' | 'answering_question' | 'round_result'>('awaiting_roll');

  // Question state
  const [currentCategory, setCurrentCategory] = useState<TrivialColor | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([]);
  const [justWonWedge, setJustWonWedge] = useState<TrivialColor | null>(null);
  const [isHQQuestion, setIsHQQuestion] = useState<boolean>(false);
  const [hasWonGame, setHasWonGame] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);

  const totalWedgesWon = Object.values(collectedWedges).filter(Boolean).length;
  const currentNode = BOARD_NODES[currentNodeId] || BOARD_NODES['center'];

  // Check win condition (all 6 quesitos)
  useEffect(() => {
    if (totalWedgesWon === 6 && !hasWonGame) {
      setHasWonGame(true);
      const updated = unlockRandomPuzzlePiece({
        ...userStats,
        points: userStats.points + 120
      });
      onUpdateStats(updated);
    }
  }, [totalWedgesWon, hasWonGame]);

  // Roll the physical die
  const rollDie = () => {
    if (isRolling || turnState === 'answering_question') return;
    setIsRolling(true);
    setJustWonWedge(null);
    setSelectedOption(null);
    setCurrentQuestion(null);

    let rollCount = 0;
    const interval = setInterval(() => {
      setDieValue(Math.floor(Math.random() * 6) + 1);
      rollCount++;
      if (rollCount > 10) {
        clearInterval(interval);
        const finalRoll = Math.floor(Math.random() * 6) + 1;
        setDieValue(finalRoll);
        setIsRolling(false);

        // Calculate reachable board spaces
        const reachable = getReachableNodes(currentNodeId, finalRoll);
        setReachableNodeIds(reachable);
        setTurnState('awaiting_move');
      }
    }, 55);
  };

  // Move token to clicked board space
  const handleMoveToNode = (targetId: string) => {
    if (turnState !== 'awaiting_move' || !reachableNodeIds.includes(targetId)) return;

    setCurrentNodeId(targetId);
    setReachableNodeIds([]);
    const targetNode = BOARD_NODES[targetId];

    // Determine category
    let catColor: TrivialColor;
    if (targetNode.color === 'all') {
      // Center hub: pick random missing quesito or random category
      const missing = COLOR_ORDER.filter((c) => !collectedWedges[c]);
      catColor = missing.length > 0 ? missing[0] : COLOR_ORDER[Math.floor(Math.random() * 6)];
    } else {
      catColor = targetNode.color;
    }

    const isHQ = targetNode.isHQ;
    setIsHQQuestion(isHQ);
    setCurrentCategory(catColor);

    // Fetch fresh question
    const q = getTrivialQuestionForCategory(catColor, usedQuestionIds);
    setCurrentQuestion(q);
    setUsedQuestionIds((prev) => [...prev, q.id]);
    setSelectedOption(null);
    setTurnState('answering_question');
  };

  // Quick auto-move to the best reachable node (for fast gameplay)
  const handleAutoMove = () => {
    if (reachableNodeIds.length === 0) return;
    // Prefer unearned HQ if reachable
    const unearnedHQ = reachableNodeIds.find((id) => {
      const n = BOARD_NODES[id];
      return n && n.isHQ && n.color !== 'all' && !collectedWedges[n.color as TrivialColor];
    });

    const target = unearnedHQ || reachableNodeIds[0];
    handleMoveToNode(target);
  };

  // Handle answer choice
  const handleAnswer = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQuestion || !currentCategory || selectedOption !== null) return;
    setSelectedOption(option);
    setTurnState('round_result');

    const isCorrect = option === currentQuestion.correcta;

    if (isCorrect) {
      setStreak((prev) => prev + 1);
      const isNewWedge = isHQQuestion && !collectedWedges[currentCategory];

      if (isNewWedge) {
        setCollectedWedges((prev) => ({ ...prev, [currentCategory]: true }));
        setJustWonWedge(currentCategory);
        onUpdateStats({ ...userStats, points: userStats.points + 30 });
      } else {
        onUpdateStats({ ...userStats, points: userStats.points + 15 });
      }
    } else {
      setStreak(0);
    }
  };

  const nextTurn = () => {
    setSelectedOption(null);
    setCurrentQuestion(null);
    setJustWonWedge(null);
    setTurnState('awaiting_roll');
  };

  const resetGame = () => {
    setCollectedWedges({
      blue: false,
      yellow: false,
      green: false,
      orange: false,
      purple: false,
      red: false
    });
    setCurrentNodeId('center');
    setDieValue(null);
    setIsRolling(false);
    setReachableNodeIds([]);
    setTurnState('awaiting_roll');
    setCurrentCategory(null);
    setCurrentQuestion(null);
    setSelectedOption(null);
    setJustWonWedge(null);
    setHasWonGame(false);
    setStreak(0);
  };

  // Render the Authentic Circular Trivial Token (Ficha con Quesitos)
  const renderPlayerToken = (cx: number, cy: number, size: number = 22) => {
    const r = size;
    return (
      <g className="cursor-pointer transition-all duration-300 pointer-events-none">
        {/* Outer shadow */}
        <circle cx={cx} cy={cy} r={r + 3} fill="#000000" opacity="0.25" filter="blur(2px)" />
        {/* White token body */}
        <circle cx={cx} cy={cy} r={r} fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />

        {/* 6 Quesito Wedge slots inside the token */}
        {COLOR_ORDER.map((col, idx) => {
          const startAngle = (idx * 60 - 90) * (Math.PI / 180);
          const endAngle = ((idx + 1) * 60 - 90) * (Math.PI / 180);
          const innerR = r - 2.5;

          const x1 = cx + innerR * Math.cos(startAngle);
          const y1 = cy + innerR * Math.sin(startAngle);
          const x2 = cx + innerR * Math.cos(endAngle);
          const y2 = cy + innerR * Math.sin(endAngle);

          const d = `M ${cx} ${cy} L ${x1} ${y1} A ${innerR} ${innerR} 0 0 1 ${x2} ${y2} Z`;
          const isWon = collectedWedges[col];

          return (
            <path
              key={col}
              d={d}
              fill={isWon ? TRIVIAL_CATEGORIES[col].colorHex : '#f1f5f9'}
              stroke="#cbd5e1"
              strokeWidth="0.8"
            />
          );
        })}

        {/* Center pin of token */}
        <circle cx={cx} cy={cy} r={4.5} fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
      </g>
    );
  };

  // Render the Full Real Trivial Board in SVG
  const renderRealBoard = () => {
    const CENTER_X = 400;
    const CENTER_Y = 400;
    const OUTER_RADIUS = 300;

    return (
      <svg
        viewBox="0 0 800 800"
        className="w-full max-w-[580px] h-auto mx-auto select-none drop-shadow-xl"
      >
        <defs>
          {/* Subtle radial wood/felt background gradient */}
          <radialGradient id="boardBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          {/* Gold border ring */}
          <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
          {/* Pulsing Reachable Space Filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Board Frame */}
        <circle cx={CENTER_X} cy={CENTER_Y} r="390" fill="url(#boardBg)" stroke="url(#goldBorder)" strokeWidth="6" />
        <circle cx={CENTER_X} cy={CENTER_Y} r="382" fill="none" stroke="#334155" strokeWidth="1.5" />

        {/* Board Background Details & Wood ring */}
        <circle cx={CENTER_X} cy={CENTER_Y} r={OUTER_RADIUS + 34} fill="none" stroke="#1e293b" strokeWidth="3" />
        <circle cx={CENTER_X} cy={CENTER_Y} r={OUTER_RADIUS - 34} fill="none" stroke="#1e293b" strokeWidth="3" />

        {/* 6 Radiating Spoke Track Backgrounds */}
        {[ -90, -30, 30, 90, 150, 210 ].map((angleDeg, i) => {
          const rad = (angleDeg * Math.PI) / 180;
          const x2 = CENTER_X + OUTER_RADIUS * Math.cos(rad);
          const y2 = CENTER_Y + OUTER_RADIUS * Math.sin(rad);
          return (
            <line
              key={i}
              x1={CENTER_X}
              y1={CENTER_Y}
              x2={x2}
              y2={y2}
              stroke="#334155"
              strokeWidth="28"
              strokeLinecap="round"
              opacity="0.5"
            />
          );
        })}

        {/* Outer Rim Track Circular Path */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={OUTER_RADIUS}
          fill="none"
          stroke="#1e293b"
          strokeWidth="32"
          opacity="0.8"
        />

        {/* Connections lines between all graph nodes */}
        {Object.values(BOARD_NODES).map((node) =>
          node.neighbors.map((nId) => {
            const neighbor = BOARD_NODES[nId];
            if (!neighbor || node.id > neighbor.id) return null; // draw once
            return (
              <line
                key={`${node.id}-${neighbor.id}`}
                x1={node.x}
                y1={node.y}
                x2={neighbor.x}
                y2={neighbor.y}
                stroke="#475569"
                strokeWidth="3"
                opacity="0.6"
              />
            );
          })
        )}

        {/* RENDER ALL BOARD NODES / CASILLAS */}
        {Object.values(BOARD_NODES).map((node) => {
          if (node.type === 'center') return null; // drawn separately

          const isHQ = node.isHQ;
          const isReachable = reachableNodeIds.includes(node.id);
          const isHovered = hoveredNodeId === node.id;
          const colorHex = node.color !== 'all' ? TRIVIAL_CATEGORIES[node.color].colorHex : '#ffffff';
          const nodeRadius = isHQ ? 21 : 12.5;

          return (
            <g
              key={node.id}
              onClick={() => handleMoveToNode(node.id)}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`transition-all ${isReachable ? 'cursor-pointer' : ''}`}
            >
              {/* Reachable highlight ring */}
              {isReachable && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeRadius + 7}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3.5"
                  className="animate-ping opacity-75"
                />
              )}

              {/* Node shadow */}
              <circle cx={node.x} cy={node.y + 2} r={nodeRadius} fill="#000000" opacity="0.4" />

              {/* Node body */}
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeRadius}
                fill={colorHex}
                stroke={isHQ ? '#fef08a' : isReachable ? '#fbbf24' : '#ffffff'}
                strokeWidth={isHQ ? 3.5 : isReachable ? 2.5 : 1.5}
                filter={isReachable ? 'url(#glow)' : undefined}
                className={isReachable ? 'hover:scale-115 transition-transform' : ''}
              />

              {/* If Casilla de Quesito (HQ): Draw a star or wedge symbol */}
              {isHQ && (
                <g pointerEvents="none">
                  {/* Outer glowing ring */}
                  <circle cx={node.x} cy={node.y} r={nodeRadius - 4} fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2,2" />
                  {/* Central Star */}
                  <polygon
                    points={`${node.x},${node.y - 7} ${node.x + 2},${node.y - 2} ${node.x + 7},${node.y - 2} ${node.x + 3},${node.y + 2} ${node.x + 5},${node.y + 7} ${node.x},${node.y + 4} ${node.x - 5},${node.y + 7} ${node.x - 3},${node.y + 2} ${node.x - 7},${node.y - 2} ${node.x - 2},${node.y - 2}`}
                    fill="#ffffff"
                  />
                </g>
              )}
            </g>
          );
        })}

        {/* 6 Sector Headquarters Labels outside the board */}
        {[
          { text: 'CONSTITUCIÓN', sub: 'Temas 1-8', angle: -90, color: '#60a5fa' },
          { text: 'PSICOLOGÍA', sub: 'Temas 9-16', angle: -30, color: '#facc15' },
          { text: 'DIDÁCTICA DUA', sub: 'Temas 17-23', angle: 30, color: '#4ade80' },
          { text: 'SALUD & DIETÉTICA', sub: 'Temas 24-30', angle: 90, color: '#fb923c' },
          { text: 'LOPIVI Y FAMILIA', sub: 'Temas 31-36', angle: 150, color: '#c084fc' },
          { text: 'CASOS PRÁCTICOS', sub: 'Temas 37-40', angle: 210, color: '#f87171' }
        ].map((item, idx) => {
          const rad = (item.angle * Math.PI) / 180;
          const lx = CENTER_X + (OUTER_RADIUS + 46) * Math.cos(rad);
          const ly = CENTER_Y + (OUTER_RADIUS + 46) * Math.sin(rad);

          return (
            <g key={idx} className="pointer-events-none select-none">
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                fill={item.color}
                fontSize="10"
                fontWeight="900"
                className="tracking-wider uppercase font-sans"
              >
                {item.text}
              </text>
              <text
                x={lx}
                y={ly + 11}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="8"
                fontWeight="bold"
                className="font-sans"
              >
                {item.sub}
              </text>
            </g>
          );
        })}

        {/* CENTER HUB (Casilla Central · Sant Joan d'Alacant) */}
        {(() => {
          const isCenterReachable = reachableNodeIds.includes('center');
          return (
            <g
              onClick={() => handleMoveToNode('center')}
              className={isCenterReachable ? 'cursor-pointer' : ''}
            >
              {/* Reachable Ping */}
              {isCenterReachable && (
                <circle cx={CENTER_X} cy={CENTER_Y} r="46" fill="none" stroke="#fbbf24" strokeWidth="4" className="animate-ping" />
              )}
              {/* Center Hub Body with Brass border */}
              <circle cx={CENTER_X} cy={CENTER_Y} r="40" fill="#0f172a" stroke="url(#goldBorder)" strokeWidth="4" />
              {/* 6 Colored wedges around hub rim */}
              {COLOR_ORDER.map((col, idx) => {
                const startAngle = (idx * 60 - 90) * (Math.PI / 180);
                const endAngle = ((idx + 1) * 60 - 90) * (Math.PI / 180);
                const hr = 36;
                const x1 = CENTER_X + hr * Math.cos(startAngle);
                const y1 = CENTER_Y + hr * Math.sin(startAngle);
                const x2 = CENTER_X + hr * Math.cos(endAngle);
                const y2 = CENTER_Y + hr * Math.sin(endAngle);
                return (
                  <path
                    key={col}
                    d={`M ${CENTER_X} ${CENTER_Y} L ${x1} ${y1} A ${hr} ${hr} 0 0 1 ${x2} ${y2} Z`}
                    fill={TRIVIAL_CATEGORIES[col].colorHex}
                    opacity="0.35"
                    stroke="#1e293b"
                    strokeWidth="1"
                  />
                );
              })}
              {/* Center emblem */}
              <circle cx={CENTER_X} cy={CENTER_Y} r="22" fill="#0f172a" stroke="#e2e8f0" strokeWidth="1.5" />
              <text
                x={CENTER_X}
                y={CENTER_Y - 3}
                textAnchor="middle"
                fill="#fef08a"
                fontSize="9"
                fontWeight="900"
                className="pointer-events-none font-sans"
              >
                SANT JOAN
              </text>
              <text
                x={CENTER_X}
                y={CENTER_Y + 9}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="8"
                fontWeight="bold"
                className="pointer-events-none font-sans"
              >
                OPE 2026
              </text>
            </g>
          );
        })()}

        {/* PLAYER TOKEN (Ficha física del opositor en su casilla actual) */}
        {renderPlayerToken(currentNode.x, currentNode.y, currentNode.isHQ ? 25 : 21)}
      </svg>
    );
  };

  // Render Visual Die Face (1 to 6)
  const renderDieFace = (num: number | null) => {
    const dotsMap: Record<number, number[][]> = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [75, 25], [25, 75], [75, 75]],
      5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
      6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
    };

    const currentDots = num ? dotsMap[num] || dotsMap[1] : dotsMap[6];

    return (
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 bg-white border-2 border-slate-300 rounded-2xl shadow-md p-2 flex items-center justify-center transition-all ${
          isRolling ? 'rotate-12 scale-110 border-amber-500 shadow-amber-200' : ''
        }`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {currentDots.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="9" fill="#0f172a" />
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* TOP HEADER BAR */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black px-2.5 py-0.5 rounded-full uppercase">
              Tablero Circular Oficial
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Trivial Opositor · Monitora Infantil
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Recorre las 61 casillas del tablero real de Sant Joan d'Alacant, tira el dado y conquista los <strong>6 quesitos oficiales</strong> en las casillas de cabecera.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>Racha: {streak}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
            <Trophy className="w-4 h-4 text-blue-600" />
            <span>Quesitos: {totalWedgesWon}/6</span>
          </div>

          <button
            onClick={resetGame}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            title="Reiniciar tablero a la casilla central"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT: THE BOARD (LEFT) + PLAYING PANEL (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT / CENTER: THE REAL CIRCULAR TRIVIAL BOARD */}
        <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-3 sm:p-5 border border-slate-800 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
          {/* Subtle felt background styling */}
          <div className="w-full flex items-center justify-between px-2 pb-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1 font-bold text-amber-400">
              <Compass className="w-3.5 h-3.5" /> Tablero Oficial 61 Casillas
            </span>
            <span className="text-slate-400">
              Casilla actual:{' '}
              <strong className="text-white">{currentNode.name}</strong>
            </span>
          </div>

          {/* Real SVG Trivial Wheel Board */}
          {renderRealBoard()}

          {/* Movement instruction pill during move state */}
          {turnState === 'awaiting_move' && (
            <div className="mt-3 bg-amber-400 text-slate-950 font-black text-xs px-4 py-2 rounded-xl shadow-lg animate-bounce flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>
                ¡Te has sacado un {dieValue}! Haz clic en cualquiera de las casillas que parpadean en dorado.
              </span>
              <button
                onClick={handleAutoMove}
                className="ml-2 bg-slate-950 text-white text-[10px] px-2.5 py-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Avanzar Automático
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: TURN CONTROLS & QUESTION CARD */}
        <div className="lg:col-span-5 space-y-4">
          {/* 1. DIE CONTROLS & STATUS CARD */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Dices className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-black uppercase text-slate-800 tracking-wider">
                  Turno del Jugador
                </span>
              </div>
              <span className="text-xs font-bold text-slate-500">
                Posición: {currentNode.isHQ ? '🌟 Casilla de Quesito' : currentNode.name}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {renderDieFace(dieValue)}
                <div>
                  <div className="text-xs font-bold text-slate-700">
                    {turnState === 'awaiting_roll'
                      ? 'Lanza el dado para mover tu ficha'
                      : turnState === 'awaiting_move'
                      ? `Has sacado un ${dieValue}`
                      : `En juego: ${currentCategory ? TRIVIAL_CATEGORIES[currentCategory].name : ''}`}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {turnState === 'awaiting_roll' && 'Muévete por radios o corona exterior'}
                    {turnState === 'awaiting_move' && 'Elige una de las casillas resaltadas'}
                    {turnState === 'answering_question' && 'Responde para afianzar o ganar el quesito'}
                    {turnState === 'round_result' && 'Turno completado'}
                  </div>
                </div>
              </div>

              {turnState === 'awaiting_roll' && (
                <button
                  onClick={rollDie}
                  disabled={isRolling}
                  className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shrink-0"
                >
                  <Dices className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
                  <span>{isRolling ? 'Tirando...' : 'Tirar Dado'}</span>
                </button>
              )}
            </div>

            {/* QUESITOS RACK (Colección de los 6 quesitos) */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  Tus Quesitos ({totalWedgesWon}/6):
                </span>
                {totalWedgesWon === 6 && (
                  <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    ¡Pleno completado!
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {COLOR_ORDER.map((col) => {
                  const isWon = collectedWedges[col];
                  const cat = TRIVIAL_CATEGORIES[col];
                  return (
                    <div
                      key={col}
                      className={`p-1.5 rounded-xl border text-center transition-all ${
                        isWon
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-400'
                      }`}
                      title={`${cat.name} (${cat.subtitle})`}
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full mx-auto mb-1 border"
                        style={{
                          backgroundColor: isWon ? cat.colorHex : '#cbd5e1',
                          borderColor: isWon ? cat.colorHex : '#94a3b8'
                        }}
                      />
                      <div className="text-[10px] leading-tight truncate font-bold">
                        {isWon ? '★ ' + cat.name.split(' ')[0] : cat.name.split(' ')[0]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. QUESTION CARD (When landing on a tile) */}
          {currentCategory && currentQuestion && (
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4 animate-in fade-in duration-200">
              {/* Category banner */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: TRIVIAL_CATEGORIES[currentCategory].colorHex }}
                  />
                  <span className="text-xs font-bold uppercase text-slate-800 tracking-wider">
                    {TRIVIAL_CATEGORIES[currentCategory].name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    Tema {currentQuestion.tema}
                  </span>

                  {isHQQuestion ? (
                    <span className="text-xs font-black text-amber-900 bg-amber-200 border border-amber-400 px-2.5 py-0.5 rounded-full animate-pulse flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>¡Pregunta por el Quesito!</span>
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      Casilla Normal
                    </span>
                  )}
                </div>
              </div>

              {/* Statement */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200">
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {currentQuestion.enunciado}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2">
                {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                  const isSelected = selectedOption === optKey;
                  const isCorrect = currentQuestion.correcta === optKey;

                  let btnClass = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800';

                  if (selectedOption !== null) {
                    if (isCorrect) {
                      btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500';
                    } else if (isSelected && !isCorrect) {
                      btnClass = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500';
                    } else {
                      btnClass = 'opacity-50 bg-slate-50 border-slate-200';
                    }
                  }

                  return (
                    <button
                      key={optKey}
                      onClick={() => handleAnswer(optKey)}
                      disabled={selectedOption !== null}
                      className={`w-full min-h-[42px] py-2 px-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${btnClass}`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-blue-700 text-white border-blue-700'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {optKey}
                      </span>
                      <span className="text-xs font-medium flex-1 leading-snug">
                        {currentQuestion.opciones[optKey]}
                      </span>
                      {selectedOption !== null && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {selectedOption !== null && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Alert & Next Turn */}
              {selectedOption !== null && (
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div
                    className={`p-3 rounded-xl border text-xs leading-relaxed space-y-1 ${
                      selectedOption === currentQuestion.correcta
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                        : 'bg-rose-50 border-rose-300 text-rose-950'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5">
                      {selectedOption === currentQuestion.correcta ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>¡Acierto!</span>
                          {justWonWedge && (
                            <span className="ml-1 bg-amber-300 text-amber-950 px-2 py-0.5 rounded font-black text-[10px] animate-bounce">
                              🎉 ¡Has ganado el Quesito {TRIVIAL_CATEGORIES[justWonWedge].name}!
                            </span>
                          )}
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>Fallo (la opción correcta era la {currentQuestion.correcta})</span>
                        </>
                      )}
                    </div>
                    <p className="text-slate-700 text-[11px]">
                      <strong>Fundamento Oficial:</strong> {currentQuestion.explicacion}
                    </p>
                  </div>

                  <button
                    onClick={nextTurn}
                    className="w-full py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Continuar al Siguiente Turno</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 3. RULES & BOARD GUIDE */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <Info className="w-4 h-4 text-blue-600" />
              <span>Reglas del Tablero Trivial Opositor:</span>
            </div>
            <ul className="space-y-1 text-[11px] list-disc list-inside">
              <li>Lanza el dado de 6 caras y muévete por los radios o por la corona circular.</li>
              <li>Las <strong>6 Casillas de Cabecera (con estrella)</strong> te otorgan el Quesito si aciertas.</li>
              <li>La <strong>Casilla Central (Plaza nº 204)</strong> te permite retar cualquier tema que te falte.</li>
              <li>Al reunir los 6 quesitos, te proclamas ganadora del Trivial con puntos y piezas de puzzle.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* WINNER MODAL CELEBRATION */}
      {hasWonGame && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center space-y-5 border border-amber-300 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-200">
              <Trophy className="w-9 h-9 text-amber-950 animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                ¡PLENO DE LOS 6 QUESITOS!
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                ¡HAS GANADO EL TRIVIAL OPOSITOR!
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                Has completado el tablero real y conquistado las 6 disciplinas del temario oficial para Monitora Infantil del Ayuntamiento de Sant Joan d'Alacant.
              </p>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-bold">
              🎁 Recompensa Ganadora: +120 Puntos oficiales de oposición y 1 Nueva Pieza Desbloqueada para el Mural del Puzzle nº 204.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {onNavigateToPuzzle && (
                <button
                  onClick={() => {
                    setHasWonGame(false);
                    onNavigateToPuzzle();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 text-slate-950 text-xs font-black transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Ver Mural del Puzzle</span>
                </button>
              )}

              <button
                onClick={resetGame}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Jugar Otra Partida
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
