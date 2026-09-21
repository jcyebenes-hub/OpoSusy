import { Question } from '../types';

export const BANCO_PEDAGOGIA_EXPANDED: Question[] = [
  // --- TEMA 9: DESARROLLO MOTOR 0-3 AÑOS ---
  {
    id: "PED-T09-003",
    tema: 9,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál de las siguientes leyes del desarrollo psicomotor explica que el control corporal se adquiera antes en la cabeza y cuello que en los miembros inferiores?",
    opciones: {
      A: "Ley Próximo-Distal",
      B: "Ley Céfalo-Caudal",
      C: "Ley de Flexión-Extensión simultánea",
      D: "Ley de Lateralidad homogénea"
    },
    correcta: "B",
    explicacion: "La ley Céfalo-Caudal establece que el control motor madura de la cabeza hacia los pies (primero control cefálico, luego tronco y finalmente extremidades inferiores para la marcha).",
    referencia: "Tema 9 - Leyes del desarrollo psicomotor: Ley Céfalo-caudal"
  },
  {
    id: "PED-T09-004",
    tema: 9,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El reflejo innato del recién nacido caracterizado por abrir los brazos en cruz con extensión de dedos y llanto ante un estímulo brusco o sensación de caída se denomina:",
    opciones: {
      A: "Reflejo de Babinski",
      B: "Reflejo de Moro o del sobresalto",
      C: "Reflejo de Grasping o prensión palmar",
      D: "Reflejo de succión rítmica"
    },
    correcta: "B",
    explicacion: "El reflejo de Moro es un reflejo arcaico donde el bebé abre simétricamente los brazos y piernas ante un sobresalto, desapareciendo normalmente entre los 4 y 6 meses de vida.",
    referencia: "Tema 9 - Reflejos arcaicos neonatales: Reflejo de Moro"
  },
  {
    id: "PED-T09-005",
    tema: 9,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "¿A qué edad aproximada suele consolidarse la marcha autónoma e independiente en el desarrollo psicomotor típico infantil?",
    opciones: {
      A: "Entre los 3 y 5 meses",
      B: "Entre los 6 y 8 meses",
      C: "Entre los 12 y 18 meses (alrededor del primer año)",
      D: "A partir de los 36 meses obligatoriamente"
    },
    correcta: "C",
    explicacion: "La marcha independiente suele alcanzarse en un rango normal entre los 11 y 16-18 meses, mediando factores madurativos, ambientales y de estimulación libre respetuosa.",
    referencia: "Tema 9 - Hitos motores: La marcha autónoma"
  },

  // --- TEMA 10: DESARROLLO COGNITIVO (PIAGET) ---
  {
    id: "PED-T10-003",
    tema: 10,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según la teoría del desarrollo cognitivo de Jean Piaget, el tramo de 0 a 2 años de edad se corresponde con el estadio:",
    opciones: {
      A: "Operaciones concretas",
      B: "Sensoriomotor",
      C: "Preoperacional simbólico",
      D: "Operaciones formales abstractas"
    },
    correcta: "B",
    explicacion: "Piaget divide el desarrollo cognitivo en cuatro grandes estadios: el primero es el Sensoriomotor (0 a 2 años), donde el pensamiento del niño se basa en la acción motriz directa y la percepción sensorial.",
    referencia: "Tema 10 - Piaget: Estadio Sensoriomotor (0-2 años)"
  },
  {
    id: "PED-T10-004",
    tema: 10,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Qué hito cognitivo fundamental del estadio sensoriomotor permite al bebé comprender que un juguete sigue existiendo aunque quede oculto bajo una manta?",
    opciones: {
      A: "La conservación de la materia",
      B: "La reversibilidad operatoria",
      C: "La permanencia del objeto",
      D: "El razonamiento hipotético-deductivo"
    },
    correcta: "C",
    explicacion: "La permanencia del objeto se consolida entre los 8 y 12 meses (subestadios 4 y 5 de Piaget); el niño sabe que los objetos y personas continúan existiendo aunque no los perciba sensorialmente.",
    referencia: "Tema 10 - Jean Piaget: Permanencia del objeto"
  },
  {
    id: "PED-T10-005",
    tema: 10,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Las acciones repetitivas que realiza un bebé descubriendo accidentalmente un efecto en su propio cuerpo (como chuparse el dedo o mirarse las manos) reciben en Piaget el nombre de:",
    opciones: {
      A: "Reacciones circulares primarias",
      B: "Reacciones circulares secundarias",
      C: "Reacciones circulares terciarias",
      D: "Esquemas reflexivos automáticos"
    },
    correcta: "A",
    explicacion: "Las reacciones circulares primarias (1-4 meses) están centradas en el propio cuerpo del bebé. Las secundarias (4-8 meses) se orientan hacia objetos del entorno exterior.",
    referencia: "Tema 10 - Piaget: Reacciones circulares primarias"
  },

  // --- TEMA 11: DESARROLLO DEL LENGUAJE ---
  {
    id: "PED-T11-003",
    tema: 11,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En la adquisición del lenguaje, la producción de una sola palabra aislada ('¡agua!', '¡pan!') para expresar un significado oracional completo ('mamá, quiero beber agua') se conoce técnicamente como:",
    opciones: {
      A: "Ecolalia diferida",
      B: "Holofrase (etapa holofrástica)",
      C: "Habla telegráfica plurimembre",
      D: "Balbuceo reduplicativo"
    },
    correcta: "B",
    explicacion: "La holofrase (alrededor de los 12-18 meses) es el fenómeno lingüístico en el que una sola palabra condensa el sentido de toda una oración o petición comunicativa.",
    referencia: "Tema 11 - Adquisición del lenguaje: Etapa holofrástica"
  },
  {
    id: "PED-T11-004",
    tema: 11,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "¿A qué etapa del desarrollo del lenguaje corresponde el balbuceo canónico o reduplicativo (tipo 'ma-ma-ma', 'ta-ta-ta') en el primer año de vida?",
    opciones: {
      A: "Etapa prelingüística (preverbal)",
      B: "Etapa de lectoescritura formal",
      C: "Etapa de sintaxis compleja",
      D: "Etapa metalingüística abstracta"
    },
    correcta: "A",
    explicacion: "El balbuceo pertenece a la etapa prelingüística (0-12 meses), sirviendo de entrenamiento fonoarticulatorio y de prosodia comunicativa previo a las primeras palabras con significado léxico.",
    referencia: "Tema 11 - Etapa prelingüística: Balbuceo"
  },
  {
    id: "PED-T11-005",
    tema: 11,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Cuando un niño de 20 meses utiliza la palabra 'guau-guau' para referirse no solo a los perros sino también a gatos, caballos, vacas y cualquier animal de cuatro patas, está cometiendo un fenómeno evolutivo normal de:",
    opciones: {
      A: "Infraextensión léxica",
      B: "Sobreextensión semántica",
      C: "Mutismo selectivo",
      D: "Disfemia evolutiva"
    },
    correcta: "B",
    explicacion: "La sobreextensión se produce cuando el niño aplica una palabra conocida a un campo semántico más amplio de lo debido, basándose en similitudes perceptivas de forma, sonido o movimiento.",
    referencia: "Tema 11 - Desarrollo semántico: Sobreextensión"
  },

  // --- TEMA 12: DESARROLLO SOCIOAFECTIVO (BOWLBY / WALLON) ---
  {
    id: "PED-T12-003",
    tema: 12,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según la Teoría del Apego formulada por John Bowlby, un apego seguro se caracteriza principalmente porque el niño:",
    opciones: {
      A: "No muestra ninguna emoción cuando la figura de apego se marcha ni cuando regresa",
      B: "Utiliza a su figura de apego como base segura para explorar el entorno, muestra malestar ante su marcha y se calma fácilmente con su regreso",
      C: "Rechaza violentamente todo contacto físico con adultos",
      D: "Nunca se separa de la madre ni para mirar un juguete a 10 centímetros"
    },
    correcta: "B",
    explicacion: "El apego seguro (Mary Ainsworth / Bowlby) se manifiesta cuando el menor confía en la disponibilidad afectiva de su figura de referencia, usándola como base segura de exploración y fuente de consuelo eficaz.",
    referencia: "Tema 12 - John Bowlby: Tipología del apego"
  },
  {
    id: "PED-T12-004",
    tema: 12,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Henri Wallon describe el estadio del personalismo (alrededor de los 3 años). ¿Cuál es la manifestación conductual típica que marca la afirmación de la propia identidad frente al adulto?",
    opciones: {
      A: "El mutismo total",
      B: "La crisis de oposición o del 'no' (neofobia y autoafirmación)",
      C: "La pérdida transitoria de la marcha",
      D: "La imitación pasiva sin voluntad propia"
    },
    correcta: "B",
    explicacion: "Wallon describe la crisis de oposición y el negativismo (frecuente en torno a los 2-3 años) como un mecanismo psicológico sano y necesario para que el niño diferencie su 'yo' del resto de las personas.",
    referencia: "Tema 12 - Henri Wallon: Estadio del personalismo y autoafirmación"
  },

  // --- TEMA 13: INCLUSIÓN EDUCATIVA EN LA CV (DECRETO 104/2018) ---
  {
    id: "PED-T13-004",
    tema: 13,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El Decreto 104/2018 del Consell regula la educación inclusiva en la Comunitat Valenciana. ¿Cuál de los siguientes principios fundamenta este marco normativo?",
    opciones: {
      A: "Segregar al alumnado con dificultades en centros lejanos",
      B: "El Diseño Universal para el Aprendizaje (DUA) y la eliminación de barreras para la presencia, participación y aprendizaje",
      C: "Calificar numéricamente a los bebés desde el primer trimestre",
      D: "Excluir de la escuela infantil a menores con necesidades complejas"
    },
    correcta: "B",
    explicacion: "El Decreto 104/2018 de la Generalitat Valenciana asume el DUA como principio vertebrador, garantizando que el entorno, recursos y metodologías se adapten a la diversidad de todo el alumnado.",
    referencia: "Decreto 104/2018 CV: art. 3 y principios de equidad e inclusión"
  },
  {
    id: "PED-T13-005",
    tema: 13,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "En la estructura de medidas del Decreto 104/2018 de la CV, ¿en qué nivel de respuesta se sitúan las medidas individualizadas extraordinarias y los apoyos especializados?",
    opciones: {
      A: "Nivel I (centro general)",
      B: "Nivel II (grupo-aula)",
      C: "Nivel III y Nivel IV (medidas individualizadas y de alta intensidad de apoyo)",
      D: "Nivel Cero (fuera del sistema escolar)"
    },
    correcta: "C",
    explicacion: "El modelo inclusivo valenciano organiza la respuesta en 4 niveles progresivos: Nivel I (centro), Nivel II (aula/ordinarias), Nivel III (apoyos individualizados ordinarios) y Nivel IV (medidas extraordinarias singulares).",
    referencia: "Decreto 104/2018 y Orden 20/2019 de respuesta a la inclusión en la CV"
  },

  // --- TEMA 14: DETECCIÓN TEMPRANA Y SIGNOS DE ALERTA ---
  {
    id: "PED-T14-003",
    tema: 14,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Ante un menor de 18 meses que no mantiene contacto visual, no responde cuando se le llama por su nombre y no señala con el dedo para compartir interés (atención conjunta), la monitora debe:",
    opciones: {
      A: "Esperar a los 6 años a ver si madura solo sin avisar a nadie",
      B: "Registrar la observación sistemática y comunicar de inmediato al equipo pedagógico y dirección para valoración con atención temprana",
      C: "Regañarle por no mirar a los ojos",
      D: "Obligarle a mirar una pantalla digital con dibujos"
    },
    correcta: "B",
    explicacion: "La ausencia de atención conjunta y de respuesta al nombre a los 18 meses son señales de alerta tempranas reconocidas de posible alteración del espectro autista o dificultades comunicativas que exigen derivación preventiva inmediata.",
    referencia: "Tema 14 - Signos de alerta en comunicación y atención temprana"
  },

  // --- TEMA 15: ACNEAE (NECESIDADES EDUCATIVAS ESPECIALES) ---
  {
    id: "PED-T15-004",
    tema: 15,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Para un alumno con Trastorno del Espectro Autista (TEA) en el aula de 2-3 años, ¿cuál de las siguientes estrategias favorece de manera más eficaz su anticipación y estabilidad emocional?",
    opciones: {
      A: "Cambiar continuamente la rutina diaria sin previo aviso",
      B: "El uso de paneles visuales estructurados con pictogramas sencillos y rutinas predecibles",
      C: "Aislarlo completamente detrás de un armario",
      D: "Emitir órdenes con megáfonos de gran volumen"
    },
    correcta: "B",
    explicacion: "La estructuración espacial y temporal mediante apoyos visuales (claves visuales, agendas con pictogramas) reduce la ansiedad, aporta previsibilidad y favorece la autonomía en niños con TEA.",
    referencia: "Tema 15 - ACNEAE: Intervención inclusiva y apoyos visuales en TEA"
  },

  // --- TEMA 16: PROTECCIÓN INFANTIL Y LOPIVI (LEY 8/2021) ---
  {
    id: "PED-T16-003",
    tema: 16,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Ley Orgánica 8/2021 (LOPIVI) impone a cualquier profesional que trabaje en contacto con menores el deber de comunicar indicios de violencia o desprotección:",
    opciones: {
      A: "Sólo si tiene una sentencia judicial firme condenatoria",
      B: "De forma inmediata a las autoridades competentes o servicios sociales municipales, primando el interés superior del menor",
      C: "Únicamente si la familia del menor da su consentimiento por escrito",
      D: "Al término del curso escolar en la memoria final"
    },
    correcta: "B",
    explicacion: "El artículo 15 y 16 de la LOPIVI consagra el deber de comunicación inmediata de cualquier situación de violencia o desprotección detectada por profesionales que trabajen con menores de edad.",
    referencia: "Ley Orgánica 8/2021 (LOPIVI): arts. 15-17"
  },

  // --- TEMA 17 Y 18: LA ESCUELA INFANTIL MUNICIPAL Y RATIOS EN LA CV ---
  {
    id: "PED-T18-003",
    tema: 18,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Conforme a la normativa autonómica de la Comunitat Valenciana para centros de primer ciclo de Educación Infantil (0-3 años), la ratio máxima de alumnos por aula para el grupo de edad de 1 a 2 años es de:",
    opciones: {
      A: "8 alumnos",
      B: "13 alumnos",
      C: "20 alumnos",
      D: "25 alumnos"
    },
    correcta: "B",
    explicacion: "Las ratios de primer ciclo en la Comunitat Valenciana (Decreto 2/2009 y normativa de desarrollo) son: 0-1 año: 8 alumnos; 1-2 años: 13 alumnos; 2-3 años: 20 alumnos.",
    referencia: "Tema 18 - Requisitos mínimos de centros 0-3 años en la CV: Ratios"
  },
  {
    id: "PED-T18-004",
    tema: 18,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En un aula de bebés (0 a 1 año) de una Escuela Infantil municipal, ¿cuál es la ratio legal máxima de niños por unidad?",
    opciones: {
      A: "8 plazas",
      B: "13 plazas",
      C: "18 plazas",
      D: "4 plazas"
    },
    correcta: "A",
    explicacion: "Para el tramo de menores de 1 año (bebés / lactantes), la ratio reglamentaria máxima es de 8 niños por unidad para asegurar la atención individualizada y la seguridad.",
    referencia: "Tema 18 - Ratios 0-3 años: Tramo 0-1 año (8 niños)"
  },
  {
    id: "PED-T18-005",
    tema: 18,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según los requisitos arquitectónicos y espaciales fijados por la normativa valenciana para centros de educación infantil 0-3 años, las aulas deben contar como mínimo con una superficie de:",
    opciones: {
      A: "15 metros cuadrados",
      B: "30 metros cuadrados y adecuada ventilación e iluminación natural directa",
      C: "60 metros cuadrados sin ventanas",
      D: "10 metros cuadrados por cada cuna"
    },
    correcta: "B",
    explicacion: "La normativa exige que las aulas destinadas a niños de 0 a 3 años tengan una superficie mínima de 30 metros cuadrados, garantizando ventilación e iluminación natural directa.",
    referencia: "Tema 18 - Requisitos de espacios en Escuelas Infantiles"
  },

  // --- TEMA 19 Y 20: ORGANIZACIÓN DE ESPACIOS, RUTINAS Y PERIODO DE ADAPTACIÓN ---
  {
    id: "PED-T19-003",
    tema: 19,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En la organización temporal de la Escuela Infantil, las rutinas diarias (alimentación, higiene, descanso, acogida) tienen un papel prioritario porque:",
    opciones: {
      A: "Impiden que los niños tengan tiempo para jugar",
      B: "Proporcionan seguridad emocional, estructuración espaciotemporal y desarrollo de la autonomía en un marco previsible",
      C: "Ahorran costes al Ayuntamiento de Sant Joan",
      D: "Sirven para que los educadores no tengan que programar actividades"
    },
    correcta: "B",
    explicacion: "Las rutinas en 0-3 no son meros actos mecánicos; son los principales momentos educativos generadores de apego, lenguaje, autonomía y seguridad psicoemocional en la infancia.",
    referencia: "Tema 19 - El valor educativo de las rutinas cotidianas"
  },
  {
    id: "PED-T20-003",
    tema: 20,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Durante el Periodo de Adaptación al inicio de curso en la escuela infantil, ¿cuál es la pauta pedagógica más respetuosa y recomendada?",
    opciones: {
      A: "Separar bruscamente al niño de sus progenitores en la puerta sin permitirles la entrada",
      B: "Incorporación gradual y flexible con horarios reducidos y presencia acompañada de las familias en el aula los primeros días",
      C: "Dejar a los niños 8 horas seguidas desde el primer día para que se acostumbren por la fuerza",
      D: "Dar golosinas a los niños para que dejen de llorar de inmediato"
    },
    correcta: "B",
    explicacion: "El periodo de adaptación respetuoso requiere flexibilidad temporal escalonada, acogida cálida y la presencia o cercanía progresiva de las figuras de apego para evitar el trauma del desapego abrupto.",
    referencia: "Tema 20 - Periodo de adaptación respetuoso en la escuela infantil"
  }
];
