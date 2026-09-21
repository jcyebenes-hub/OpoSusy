export interface PuzzlePieceDefinition {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: 'general' | 'especifica' | 'supuestos' | 'especial';
  themeRange: number[]; // e.g. [1, 2, 3, 4]
  themeRangeLabel: string; // 'Temas 1 al 4'
  requirement: string;
  icon: string;
  flavorText: string;
}

export const PUZZLE_PIECES: PuzzlePieceDefinition[] = [
  {
    id: 'piece_1',
    number: 1,
    title: 'El Escudo de Sant Joan',
    subtitle: 'Bautismo de Fuego Oficial',
    category: 'especial',
    themeRange: [],
    themeRangeLabel: 'Cualquier tema',
    requirement: 'Completa cualquier test con nota de aprobado (>= 5.00)',
    icon: 'Shield',
    flavorText: 'Tu entrada formal en el proceso selectivo para la Plaza nº 204 de Monitora Infantil.'
  },
  {
    id: 'piece_2',
    number: 2,
    title: 'Pleno Constitucional',
    subtitle: 'Corona de los Derechos y Deberes',
    category: 'general',
    themeRange: [1, 2, 3, 4],
    themeRangeLabel: 'Temas 1 al 4 (Constitución Española)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 1 a 4',
    icon: 'Landmark',
    flavorText: 'Dominio absoluto de la Carta Magna, Corona, Cortes y Poder Judicial.'
  },
  {
    id: 'piece_3',
    number: 3,
    title: 'Estatuto de Oro',
    subtitle: 'Autonomía Valenciana Pura',
    category: 'general',
    themeRange: [5, 6],
    themeRangeLabel: 'Temas 5 y 6 (Estatut Comunitat Valenciana)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 5 y 6',
    icon: 'Flag',
    flavorText: 'Les Corts, el Consell, la Sindicatura de Greuges y competencias de la Generalitat.'
  },
  {
    id: 'piece_4',
    number: 4,
    title: 'Régimen Local Impecable',
    subtitle: 'El Corazón del Ayuntamiento',
    category: 'general',
    themeRange: [7, 8],
    themeRangeLabel: 'Temas 7 y 8 (Régimen Local y Ayto. Sant Joan)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 7 y 8',
    icon: 'Building2',
    flavorText: 'Organización municipal, Alcaldía, Pleno, Junta de Gobierno y competencias locales.'
  },
  {
    id: 'piece_5',
    number: 5,
    title: 'Maestra en Psicología Infantil',
    subtitle: 'Evolución 0-3 Años',
    category: 'especifica',
    themeRange: [9, 10, 11, 12],
    themeRangeLabel: 'Temas 9 al 12 (Desarrollo Infantil)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 9 a 12',
    icon: 'Baby',
    flavorText: 'Desarrollo psicomotor, cognitivo, afectivo, social y del lenguaje en primera infancia.'
  },
  {
    id: 'piece_6',
    number: 6,
    title: 'Guardiana de la Inclusión',
    subtitle: 'Atención a la Diversidad & ACNEAE',
    category: 'especifica',
    themeRange: [13, 14, 15, 16],
    themeRangeLabel: 'Temas 13 al 16 (Diversidad y Protección)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 13 a 16',
    icon: 'HeartHandshake',
    flavorText: 'Atención temprana, detección de necesidades educativas especiales y protección del menor.'
  },
  {
    id: 'piece_7',
    number: 7,
    title: 'Arquitecta del Aula Infantil',
    subtitle: 'Espacios, Tiempos y Proyecto Educativo',
    category: 'especifica',
    themeRange: [17, 18, 19, 20],
    themeRangeLabel: 'Temas 17 al 20 (Organización Escolar)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 17 a 20',
    icon: 'Shapes',
    flavorText: 'Diseño de ambientes de aprendizaje, rutinas cotidianas y programación pedagógica.'
  },
  {
    id: 'piece_8',
    number: 8,
    title: 'Salud y Primeros Auxilios',
    subtitle: 'Higiene, Nutrición y Emergencias',
    category: 'especifica',
    themeRange: [21, 22, 23, 24],
    themeRangeLabel: 'Temas 21 al 24 (Salud y Seguridad)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 21 a 24',
    icon: 'Cross',
    flavorText: 'Protocolos higiénico-sanitarios, menús infantiles, alergias alimentarias y actuación en accidentes.'
  },
  {
    id: 'piece_9',
    number: 9,
    title: 'Pedagogía del Juego y Talleres',
    subtitle: 'Creatividad, Música y Psicomotricidad',
    category: 'especifica',
    themeRange: [25, 26, 27, 28, 29, 30],
    themeRangeLabel: 'Temas 25 al 30 (Metodología Práctica)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 25 a 30',
    icon: 'Sparkles',
    flavorText: 'El juego como motor de aprendizaje, literatura infantil, expresión plástica y musical.'
  },
  {
    id: 'piece_10',
    number: 10,
    title: 'Experta en Supuestos Prácticos',
    subtitle: 'Resolución Técnica en Escuela Infantil',
    category: 'supuestos',
    themeRange: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    themeRangeLabel: 'Temas 31 al 40 (Casos Reales y Normativa)',
    requirement: 'Saca un 10.00 PERFECTO en un test de Temas 31 a 40',
    icon: 'CheckSquare',
    flavorText: 'Resolución rigurosa con marco normativo de los supuestos reales del Ejercicio 2.'
  },
  {
    id: 'piece_11',
    number: 11,
    title: 'Racha de Oro Tripartita',
    subtitle: 'Tres 10s Consecutivos sin Fallos',
    category: 'especial',
    themeRange: [],
    themeRangeLabel: 'Cualquier modo test',
    requirement: 'Consigue 3 tests consecutivos con puntuación de 10.00',
    icon: 'Zap',
    flavorText: 'Precisión militar y concentración de élite: 3 plenos de 10 seguidos sin fallar ni una pregunta.'
  },
  {
    id: 'piece_12',
    number: 12,
    title: 'La Corona del Simulacro',
    subtitle: 'Nota de Élite en Examen Oficial',
    category: 'especial',
    themeRange: [],
    themeRangeLabel: 'Simulacro Oficial (60 preguntas)',
    requirement: 'Obtén una nota de 9.00 o superior en el Simulacro Oficial',
    icon: 'Trophy',
    flavorText: 'Superación épica con fórmula de penalización oficial del Ayuntamiento de Sant Joan.'
  }
];

export const TOTAL_PUZZLE_PIECES = PUZZLE_PIECES.length;
