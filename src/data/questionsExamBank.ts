import { Question } from '../types';
import { PREGUNTAS_EXAM_TEMA_01 } from './questionsTema01';
import { PREGUNTAS_EXAM_TEMA_02 } from './questionsTema02';

/**
 * BANCO EXAMINADOR (en construcción): preguntas de tipo examinador por temas.
 * Se irá completando tema a tema (mínimo 50 por tema) para el examen oficial.
 */
export const BANCO_EXAM: Question[] = [
  ...PREGUNTAS_EXAM_TEMA_01,
  ...PREGUNTAS_EXAM_TEMA_02,
];
