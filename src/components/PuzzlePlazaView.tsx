import React, { useState } from 'react';
import { 
  Trophy, Award, Flame, CheckCircle2, Lock, Sparkles, ArrowRight, 
  Share2, Download, Shield, Landmark, Flag, Building2, Baby, 
  HeartHandshake, Shapes, Cross, Zap, CheckSquare, Star, Crown, FileText, X
} from 'lucide-react';
import { UserStats } from '../types';
import { PUZZLE_PIECES, PuzzlePieceDefinition, TOTAL_PUZZLE_PIECES } from '../data/puzzle';
import { getUnlockedPuzzlePiecesCount } from '../utils/storage';

interface PuzzlePlazaViewProps {
  userStats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
  onStartTestForPiece: (themes: number[]) => void;
  onGoToSimulacro: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5" />,
  Landmark: <Landmark className="w-5 h-5" />,
  Flag: <Flag className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Baby: <Baby className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Shapes: <Shapes className="w-5 h-5" />,
  Cross: <Cross className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  CheckSquare: <CheckSquare className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />
};

export const PuzzlePlazaView: React.FC<PuzzlePlazaViewProps> = ({
  userStats,
  onUpdateStats,
  onStartTestForPiece,
  onGoToSimulacro
}) => {
  const [selectedPiece, setSelectedPiece] = useState<PuzzlePieceDefinition | null>(null);
  const [showCredentialModal, setShowCredentialModal] = useState<boolean>(false);
  const [aspiranteName, setAspiranteName] = useState<string>('Futura Funcionaria de Carrera');

  const unlockedCount = getUnlockedPuzzlePiecesCount(userStats);
  const progressPercent = Math.round((unlockedCount / TOTAL_PUZZLE_PIECES) * 100);
  const isFinalObjectiveCompleted = unlockedCount === TOTAL_PUZZLE_PIECES;

  const handleClaimDiploma = () => {
    if (!userStats.hasClaimedFinalDiploma) {
      onUpdateStats({
        ...userStats,
        hasClaimedFinalDiploma: true,
        points: userStats.points + 500
      });
    }
    setShowCredentialModal(true);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-blue-900/40 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5 uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                El Reto Supremo OPO-PRO
              </span>
              <span className="text-xs text-blue-200">
                Plaza nº 204 · Ayto. Sant Joan d'Alacant
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              El Mural de la Plaza: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">12 Plenos de Oro</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              En una oposición pura con una única plaza en juego, el aprobado no basta. Para encajar cada ficha del mural debes alcanzar la perfección absoluta: <strong>sacar un 10.00 en cada bloque temático</strong>. Completa las 12 piezas para desbloquear tu nombramiento oficial como <strong>Funcionaria de Carrera</strong>.
            </p>
          </div>

          {/* Quick Trophy Card */}
          <div className="shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col items-center justify-center text-center min-w-[200px]">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-2 shadow-lg ${
              isFinalObjectiveCompleted 
                ? 'bg-gradient-to-br from-amber-400 to-yellow-600 text-white animate-bounce'
                : 'bg-slate-800/80 text-amber-300 border border-amber-500/30'
            }`}>
              {isFinalObjectiveCompleted ? <Crown className="w-8 h-8" /> : <Trophy className="w-7 h-7" />}
            </div>

            <div className="text-2xl font-black text-white">
              {unlockedCount} / {TOTAL_PUZZLE_PIECES}
            </div>
            <div className="text-xs text-slate-300 font-medium mb-3">
              Piezas Desbloqueadas
            </div>

            {isFinalObjectiveCompleted ? (
              <button
                onClick={handleClaimDiploma}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs shadow-md hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Ver Nombramiento</span>
              </button>
            ) : (
              <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden border border-white/10">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-yellow-400 h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Real-Time Gamification Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
            <Star className="w-5 h-5 fill-amber-500" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900">
              {userStats.perfect10sCount || 0}
            </div>
            <div className="text-[11px] font-semibold text-slate-500">
              Plenos de 10 Totales
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
            <Flame className="w-5 h-5 fill-rose-500 animate-pulse" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900">
              {userStats.perfect10sStreak || 0}
            </div>
            <div className="text-[11px] font-semibold text-slate-500">
              Racha Actual de 10s
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
            <Zap className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900">
              {userStats.highest10sStreak || 0}
            </div>
            <div className="text-[11px] font-semibold text-slate-500">
              Récord Racha 10s
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
            <Award className="w-5 h-5 text-blue-700" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900">
              {progressPercent}%
            </div>
            <div className="text-[11px] font-semibold text-slate-500">
              Hacia la Plaza nº 204
            </div>
          </div>
        </div>
      </div>

      {/* 3. The 12-Piece Interactive Puzzle Grid */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Las 12 Piezas del Puzzle Municipal
            </h2>
            <p className="text-xs text-slate-500">
              Pulsa en cualquier pieza para ver su objetivo y empezar el test correspondiente.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-600 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Desbloqueada
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" /> Pendiente de 10
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {PUZZLE_PIECES.map((piece) => {
            const pieceState = userStats.puzzlePieces?.[piece.id];
            const isUnlocked = !!pieceState?.unlocked;

            return (
              <div
                key={piece.id}
                onClick={() => setSelectedPiece(piece)}
                className={`group rounded-2xl p-4 border transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-amber-50/50 border-amber-300/80 shadow-xs hover:shadow-md hover:border-amber-400'
                    : 'bg-slate-50/70 border-slate-200 hover:border-blue-300 hover:bg-white'
                }`}
              >
                {/* Status corner badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shadow-xs ${
                      isUnlocked
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {ICON_MAP[piece.icon] || <Trophy className="w-4 h-4" />}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      Pieza #{piece.number}
                    </span>
                  </div>

                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      10.00
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-600 text-[10px] font-bold">
                      <Lock className="w-3 h-3" />
                      Reto
                    </span>
                  )}
                </div>

                <div className="space-y-1 my-2">
                  <h3 className={`text-xs sm:text-sm font-bold leading-tight ${
                    isUnlocked ? 'text-slate-900' : 'text-slate-700'
                  }`}>
                    {piece.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {piece.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-blue-700 text-[10px] truncate max-w-[140px]">
                    {piece.themeRangeLabel}
                  </span>

                  {isUnlocked ? (
                    <span className="text-emerald-700 font-bold text-[10px]">
                      ¡Completada!
                    </span>
                  ) : (
                    <span className="text-slate-400 group-hover:text-blue-700 flex items-center gap-0.5 text-[10px] font-semibold transition-colors">
                      Intentar <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Grand Final Objective: La Adjudicación de la Plaza nº 204 */}
      <div className={`rounded-2xl p-6 sm:p-8 border text-center relative overflow-hidden transition-all duration-300 ${
        isFinalObjectiveCompleted
          ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 border-amber-300 shadow-xl'
          : 'bg-white border-slate-200 text-slate-800 shadow-xs'
      }`}>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md shadow-md mb-1">
            <Crown className={`w-8 h-8 ${isFinalObjectiveCompleted ? 'text-slate-950' : 'text-amber-500'}`} />
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            {isFinalObjectiveCompleted
              ? '¡ENHORABUENA! HAS COMPLETADO EL MURAL DE LA PLAZA Nº 204'
              : 'Objetivo Final: Nombramiento Oficial de Funcionaria de Carrera'}
          </h2>

          <p className="text-xs sm:text-sm leading-relaxed opacity-90">
            {isFinalObjectiveCompleted
              ? 'Has demostrado dominio indiscutible en los 40 temas, la Constitución, el Régimen Local de Sant Joan y la práctica educativa con nota máxima. Ya puedes generar y firmar tu Credencial de Nombramiento Oficial.'
              : `Has encajado ${unlockedCount} de 12 piezas. Te faltan ${TOTAL_PUZZLE_PIECES - unlockedCount} plenos de oro para conseguir el nombramiento oficial del tribunal y reclamar la plaza nº 204.`}
          </p>

          <div className="pt-2">
            {isFinalObjectiveCompleted ? (
              <button
                onClick={handleClaimDiploma}
                className="px-6 py-3 rounded-xl bg-slate-950 text-white hover:bg-slate-900 font-black text-sm shadow-xl transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Emitir Decreto Oficial de Alcaldía</span>
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Bloqueado hasta conseguir los 12 plenos de oro</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Modal: Detalle de la Pieza Seleccionada */}
      {selectedPiece && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                  userStats.puzzlePieces?.[selectedPiece.id]?.unlocked
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {ICON_MAP[selectedPiece.icon] || <Trophy className="w-5 h-5" />}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-700 uppercase">
                    Pieza #{selectedPiece.number}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {selectedPiece.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedPiece(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div>
                <strong className="text-slate-800">Requisito para encajar la ficha:</strong>
                <p className="text-slate-600 mt-0.5">{selectedPiece.requirement}</p>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <strong className="text-slate-800">Temario que abarca:</strong>
                <p className="text-blue-700 font-semibold mt-0.5">{selectedPiece.themeRangeLabel}</p>
              </div>

              <p className="text-[11px] text-slate-500 italic pt-1">
                "{selectedPiece.flavorText}"
              </p>
            </div>

            {userStats.puzzlePieces?.[selectedPiece.id]?.unlocked ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>¡Pieza conseguida con calificación máxima (10.00)!</span>
              </div>
            ) : (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Estrategia OPO-PRO:
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Para sacar el 10 perfecto, repasa bien los epígrafes del temario antes de empezar y descarta con calma las opciones trampa del tribunal.
                </p>
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setSelectedPiece(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cerrar
              </button>

              {selectedPiece.id === 'piece_12' ? (
                <button
                  onClick={() => {
                    setSelectedPiece(null);
                    onGoToSimulacro();
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>Ir al Simulacro</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    const themes = selectedPiece.themeRange.length > 0 ? selectedPiece.themeRange : [1];
                    setSelectedPiece(null);
                    onStartTestForPiece(themes);
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>Hacer Test de este Reto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6. Modal Credencial Oficial de Nombramiento (Objetivo Final) */}
      {showCredentialModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-400 relative overflow-hidden my-4">
            {/* Corner municipal decorations */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/30 to-transparent pointer-events-none" />

            <div className="flex justify-end">
              <button
                onClick={() => setShowCredentialModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center space-y-3 pb-6 border-b-2 border-slate-200">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-700 mx-auto flex items-center justify-center shadow-md">
                <Crown className="w-9 h-9" />
              </div>

              <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                Ayuntamiento de Sant Joan d'Alacant · OPE 2026
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                DECRETO DE NOMBRAMIENTO OFICIAL
              </h2>
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                FUNCIONARIA DE CARRERA · PUESTO Nº 204
              </div>
            </div>

            <div className="py-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Por resolución del Tribunal Calificador del proceso selectivo para la cobertura en propiedad de <strong>1 plaza de MONITORA INFANTIL DE EDUCACIÓN</strong> (Grupo C1, Escala de Administración Especial, Puesto nº 204) del Ayuntamiento de Sant Joan d'Alacant,
              </p>

              <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200 text-center space-y-2">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Se certifica que la aspirante:
                </div>
                <input
                  type="text"
                  value={aspiranteName}
                  onChange={(e) => setAspiranteName(e.target.value)}
                  className="text-base sm:text-lg font-black text-center text-slate-900 bg-white border border-amber-300 rounded-lg py-1 px-3 w-full max-w-sm mx-auto shadow-xs focus:ring-2 focus:ring-amber-500 outline-hidden"
                  placeholder="Tu Nombre y Apellidos"
                />
                <div className="text-xs text-emerald-700 font-bold">
                  ★ Ha alcanzado la nota máxima (10.00) en todos los bloques del temario oficial ★
                </div>
              </div>

              <p className="text-justify text-xs text-slate-600">
                Habiendo acreditado dominio absoluto de la Constitución Española, el Régimen Local, la Psicología y Pedagogía Infantil 0-3 años, y la resolución impecable de supuestos prácticos, se le adjudica el <strong>NÚMERO 1 DE LA PROMOCIÓN</strong> con plenos derechos de funcionaria de carrera.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-slate-500 text-center sm:text-left">
                <div>Fecha: {new Date().toLocaleDateString('es-ES')}</div>
                <div className="font-mono text-slate-400">Ref: OPO-PRO/SANTJOAN-204-APROBADO</div>
              </div>

              <button
                onClick={() => {
                  alert('¡Credencial Oficial guardada con éxito en tu expediente!');
                  setShowCredentialModal(false);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Credencial Oficial</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
