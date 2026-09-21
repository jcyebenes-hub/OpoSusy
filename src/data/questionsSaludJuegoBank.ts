import { Question } from '../types';

export const BANCO_SALUD_JUEGO_EXPANDED: Question[] = [
  // --- TEMA 21: NUTRICIÓN Y ALIMENTACIÓN 0-3 AÑOS ---
  {
    id: "SAL-T21-004",
    tema: 21,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Qué enfoque de alimentación complementaria promueve que el bebé de más de 6 meses se alimente por sí mismo utilizando sus manos con alimentos en trozos seguros, regulando su propia ingesta?",
    opciones: {
      A: "Alimentación forzada por sonda",
      B: "Baby-Led Weaning (BLW) o alimentación autorregulada",
      C: "Triturados exclusivos hasta los 3 años",
      D: "Ayuno intermitente infantil"
    },
    correcta: "B",
    explicacion: "El BLW (Baby-Led Weaning) consiste en ofrecer al bebé alimentos sólidos adecuados en tamaño y textura para que sea él quien los coja y coma de manera autónoma y respetuosa.",
    referencia: "Tema 21 - Alimentación complementaria: Baby-Led Weaning (BLW)"
  },
  {
    id: "SAL-T21-005",
    tema: 21,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "De acuerdo con las recomendaciones de la Asociación Española de Pediatría (AEP), ¿cuál de los siguientes alimentos está DESACONSEJADO en menores de 1 año por riesgo de botulismo infantil?",
    opciones: {
      A: "La miel cruda",
      B: "El plátano maduro",
      C: "La patata cocida",
      D: "El aceite de oliva virgen extra"
    },
    correcta: "A",
    explicacion: "La miel puede contener esporas de Clostridium botulinum que en el intestino inmaduro del lactante menor de 1 año pueden proliferar y causar botulismo infantil grave.",
    referencia: "Tema 21 - Nutrición pediátrica: Alimentos prohibidos <1 año (Miel)"
  },
  {
    id: "SAL-T21-006",
    tema: 21,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Para evitar el riesgo de atragantamiento en niños menores de 3 años, ¿cómo deben servirse alimentos cilíndricos pequeños como las uvas o los tomates cherry?",
    opciones: {
      A: "Enteros con piel",
      B: "Cortados longitudinalmente en cuartos (a lo largo), nunca enteros",
      C: "Congelados en cubitos duros",
      D: "Con hueso interior"
    },
    correcta: "B",
    explicacion: "Las uvas y tomates cherry enteros son de las principales causas de atragantamiento infantil obstructivo; deben cortarse siempre longitudinalmente (a lo largo) en dos o cuatro partes.",
    referencia: "Tema 21 y 24 - Prevención de asfixia y atragantamiento infantil"
  },

  // --- TEMA 22: ALERGIAS E INTOLERANCIAS ALIMENTARIAS ---
  {
    id: "SAL-T22-004",
    tema: 22,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Ante un shock anafiláctico en el aula en una alumna con alergia diagnosticada a frutos secos con dificultad respiratoria súbita e hinchazón facial, la monitora debe:",
    opciones: {
      A: "Darle un vaso de leche con azúcar y esperar",
      B: "Administrar de inmediato el autoinyector de adrenalina en la cara anterolateral del muslo y llamar al 112",
      C: "Tumbada boca abajo y hacerle cosquillas para que no llore",
      D: "Esperar a que termine la jornada para avisar a los padres"
    },
    correcta: "B",
    explicacion: "La adrenalina intramuscular en el tercio medio anterolateral del muslo es el tratamiento prioritario que salva la vida en una anafilaxia, activando de inmediato el Servicio de Emergencias Sanitarias (112).",
    referencia: "Tema 22 - Protocolo de actuación ante anafilaxia en centros escolares"
  },
  {
    id: "SAL-T22-005",
    tema: 22,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Qué diferencia principal existe entre una alergia alimentaria y una intolerancia alimentaria (como la intolerancia a la lactosa)?",
    opciones: {
      A: "La alergia involucra una respuesta del sistema inmunitario (IgE) con riesgo vital, mientras que la intolerancia es un fallo metabólico/digestivo que no compromete la vida de forma aguda",
      B: "Son exactamente lo mismo con dos nombres sinónimos",
      C: "La intolerancia solo afecta a niños mayores de 12 años",
      D: "La alergia se cura comiendo más cantidad del alérgeno"
    },
    correcta: "A",
    explicacion: "La alergia alimentaria es una reacción inmunológica mediada habitualmente por anticuerpos IgE que puede derivar en anafilaxia. La intolerancia se debe a deficiencias enzimáticas (como la lactasa) a nivel digestivo.",
    referencia: "Tema 22 - Alergias vs Intolerancias alimentarias"
  },

  // --- TEMA 23: HIGIENE Y CONTROL DE ESFÍNTERES ---
  {
    id: "SAL-T23-004",
    tema: 23,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Respecto al proceso de adquisición del control de esfínteres en la escuela infantil, la intervención de la monitora debe basarse en:",
    opciones: {
      A: "Obligar a todos los niños de 2 años a quitarse el pañal el mismo día fijado por calendario",
      B: "Castigar y avergonzar en público al niño que tiene un escape accidental",
      C: "Respetar el ritmo madurativo fisiológico y emocional de cada niño, en estrecha coordinación y coherencia con la familia",
      D: "Premiar con juguetes caros a los que no se mojan"
    },
    correcta: "C",
    explicacion: "El control de esfínteres es un hito madurativo neurofisiológico (mielinización y conciencia de sensaciones) que no puede forzarse; requiere acompañamiento respetuoso, empatía y coordinación con el hogar.",
    referencia: "Tema 23 - Control de esfínteres respetuoso en 0-3 años"
  },
  {
    id: "SAL-T23-005",
    tema: 23,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Durante el cambio de pañal de una niña en el aula, la técnica higiénica correcta de limpieza de la zona genital para prevenir infecciones urinarias es:",
    opciones: {
      A: "De atrás (ano) hacia adelante (vulva)",
      B: "De adelante (vulva) hacia atrás (ano), en un solo sentido sin retroceder",
      C: "Con agua fría y un cepillo de cerdas duras",
      D: "Frotando en círculos rápidos"
    },
    correcta: "B",
    explicacion: "La limpieza en niñas debe realizarse siempre de adelante hacia atrás para no arrastrar bacterias fecales hacia el meato urinario o la vagina.",
    referencia: "Tema 23 - Higiene del cambio de pañal: Prevención de infecciones"
  },

  // --- TEMA 24: PRIMEROS AUXILIOS Y EMERGENCIAS EN EL AULA ---
  {
    id: "SAL-T24-004",
    tema: 24,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "En un lactante menor de 1 año con atragantamiento por cuerpo extraño con obstrucción completa de la vía aérea (no tose, no emite sonido y se pone cianótico), ¿cuál es la maniobra oficial de soporte vital?",
    opciones: {
      A: "Colocar al lactante boca abajo sobre el antebrazo con la cabeza más baja que el cuerpo y dar 5 golpes interescapulares firmes, seguidos de 5 compresiones torácicas",
      B: "Hacer la maniobra de Heimlich presionando fuertemente el abdomen con el puño cerrado",
      C: "Meter el dedo a ciegas hasta la garganta para intentar pescar el objeto",
      D: "Ponerlo de cabeza y sacudirlo por los tobillos"
    },
    correcta: "A",
    explicacion: "En lactantes (<1 año) NUNCA se realiza la maniobra de Heimlich por riesgo de lesión hepática. El protocolo oficial de RCP/SVA es: 5 golpes en la espalda (interescapulares) alternados con 5 compresiones torácicas con dos dedos en el centro del pecho.",
    referencia: "Tema 24 - Protocolo ERC/AHA de atragantamiento en lactantes (<1 año)"
  },
  {
    id: "SAL-T24-005",
    tema: 24,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Ante un episodio de convulsión febril en un alumno de 2 años en la escuela infantil, ¿qué actuación está CONTRAINDICADA?",
    opciones: {
      A: "Proteger al niño de golpes contra muebles y colocarlo en posición lateral de seguridad",
      B: "Introducir cucharas u objetos en la boca o sujetarle los miembros a la fuerza durante la crisis",
      C: "Desabrochar la ropa ajustada y ventilar el ambiente",
      D: "Cronometrar la duración de la convulsión y avisar al 112"
    },
    correcta: "B",
    explicacion: "Durante una convulsión febril está estrictamente contraindicado meter nada en la boca (riesgo de asfixia o rotura dental) o contener los movimientos con violencia. Se debe despejar el entorno, poner en posición lateral y llamar a urgencias.",
    referencia: "Tema 24 - Primeros auxilios: Actuación ante convulsión febril"
  },

  // --- TEMA 25 Y 26: EL JUEGO Y EL CESTO DE LOS TESOROS (ELINOR GOLDSCHMIED) ---
  {
    id: "SAL-T25-004",
    tema: 25,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El juego simbólico o juego del 'hacer como si' (dar de comer a un muñeco, hacer que un palo es una cuchara), según Piaget, emerge típicamente:",
    opciones: {
      A: "A las dos semanas de nacer",
      B: "Hacia el final del segundo año (alrededor de los 18-24 meses) con la aparición de la función semiótica",
      C: "Exclusivamente a partir de los 7 años",
      D: "Solo si el adulto le da instrucciones escritas"
    },
    correcta: "B",
    explicacion: "El juego simbólico surge en el tránsito del estadio sensoriomotor al preoperacional (18-24 meses), posibilitado por la función simbólica o semiótica que permite evocar un objeto ausente.",
    referencia: "Tema 25 - Jean Piaget: Aparición del juego simbólico"
  },
  {
    id: "SAL-T26-004",
    tema: 26,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El 'Cesto de los Tesoros' creado por Elinor Goldschmied es una propuesta de juego sensorial dirigida a bebés que:",
    opciones: {
      A: "Ya corren y saltan a la comba",
      B: "Se mantienen sentados de forma autónoma (aprox. 6 a 10 meses) pero aún no se desplazan libremente",
      C: "Saben leer y escribir con fluidez",
      D: "Tienen ordenadores portátiles individuales"
    },
    correcta: "B",
    explicacion: "El Cesto de los Tesoros se ofrece a bebés de 6 a 10-12 meses que ya se sientan solos sin caerse; reúne una colección de objetos no comerciales (madera, metal, fibras, piñas) para la exploración multisensorial.",
    referencia: "Tema 26 - Elinor Goldschmied: El cesto de los tesoros"
  },
  {
    id: "SAL-T26-005",
    tema: 26,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En la sesión de Juego Heurístico (para niños en su segundo año de vida, 12-24 meses), ¿cuáles son sus dos partes o momentos indispensables?",
    opciones: {
      A: "La clase teórica y el examen escrito",
      B: "La fase de exploración/combinación libre de los materiales y la fase de recogida clasificada guiada por el adulto",
      C: "La competición entre parejas y la entrega de trofeos",
      D: "El castigo y la siesta obligatoria"
    },
    correcta: "B",
    explicacion: "El juego heurístico consta de dos fases: 1) exploración libre donde los niños combinan objetos de diferentes naturalezas (meter, sacar, alinear), y 2) la recogida clasificada, donde colocan cada objeto en su bolsa correspondiente.",
    referencia: "Tema 26 - Fases del juego heurístico: Exploración y Recogida"
  },

  // --- TEMA 27: PSICOMOTRICIDAD (AUCOUTURIER Y EMMI PIKLER) ---
  {
    id: "SAL-T27-002",
    tema: 27,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La pedagoga y pediatra húngara Emmi Pikler es reconocida mundialmente por defender el principio de:",
    opciones: {
      A: "El andador rígido y los tacatacas mecánicos desde los 3 meses",
      B: "El desarrollo motor autónomo o movimiento libre, permitiendo que el bebé alcance cada postura por su propia maduración sin ser colocado por el adulto en posiciones que no domina",
      C: "Atar las manos del bebé para que aprenda a concentrarse",
      D: "La gimnasia forzada de alto impacto en cunas"
    },
    correcta: "B",
    explicacion: "Emmi Pikler fundamentó el 'movimiento libre': el niño aprende por sí solo a voltear, sentarse y andar; no se le debe forzar colocándole sentado o de pie antes de que lo logre autónomamente.",
    referencia: "Tema 27 - Emmi Pikler: Movimiento libre y desarrollo motor autónomo"
  },
  {
    id: "SAL-T27-003",
    tema: 27,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "En la Práctica Psicomotriz de Bernard Aucouturier, ¿qué objetivo fundamental cumple el ritual de entrada antes de acceder al espacio de juego?",
    opciones: {
      A: "Suspender de recreo a los niños que no lleven uniforme",
      B: "Recordar las normas básicas de seguridad (no hacerse daño, respetar las construcciones), acoger la emoción del grupo y preparar la transición motriz",
      C: "Obligar a los niños a rezar una oración",
      D: "Pesar y medir a cada niño para una ficha médica"
    },
    correcta: "B",
    explicacion: "En Aucouturier, el ritual de entrada acoge al grupo, establece el encuadre afectivo y las leyes de la sala (no hacerse daño ni a otros) para abrir el espacio de expresividad motriz.",
    referencia: "Tema 27 - Bernard Aucouturier: Sesión de psicomotricidad y rituales"
  },

  // --- TEMA 28, 29 Y 30: RINCONES, TALLERES, ARTE Y PATIO EXTERIOR ---
  {
    id: "SAL-T28-003",
    tema: 28,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál es una de las ventajas pedagógicas fundamentales del trabajo por rincones en el aula de 2-3 años?",
    opciones: {
      A: "Que todos los alumnos deben hacer exactamente lo mismo al mismo segundo sentados en fila",
      B: "Favorece la libre elección, el ritmo individual, la autonomía, la socialización en pequeños grupos y la diversidad de intereses",
      C: "Que no se necesita ningún tipo de material didáctico",
      D: "Evitar que los niños hablen entre sí"
    },
    correcta: "B",
    explicacion: "Los rincones diversifican la oferta de actividades en el aula, permitiendo responder a ritmos individuales, potenciar la iniciativa personal y promover el juego cooperativo.",
    referencia: "Tema 28 - Metodología de rincones en educación infantil"
  },
  {
    id: "SAL-T29-003",
    tema: 29,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Al realizar actividades de expresión plástica con niños menores de 3 años (como pintura de dedos o pastas de modelar), el criterio de seguridad esencial es:",
    opciones: {
      A: "Que los materiales sean obligatoriamente importados y con disolventes químicos",
      B: "Que sean materiales no tóxicos, dermatológicamente testados, lavables con agua y con sello CE para uso infantil",
      C: "Que los niños no puedan tocar los materiales con las manos",
      D: "Pintar únicamente sobre cristales afilados"
    },
    correcta: "B",
    explicacion: "En 0-3 años los niños están en fase oral y se llevan las manos a la boca; los materiales plásticos deben ser 100% no tóxicos, inocuos, comestibles o con certificación CE de seguridad infantil.",
    referencia: "Tema 29 - Expresión plástica en 0-3: Seguridad y toxicidad cero"
  },
  {
    id: "SAL-T30-002",
    tema: 30,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El patio exterior de la Escuela Infantil municipal debe concebirse pedagógicamente como:",
    opciones: {
      A: "Un almacén de trastos viejos donde los niños pasan el rato sin supervisión",
      B: "Un espacio educativo continuo y vivo de relación con la naturaleza, juego motor amplio y exploración sensorial",
      C: "Una zona asfaltada y gris sin árboles ni plantas",
      D: "Un aparcamiento de vehículos municipales durante las horas lectivas"
    },
    correcta: "B",
    explicacion: "El patio no es solo el recreo; es una extensión didáctica del aula donde la infancia conecta con elementos naturales (tierra, agua, plantas, sol), experimenta el juego motor global y socializa.",
    referencia: "Tema 30 - El patio escolar como entorno pedagógico de naturaleza"
  }
];
