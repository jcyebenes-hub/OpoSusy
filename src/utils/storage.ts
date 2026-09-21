import { UserStats, ExamSessionResult, Question } from '../types';
import { BANCO_PREGUNTAS } from '../data/questions';

const STORAGE_KEY_STATS = 'opopro_santjoan_stats_v1';
const STORAGE_KEY_HISTORY = 'opopro_santjoan_history_v1';

export const INITIAL_STATS: UserStats = {
  points: 120,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedTests: 0,
  errorBank: ["T31-001", "T04-002"], // initial starter errors to review
  masteredThemes: [],
  themeStats: {},
  badges: [
    { id: 'b1', title: 'Aspirante Oficial', desc: 'Comenzaste la preparación para Sant Joan d\'Alacant', icon: 'Award', unlockedAt: new Date().toISOString() },
    { id: 'b2', title: 'Constitucionalista', desc: 'Acierta 5 preguntas seguidas de la Parte General (Temas 1-8)', icon: 'BookOpen' },
    { id: 'b3', title: 'Maestra de la Inclusión', desc: 'Domina los temas de ACNEAE y atención a la diversidad', icon: 'Heart' },
    { id: 'b4', title: 'Simulacro Aprobado', desc: 'Supera el simulacro oficial con nota >= 5.0 en ambos ejercicios', icon: 'FileCheck' },
    { id: 'b5', title: 'Plaza nº 1 C1', desc: 'Alcanza más de 1.000 puntos y domina los 40 temas', icon: 'Trophy' }
  ],
  puzzlePieces: {},
  perfect10sCount: 0,
  perfect10sStreak: 0,
  highest10sStreak: 0,
  hasClaimedFinalDiploma: false
};

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS);
    if (!raw) return INITIAL_STATS;
    const parsed = JSON.parse(raw);
    return { ...INITIAL_STATS, ...parsed };
  } catch (e) {
    console.error("Error loading user stats", e);
    return INITIAL_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
  } catch (e) {
    console.error("Error saving user stats", e);
  }
}

export function loadExamHistory(): ExamSessionResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveExamResult(result: ExamSessionResult): void {
  try {
    const history = loadExamHistory();
    history.unshift(result);
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history.slice(0, 50)));
  } catch (e) {
    console.error("Error saving exam history", e);
  }
}

export function calculateOfficialScore(aciertos: number, errores: number, total: number): number {
  if (total <= 0) return 0;
  // Official Formula: Nota = (Aciertos - Errores / 3) / total * 10
  const raw = (aciertos - errores / 3) / total * 10;
  return Math.max(0, Math.min(10, Math.round(raw * 100) / 100));
}

export function recordQuestionAnswer(
  stats: UserStats,
  question: Question,
  isCorrect: boolean
): UserStats {
  const newStats = { ...stats };
  const currentPoints = newStats.points || 0;

  // Add points
  const pointsDelta = isCorrect
    ? question.dificultad === 'facil'
      ? 10
      : question.dificultad === 'media'
      ? 20
      : 30
    : 0;

  newStats.points = currentPoints + pointsDelta;

  // Theme stats
  const currentTheme = newStats.themeStats[question.tema] || { attempts: 0, correct: 0 };
  newStats.themeStats[question.tema] = {
    attempts: currentTheme.attempts + 1,
    correct: currentTheme.correct + (isCorrect ? 1 : 0)
  };

  // Mastered themes (>= 70% with at least 3 attempts)
  const updatedTheme = newStats.themeStats[question.tema];
  if (updatedTheme.attempts >= 3 && updatedTheme.correct / updatedTheme.attempts >= 0.7) {
    if (!newStats.masteredThemes.includes(question.tema)) {
      newStats.masteredThemes.push(question.tema);
    }
  }

  // Error bank management
  const errorSet = new Set(newStats.errorBank || []);
  if (!isCorrect) {
    errorSet.add(question.id);
  } else {
    // If correctly answered, remove from error bank
    errorSet.delete(question.id);
  }
  newStats.errorBank = Array.from(errorSet);

  // Check badges
  checkBadgeUnlocks(newStats);

  saveUserStats(newStats);
  return newStats;
}

function checkBadgeUnlocks(stats: UserStats) {
  const now = new Date().toISOString();
  // Check General Part master
  const generalMastered = [1, 2, 3, 4, 5, 6, 7, 8].filter(t => stats.masteredThemes.includes(t)).length;
  if (generalMastered >= 3) {
    unlockBadge(stats, 'b2', now);
  }
  // Inclusion master (Temas 13, 14, 15)
  if ([13, 14, 15].some(t => stats.masteredThemes.includes(t))) {
    unlockBadge(stats, 'b3', now);
  }
  // 1000 points
  if (stats.points >= 1000) {
    unlockBadge(stats, 'b5', now);
  }
}

function unlockBadge(stats: UserStats, badgeId: string, now: string) {
  const b = stats.badges.find(item => item.id === badgeId);
  if (b && !b.unlockedAt) {
    b.unlockedAt = now;
  }
}

export function getQuestionsFromErrorBank(errorIds: string[]): Question[] {
  const set = new Set(errorIds);
  return BANCO_PREGUNTAS.filter(q => set.has(q.id));
}

export function getUnlockedPuzzlePiecesCount(stats?: UserStats): number {
  if (!stats || !stats.puzzlePieces) return 0;
  return Object.values(stats.puzzlePieces).filter(p => p.unlocked).length;
}

export function evaluateTestCompletionForPuzzle(
  stats: UserStats,
  score: number,
  questions: Question[],
  isSimulacro: boolean = false
): { updatedStats: UserStats; newUnlockedPieces: string[]; isPerfect10: boolean } {
  const newStats: UserStats = {
    ...stats,
    puzzlePieces: { ...(stats.puzzlePieces || {}) }
  };

  const now = new Date().toISOString();
  const newUnlockedPieces: string[] = [];
  const isPerfect10 = score >= 9.99;

  // Streak & 10s counter
  if (isPerfect10) {
    newStats.perfect10sCount = (newStats.perfect10sCount || 0) + 1;
    newStats.perfect10sStreak = (newStats.perfect10sStreak || 0) + 1;
    if (newStats.perfect10sStreak > (newStats.highest10sStreak || 0)) {
      newStats.highest10sStreak = newStats.perfect10sStreak;
    }
    // Extra bonus experience for a 10.00
    newStats.points = (newStats.points || 0) + 100;
  } else {
    newStats.perfect10sStreak = 0;
  }

  // Helper to unlock piece if not already unlocked
  const tryUnlockPiece = (pieceId: string) => {
    const existing = newStats.puzzlePieces?.[pieceId];
    if (!existing || !existing.unlocked) {
      newStats.puzzlePieces![pieceId] = {
        unlocked: true,
        unlockedAt: now,
        bestScore: Math.max(score, existing?.bestScore || 0)
      };
      newUnlockedPieces.push(pieceId);
    } else if (score > (existing.bestScore || 0)) {
      existing.bestScore = score;
    }
  };

  // Pieza 1: Cualquier test completado con aprobado (>= 5.0)
  if (score >= 5.0) {
    tryUnlockPiece('piece_1');
  }

  // Check themes in test
  const testThemes = Array.from(new Set(questions.map(q => q.tema)));

  // Perfect 10 specific theme blocks
  if (isPerfect10) {
    // Pieza 2: Temas 1 al 4 (Constitución)
    if (testThemes.some(t => [1, 2, 3, 4].includes(t))) {
      tryUnlockPiece('piece_2');
    }

    // Pieza 3: Temas 5 y 6 (Estatut de Autonomía)
    if (testThemes.some(t => [5, 6].includes(t))) {
      tryUnlockPiece('piece_3');
    }

    // Pieza 4: Temas 7 y 8 (Régimen Local y Ayto. Sant Joan)
    if (testThemes.some(t => [7, 8].includes(t))) {
      tryUnlockPiece('piece_4');
    }

    // Pieza 5: Temas 9 al 12 (Desarrollo Infantil)
    if (testThemes.some(t => [9, 10, 11, 12].includes(t))) {
      tryUnlockPiece('piece_5');
    }

    // Pieza 6: Temas 13 al 16 (Inclusión y ACNEAE)
    if (testThemes.some(t => [13, 14, 15, 16].includes(t))) {
      tryUnlockPiece('piece_6');
    }

    // Pieza 7: Temas 17 al 20 (Organización Escolar)
    if (testThemes.some(t => [17, 18, 19, 20].includes(t))) {
      tryUnlockPiece('piece_7');
    }

    // Pieza 8: Temas 21 al 24 (Salud e Higiene)
    if (testThemes.some(t => [21, 22, 23, 24].includes(t))) {
      tryUnlockPiece('piece_8');
    }

    // Pieza 9: Temas 25 al 30 (Juego, Talleres y Psicomotricidad)
    if (testThemes.some(t => [25, 26, 27, 28, 29, 30].includes(t))) {
      tryUnlockPiece('piece_9');
    }

    // Pieza 10: Temas 31 al 40 (Casos y Normativa Infantil)
    if (testThemes.some(t => [31, 32, 33, 34, 35, 36, 37, 38, 39, 40].includes(t))) {
      tryUnlockPiece('piece_10');
    }

    // Pieza 11: Racha de 3 plenos de 10 seguidos
    if ((newStats.perfect10sStreak || 0) >= 3) {
      tryUnlockPiece('piece_11');
    }
  }

  // Pieza 12: Simulacro Oficial con nota >= 9.00
  if (isSimulacro && score >= 9.0) {
    tryUnlockPiece('piece_12');
  }

  saveUserStats(newStats);
  return { updatedStats: newStats, newUnlockedPieces, isPerfect10 };
}

export function unlockRandomPuzzlePiece(stats: UserStats): UserStats {
  const newStats = { ...stats };
  const currentPieces = { ...(newStats.puzzlePieces || {}) };

  const lockedIds: string[] = [];
  for (let i = 1; i <= 12; i++) {
    const id = `piece_${i}`;
    if (!currentPieces[id]?.unlocked) {
      lockedIds.push(id);
    }
  }

  if (lockedIds.length > 0) {
    const pickedId = lockedIds[Math.floor(Math.random() * lockedIds.length)];
    currentPieces[pickedId] = {
      unlocked: true,
      unlockedAt: new Date().toISOString(),
      bestScore: 10
    };
    newStats.puzzlePieces = currentPieces;
    saveUserStats(newStats);
  }

  return newStats;
}

