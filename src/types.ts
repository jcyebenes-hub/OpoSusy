export type CategoryType = 'General' | 'Especifica';
export type DifficultyType = 'facil' | 'media' | 'dificil';
export type QuestionType = 'test' | 'VF' | 'hueco' | 'relacionar' | 'supuesto';

export interface Question {
  id: string;
  tema: number;
  categoria: CategoryType;
  dificultad: DifficultyType;
  tipo: QuestionType;
  enunciado: string;
  opciones: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correcta: 'A' | 'B' | 'C' | 'D';
  explicacion: string;
  referencia: string;
}

export interface PracticalCase {
  id: string;
  title: string;
  location: string;
  context: string;
  questions: Question[];
}

export interface ThemeInfo {
  number: number;
  title: string;
  category: CategoryType;
  lawRefOrPedagogy: string;
  summary: string;
  keyPoints: string[];
  sampleQuestions?: Question[];
  // Compatibility aliases
  numero?: number;
  titulo?: string;
  categoria?: CategoryType;
  descripcion?: string;
  epigrafes?: string[];
}

export type Topic = ThemeInfo;

export interface Flashcard {
  id: string;
  tema: number;
  front: string;
  back: string;
  category: CategoryType;
  tag: string;
}

export interface PasapalabraItem {
  letter: string;
  tema: number;
  word: string;
  startsOrContains: 'Empieza por' | 'Contiene la';
  definition: string;
}

export interface TrueFalseItem {
  id: string;
  tema: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
  referencia: string;
}

export interface FillBlankItem {
  id: string;
  tema: number;
  fullText: string;
  hiddenWord: string;
  options: string[];
  reference: string;
}

export interface ColumnMatchItem {
  id: string;
  tema: number;
  title: string;
  pairs: { left: string; right: string }[];
}

export interface UserAnswerRecord {
  questionId: string;
  tema: number;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  correctOption: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  date: string;
}

export interface ExamSessionResult {
  id?: string;
  date: string;
  mode: string;
  score: number; // calculated according to official formula
  totalQuestions: number;
  timeSpentSeconds: number;
  passed: boolean;
  correctAnswers?: number;
  wrongAnswers?: number;
  blankAnswers?: number;
  aciertos?: number;
  errores?: number;
  blancos?: number;
  themeBreakdown?: Record<number, { correct: number; total: number }>;
}

export interface StudyPlanWeek {
  weekNumber: number;
  themeNumbers: number[];
  tasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

export interface StudyPlan {
  totalWeeks: number;
  weeklyHours: number;
  examDateApprox: string;
  knowledgeLevel: 'iniciacion' | 'intermedio' | 'avanzado';
  generatedAt: string;
  weeks: StudyPlanWeek[];
}

export interface UserStats {
  points: number;
  streakDays: number;
  lastActiveDate: string;
  completedTests: number;
  errorBank: string[]; // question IDs currently in error bank
  masteredThemes: number[]; // theme numbers >= 70%
  themeStats: Record<number, { attempts: number; correct: number }>;
  badges: {
    id: string;
    title: string;
    desc: string;
    icon: string;
    unlockedAt?: string;
  }[];
  // Gamification & Puzzle de la Plaza nº 204
  puzzlePieces?: Record<string, { unlocked: boolean; unlockedAt?: string; bestScore?: number }>;
  perfect10sCount?: number;
  perfect10sStreak?: number;
  highest10sStreak?: number;
  hasClaimedFinalDiploma?: boolean;
  studyPlan?: StudyPlan;
}
