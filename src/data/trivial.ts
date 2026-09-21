import { Question } from '../types';
import { BANCO_PREGUNTAS } from './questions';
import { shuffleArray, shuffleQuestionOptions } from '../utils/shuffle';

export type TrivialColor = 'blue' | 'yellow' | 'green' | 'orange' | 'purple' | 'red';

export interface TrivialCategoryInfo {
  id: TrivialColor;
  number: number; // 1 to 6 on die
  name: string;
  subtitle: string;
  themeNumbers: number[];
  colorHex: string;
  lightBg: string;
  borderClass: string;
  textClass: string;
  badgeClass: string;
  accentClass: string;
  icon: string;
  description: string;
}

export const TRIVIAL_CATEGORIES: Record<TrivialColor, TrivialCategoryInfo> = {
  blue: {
    id: 'blue',
    number: 1,
    name: 'Constitución y Jurídico',
    subtitle: 'Temas 1 al 8 · Bloque Común',
    themeNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
    colorHex: '#2563eb', // blue-600
    lightBg: 'bg-blue-50',
    borderClass: 'border-blue-300',
    textClass: 'text-blue-700',
    badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
    accentClass: 'from-blue-600 to-indigo-700',
    icon: 'Landmark',
    description: 'Constitución Española, Estatuto de Autonomía, TREBEP, Procedimiento LPACAP y Régimen Local de Sant Joan.'
  },
  yellow: {
    id: 'yellow',
    number: 2,
    name: 'Psicología y Desarrollo',
    subtitle: 'Temas 9 al 16 · Desarrollo Evolutivo',
    themeNumbers: [9, 10, 11, 12, 13, 14, 15, 16],
    colorHex: '#eab308', // yellow-500
    lightBg: 'bg-amber-50',
    borderClass: 'border-amber-300',
    textClass: 'text-amber-800',
    badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
    accentClass: 'from-amber-400 to-yellow-500',
    icon: 'Brain',
    description: 'Desarrollo psicomotor, cognitivo, afectivo y social en 0-3 años. Piaget, Vygotsky, Wallon y apego.'
  },
  green: {
    id: 'green',
    number: 3,
    name: 'Didáctica, Rincones y DUA',
    subtitle: 'Temas 17 al 23 · Metodología Activa',
    themeNumbers: [17, 18, 19, 20, 21, 22, 23],
    colorHex: '#16a34a', // green-600
    lightBg: 'bg-emerald-50',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-700',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    accentClass: 'from-emerald-500 to-teal-600',
    icon: 'Sparkles',
    description: 'El juego como motor de aprendizaje, cesto de los tesoros, Pikler, Aucouturier y DUA (Decreto 104/2018).'
  },
  orange: {
    id: 'orange',
    number: 4,
    name: 'Salud, Higiene y Dietética',
    subtitle: 'Temas 24 al 30 · Cuidados Físicos',
    themeNumbers: [24, 25, 26, 27, 28, 29, 30],
    colorHex: '#ea580c', // orange-600
    lightBg: 'bg-orange-50',
    borderClass: 'border-orange-300',
    textClass: 'text-orange-700',
    badgeClass: 'bg-orange-100 text-orange-800 border-orange-200',
    accentClass: 'from-orange-500 to-amber-600',
    icon: 'HeartPulse',
    description: 'Alimentación BLW, alergias y shock anafiláctico, prevención de accidentes, control de esfínteres y primeros auxilios.'
  },
  purple: {
    id: 'purple',
    number: 5,
    name: 'LOPIVI, Familia y Menor',
    subtitle: 'Temas 31 al 36 · Protección Integral',
    themeNumbers: [31, 32, 33, 34, 35, 36],
    colorHex: '#9333ea', // purple-600
    lightBg: 'bg-purple-50',
    borderClass: 'border-purple-300',
    textClass: 'text-purple-700',
    badgeClass: 'bg-purple-100 text-purple-800 border-purple-200',
    accentClass: 'from-purple-600 to-pink-600',
    icon: 'Shield',
    description: 'Ley Orgánica LOPIVI 8/2021, detección de desamparo y maltrato, relación familia-escuela y deber de sigilo municipal.'
  },
  red: {
    id: 'red',
    number: 6,
    name: 'Casos Prácticos y Aula 0-3',
    subtitle: 'Temas 37 al 40 · Supuestos Tribunal',
    themeNumbers: [37, 38, 39, 40],
    colorHex: '#dc2626', // red-600
    lightBg: 'bg-rose-50',
    borderClass: 'border-rose-300',
    textClass: 'text-rose-700',
    badgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
    accentClass: 'from-rose-600 to-red-700',
    icon: 'GraduationCap',
    description: 'Organización del centro de educación infantil municipal en Sant Joan d’Alacant, programaciones de aula y supuestos reales.'
  }
};

export const COLOR_ORDER: TrivialColor[] = ['blue', 'yellow', 'green', 'orange', 'purple', 'red'];

export const getColorByDieNumber = (dieNum: number): TrivialColor => {
  switch (dieNum) {
    case 1: return 'blue';
    case 2: return 'yellow';
    case 3: return 'green';
    case 4: return 'orange';
    case 5: return 'purple';
    case 6: return 'red';
    default: return 'blue';
  }
};

/**
 * Gets a fresh randomized question for a specific Trivial category
 */
export const getTrivialQuestionForCategory = (color: TrivialColor, excludeIds: string[] = []): Question => {
  const catInfo = TRIVIAL_CATEGORIES[color];
  const matching = BANCO_PREGUNTAS.filter((q) => catInfo.themeNumbers.includes(q.tema));

  const available = matching.filter((q) => !excludeIds.includes(q.id));
  const pool = available.length > 0 ? available : matching;

  const picked = pool[Math.floor(Math.random() * pool.length)];
  return shuffleQuestionOptions(picked);
};
