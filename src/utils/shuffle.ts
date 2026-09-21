import { Question } from '../types';

/**
 * Shuffles the options (A, B, C, D) of a question dynamically,
 * mapping the 'correcta' key to the new randomized position.
 * This prevents users from memorizing option letters (e.g., 'always B')
 * and forces comprehension of the actual answer.
 */
export function shuffleQuestionOptions(q: Question): Question {
  if (!q || !q.opciones) return q;

  const originalKeys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const items = originalKeys.map((key) => ({
    text: q.opciones[key],
    isCorrect: key === q.correcta,
  }));

  // Fisher-Yates shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }

  const newOpciones: Record<'A' | 'B' | 'C' | 'D', string> = {
    A: items[0].text,
    B: items[1].text,
    C: items[2].text,
    D: items[3].text,
  };

  const newCorrectIndex = items.findIndex((item) => item.isCorrect);
  const newCorrectKey = originalKeys[newCorrectIndex] || 'A';

  return {
    ...q,
    opciones: newOpciones,
    correcta: newCorrectKey,
  };
}

/**
 * Fisher-Yates array shuffle helper
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

/**
 * Thematic blocks mapping to complement single-topic tests up to 30 questions
 */
export const THEME_BLOCKS: Record<number, { name: string; themes: number[] }> = {
  1: { name: 'Constitución y Organización del Estado', themes: [1, 2, 3, 4] },
  2: { name: 'Estatuto de Autonomía de la Comunitat Valenciana', themes: [5, 6, 2] },
  3: { name: 'Régimen Local y Ayto. de Sant Joan d\'Alacant', themes: [7, 8, 3, 4] },
  4: { name: 'Desarrollo Evolutivo Infantil (0-3 años)', themes: [9, 10, 11, 12] },
  5: { name: 'Inclusión Educativa, Detección y ACNEAE', themes: [13, 14, 15, 16] },
  6: { name: 'Organización Escolar, Ratios y Proyecto de Aula', themes: [17, 18, 19, 20] },
  7: { name: 'Salud, Higiene, Nutrición y Primeros Auxilios', themes: [21, 22, 23, 24] },
  8: { name: 'Pedagogía del Juego, Rincones y Psicomotricidad', themes: [25, 26, 27, 28, 29, 30] },
  9: { name: 'Casos Reales, Convivencia y Familia', themes: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] }
};

export function getThematicBlockForTopic(topicNumber: number): number[] {
  for (const block of Object.values(THEME_BLOCKS)) {
    if (block.themes.includes(topicNumber)) {
      return block.themes;
    }
  }
  // Default fallback to nearby topics
  const start = Math.max(1, topicNumber - 2);
  const end = Math.min(40, topicNumber + 2);
  const range: number[] = [];
  for (let i = start; i <= end; i++) range.push(i);
  return range;
}
