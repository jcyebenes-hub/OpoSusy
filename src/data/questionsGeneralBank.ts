import { Question } from '../types';

export const BANCO_GENERAL_EXPANDED: Question[] = [
  // --- TEMA 1: CONSTITUCIÓN ESPAÑOLA DE 1978 ---
  {
    id: "GEN-T01-003",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿En qué Título y Capítulo de la Constitución Española se regulan los derechos fundamentales y las libertades públicas susceptibles de recurso de amparo?",
    opciones: {
      A: "Título Preliminar",
      B: "Título I, Capítulo II, Sección 1.ª (artículos 15 al 29)",
      C: "Título I, Capítulo III (artículos 39 al 52)",
      D: "Título II, De la Corona"
    },
    correcta: "B",
    explicacion: "Los derechos fundamentales de la Sección 1.ª, Capítulo II, Título I (arts. 15 a 29 CE) y la objeción de conciencia (art. 30.2) son los únicos tutelables mediante recurso de amparo ante el Tribunal Constitucional (art. 53.2 CE).",
    referencia: "Constitución Española: art. 53.2 y arts. 15-29"
  },
  {
    id: "GEN-T01-004",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 14 de la Constitución Española, los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por razón de:",
    opciones: {
      A: "Nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social",
      B: "Nivel de renta económica exclusivamente",
      C: "Titulación académica o categoría profesional únicamente",
      D: "Lugar de empadronamiento municipal o vecindad administrativa"
    },
    correcta: "A",
    explicacion: "El artículo 14 consagra el principio de igualdad ante la ley y la prohibición de discriminación por nacimiento, raza, sexo, religión, opinión o cualquier otra condición personal o social.",
    referencia: "Constitución Española: art. 14"
  },
  {
    id: "GEN-T01-005",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "El Defensor del Pueblo es designado por las Cortes Generales como su alto comisionado para la defensa de los derechos del Título I. ¿Por qué mayoría debe ser elegido en cada una de las Cámaras?",
    opciones: {
      A: "Mayoría simple en primera votación",
      B: "Mayoría absoluta en ambas Cámaras",
      C: "Mayoría cualificada de tres quintos (3/5) en el Congreso y en el Senado",
      D: "Mayoría de dos tercios (2/3) únicamente en el Congreso de los Diputados"
    },
    correcta: "C",
    explicacion: "La Ley Orgánica 3/1981, del Defensor del Pueblo, exige una mayoría cualificada de tres quintos de los miembros del Congreso y del Senado para su designación.",
    referencia: "LO 3/1981 del Defensor del Pueblo: art. 2 y CE art. 54"
  },
  {
    id: "GEN-T01-006",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál es el plazo máximo de detención preventiva fijado por el artículo 17.2 de la Constitución Española antes de ser puesto en libertad o a disposición judicial?",
    opciones: {
      A: "24 horas",
      B: "48 horas",
      C: "72 horas",
      D: "Cinco días naturales"
    },
    correcta: "C",
    explicacion: "El artículo 17.2 CE prescribe que la detención preventiva no podrá durar más del tiempo estrictamente necesario para las averiguaciones, y en todo caso en el plazo máximo de 72 horas el detenido debe ser puesto en libertad o a disposición de la autoridad judicial.",
    referencia: "Constitución Española: art. 17.2"
  },
  {
    id: "GEN-T01-007",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "De acuerdo con el artículo 53.1 de la Constitución Española, ¿qué tipo de norma debe regular en todo caso el ejercicio de los derechos y libertades reconocidos en el Capítulo II del Título I?",
    opciones: {
      A: "Decreto del Consejo de Ministros",
      B: "Sólo por Ley, que en todo caso deberá respetar su contenido esencial",
      C: "Reglamento u Orden Ministerial",
      D: "Bando de la Alcaldía"
    },
    correcta: "B",
    explicacion: "El artículo 53.1 establece el principio de reserva de ley: sólo por ley, que en todo caso deberá respetar su contenido esencial, podrá regularse el ejercicio de tales derechos y libertades.",
    referencia: "Constitución Española: art. 53.1"
  },
  {
    id: "GEN-T01-008",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 27 de la Constitución Española consagra el derecho a la educación. ¿Qué carácter tienen la enseñanza básica según el apartado 4 de dicho precepto?",
    opciones: {
      A: "Optativa y de pago",
      B: "Obligatoria y gratuita",
      C: "Voluntaria y subvencionada al 50%",
      D: "Obligatoria solo en centros públicos"
    },
    correcta: "B",
    explicacion: "El artículo 27.4 CE dispone textualmente: 'La enseñanza básica es obligatoria y gratuita'.",
    referencia: "Constitución Española: art. 27.4"
  },

  // --- TEMA 2: ESTATUTO DE AUTONOMÍA DE LA COMUNITAT VALENCIANA ---
  {
    id: "GEN-T02-004",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el Estatuto de Autonomía de la Comunitat Valenciana, ¿quién nombra formalmente al President de la Generalitat tras ser elegido por Les Corts?",
    opciones: {
      A: "El President de Les Corts",
      B: "El Rey, mediante Real Decreto",
      C: "El Tribunal Superior de Justicia de la Comunitat Valenciana",
      D: "El Presidente del Gobierno de la Nación"
    },
    correcta: "B",
    explicacion: "El artículo 27.1 del Estatuto de Autonomía dispone que el President de la Generalitat es elegido por Les Corts de entre sus miembros y nombrado por el Rey.",
    referencia: "Estatuto de Autonomía de la CV: art. 27.1"
  },
  {
    id: "GEN-T02-005",
    tema: 2,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "¿Cuál es la institución de la Generalitat Valenciana encargada de la defensa de los derechos y libertades reconocidos en el Título I de la Constitución y en el Estatuto?",
    opciones: {
      A: "El Consell Jurídic Consultiu",
      B: "La Sindicatura de Comptes",
      C: "El Síndic de Greuges",
      D: "El Comité Econòmic i Social"
    },
    correcta: "C",
    explicacion: "El Síndic de Greuges es el alto comisionado de Les Corts para la defensa de los derechos y libertades reconocidos en la Constitución y el Estatuto (art. 38 EACV).",
    referencia: "Estatuto de Autonomía de la CV: art. 38"
  },
  {
    id: "GEN-T02-006",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Qué institución normativa tiene la competencia exclusiva para determinar y elaborar la normativa lingüística del valenciano según el Estatuto de Autonomía?",
    opciones: {
      A: "El Consell Valencià de Cultura",
      B: "La Acadèmia Valenciana de la Llengua (AVL)",
      C: "La Real Academia Española de la Lengua",
      D: "El Instituto de Estudios Alicantinos"
    },
    correcta: "B",
    explicacion: "El artículo 41 del Estatuto de Autonomía establece que la Acadèmia Valenciana de la Llengua es la institución normativa del idioma valenciano.",
    referencia: "Estatuto de Autonomía de la CV: art. 41"
  },
  {
    id: "GEN-T02-007",
    tema: 2,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "La Sindicatura de Comptes de la Comunitat Valenciana es el órgano al que corresponde:",
    opciones: {
      A: "La fiscalización externa de la gestión económica, financiera y contable del sector público valenciano",
      B: "La aprobación de los Presupuestos de la Generalitat",
      C: "La resolución de recursos contencioso-administrativos de empleados públicos",
      D: "El control disciplinario de los funcionarios locales"
    },
    correcta: "A",
    explicacion: "El artículo 39 del Estatuto de Autonomía atribuye a la Sindicatura de Comptes el control y fiscalización externa de la gestión económica y presupuestaria del sector público de la Generalitat.",
    referencia: "Estatuto de Autonomía de la CV: art. 39"
  },

  // --- TEMA 3: TREBEP (RDLEG 5/2015) ---
  {
    id: "GEN-T03-006",
    tema: 3,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "De acuerdo con el artículo 8 del TREBEP, son funcionarios de carrera quienes, en virtud de nombramiento legal, están vinculados a una Administración Pública por una relación:",
    opciones: {
      A: "Mercantil de prestación de servicios por horas",
      B: "Estatutaria regulada por el Derecho Administrativo para el desempeño de servicios profesionales de carácter permanente",
      C: "Laboral indefinida sujeta únicamente al Estatuto de los Trabajadores",
      D: "De confianza política ligada al mandato de la corporación local"
    },
    correcta: "B",
    explicacion: "El artículo 8.1 del TREBEP define a los funcionarios de carrera como aquellos vinculados a una Administración Pública por una relación estatutaria regulada por el Derecho Administrativo para el desempeño de servicios permanentes.",
    referencia: "TREBEP (RDLeg 5/2015): art. 8.1"
  },
  {
    id: "GEN-T03-007",
    tema: 3,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "¿A qué plazo prescriben las faltas disciplinarias MUY GRAVES cometidas por un empleado público según el artículo 97 del TREBEP?",
    opciones: {
      A: "A los seis meses",
      B: "Al año",
      C: "A los dos años",
      D: "A los tres años"
    },
    correcta: "D",
    explicacion: "El artículo 97.1 del TREBEP fija la prescripción de las faltas: muy graves a los 3 años, graves a los 2 años y leves a los 6 meses.",
    referencia: "TREBEP: art. 97.1"
  },
  {
    id: "GEN-T03-008",
    tema: 3,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál de las siguientes sanciones disciplinarias SOLO puede ser impuesta a los funcionarios de carrera según el artículo 96 del TREBEP?",
    opciones: {
      A: "Apercibimiento",
      B: "Separación del servicio",
      C: "Suspensión firme de funciones",
      D: "Demérito profesional"
    },
    correcta: "B",
    explicacion: "El artículo 96.1.a) del TREBEP señala expresamente que la sanción de 'Separación del servicio de los funcionarios' solo cabe respecto a funcionarios de carrera. Para interinos procede la revocación del nombramiento y para personal laboral el despido disciplinario.",
    referencia: "TREBEP: art. 96.1.a"
  },
  {
    id: "GEN-T03-009",
    tema: 3,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "En la escala de grupos de clasificación profesional del TREBEP (art. 76), para el acceso al Grupo C, Subgrupo C1 (al que pertenece la plaza de Monitora Infantil de Educación de Sant Joan d'Alacant) se exige estar en posesión del título de:",
    opciones: {
      A: "Graduado Escolar o Graduado en ESO",
      B: "Bachiller o Técnico (Formación Profesional de Grado Medio)",
      C: "Grado Universitario o Licenciatura",
      D: "Máster Oficial Universitario"
    },
    correcta: "B",
    explicacion: "El artículo 76 del TREBEP exige para el Subgrupo C1 el título de Bachiller o Técnico (FP Grado Medio). Para el C2 se exige Graduado en ESO.",
    referencia: "TREBEP: art. 76"
  },

  // --- TEMA 4: LEY 39/2015 LPACAP ---
  {
    id: "GEN-T04-005",
    tema: 4,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 30.2 de la Ley 39/2015, cuando los plazos se señalen por días hábiles, ¿qué días se entienden excluidos del cómputo?",
    opciones: {
      A: "Sólo los domingos",
      B: "Los sábados, los domingos y los declarados festivos",
      C: "Los lunes y los viernes festivos únicamente",
      D: "Los días del mes de agosto exclusivamente"
    },
    correcta: "B",
    explicacion: "La Ley 39/2015 excluyó formalmente los sábados del cómputo de plazos hábiles: 'se entienden que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos' (art. 30.2).",
    referencia: "Ley 39/2015 (LPACAP): art. 30.2"
  },
  {
    id: "GEN-T04-006",
    tema: 4,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Conforme al artículo 47.1 de la Ley 39/2015, ¿cuál de los siguientes actos administrativos es NULO DE PLENO DERECHO?",
    opciones: {
      A: "El que incurra en cualquier defecto de forma no esencial",
      B: "El que lesione los derechos y libertades susceptibles de amparo constitucional",
      C: "El dictado fuera del plazo establecido para resolver",
      D: "El que no haya sido publicado en el tablón de edictos"
    },
    correcta: "B",
    explicacion: "El artículo 47.1.a) de la Ley 39/2015 dispone que son nulos de pleno derecho los actos de las Administraciones Públicas que lesionen los derechos y libertades susceptibles de amparo constitucional.",
    referencia: "Ley 39/2015: art. 47.1.a"
  },
  {
    id: "GEN-T04-007",
    tema: 4,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál es el plazo general para interponer el recurso de reposición potestativo contra un acto expreso que pone fin a la vía administrativa?",
    opciones: {
      A: "Quince días hábiles",
      B: "Un mes",
      C: "Tres meses",
      D: "Seis meses"
    },
    correcta: "B",
    explicacion: "El artículo 124.1 de la Ley 39/2015 fija en un mes el plazo para la interposición del recurso potestativo de reposición si el acto fuera expreso.",
    referencia: "Ley 39/2015: art. 124.1"
  },

  // --- TEMA 5 Y 6: TRANSPARENCIA, BUEN GOBIERNO E IGUALDAD (LEY 3/2007) ---
  {
    id: "GEN-T05-003",
    tema: 5,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres define la discriminación indirecta como:",
    opciones: {
      A: "Cualquier comportamiento verbal que atente contra la dignidad",
      B: "La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro",
      C: "El despido disciplinario motivado por razones económicas de la empresa",
      D: "La concesión de un permiso de paternidad superior a la maternidad"
    },
    correcta: "B",
    explicacion: "El artículo 6.2 de la LO 3/2007 define la discriminación indirecta cuando un criterio o práctica formalmente neutro genera un impacto perjudicial desproporcionado sobre un sexo sin justificación objetiva legítima.",
    referencia: "LO 3/2007: art. 6.2"
  },
  {
    id: "GEN-T05-004",
    tema: 5,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "¿Qué se entiende por acoso sexual según el artículo 7 de la Ley Orgánica 3/2007?",
    opciones: {
      A: "Cualquier desacuerdo laboral entre compañeros de distinto sexo",
      B: "Cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona",
      C: "La exigencia de cumplimiento del horario de trabajo",
      D: "La denegación motivada de vacaciones en temporada alta"
    },
    correcta: "B",
    explicacion: "El art. 7.1 LO 3/2007 define el acoso sexual como cualquier comportamiento de naturaleza sexual que atente contra la dignidad de la persona, particularmente cuando se crea un entorno intimidatorio, hostil, degradante u ofensivo.",
    referencia: "LO 3/2007: art. 7.1"
  },

  // --- TEMA 7: RÉGIMEN LOCAL (LEY 7/1985 LBRL) ---
  {
    id: "GEN-T07-003",
    tema: 7,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 11 de la Ley 7/1985 Reguladora de las Bases del Régimen Local (LBRL), ¿cuáles son los elementos esenciales del Municipio?",
    opciones: {
      A: "El Alcalde, los Concejales y los Funcionarios",
      B: "El Territorio (término municipal), la Población (vecinos empadronados) y la Organización",
      C: "Los Presupuestos Municipales y el PGOU",
      D: "La Policía Local y el Juzgado de Paz"
    },
    correcta: "B",
    explicacion: "El artículo 11.2 de la LBRL establece taxativamente: 'Son elementos del Municipio el territorio, la población y la organización'.",
    referencia: "Ley 7/1985 (LBRL): art. 11.2"
  },
  {
    id: "GEN-T07-004",
    tema: 7,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Conforme al artículo 20 de la Ley 7/1985 (LBRL), ¿en qué municipios existe obligatoriamente la Junta de Gobierno Local?",
    opciones: {
      A: "En todos los municipios de España sin excepción",
      B: "En todos los municipios con población superior a 5.000 habitantes y en los de menos cuando así lo disponga su reglamento orgánico o lo acuerde el Pleno",
      C: "Únicamente en las capitales de provincia",
      D: "Solo en los municipios con más de 50.000 habitantes"
    },
    correcta: "B",
    explicacion: "El artículo 20.1.b de la LBRL dispone que la Junta de Gobierno Local existe en todos los municipios con población superior a 5.000 habitantes (como Sant Joan d'Alacant, que supera los 25.000 habitantes) y en los de menos cuando lo acuerde el Pleno o su ROF.",
    referencia: "LBRL: art. 20.1.b"
  },
  {
    id: "GEN-T07-005",
    tema: 7,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El número de Tenientes de Alcalde que el Alcalde puede nombrar libremente no podrá exceder del número de miembros de la Junta de Gobierno Local, y en todo caso de:",
    opciones: {
      A: "La mitad del número legal de Concejales",
      B: "Un tercio (1/3) del número legal de miembros de la Corporación",
      C: "Dos Concejales como máximo",
      D: "La cuarta parte del total de funcionarios de carrera"
    },
    correcta: "B",
    explicacion: "El artículo 46.2 del ROF y art. 23.3 LBRL establecen que el número de Tenientes de Alcalde no podrá exceder del tercio del número legal de miembros de la Corporación.",
    referencia: "LBRL: art. 23.3 y ROF art. 46.2"
  },

  // --- TEMA 8: AYUNTAMIENTO DE SANT JOAN D'ALACANT Y HACIENDA LOCAL ---
  {
    id: "GEN-T08-003",
    tema: 8,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿A qué comarca de la provincia de Alicante pertenece geográfica y administrativamente el municipio de Sant Joan d'Alacant?",
    opciones: {
      A: "La Marina Baixa",
      B: "L'Alacantí",
      C: "El Baix Vinalopó",
      D: "La Vega Baja del Segura"
    },
    correcta: "B",
    explicacion: "Sant Joan d'Alacant forma parte de la comarca de L'Alacantí, limitando con Alicante, Mutxamel y El Campello.",
    referencia: "Organización Territorial CV: Comarca de L'Alacantí"
  },
  {
    id: "GEN-T08-004",
    tema: 8,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "De acuerdo con el Texto Refundido de la Ley Reguladora de las Haciendas Locales (TRLRHL), ¿cuál de los siguientes tributos municipales es de exacción OBLIGATORIA para el Ayuntamiento de Sant Joan d'Alacant?",
    opciones: {
      A: "Impuesto sobre Construcciones, Instalaciones y Obras (ICIO)",
      B: "Impuesto sobre el Incremento de Valor de los Terrenos de Naturaleza Urbana (Plusvalía)",
      C: "Impuesto sobre Bienes Inmuebles (IBI)",
      D: "Impuesto sobre Gastos Suntuarios"
    },
    correcta: "C",
    explicacion: "Son impuestos obligatorios de los municipios: IBI, IAE e IVTM (Vehículos). El ICIO y la Plusvalía municipal (IIVTNU) son potestativos.",
    referencia: "TRLRHL (RDLeg 2/2004): arts. 59 y 60"
  },
  {
    id: "GEN-T08-005",
    tema: 8,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "En el Ayuntamiento de Sant Joan d'Alacant, ¿quién ostenta la atribución de dictar Bandos de Alcaldía y dirigir la política, el gobierno y la administración municipal?",
    opciones: {
      A: "El Pleno de la Corporación en sesión secreta",
      B: "El Alcalde-Presidente de la Corporación",
      C: "El Secretario General del Ayuntamiento",
      D: "El Interventor Municipal"
    },
    correcta: "B",
    explicacion: "El artículo 21.1 de la Ley 7/1985 (LBRL) atribuye expresamente a la Alcaldía la facultad de dirigir el gobierno y la administración municipal y dictar bandos.",
    referencia: "LBRL: art. 21.1.a y 21.1.e"
  }
];
