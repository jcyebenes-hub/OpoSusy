import { Question } from '../types';

/**
 * BANCO EXAMINADOR — TEMA 2
 * Estatuto de Autonomía de la Comunitat Valenciana (LO 1/2006), Título III:
 * Las instituciones de la Generalitat (Les Corts, President, Consell,
 * Síndic de Greuges, Sindicatura de Comptes y demás instituciones).
 * 50 preguntas de tipo examinador (test, 4 opciones).
 */
export const PREGUNTAS_EXAM_TEMA_02: Question[] = [
  {
    id: "T02-101",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El Estatuto de Autonomía de la Comunitat Valenciana vigente fue aprobado por:",
    opciones: {
      A: "Ley Orgánica 5/1982, de 1 de julio",
      B: "Ley Orgánica 1/2006, de 10 de abril",
      C: "Ley Orgánica 8/2008, de 22 de diciembre",
      D: "Real Decreto Legislativo 7/1995"
    },
    correcta: "B",
    explicacion: "El Estatuto de Autonomía de la Comunitat Valenciana vigente es la LO 1/2006, de 10 de abril, que sustituyó a la LO 5/1982 (de 1 de julio), que fue el primer Estatuto de la Comunitat. La revisión se tramitó con arreglo al art. 154 CE.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: LO 1/2006"
  },
  {
    id: "T02-102",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "La Comunitat Valenciana se compone de las provincias de:",
    opciones: {
      A: "Alacant, Castelló i València",
      B: "Alacant, València i Terol",
      C: "Castelló, València i Lleida",
      D: "Alacant, Castelló, València i Elx"
    },
    correcta: "A",
    explicacion: "El Estatuto de Autonomía (LO 1/2006) reconoce la Comunitat Valenciana integrada por las provincias de Alacant, Castelló y València, en el marco de la unidad indisoluble de la Nación española (art. 2 CE).",
    referencia: "Tema 2 - Estatuto de Autonomía CV: delimitación territorial"
  },
  {
    id: "T02-103",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El valenciano es, según el Estatuto de Autonomía de la Comunitat Valenciana:",
    opciones: {
      A: "La lengua propia de la Generalitat",
      B: "Una lengua en peligro de extinción",
      C: "La única lengua oficial de la Comunitat",
      D: "Una lengua cooficial solo en la ciudad de València"
    },
    correcta: "A",
    explicacion: "El Estatuto de Autonomía de la Comunitat Valenciana establece que el valenciano es la lengua propia de la Generalitat, y que el valenciano y el castellano son lenguas cooficiales en la Comunitat, conforme al art. 3.1 CE.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: lenguas"
  },
  {
    id: "T02-104",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "¿Cuáles son las lenguas cooficiales en la Comunitat Valenciana?",
    opciones: {
      A: "El valenciano y el castellano",
      B: "El valenciano y el catalán",
      C: "El castellano y el catalán",
      D: "El valenciano, el castellano y el aranés"
    },
    correcta: "A",
    explicacion: "Según el art. 3.1 CE y el Estatuto de Autonomía de la Comunitat Valenciana, son lenguas cooficiales el castellano y el valenciano. El aranés es cooficial únicamente en el Valle de Arán (art. 7.3 CE).",
    referencia: "Tema 2 - Estatuto de Autonomía CV: arts. 3.1 CE y Estatuto"
  },
  {
    id: "T02-105",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el Estatuto de Autonomía de la Comunitat Valenciana, todas las personas tienen derecho a:",
    opciones: {
      A: "Utilizar exclusivamente el valenciano ante las instituciones",
      B: "Utilizar el valenciano o el castellano en sus relaciones con las instituciones de la Generalitat",
      C: "Elegir libremente cualquier lengua de la UE",
      D: "Ser atendidas únicamente en su lengua materna"
    },
    correcta: "B",
    explicacion: "El Estatuto garantiza a todas las personas el derecho a utilizar el valenciano o el castellano en sus relaciones con las instituciones de la Generalitat y sus entidades públicas, y el deber de conocimiento de ambas lenguas.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: uso de las lenguas"
  },
  {
    id: "T02-106",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Estatuto de Autonomía de la Comunitat Valenciana prevé el uso del valenciano en el sistema educativo:",
    opciones: {
      A: "De forma exclusiva",
      B: "En el marco fijado por el Tribunal Constitucional",
      C: "Solo en las escuelas públicas",
      D: "Únicamente como asignatura optativa"
    },
    correcta: "B",
    explicacion: "El Estatuto de la Comunitat Valenciana remite el uso del valenciano en el sistema educativo al marco establecido por el Tribunal Constitucional (STC 1/1984), que exige el respeto al uso del castellano como lengua de instrucción y de convivencia en las aulas.",
    referencia: "Tema 2 - Estatuto de Autonomía CV y STC 1/1984"
  },
  {
    id: "T02-107",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "¿Qué figura representa a la ciudadanía de la Comunitat Valenciana y ejerce la potestad legislativa valenciana?",
    opciones: {
      A: "El Consell de la Generalitat",
      B: "Les Corts Valencianes",
      C: "La Acadèmia Valenciana de la Llengua",
      D: "El Consell Jurídic Consultiu"
    },
    correcta: "B",
    explicacion: "Les Corts Valencianes son la representación de la ciudadanía de la Comunitat Valenciana y ejercen la potestad legislativa de la Comunitat, la aprobación de los presupuestos, y el control de la acción del Consell (Título III del Estatuto).",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Título III, Capítulo I"
  },
  {
    id: "T02-108",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Los diputados de Les Corts Valencianes son elegidos:",
    opciones: {
      A: "Por el Consell de la Generalitat",
      B: "Por sufragio universal, libre, igual, directo y secreto",
      C: "Por designación de los ayuntamientos",
      D: "Por sorteo entre personas mayores de 21 años"
    },
    correcta: "B",
    explicacion: "Los diputados de Les Corts Valencianes son elegidos por sufragio universal, libre, igual, directo y secreto, mediante un sistema proporcional (regla de D'Hondt), en circunscripciones provinciales, conforme a lo establecido en el Estatuto y la ley electoral valenciana.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-109",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El número de diputados de Les Corts Valencianes se determina:",
    opciones: {
      A: "Por el Consell de la Generalitat",
      B: "Por la ley de la Comunitat Valenciana",
      C: "Por el Tribunal Constitucional",
      D: "Por el Gobierno de la Nación"
    },
    correcta: "B",
    explicacion: "El Estatuto de Autonomía de la Comunitat Valenciana establece que el número de diputados se fijará por ley, que actualmente es de 99. El Estatuto no fija un número concreto, sino que remite a la ley electoral valenciana.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-110",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "La duración de la legislatura de Les Corts Valencianes es de:",
    opciones: {
      A: "Tres años",
      B: "Cuatro años",
      C: "Cinco años",
      D: "Seis años"
    },
    correcta: "B",
    explicacion: "La duración de la legislatura de Les Corts Valencianes es de cuatro años, coincidiendo con la de las Cortes Generales, salvo disolución anticipada por el President de la Generalitat.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-111",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El President de Les Corts Valencianes es elegido:",
    opciones: {
      A: "Por el President de la Generalitat",
      B: "Entre sus miembros, por mayoría absoluta de los diputados",
      C: "Por el Rey",
      D: "Por sorteo entre los diputados más antiguos"
    },
    correcta: "B",
    explicacion: "El President de Les Corts Valencianes es elegido entre sus miembros, por mayoría absoluta de los diputados que la componen. Preside la cámara y representa a Les Corts.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-112",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el Estatuto, los diputados de Les Corts Valencianes:",
    opciones: {
      A: "Son responsables por sus votos y opiniones",
      B: "Son representantes de toda la Comunitat y no estarán sujetos a mandato imperativo",
      C: "Representan exclusivamente a su circunscripción",
      D: "Pueden ser retirados por su partido en cualquier momento"
    },
    correcta: "B",
    explicacion: "Los diputados de Les Corts Valencianes son representantes de toda la Comunitat Valenciana y no estarán sujetos a mandato imperativo alguno, al igual que los diputados del Congreso (art. 68.1 CE aplicado por analogía estatutaria).",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-113",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál de las siguientes NO es una función de Les Corts Valencianes?",
    opciones: {
      A: "El ejercicio de la potestad legislativa de la Comunitat",
      B: "El control de la acción del Consell",
      C: "La aprobación de los presupuestos de la Generalitat",
      D: "El nombramiento de jueces y magistrados"
    },
    correcta: "D",
    explicacion: "El nombramiento de jueces y magistrados corresponde al Consejo General del Poder Judicial (art. 122.1 CE). Les Corts ejercen la potestad legislativa, el control del Consell y la aprobación de los presupuestos.",
    referencia: "Tema 2 - Estatuto de Autonomía CV y art. 122.1 CE"
  },
  {
    id: "T02-114",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Les Corts Valencianes organizan su trabajo a través de:",
    opciones: {
      A: "Comisiones permanentes y el Pleno",
      B: "Subcomisiones del Consell",
      C: "Juntas de portavoces de los ayuntamientos",
      D: "Consejos sectoriales autonómicos"
    },
    correcta: "A",
    explicacion: "Les Corts Valencianes organizan su trabajo a través de comisiones permanentes y de la sesión plenaria, conforme a su Reglamento interno aprobado por la cámara.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-115",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Reglamento de Les Corts Valencianes es aprobado:",
    opciones: {
      A: "Por el Consell de la Generalitat",
      B: "Por Les Corts Valencianes",
      C: "Por el Tribunal Constitucional",
      D: "Por ley orgánica del Estado"
    },
    correcta: "B",
    explicacion: "El Reglamento de Les Corts Valencianes es aprobado por la propia cámara, con la mayoría que establezca su propio texto reglamentario. Es la norma interna de organización y funcionamiento de la cámara.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-116",
    tema: 2,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "El Síndic de Greuges de la Generalitat es:",
    opciones: {
      A: "El alto comisionado de Les Corts para la defensa de los derechos reconocidos en la Constitución y en el Estatuto",
      B: "El fiscal general de la Comunitat",
      C: "El defensor del pueblo estatal",
      D: "El presidente del Consell Jurídic Consultiu"
    },
    correcta: "A",
    explicacion: "El Síndic de Greuges es el alto comisionado de Les Corts Valencianes para la defensa de los derechos y libertades reconocidos en la Constitución y en el Estatuto, frente a la Generalitat y sus entidades públicas. Es la institución autonómica equivalente al Defensor del Pueblo.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-117",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Síndic de Greuges de la Generalitat es designado:",
    opciones: {
      A: "Por el Consell de la Generalitat",
      B: "Por Les Corts Valencianes",
      C: "Por el Tribunal Superior de Justicia",
      D: "Por el Gobierno de la Nación"
    },
    correcta: "B",
    explicacion: "El Síndic de Greuges es designado por Les Corts Valencianes, que son la cámara a la que pertenece. Su mandato tiene una duración de 6 años, y no puede ser reelegido.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-118",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Sindicatura de Comptes de la Comunitat Valenciana es:",
    opciones: {
      A: "El órgano de fiscalización externa del sector público de la Generalitat",
      B: "El tribunal de cuentas estatal",
      C: "Una comisión de Les Corts",
      D: "El órgano de contratación de la Generalitat"
    },
    correcta: "A",
    explicacion: "La Sindicatura de Comptes es el órgano de fiscalización externa de las cuentas y de la gestión económico-financiera del sector público de la Generalitat. Sus informes son remitidos a Les Corts Valencianes.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-119",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Los informes de la Sindicatura de Comptes son remitidos a:",
    opciones: {
      A: "Al Gobierno de la Nación",
      B: "A Les Corts Valencianes",
      C: "Al Tribunal de Cuentas estatal",
      D: "Al Consell Jurídic Consultiu"
    },
    correcta: "B",
    explicacion: "Los informes de la Sindicatura de Comptes son remitidos a Les Corts Valencianes, que es la cámara a la que rinde cuentas. La Sindicatura actúa con independencia frente al Consell.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-120",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Consell Valencià de Cultura es:",
    opciones: {
      A: "Un órgano consultivo de la Generalitat en materia cultural y lingüística",
      B: "El máximo órgano legislativo de la Comunitat",
      C: "Un tribunal de justicia especializado",
      D: "La agencia de financiación de la Generalitat"
    },
    correcta: "A",
    explicacion: "El Consell Valencià de Cultura es un órgano consultivo de la Generalitat en materia de cultura y lengua valenciana. Emite informes y propuestas, pero no tiene potestad normativa ni de decisión.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-121",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Acadèmia Valenciana de la Llengua (AVL) es:",
    opciones: {
      A: "El órgano competente para la normalización lingüística del valenciano",
      B: "Un partido político",
      C: "Una asociación de profesores de lengua",
      D: "El órgano de censura lingüística del Estado"
    },
    correcta: "A",
    explicacion: "La Acadèmia Valenciana de la Llengua (AVL) es el órgano competente para la normalización lingüística del valenciano, sustituyendo al Institut Valencià de la Llengua (IVL). Su función es fijar la norma lingüística del valenciano.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: AVL"
  },
  {
    id: "T02-122",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Consell Jurídic Consultiu de la Generalitat es:",
    opciones: {
      A: "El máximo órgano consultivo en materia jurídica de la Generalitat",
      B: "El tribunal supremo de la Comunitat",
      C: "El fiscal general autonómico",
      D: "La asesoría de Les Corts"
    },
    correcta: "A",
    explicacion: "El Consell Jurídic Consultiu es el máximo órgano consultivo en materia jurídica de la Generalitat. Emite dictámenes sobre proyectos normativos y cuestiones jurídicas planteadas por la Administración autonómica.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-123",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál de los siguientes NO es una institución del Título III del Estatuto de Autonomía de la Comunitat Valenciana?",
    opciones: {
      A: "Les Corts Valencianes",
      B: "El President de la Generalitat",
      C: "El Tribunal Constitucional",
      D: "El Consell de la Generalitat"
    },
    correcta: "C",
    explicacion: "El Tribunal Constitucional es un órgano del Estado (art. 159 CE), no una institución autonómica. El Título III del Estatuto regula: Les Corts, el President, el Consell, el Síndic de Greuges, la Sindicatura de Comptes, el CVC, la AVL, el Consell Jurídic Consultiu y el Consell Econòmic i Social.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Título III"
  },
  {
    id: "T02-124",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El President de la Generalitat es elegido:",
    opciones: {
      A: "Por el Consell de la Generalitat",
      B: "Por Les Corts Valencianes, entre sus miembros",
      C: "Por referéndum popular",
      D: "Por el Rey, directamente"
    },
    correcta: "B",
    explicacion: "El President de la Generalitat es elegido por Les Corts Valencianes, entre sus miembros, por mayoría absoluta de los diputados. Una vez elegido, es nombrado formalmente por el Rey.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo II"
  },
  {
    id: "T02-125",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El President de la Generalitat es:",
    opciones: {
      A: "La más alta representación de la Comunitat Valenciana y la representación ordinaria del Estado en la Comunitat",
      B: "El jefe del Estado",
      C: "El fiscal general de la Comunitat",
      D: "El presidente del Tribunal Superior de Justicia"
    },
    correcta: "A",
    explicacion: "El Estatuto establece que el President de la Generalitat es la más alta representación de la Comunitat Valenciana y la representación ordinaria del Estado en la Comunitat, al igual que el Presidente del Gobierno lo es a nivel estatal.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo II"
  },
  {
    id: "T02-126",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El President de la Generalitat dirige:",
    opciones: {
      A: "La política general del Consell",
      B: "Las Cortes Valencianes",
      C: "El Tribunal Constitucional",
      D: "La Fiscalía autonómica"
    },
    correcta: "A",
    explicacion: "El President de la Generalitat dirige la política general del Consell de la Generalitat, que es el órgano de gobierno de la Comunitat. No dirige Les Corts (que se autoorganizan) ni ningún órgano del Estado.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo II"
  },
  {
    id: "T02-127",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La duración del mandato del President de la Generalitat es de:",
    opciones: {
      A: "Tres años",
      B: "Cuatro años",
      C: "Cinco años",
      D: "Seis años"
    },
    correcta: "B",
    explicacion: "El mandato del President de la Generalitat coincide con la duración de la legislatura de Les Corts Valencianes, que es de cuatro años. Puede ser cesado mediante moción de censura o renuncia.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo II"
  },
  {
    id: "T02-128",
    tema: 2,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "El President de la Generalitat puede ser cesado:",
    opciones: {
      A: "Por moción de censura aprobada por Les Corts Valencianes",
      B: "Por el Rey en cualquier momento",
      C: "Por el Tribunal Constitucional",
      D: "Por el Consell Jurídic Consultiu"
    },
    correcta: "A",
    explicacion: "El President de la Generalitat puede ser cesado mediante moción de censura aprobada por Les Corts Valencianes, por renuncia voluntaria, o por causa de incapacidad. El cese por moción de censura es la vía política principal.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo II"
  },
  {
    id: "T02-129",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "En el ejercicio de sus funciones, el President de la Generalitat es responsable ante:",
    opciones: {
      A: "Les Corts Valencianes",
      B: "El Tribunal Constitucional",
      C: "El Gobierno de la Nación",
      D: "Los ayuntamientos de la Comunitat"
    },
    correcta: "A",
    explicacion: "El President de la Generalitat es responsable ante Les Corts Valencianes en el ejercicio de sus funciones. Puede ser forzada su responsabilidad política mediante moción de censura.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo II"
  },
  {
    id: "T02-130",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Consell de la Generalitat está integrado por:",
    opciones: {
      A: "El President, los Vicepresidents y los Consellers",
      B: "El President y 12 consellers fijos",
      C: "El President, los alcaldes de las capitales y los consellers",
      D: "Solo los miembros del Gobierno de la Nación delegados en la Comunitat"
    },
    correcta: "A",
    explicacion: "El Consell de la Generalitat es el órgano de gobierno de la Comunitat, integrado por el President, los Vicepresidents y los Consellers. Es un órgano colegiado ejecutivo y reglamentario.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo III"
  },
  {
    id: "T02-131",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Los Consellers del Consell de la Generalitat son nombrados:",
    opciones: {
      A: "Por Les Corts Valencianes",
      B: "Por el President de la Generalitat",
      C: "Por el Rey",
      D: "Por el Tribunal Superior de Justicia"
    },
    correcta: "B",
    explicacion: "Los Consellers son nombrados y cesados por el President de la Generalitat. No requieren aprobación de Les Corts para su nombramiento, aunque responden políticamente ante la cámara.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo III"
  },
  {
    id: "T02-132",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Consell de la Generalitat ejerce:",
    opciones: {
      A: "La potestad ejecutiva y reglamentaria de la Comunitat",
      B: "La potestad legislativa de la Comunitat",
      C: "La potestad judicial de la Comunitat",
      D: "La representación internacional exclusiva de España"
    },
    correcta: "A",
    explicacion: "El Consell de la Generalitat es el órgano colegiado que ejerce la potestad ejecutiva y reglamentaria de la Comunitat Valenciana. No ejerce la potestad legislativa (Les Corts) ni la judicial (Tribunales).",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo III"
  },
  {
    id: "T02-133",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Consell de la Generalitat dicta:",
    opciones: {
      A: "Decretos legislativos y normativos para desarrollar la ley",
      B: "Leyes orgánicas",
      C: "Sentencias judiciales",
      D: "Reglamentos del Congreso de los Diputados"
    },
    correcta: "A",
    explicacion: "El Consell de la Generalitat dicta decretos legislativos y normativos para desarrollar la ley autonómica, en el marco de la potestad reglamentaria que le reconoce el Estatuto. No dicta leyes (Les Corts) ni sentencias (Tribunales).",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo III"
  },
  {
    id: "T02-134",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Los Vicepresidents de la Generalitat son nombrados:",
    opciones: {
      A: "Por Les Corts Valencianes",
      B: "Por el President de la Generalitat",
      C: "Por el Gobierno de la Nación",
      D: "Por el Tribunal Constitucional"
    },
    correcta: "B",
    explicacion: "Los Vicepresidents de la Generalitat son nombrados y cesados por el President de la Generalitat, igual que los Consellers. Integran el Consell como miembros de pleno derecho.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo III"
  },
  {
    id: "T02-135",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El President de la Generalitat informa a Les Corts Valencianes:",
    opciones: {
      A: "De la política general del Consell",
      B: "De las cuentas particulares de su partido",
      C: "De las decisiones del Tribunal Constitucional",
      D: "De las elecciones municipales"
    },
    correcta: "A",
    explicacion: "El President de la Generalitat informa a Les Corts Valencianes de la política general del Consell, en particular al inicio de cada legislatura y cuando lo considere oportuno, como mecanismo de control político.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulos II y III"
  },
  {
    id: "T02-136",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "La bandera de la Comunitat Valenciana es:",
    opciones: {
      A: "La Senyera, con cuatro barras rojas sobre campo de oro",
      B: "La bandera de España",
      C: "Una bandera verde y blanca",
      D: "La bandera de la Unión Europea"
    },
    correcta: "A",
    explicacion: "La bandera de la Comunitat Valenciana es la Senyera, que consta de cuatro barras rojas horizontales sobre campo de oro (amarillo). Es el símbolo más representativo de la identidad valenciana.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: símbolos"
  },
  {
    id: "T02-137",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El himno de la Comunitat Valenciana es:",
    opciones: {
      A: "El «Himne de l'Exposició Universal de 1908»",
      B: "El «Himno de Riego»",
      C: "La «Marsellesa»",
      D: "El «Cancionero de la Marina»"
    },
    correcta: "A",
    explicacion: "El himno de la Comunitat Valenciana es el «Himne de l'Exposició Universal de 1908», con música de José Serradell y letra de Adrià Gual. Fue aprobado como himno oficial de la Comunitat por la ley autonómica correspondiente.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: símbolos"
  },
  {
    id: "T02-138",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La sede de las instituciones de la Generalitat es:",
    opciones: {
      A: "La ciudad de València",
      B: "Alicante",
      C: "Castelló de la Plana",
      D: "Madrid"
    },
    correcta: "A",
    explicacion: "La sede de las instituciones de la Generalitat está en la ciudad de València, capital de la Comunitat Valenciana. Les Corts se reúnen en el Palacio de les Corts y el Consell en el Palau de la Generalitat.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: sede institucional"
  },
  {
    id: "T02-139",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La naturaleza normativa del Estatuto de Autonomía de la Comunitat Valenciana es:",
    opciones: {
      A: "Es la ley orgánica de organización del autogobierno de la Comunitat",
      B: "Es una ley ordinaria del Estado",
      C: "Es un decreto ley autonómico",
      D: "Es una directiva europea"
    },
    correcta: "A",
    explicacion: "El Estatuto de Autonomía es una ley orgánica (art. 147 CE) que organiza el autogobierno de la Comunidad Autónoma. Está por encima de la legislación ordinaria autonómica y por debajo de la Constitución y las leyes orgánicas estatales.",
    referencia: "Tema 2 - Estatuto de Autonomía CV y art. 147 CE"
  },
  {
    id: "T02-140",
    tema: 2,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "El Estatuto de Autonomía de la Comunitat Valenciana puede ser revisado:",
    opciones: {
      A: "Conforme al procedimiento del art. 154 CE o al que establezca el propio Estatuto",
      B: "Por simple decreto del Consell",
      C: "Únicamente por referéndum popular",
      D: "Nunca, es irreversible"
    },
    correcta: "A",
    explicacion: "El art. 154 CE establece que los Estatutos de Autonomía podrán ser revisados conforme al procedimiento previsto en el art. 147.3 CE (mayoría absoluta del Congreso y referéndum) o al que establezca el propio Estatuto. La LO 1/2006 se tramitó por el procedimiento del art. 154 CE.",
    referencia: "Tema 2 - Estatuto de Autonomía CV y arts. 147.3 y 154 CE"
  },
  {
    id: "T02-141",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Comunitat Valenciana, en el marco de la unidad indisoluble de la Nación española, tiene derecho a:",
    opciones: {
      A: "La autonomía para la gestión plena de sus intereses",
      B: "La separación del Estado español",
      C: "La formación de un Estado federal",
      D: "La soberanía exclusiva sobre su territorio"
    },
    correcta: "A",
    explicacion: "El Estatuto de la Comunitat Valenciana, en el marco del art. 2 CE, reconoce el derecho de la Comunitat a la autonomía para la gestión plena de sus intereses, sin menoscabo de la unidad indisoluble de la Nación española.",
    referencia: "Tema 2 - Estatuto de Autonomía CV y art. 2 CE"
  },
  {
    id: "T02-142",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El Consell Econòmic i Social de la Comunitat Valenciana es:",
    opciones: {
      A: "Un órgano consultivo en materia económica y social",
      B: "El banco central autonómico",
      C: "La policía autonómica",
      D: "El tribunal de cuentas de la Comunitat"
    },
    correcta: "A",
    explicacion: "El Consell Econòmic i Social es un órgano consultivo de la Generalitat en materia económica y social. Reúne a representantes de los agentes económicos y sociales para emitir informes y propuestas.",
    referencia: "Tema 2 - Estatuto de Autonomía CV, Capítulo I"
  },
  {
    id: "T02-143",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El valenciano y el castellano tienen, en la Comunitat Valenciana, el mismo rango de:",
    opciones: {
      A: "Cooficialidad",
      B: "Exclusividad",
      C: "Optatividad",
      D: "Prohibición"
    },
    correcta: "A",
    explicacion: "El valenciano y el castellano son lenguas cooficiales en la Comunitat Valenciana, con el mismo rango y la misma dignidad. Ninguna es superior a la otra y ambas son de uso obligatorio en las instituciones.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: lenguas"
  },
  {
    id: "T02-144",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Los poderes públicos de la Generalitat tienen el deber de:",
    opciones: {
      A: "Promover el conocimiento y el uso libre del valenciano y del castellano",
      B: "Prohibir el uso del castellano en las instituciones",
      C: "Imponer el valenciano como única lengua de trabajo",
      D: "Limitar el uso de ambas lenguas a los actos solemnes"
    },
    correcta: "A",
    explicacion: "El Estatuto de la Comunitat Valenciana establece el deber de los poderes públicos de promover el conocimiento y el uso libre tanto del valenciano como del castellano, garantizando el derecho de todos a utilizar ambas lenguas.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: lenguas"
  },
  {
    id: "T02-145",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El conocimiento del valenciano es:",
    opciones: {
      A: "Un deber de todos los ciudadanos de la Comunitat",
      B: "Obligatorio solo para los funcionarios",
      C: "Facultativo en todo caso",
      D: "Prohibido para los no nacidos en la Comunitat"
    },
    correcta: "A",
    explicacion: "El Estatuto de la Comunitat Valenciana establece que el conocimiento del valenciano es un deber de todos los ciudadanos de la Comunitat, en el marco del derecho a utilizar ambas lenguas cooficiales.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: lenguas"
  },
  {
    id: "T02-146",
    tema: 2,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "En caso de conflicto entre una ley autonómica valenciana y el Estatuto de Autonomía, prevalece:",
    opciones: {
      A: "El Estatuto de Autonomía",
      B: "La ley autonómica",
      C: "El decreto del Consell",
      D: "La costumbre administrativa"
    },
    correcta: "A",
    explicacion: "El Estatuto de Autonomía tiene rango de ley orgánica (art. 147 CE) y está por encima de la legislación ordinaria autonómica. Una ley autonómica que contravenga el Estatuto puede ser declarada inconstitucional o contraria al Estatuto por el Tribunal Constitucional.",
    referencia: "Tema 2 - Estatuto de Autonomía CV y art. 147 CE"
  },
  {
    id: "T02-147",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Las competencias de la Comunitat Valenciana se ejercen:",
    opciones: {
      A: "En el marco de la Constitución y de su Estatuto de Autonomía",
      B: "De forma soberana e independiente del Estado",
      C: "Únicamente con autorización del Gobierno central en cada caso",
      D: "Exclusivamente en materia de educación"
    },
    correcta: "A",
    explicacion: "Las competencias de la Comunitat Valenciana se ejercen en el marco de la Constitución Española y de su Estatuto de Autonomía (arts. 2, 147 y 148 CE). No existe soberanía autonómica, sino autonomía dentro del Estado de las Autonomías.",
    referencia: "Tema 2 - Estatuto de Autonomía CV y arts. 2, 147 y 148 CE"
  },
  {
    id: "T02-148",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Síndic de Greuges puede actuar a iniciativa propia o:",
    opciones: {
      A: "A petición de cualquier persona",
      B: "Solo a petición del Consell",
      C: "Exclusivamente por mandato judicial",
      D: "Solo en casos de interés económico"
    },
    correcta: "A",
    explicacion: "El Síndic de Greuges puede actuar a iniciativa propia o a petición de cualquier persona que considere vulnerados sus derechos frente a la Generalitat y sus entidades públicas. Es un derecho de acceso libre y gratuito.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: Síndic de Greuges"
  },
  {
    id: "T02-149",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Síndic de Greuges emite sus conclusiones en forma de:",
    opciones: {
      A: "Informes y recomendaciones a Les Corts",
      B: "Sentencias vinculantes",
      C: "Decretos ley",
      D: "Multas económicas"
    },
    correcta: "A",
    explicacion: "El Síndic de Greuges emite informes y recomendaciones a Les Corts Valencianes, que no son vinculantes para la Administración, pero tienen un fuerte peso político y moral. No tiene potestad sancionadora ni judicial.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: Síndic de Greuges"
  },
  {
    id: "T02-150",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El nombre oficial de la Comunidad Autónoma es:",
    opciones: {
      A: "Comunitat Valenciana",
      B: "Comunidad de Valencia",
      C: "Provincia de Valencia",
      D: "Región de Levante"
    },
    correcta: "A",
    explicacion: "El nombre oficial de la Comunidad Autónoma es «Comunitat Valenciana», conforme al art. 1 del Estatuto de Autonomía (LO 1/2006). El uso de «Valencian Community» es la traducción inglesa oficial.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: art. 1"
  }
];
