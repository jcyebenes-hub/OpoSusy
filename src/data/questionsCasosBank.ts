import { Question } from '../types';

export const BANCO_CASOS_EXPANDED: Question[] = [
  // --- TEMA 31: RESOLUCIÓN DE CONFLICTOS ENTRE IGUALES ---
  {
    id: "CAS-T31-005",
    tema: 31,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Dos niños de 2 años forcejean y lloran por un mismo camión de juguete. ¿Cuál es la intervención pedagógica adecuada de la monitora?",
    opciones: {
      A: "Quitar el juguete enfadada y gritarles que se van al rincón de pensar",
      B: "Agacharse a su altura visual, mediar con voz serena, validar el deseo de ambos ('sé que los dos queréis el camión') y ofrecer una alternativa o turno pactado",
      C: "Dejar que se peleen a golpes para que aprendan a defenderse solos",
      D: "Obligar a uno de ellos a pedir perdón aunque no sepa por qué"
    },
    correcta: "B",
    explicacion: "En 0-3 años los niños están en fase egocéntrica y carecen de habilidades de negociación verbal maduras; la monitora actúa de mediadora empática, nombrando emociones y ofreciendo alternativas viables.",
    referencia: "Tema 31 - Mediación de conflictos en educación infantil"
  },

  // --- TEMA 32: GESTIÓN DE MORDEDURAS EN EL AULA ---
  {
    id: "CAS-T32-006",
    tema: 32,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Un niño de 18 meses muerde en el brazo a un compañero durante el juego libre. ¿Cuál es el orden cronológico prioritario de actuación de la monitora?",
    opciones: {
      A: "Castigar al mordedor en el pasillo y llamar por teléfono a sus padres antes de mirar a la víctima",
      B: "Atender, calmar y curar primero al niño mordido (limpieza con agua y jabón, frío local), y después contener y reconducir con firmeza y calma al niño que mordió sin etiquetarlo",
      C: "Morder al niño para que experimente lo que duele",
      D: "Ocultar la mordedura a los padres para que no haya quejas"
    },
    correcta: "B",
    explicacion: "El protocolo pedagógico y sanitario ante mordeduras prioriza siempre el consuelo y la atención física de la víctima (lavado con agua y jabón, frío local). Al agresor se le dice 'no mordemos, morder hace daño' de forma clara pero sin agresión física ni humillación.",
    referencia: "Tema 32 - Protocolo de actuación ante mordeduras en el aula infantil"
  },
  {
    id: "CAS-T32-007",
    tema: 32,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Por qué se producen mordeduras con frecuencia en la etapa de 1 a 2 años de edad?",
    opciones: {
      A: "Porque los niños son malvados por naturaleza",
      B: "Por inmadurez del lenguaje verbal para expresar frustración o cansancio, sobreestimulación sensorial o erupción dental",
      C: "Porque ven películas de terror en la escuela infantil",
      D: "Porque el centro escolar carece de licencia municipal"
    },
    correcta: "B",
    explicacion: "Las mordeduras en 1-2 años son una manifestación conductual evolutiva común debida a la falta de vocabulario para expresar deseos o frustración, sobreestimulación, o necesidad de descarga motriz.",
    referencia: "Tema 32 - Factores evolutivos y emocionales de la mordedura"
  },

  // --- TEMA 33: GESTIÓN DE RABIETAS Y EDUCACIÓN EMOCIONAL ---
  {
    id: "CAS-T33-003",
    tema: 33,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Ante una rabieta de desbordamiento emocional en un alumno de 2 años que se tira al suelo gritando al no poder llevarse un objeto peligroso, la monitora debe:",
    opciones: {
      A: "Gritar más fuerte que el niño y amenazarle con que viene la policía",
      B: "Ceder inmediatamente y darle el objeto peligroso para que se calle",
      C: "Acompañar con presencia calmada, garantizar su seguridad física frente a golpes, validar su frustración y esperar a que baje la activación para ofrecer consuelo",
      D: "Echarle un cubo de agua fría en la cara"
    },
    correcta: "C",
    explicacion: "Durante una rabieta el cerebro emocional del niño está desbordado; el adulto debe actuar de 'corteza prefrontal externa', manteniendo la calma, sosteniendo el límite por seguridad y ofreciendo presencia afectiva sin juzgar.",
    referencia: "Tema 33 - Acompañamiento respetuoso de las rabietas en 0-3 años"
  },

  // --- TEMA 34: RELACIÓN FAMILIA-ESCUELA ---
  {
    id: "CAS-T34-003",
    tema: 34,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En la comunicación cotidiana de la monitora infantil con las familias en los momentos de entrada y salida, la información compartida debe ser:",
    opciones: {
      A: "Exclusivamente una lista de quejas de todo lo que el niño hizo mal",
      B: "Clara, cercana, bidireccional y objetiva sobre el bienestar del menor (sueño, alimentación, deposiciones, vivencias positivas y estado anímico)",
      C: "Inexistente, no se debe hablar nunca con los padres",
      D: "Cobrada en metálico a cada familia"
    },
    correcta: "B",
    explicacion: "La comunicación diaria en el intercambio de entrada y salida consolida la confianza mutua y la coherencia educativa entre familia y escuela infantil.",
    referencia: "Tema 34 - Canales de comunicación diaria con las familias"
  },

  // --- TEMA 35: ESCUELA DE PADRES Y PARENTALIDAD POSITIVA ---
  {
    id: "CAS-T35-003",
    tema: 35,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Organización Mundial de la Salud (OMS) y la Asociación Española de Pediatría recomiendan respecto al uso de pantallas digitales (móviles, tablets, televisión) en menores de 2 años:",
    opciones: {
      A: "Uso ilimitado de 5 horas diarias para que aprendan idiomas",
      B: "Cero pantallas (evitar completamente la exposición a pantallas)",
      C: "Solo antes de dormir en la cuna",
      D: "Pantallas 3D obligatorias para estimular la visión"
    },
    correcta: "B",
    explicacion: "Las directrices pediátricas y de la OMS recomiendan evitar por completo la exposición a pantallas digitales antes de los 2 años por el impacto perjudicial en el sueño, lenguaje y desarrollo cerebral.",
    referencia: "Tema 35 - Salud digital y recomendaciones pediátricas sobre pantallas"
  },

  // --- TEMA 36: TRABAJO EN EQUIPO Y COORDINACIÓN ---
  {
    id: "CAS-T36-002",
    tema: 36,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál es el rol de la Monitora Infantil de Educación en relación con la Maestra/Educadora tutora del aula en la escuela infantil municipal?",
    opciones: {
      A: "Trabajar de espaldas a la educadora sin comunicarse en todo el año",
      B: "Colaboración corresponsable y activa en la aplicación de las actividades pedagógicas, cuidado, atención asistencial y observación sistemática del alumnado",
      C: "Asumir las funciones de la Dirección Municipal de Recursos Humanos",
      D: "Sustituir al Alcalde en las ruedas de prensa"
    },
    correcta: "B",
    explicacion: "El trabajo en la escuela infantil es colegiado e interdisciplinar: monitoras y educadoras forman un equipo complementario para asegurar la atención integral y el desarrollo de los proyectos de aula.",
    referencia: "Tema 36 - Trabajo cooperativo e interdisciplinar en la escuela infantil"
  },

  // --- TEMA 37: COORDINACIÓN CON SERVICIOS SOCIALES (SANT JOAN) ---
  {
    id: "CAS-T37-002",
    tema: 37,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Ante reiterados signos de descuido higiénico severo, desnutrición o absentismo continuado no justificado en un menor matriculado en la escuela infantil municipal de Sant Joan d'Alacant, el centro debe:",
    opciones: {
      A: "Ignorar la situación para no ofender a los vecinos",
      B: "Activar el protocolo de coordinación municipal remitiendo informe técnico motivado al área de Servicios Sociales y Familia del Ayuntamiento de Sant Joan d'Alacant",
      C: "Publicar los nombres de la familia en las redes sociales",
      D: "Expulsar al niño inmediatamente"
    },
    correcta: "B",
    explicacion: "La coordinación interinstitucional entre el centro educativo infantil y los Servicios Sociales municipales garantiza la intervención preventiva temprana en situaciones de desprotección o riesgo social.",
    referencia: "Tema 37 - Coordinación con Servicios Sociales Municipales de Sant Joan"
  },

  // --- TEMA 38: SALIDAS Y ACTIVIDADES EN EL ENTORNO LOCAL ---
  {
    id: "CAS-T38-002",
    tema: 38,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Para realizar una salida pedagógica con el grupo de 2-3 años a la Biblioteca Municipal o al Parque Municipal de Sant Joan d'Alacant, es requisito preceptivo e inexcusable:",
    opciones: {
      A: "Contar con la autorización expresa y firmada de los representantes legales de cada menor y reforzar la ratio de acompañantes adultos",
      B: "Que no haya ningún adulto acompañante para fomentar la autonomía",
      C: "Hacer la excursión a medianoche",
      D: "Pedir permiso a las Cortes Generales"
    },
    correcta: "A",
    explicacion: "Cualquier salida del recinto escolar requiere autorización parental por escrito, planificación de seguridad, chalecos identificativos y el incremento de la ratio de adultos por grupo para garantizar la vigilancia constante.",
    referencia: "Tema 38 - Salidas escolares: Protocolo de seguridad y autorizaciones"
  },

  // --- TEMA 39: EVALUACIÓN EN EDUCACIÓN INFANTIL ---
  {
    id: "CAS-T39-002",
    tema: 39,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La evaluación en el primer ciclo de Educación Infantil (0-3 años) tiene un carácter:",
    opciones: {
      A: "Calificativo numérico del 0 al 10 con exámenes selectivos",
      B: "Global, continua, formativa y basada en la observación directa y sistemática de los procesos de aprendizaje y desarrollo",
      C: "Sancionador y eliminatorio",
      D: "Inútil e innecesario"
    },
    correcta: "B",
    explicacion: "La normativa educativa establece que en la etapa infantil la evaluación es cualitativa, formativa y continua; no busca juzgar o clasificar al niño, sino orientar la labor educativa y detectar necesidades a tiempo.",
    referencia: "Tema 39 - Características de la evaluación en educación infantil"
  },

  // --- TEMA 40: DEBER DE SECRETO Y CÓDIGO ÉTICO (SANT JOAN D'ALACANT) ---
  {
    id: "CAS-T40-003",
    tema: 40,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Una vecina del municipio de Sant Joan d'Alacant pregunta a la monitora en una cafetería local sobre la situación familiar de un alumno del aula. ¿Cómo debe responder la monitora?",
    opciones: {
      A: "Contarle todos los detalles íntimos de la familia porque es su amiga",
      B: "Negarse educadamente a facilitar cualquier dato, recordando que como empleada pública está sujeta al deber legal de secreto y confidencialidad profesional (art. 53.12 TREBEP)",
      C: "Cobrarle 10 euros por cada información que revele",
      D: "Enviarle fotos del expediente del menor por WhatsApp"
    },
    correcta: "B",
    explicacion: "El artículo 53.12 del TREBEP y la LOPDGDD imponen al empleado público la obligación estricta de confidencialidad y sigilo sobre los datos personales y familiares conocidos por razón de su puesto de trabajo.",
    referencia: "Tema 40 - TREBEP art. 53.12: Deber de secreto y confidencialidad"
  }
];
