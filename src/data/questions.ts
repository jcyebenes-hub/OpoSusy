import { Question, PracticalCase } from '../types';
import { BANCO_GENERAL_EXPANDED } from './questionsGeneralBank';
import { BANCO_PEDAGOGIA_EXPANDED } from './questionsPedagogiaBank';
import { BANCO_SALUD_JUEGO_EXPANDED } from './questionsSaludJuegoBank';
import { BANCO_CASOS_EXPANDED } from './questionsCasosBank';

const BASE_BANCO_PREGUNTAS: Question[] = [
  // PARTE GENERAL (Temas 1-8)
  {
    id: "T01-001",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál de los siguientes NO es uno de los valores superiores del ordenamiento jurídico propugnados por el artículo 1.1 de la Constitución Española de 1978?",
    opciones: {
      A: "La libertad",
      B: "La justicia",
      C: "La solidaridad",
      D: "El pluralismo político"
    },
    correcta: "C",
    explicacion: "El artículo 1.1 de la Constitución Española establece que 'España se constituye en un Estado social y democrático de Derecho, que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político'. La solidaridad es un principio rector de la organización territorial (art. 2 y 138), pero no un valor superior del art. 1.1.",
    referencia: "Tema 1 - Constitución Española: art. 1.1"
  },
  {
    id: "T01-002",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según la Constitución Española, ¿ante qué órgano se interpone el recurso de amparo constitucional para la tutela de los derechos fundamentales de la Sección 1.ª del Capítulo II del Título I?",
    opciones: {
      A: "Ante el Tribunal Supremo",
      B: "Ante el Tribunal Constitucional",
      C: "Ante el Defensor del Pueblo",
      D: "Ante el Consejo General del Poder Judicial"
    },
    correcta: "B",
    explicacion: "El recurso de amparo constitucional se interpone ante el Tribunal Constitucional (arts. 53.2 y 161.1.b CE) para la defensa de los derechos fundamentales y libertades públicas reconocidos en los artículos 14 a 29 más la objeción de conciencia del art. 30.2.",
    referencia: "Tema 1 - Constitución Española: arts. 53.2 y 161.1.b"
  },
  {
    id: "T02-001",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Conforme al Estatuto de Autonomía de la Comunitat Valenciana, Les Corts Valencianes estarán constituidas por un número de Diputados y Diputadas no inferior a:",
    opciones: {
      A: "75",
      B: "89",
      C: "99",
      D: "120"
    },
    correcta: "C",
    explicacion: "El artículo 23.1 del Estatuto de Autonomía de la Comunitat Valenciana (LO 5/1982) establece que 'Les Corts estarán constituidas por un número de Diputados y Diputadas no inferior a noventa y nueve'.",
    referencia: "Tema 2 - Estatuto de Autonomía de la CV: art. 23.1"
  },
  {
    id: "T02-002",
    tema: 2,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "¿Quién nombra formalmente al President de la Generalitat Valenciana tras su elección por Les Corts?",
    opciones: {
      A: "El Presidente de Les Corts Valencianes",
      B: "El Rey",
      C: "El Presidente del Gobierno de la Nación",
      D: "El Pleno del Tribunal Superior de Justicia de la Comunitat Valenciana"
    },
    correcta: "B",
    explicacion: "De conformidad con el artículo 27.1 del Estatuto de Autonomía, el President de la Generalitat es elegido por Les Corts de entre sus miembros y nombrado por el Rey.",
    referencia: "Tema 2 - Estatuto de Autonomía de la CV: art. 27.1"
  },
  {
    id: "T03-001",
    tema: 3,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el TREBEP (RDLeg 5/2015), ¿cuál de los siguientes colectivos tiene la condición de personal funcionario de carrera?",
    opciones: {
      A: "Quienes en virtud de contrato de trabajo desempeñan puestos remunerados",
      B: "Quienes en virtud de nombramiento legal desempeñan servicios de carácter permanente en una Administración Pública",
      C: "Quienes son nombrados para funciones expresamente calificadas como de confianza o asesoramiento especial",
      D: "Quienes son nombrados por razones expresamente justificadas de necesidad y urgencia para funciones temporales"
    },
    correcta: "B",
    explicacion: "El artículo 9.1 del TREBEP define a los funcionarios de carrera como aquellos que, en virtud de nombramiento legal, están vinculados a una Administración Pública por una relación estatutaria regulada por el Derecho Administrativo para el desempeño de servicios profesionales de carácter permanente.",
    referencia: "Tema 3 - TREBEP: art. 9.1"
  },
  {
    id: "T03-002",
    tema: 3,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "En el régimen disciplinario del TREBEP, ¿cuál es el plazo de prescripción de las faltas muy graves cometidas por los empleados públicos?",
    opciones: {
      A: "A los 6 meses",
      B: "Al año",
      C: "A los 2 años",
      D: "A los 3 años"
    },
    correcta: "D",
    explicacion: "Según el artículo 97.1 del TREBEP, las infracciones muy graves prescribirán a los 3 años, las graves a los 2 años y las leves a los 6 meses.",
    referencia: "Tema 3 - TREBEP: art. 97.1"
  },
  {
    id: "T04-001",
    tema: 4,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "De acuerdo con el artículo 30.2 de la Ley 39/2015 (LPACAP), cuando los plazos se señalen por días, ¿cuáles se entienden que son hábiles?",
    opciones: {
      A: "Todos los días naturales excepto los domingos",
      B: "Se excluyen del cómputo los sábados, los domingos y los declarados festivos",
      C: "Se excluyen únicamente los domingos y los festivos, computando los sábados",
      D: "Todos los días de la semana de lunes a viernes y sábados por la mañana"
    },
    correcta: "B",
    explicacion: "El art. 30.2 de la Ley 39/2015 dispone que siempre que por Ley o en el Derecho de la Unión Europea no se exprese otro cómputo, cuando los plazos se señalen por días, se entiende que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
    referencia: "Tema 4 - Ley 39/2015 (LPACAP): art. 30.2"
  },
  {
    id: "T04-002",
    tema: 4,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según la Ley 39/2015, los actos administrativos que lesionan derechos y libertades susceptibles de amparo constitucional son:",
    opciones: {
      A: "Anulables convalidables",
      B: "Nulos de pleno derecho",
      C: "Meramente irregulares sin vicio invalidante",
      D: "Eficaces de forma sobrevenida"
    },
    correcta: "B",
    explicacion: "El artículo 47.1.a) de la Ley 39/2015 declara expresamente que los actos de las Administraciones Públicas son nulos de pleno derecho en los casos en que 'lesionen los derechos y libertades susceptibles de amparo constitucional'.",
    referencia: "Tema 4 - Ley 39/2015 (LPACAP): art. 47.1.a"
  },
  {
    id: "T05-001",
    tema: 5,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "De acuerdo con el TRLRHL (RDLeg 2/2004), ¿durante cuántos días hábiles debe exponerse al público el Presupuesto General de una entidad local tras su aprobación inicial por el Pleno?",
    opciones: {
      A: "10 días hábiles",
      B: "15 días hábiles",
      C: "20 días hábiles",
      D: "1 mes natural"
    },
    correcta: "B",
    explicacion: "El artículo 169.1 del TRLRHL dispone que, aprobado inicialmente el presupuesto general, se expondrá al público, previo anuncio en el boletín oficial de la provincia o, en su caso, de la comunidad autónoma uniprovincial, por quince días hábiles, durante los cuales los interesados podrán examinarlo y presentar reclamaciones ante el Pleno.",
    referencia: "Tema 5 - TRLRHL: art. 169.1"
  },
  {
    id: "T06-001",
    tema: 6,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 25.2.n) de la Ley 7/1985 (LRBRL), ¿qué competencia propia ostenta el Municipio en relación con los centros públicos escolares?",
    opciones: {
      A: "La contratación del personal docente de educación primaria",
      B: "La aprobación del currículo oficial autonómico de la etapa infantil",
      C: "La conservación, mantenimiento y vigilancia de los edificios de titularidad local destinados a centros públicos de educación infantil, primaria o especial",
      D: "La fijación de las tasas de matrícula de la enseñanza obligatoria"
    },
    correcta: "C",
    explicacion: "El artículo 25.2.n) de la LRBRL atribuye al Municipio como competencia propia la 'conservación, mantenimiento y vigilancia de los edificios de titularidad local destinados a centros públicos de educación infantil, de educación primaria o de educación especial'.",
    referencia: "Tema 6 - LRBRL: art. 25.2.n"
  },
  {
    id: "T07-001",
    tema: 7,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según la Ley 40/2015 (LRJSP), para la válida constitución de un órgano colegiado a efectos de la celebración de sesiones y adopción de acuerdos, se requerirá la presencia:",
    opciones: {
      A: "Exclusivamente del Presidente",
      B: "Del Presidente y Secretario o en su caso de quienes les suplan, y la de la mitad al menos de sus miembros",
      C: "De la totalidad de los miembros convocados en primera convocatoria",
      D: "De dos tercios de los miembros en todo caso"
    },
    correcta: "B",
    explicacion: "El artículo 17.2 de la Ley 40/2015 establece que para la válida constitución del órgano, a efectos de celebración de sesiones, deliberaciones y toma de acuerdos, se requerirá la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso de quienes les suplan, y la de la mitad al menos de sus miembros.",
    referencia: "Tema 7 - Ley 40/2015 (LRJSP): art. 17.2"
  },
  {
    id: "T08-001",
    tema: 8,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "En el marco de la Ley 2/2015 de Transparencia de la Comunitat Valenciana, ¿cuál es el plazo general para resolver y notificar una solicitud de acceso a la información pública?",
    opciones: {
      A: "10 días hábiles",
      B: "1 mes desde la recepción de la solicitud",
      C: "3 meses improrrogables",
      D: "15 días naturales"
    },
    correcta: "B",
    explicacion: "El plazo general para resolver y notificar la resolución de una solicitud de acceso a la información pública es de 1 mes desde su recepción en el órgano competente, prorrogable por otro mes en atención a la complejidad o volumen de la información solicitada.",
    referencia: "Tema 8 - Ley 2/2015 de Transparencia CV"
  },

  // PARTE ESPECÍFICA (Temas 9 a 40)
  {
    id: "T09-001",
    tema: 9,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según la teoría de Jean Piaget, los niños y niñas entre los 7 y los 11-12 años se sitúan en el estadio de:",
    opciones: {
      A: "Inteligencia sensoriomotriz",
      B: "Pensamiento preoperacional",
      C: "Operaciones concretas",
      D: "Operaciones formales abstractas"
    },
    correcta: "C",
    explicacion: "Piaget sitúa a los menores de 7 a 11-12 años en el estadio de las 'Operaciones Concretas', caracterizado por la adquisición de la reversibilidad mental, la conservación de la materia, peso y volumen, y el declive progresivo del egocentrismo.",
    referencia: "Tema 9 - Desarrollo psicoevolutivo 6 a 12 años: estadios de Piaget"
  },
  {
    id: "T10-001",
    tema: 10,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El proceso mediante el cual el menor define la preferencia por utilizar un lado de su cuerpo (mano, ojo, pie) sobre el otro se denomina:",
    opciones: {
      A: "Tonicidad muscular",
      B: "Lateralización o lateralidad",
      C: "Disociación segmentaria",
      D: "Praxia ideomotriz"
    },
    correcta: "B",
    explicacion: "La lateralidad es la preferencia del uso de un lado del cuerpo sobre otro (diestro, zurdo o lateralidad cruzada), proceso que se consolida entre los 4 y los 7 años de edad en estrecha relación con la maduración cerebral.",
    referencia: "Tema 10 - Aspectos psicomotores del desarrollo infantil"
  },
  {
    id: "T11-001",
    tema: 11,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La distancia entre el nivel de desarrollo real de un menor y el nivel de desarrollo potencial alcanzado con la ayuda de un adulto o igual más capaz fue conceptualizada por Vygotsky como:",
    opciones: {
      A: "Zona de Desarrollo Próximo (ZDP)",
      B: "Estadio de equilibrio asimilador",
      C: "Andamiaje desestructurado",
      D: "Refuerzo secundario contingente"
    },
    correcta: "A",
    explicacion: "Lev Vygotsky definió la Zona de Desarrollo Próximo (ZDP) como la distancia entre el nivel de resolución que un niño alcanza de manera independiente (nivel real) y el nivel que alcanza bajo la guía o colaboración de un tutor competente (nivel potencial).",
    referencia: "Tema 11 - Implicaciones educativas: ZDP de Vygotsky"
  },
  {
    id: "T12-001",
    tema: 12,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál es una manifestación cognitiva prototípica del pensamiento del niño en la etapa preoperacional (hasta los 6 años) descrita por Piaget?",
    opciones: {
      A: "La capacidad de abstracción de hipótesis científicas",
      B: "El animismo infantil (atribuir vida e intenciones a objetos inanimados)",
      C: "La reversibilidad mental operatoria plena",
      D: "La conservación de volumen sin apoyo visual"
    },
    correcta: "B",
    explicacion: "El animismo es un rasgo definitorio del pensamiento preoperacional infantil (2-6 años), por el cual el menor cree que objetos inanimados (como juguetes, el sol o las piedras) poseen vida, sentimientos y voluntad.",
    referencia: "Tema 12 - Niño/a hasta los 6 años: características de Piaget"
  },
  {
    id: "T13-001",
    tema: 13,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "En la Comunitat Valenciana, de acuerdo con el Decreto 104/2018 de inclusión educativa, el Diseño Universal para el Aprendizaje (DUA) se enmarca fundamentalmente en:",
    opciones: {
      A: "El Nivel I y II de respuesta educativa inclusiva",
      B: "Exclusivamente en el Nivel IV para centros de educación especial",
      C: "Una medida extraordinaria de flexibilización temporal",
      D: "Un programa de garantía juvenil para mayores de 16 años"
    },
    correcta: "A",
    explicacion: "El DUA es un enfoque preventivo y proactivo que busca flexibilizar el diseño del currículo y las actividades para todo el grupo desde el origen (Niveles I y II de respuesta educativa según el Decreto 104/2018 de la CV), evitando tener que realizar adaptaciones 'parche' a posteriori.",
    referencia: "Tema 13 - Atención a la diversidad: Decreto 104/2018 CV y DUA"
  },
  {
    id: "T14-001",
    tema: 14,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En un taller municipal de tiempo libre, ¿cuál de las siguientes medidas constituye una estrategia didáctica de atención a la diversidad recomendada?",
    opciones: {
      A: "Excluir de las dinámicas complejas a los niños con menor destreza motriz para no ralentizar al grupo",
      B: "Proponer agrupamientos flexibles, aprendizaje cooperativo y graduar la complejidad de la tarea",
      C: "Imponer un único ritmo uniforme e inalterable para todos los participantes",
      D: "Asignar siempre tareas individuales y prohibir la interacción entre iguales"
    },
    correcta: "B",
    explicacion: "Las medidas didácticas inclusivas de atención a la diversidad se basan en la flexibilidad en los agrupamientos, el fomento del apoyo entre iguales y la posibilidad de que cada menor participe según su potencial y ritmo particular.",
    referencia: "Tema 14 - Medidas organizativas y didácticas de inclusión"
  },
  {
    id: "T15-001",
    tema: 15,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Para un menor con Trastorno del Espectro Autista (TEA) participante en un aula municipal, ¿qué recurso de apoyo organizativo resulta primordial para reducir su ansiedad ante los cambios de actividad?",
    opciones: {
      A: "Cambiar continuamente los horarios sin previo aviso para entrenar su tolerancia",
      B: "El uso de paneles de anticipación visual con pictogramas estructurados temporalmente",
      C: "El aislamiento total del grupo durante toda la jornada",
      D: "Evitar cualquier tipo de norma o límite conductual"
    },
    correcta: "B",
    explicacion: "Los niños con TEA presentan rigidez cognitiva y dificultades en la flexibilidad. La estructuración espaciotemporal mediante agendas visuales y pictogramas (como ARASAAC o metodología TEACCH) les permite anticipar lo que ocurrirá, reduciendo drásticamente la incertidumbre y la ansiedad.",
    referencia: "Tema 15 - ACNEAE: Intervención con alumnado TEA"
  },
  {
    id: "T16-001",
    tema: 16,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Los cuentos de fórmula caracterizados por ir sumando elementos sucesivamente a una misma frase o estructura repetitiva se denominan:",
    opciones: {
      A: "Cuentos de nunca acabar",
      B: "Cuentos acumulativos o seriados",
      C: "Cuentos míticos",
      D: "Cuentos de ciencia ficción"
    },
    correcta: "B",
    explicacion: "Los cuentos acumulativos o de repetición encadenada van sumando personajes o acciones a una letanía previa (por ejemplo, 'La cebra Camila' o 'El nabo gigante'). Son extraordinarios en educación infantil porque favorecen la memoria auditiva, la anticipación y la participación activa del niño.",
    referencia: "Tema 16 - Literatura infantil: tipología de cuentos"
  },
  {
    id: "T17-001",
    tema: 17,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El 'Kamishibai', recurso didáctico originario de Japón muy utilizado por monitoras infantiles en cuentacuentos, consiste en:",
    opciones: {
      A: "Un teatro de sombras chinescas realizado con siluetas translúcidas",
      B: "Un teatro de láminas de papel que se van deslizando secuencialmente dentro de un teatrillo de madera",
      C: "Una danza tradicional con abanicos de papel",
      D: "Una aplicación digital interactiva para tabletas táctiles"
    },
    correcta: "B",
    explicacion: "El Kamishibai ('teatro de papel') es una técnica de narración oral tradicional japonesa compuesta por un teatrillo de madera (butai) y un conjunto de láminas con ilustraciones en el anverso y el texto escrito en el reverso para que la narradora lo lea mientras el público contempla la escena.",
    referencia: "Tema 17 - Criterios y técnicas de narración oral: Kamishibai"
  },
  {
    id: "T18-001",
    tema: 18,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según Viktor Lowenfeld, la etapa del dibujo infantil que abarca aproximadamente de los 4 a los 7 años, donde aparecen los primeros monigotes o 'renacuajos', se denomina:",
    opciones: {
      A: "Etapa del garabateo desordenado",
      B: "Etapa preesquemática",
      C: "Etapa esquemática con línea de tierra",
      D: "Etapa del realismo visual"
    },
    correcta: "B",
    explicacion: "La etapa preesquemática (4 a 7 años) de Lowenfeld se distingue porque el niño inicia conscientemente la representación gráfica del mundo que le rodea. La figura humana suele dibujarse mediante un círculo (cabeza) del que parten directamente las extremidades ('renacuajo' o cabezudo).",
    referencia: "Tema 18 - Expresión plástica: etapas de Lowenfeld"
  },
  {
    id: "T19-001",
    tema: 19,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En la educación corporal y psicomotriz, el juego en el que el menor utiliza un palo de escoba fingiendo que es un caballo veloz constituye un ejemplo clásico de:",
    opciones: {
      A: "Juego sensoriomotor puro",
      B: "Juego simbólico ('hacer como si')",
      C: "Juego reglado formal",
      D: "Juego de construcción milimétrica"
    },
    correcta: "B",
    explicacion: "El juego simbólico surge en torno a los dos años con la función simbólica o semiótica. Permite al niño evocar objetos o situaciones ausentes mediante significantes sustitutivos (transformar un palo en caballo o una caja en un coche), fundamental para la canalización emocional y el ensayo de roles.",
    referencia: "Tema 19 - Educación corporal y juego simbólico"
  },
  {
    id: "T20-001",
    tema: 20,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Por qué los niños menores de 7-8 años son especialmente vulnerables ante la publicidad comercial televisiva y digital?",
    opciones: {
      A: "Porque no pueden oír con claridad los sonidos agudos de los anuncios",
      B: "Porque presentan dificultades evolutivas para distinguir la intención persuasiva de la publicidad de los contenidos del programa",
      C: "Porque tienen memoria a largo plazo hiperdesarrollada",
      D: "Porque rechazan sistemáticamente cualquier elemento lúdico o musical"
    },
    correcta: "B",
    explicacion: "En los menores de 7-8 años prima el pensamiento intuitivo; carecen del juicio crítico necesario para diferenciar la ficción o entretenimiento del mensaje publicitario cuya finalidad única es inducir el consumo.",
    referencia: "Tema 20 - Influencia de la imagen y publicidad en la infancia"
  },
  {
    id: "T21-001",
    tema: 21,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "En el desarrollo de una actividad educativa de tiempo libre, ¿qué requisito legal es imprescindible antes de tomar y publicar fotografías de menores participantes en la web municipal?",
    opciones: {
      A: "Que las fotografías se tomen en horario lectivo únicamente",
      B: "Contar con el consentimiento expreso, previo e informado de los progenitores o tutores legales",
      C: "Que el fotógrafo sea personal funcionario de carrera",
      D: "Basta con el visto bueno verbal del menor de 5 años"
    },
    correcta: "B",
    explicacion: "En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la LOPDGDD, la captación y difusión de imágenes de menores requiere inexcusablemente el consentimiento expreso y documentado de los titulares de la patria potestad o tutela.",
    referencia: "Tema 21 - Criterios de uso de TIC y privacidad infantil"
  },
  {
    id: "T22-001",
    tema: 22,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La responsabilidad civil que corresponde a las monitoras y educadores de tiempo libre respecto a los daños que puedan sufrir o causar los menores mientras están bajo su custodia efectiva se fundamenta jurídicamente en el deber de:",
    opciones: {
      A: "In eligendo exclusivo de la empresa adjudicataria",
      B: "Vigilancia y custodia activa ('culpa in vigilando')",
      C: "Inoperancia funcional del contrato laboral",
      D: "Indemnidad tácita del voluntariado social"
    },
    correcta: "B",
    explicacion: "El deber 'in vigilando' exige a los educadores y monitores prestar una atención constante y adecuada a la edad y circunstancias de los menores a su cargo para salvaguardar su integridad y evitar perjuicios a terceros.",
    referencia: "Tema 22 - El monitor como educador: deber de vigilancia 'in vigilando'"
  },
  {
    id: "T23-001",
    tema: 23,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál de las siguientes propuestas metodológicas fomenta la coeducación y la igualdad efectiva en un patio o escuela de verano municipal?",
    opciones: {
      A: "Separar el patio en una zona para niños (fútbol) y otra para niñas (manualidades)",
      B: "Redistribuir el espacio para ofrecer juegos cooperativos diversos, rotación de actividades y uso compartido de las zonas centrales",
      C: "Prohibir totalmente que las niñas jueguen a deportes de pelota",
      D: "Permitir que un grupo mayoritario monopolice permanentemente la pista deportiva central"
    },
    correcta: "B",
    explicacion: "La coeducación en los espacios de juego busca democratizar y diversificar el uso del espacio escolar o recreativo, impidiendo la monopolización por deportes invasivos y promoviendo la participación mixta en múltiples propuestas.",
    referencia: "Tema 23 - Educación en valores: coeducación e igualdad"
  },
  {
    id: "T24-001",
    tema: 24,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Ley Orgánica 8/2021 (LOPIVI) de protección integral a la infancia y la adolescencia frente a la violencia incorpora como figura clave en entidades de ocio y centros escolares al:",
    opciones: {
      A: "Comisario de disciplina juvenil",
      B: "Delegado o Delegada de Protección de los menores",
      C: "Inspector tutor laboral",
      D: "Juez instructor de menores en prácticas"
    },
    correcta: "B",
    explicacion: "El art. 48 de la LOPIVI (Ley Orgánica 8/2021) establece la obligatoriedad de designar la figura del 'Delegado o Delegada de Protección' en centros educativos y entidades que realicen actividades deportivas o de ocio con menores.",
    referencia: "Tema 24 - Derechos del niño y LOPIVI (LO 8/2021): art. 48"
  },
  {
    id: "T25-001",
    tema: 25,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "¿Cuál es la diferencia técnico-jurídica fundamental entre una situación de riesgo social del menor y una situación de desamparo legal?",
    opciones: {
      A: "En el riesgo se suspende automáticamente la patria potestad judicialmente",
      B: "En el riesgo se mantiene la permanencia del menor en su núcleo familiar mediante apoyo municipal, mientras que en el desamparo se produce la tutela administrativa y separación del menor",
      C: "El riesgo solo aplica a menores de 3 años y el desamparo a adolescentes",
      D: "No existe ninguna diferencia, ambos términos son sinónimos legales"
    },
    correcta: "B",
    explicacion: "La situación de riesgo (art. 17 Ley 1/1996) permite mantener al menor con su familia apoyada por Servicios Sociales; el desamparo (art. 172 Código Civil) supone la privación de la asistencia moral o material debida y determina por ministerio de la ley la asunción de la tutela por la entidad pública autonómica.",
    referencia: "Tema 25 - Infancia en riesgo social: distinción riesgo vs. desamparo"
  },
  {
    id: "T26-001",
    tema: 26,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "La desatención reiterada y crónica de las necesidades básicas de un menor (higiene, alimentación, salud médica y vestimenta adecuada), disponiendo los progenitores de recursos para cubrirlas, se tipifica como:",
    opciones: {
      A: "Maltrato institucional",
      B: "Negligencia o abandono físico",
      C: "Síndrome de Munchausen por poderes",
      D: "Conflicto parental de custodia compartida"
    },
    correcta: "B",
    explicacion: "La negligencia o abandono físico consiste en la falta de atención o desinterés voluntario y continuado respecto a las necesidades físicas, sanitarias y educativas esenciales del menor, disponiendo de medios para atenderlas.",
    referencia: "Tema 26 - Indicadores de maltrato infantil: negligencia y abandono"
  },
  {
    id: "T27-001",
    tema: 27,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El modelo educativo promovido en las Escuelas de Padres y Madres que rechaza el castigo físico o humillante y prioriza el afecto, la estimulación y los límites razonados se conoce como:",
    opciones: {
      A: "Parentalidad autoritaria rígida",
      B: "Parentalidad permisiva 'laissez-faire'",
      C: "Parentalidad positiva",
      D: "Crianza conductista de extinción pasiva"
    },
    correcta: "C",
    explicacion: "La parentalidad positiva (Recomendación Rec(2006)19 del Consejo de Europa) promueve relaciones paternofiliales basadas en el afecto, el apoyo, la comunicación no violenta, la estructuración de rutinas y límites claros sin violencia.",
    referencia: "Tema 27 - Escuelas de padres y madres: parentalidad positiva"
  },
  {
    id: "T28-001",
    tema: 28,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En un programa municipal de estudio vigilado, ¿cuál debe ser la intervención metodológica adecuada de la monitora cuando un alumno manifiesta dificultades con una tarea escolar?",
    opciones: {
      A: "Resolverle directamente el ejercicio en su cuaderno para que termine rápido",
      B: "Guiarlo mediante preguntas socráticas, modelado de técnicas de estudio y fomento de su autonomía personal",
      C: "Castigarlo sin recreo de descanso por no saber la respuesta",
      D: "Apartarlo del aula y prohibirle pedir ayuda a sus compañeros"
    },
    correcta: "B",
    explicacion: "El estudio vigilado busca la autonomía y el desarrollo de competencias de aprendizaje del alumno ('aprender a aprender'); la monitora debe actuar como facilitadora y mediadora mediante preguntas guía, nunca sustituir al menor realizando sus deberes.",
    referencia: "Tema 28 - Programa de estudio vigilado: metodología pedagógica"
  },
  {
    id: "T29-001",
    tema: 29,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La técnica de habilidades sociales en la que el menor observa a la monitora o a un compañero realizar una conducta adecuada y posteriormente la ensaya se denomina:",
    opciones: {
      A: "Extinción encubierta",
      B: "Modelado o aprendizaje vicario",
      C: "Saturación estimular",
      D: "Inundación emocional"
    },
    correcta: "B",
    explicacion: "El modelado (propuesto por Albert Bandura en la Teoría del Aprendizaje Social) se basa en la observación de un modelo competente y la posterior imitación o reproducción guiada de la conducta esperada.",
    referencia: "Tema 29 - Habilidades sociales: modelado de Bandura"
  },
  {
    id: "T30-001",
    tema: 30,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "En modificación de conducta, la retirada planificada de atención por parte de la monitora ante una rabieta o queja que busca exclusivamente llamar la atención corresponde a la técnica de:",
    opciones: {
      A: "Coste de respuesta",
      B: "Extinción",
      C: "Refuerzo negativo",
      D: "Desensibilización sistemática"
    },
    correcta: "B",
    explicacion: "La extinción consiste en dejar de dispensar el reforzador que mantenía la conducta inadecuada (en este caso, la atención social de la monitora o de los iguales), lo que conduce a la disminución gradual de su frecuencia.",
    referencia: "Tema 30 - Técnicas cognitivo-conductuales: extinción"
  },
  {
    id: "T31-001",
    tema: 31,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Ante un posible caso de acoso escolar detectado en una actividad municipal, ¿cuál es la primera actuación correcta de la monitora?",
    opciones: {
      A: "Esperar a que se repita el incidente para estar completamente segura",
      B: "Comunicarlo de inmediato a la coordinación del programa y activar el protocolo oficial, protegiendo prioritariamente a la víctima",
      C: "Enfrentar directamente al presunto acosador delante de todo el grupo",
      D: "Informar únicamente a la familia del presunto acosador sin dejar constancia escrita"
    },
    correcta: "B",
    explicacion: "El protocolo exige comunicar el caso de inmediato al responsable y activar el protocolo de actuación, garantizando la protección de la víctima, sin confrontaciones públicas ni demoras.",
    referencia: "Tema 31 - Acoso escolar: protocolo de actuación oficial"
  },
  {
    id: "T31-002",
    tema: 31,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuáles son los tres elementos indispensables que definen técnicamente una situación de acoso escolar frente a un conflicto puntual?",
    opciones: {
      A: "Intencionalidad, reiteración en el tiempo y desequilibrio manifiesto de poder",
      B: "Falta de asistencia escolar, agresión con arma y notas suspensas",
      C: "Discusión entre amigos, reconciliación rápida y bromas consentidas",
      D: "Ser menor de 6 años, haber cambiado de colegio y tener hermanos mayores"
    },
    correcta: "A",
    explicacion: "Los tres criterios unánimes de la literatura psicopedagógica y los protocolos oficiales para definir el acoso escolar son: intencionalidad de dañar, reiteración o prolongación en el tiempo, y asimetría o desequilibrio de poder entre agresor y víctima.",
    referencia: "Tema 31 - Acoso escolar: elementos constitutivos"
  },
  {
    id: "T32-001",
    tema: 32,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Durante la celebración de la Escuela Estival de Sant Joan d'Alacant, en días con alerta decretada por ola de calor severa, ¿cuál de las siguientes medidas operativas debe adoptar la monitora?",
    opciones: {
      A: "Organizar competiciones intensas de carrera continua al aire libre al mediodía para activar el sudor",
      B: "Trasladar las actividades físicas a espacios cubiertos o climatizados, evitar la exposición solar directa en horas centrales y garantizar hidratación constante",
      C: "Cerrar completamente el recinto escolar y enviar a los niños a casa de inmediato sin avisar a los padres",
      D: "Prohibir el consumo de agua durante las actividades lúdicas para no interrumpir el ritmo"
    },
    correcta: "B",
    explicacion: "El protocolo de prevención frente a olas de calor exige sustituir actividades de esfuerzo al aire libre por actividades a la sombra o en espacios climatizados en las horas de máxima insolación (12:00 a 16:00), con pautas continuas de hidratación y protección solar.",
    referencia: "Tema 32 - Escuelas estivales: seguridad y olas de calor"
  },
  {
    id: "T33-001",
    tema: 33,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El servicio de 'Aula Matinera' municipal, encuadrado en los programas de conciliación familiar y laboral, tiene como horario habitual de funcionamiento:",
    opciones: {
      A: "De 7:30 a 9:00 horas, antes del inicio formal de las clases lectivas",
      B: "De 14:00 a 17:00 horas exclusivamente",
      C: "Durante las madrugadas de los fines de semana",
      D: "De 12:00 a 13:00 horas coincidiendo con el recreo escolar"
    },
    correcta: "A",
    explicacion: "El Aula Matinera es un servicio municipal de conciliación que acoge a los menores de 7:30 h (o franjas similares) a 9:00 h, ofreciendo un entorno relajado, desayuno opcional y juegos tranquilos antes de la entrada al colegio.",
    referencia: "Tema 33 - Programa de conciliación: Aula Matinera"
  },
  {
    id: "T34-001",
    tema: 34,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La cualidad del sonido que permite diferenciar dos sonidos con la misma frecuencia e intensidad producidos por instrumentos o fuentes distintas (por ejemplo, una flauta y un tambor) es:",
    opciones: {
      A: "La duración",
      B: "La altura",
      C: "El timbre",
      D: "El volumen"
    },
    correcta: "C",
    explicacion: "El timbre es la cualidad o 'color' del sonido que nos permite identificar la fuente sonora que lo emite, determinada por los armónicos que acompañan a la frecuencia fundamental.",
    referencia: "Tema 34 - Educación musical infantil: parámetros del sonido"
  },
  {
    id: "T35-001",
    tema: 35,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Los instrumentos musicales confeccionados por los propios niños y niñas utilizando objetos cotidianos o de desecho reciclados (latas, botellas, cartón) se conocen didácticamente como:",
    opciones: {
      A: "Cotidiófonos",
      B: "Membranófonos clásicos",
      C: "Idiófonos orquestales",
      D: "Electroacústicos"
    },
    correcta: "A",
    explicacion: "El término 'cotidiófonos' (acuñado por Judith Akoschky) designa a aquellos instrumentos o generadores de sonido fabricados a partir de materiales y objetos de uso diario o reciclado.",
    referencia: "Tema 35 - Actividades musicales y recursos: cotidiófonos"
  },
  {
    id: "T36-001",
    tema: 36,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el sociólogo Joffre Dumazedier, las tres funciones básicas del tiempo de ocio ('las 3 D del ocio') son:",
    opciones: {
      A: "Dinero, Deporte y Descanso",
      B: "Descanso, Diversión y Desarrollo de la personalidad",
      C: "Disciplina, Deber y Devolución",
      D: "Digitalización, Desconexión y Deriva"
    },
    correcta: "B",
    explicacion: "Dumazedier formuló que el ocio cumple tres funciones fundamentales: Descanso (recuperación de la fatiga), Diversión (compensación lúdica y entretenimiento) y Desarrollo (enriquecimiento de la personalidad y creatividad).",
    referencia: "Tema 36 - Sociología del ocio: las 3 D de Dumazedier"
  },
  {
    id: "T37-001",
    tema: 37,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Al planificar una actividad socioeducativa municipal con menores que presentan discapacidad motora en silla de ruedas, la monitora debe aplicar:",
    opciones: {
      A: "Ajustes razonables y adaptación de espacios y reglas del juego para garantizar su participación activa",
      B: "Eximirles de participar y dejarlos como espectadores pasivos en una esquina",
      C: "Obligarles a levantarse de la silla para realizar el mismo ejercicio que el resto",
      D: "Suspender la actividad para todo el grupo"
    },
    correcta: "A",
    explicacion: "El principio de accesibilidad universal y ajustes razonables exige adaptar los materiales, las normas del juego y los recorridos para que los menores con movilidad reducida participen en igualdad de condiciones con sus compañeros.",
    referencia: "Tema 37 - Colectivos con dificultades especiales y ajustes razonables"
  },
  {
    id: "T38-001",
    tema: 38,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "De conformidad con la Ley 38/2003 General de Subvenciones, la concesión ordinaria de ayudas municipales a proyectos educativos debe regirse con carácter general por el procedimiento de:",
    opciones: {
      A: "Concurrencia competitiva",
      B: "Concesión directa discrecional sin informe",
      C: "Contratación menor no publicada",
      D: "Adjudicación por sorteo notarial"
    },
    correcta: "A",
    explicacion: "El artículo 22.1 de la Ley 38/2003 establece que el procedimiento ordinario de concesión de subvenciones se tramitará en régimen de concurrencia competitiva, en virtud del cual se realiza una comparación de solicitudes con arreglo a los criterios fijados en las bases.",
    referencia: "Tema 38 - Subvenciones municipales: art. 22.1 LGS concurrencia competitiva"
  },
  {
    id: "T39-001",
    tema: 39,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En las campañas educativas municipales sobre riesgos en internet dirigidas a menores de 6 a 12 años, la práctica de un adulto que finge ser un menor para ganarse la confianza de un niño con fines sexuales se denomina:",
    opciones: {
      A: "Phishing bancario",
      B: "Grooming (ciberacoso pederasta)",
      C: "Spam publicitario",
      D: "Sharenting familiar"
    },
    correcta: "B",
    explicacion: "El grooming es una forma de ciberdelincuencia en la que un adulto establece una relación de confianza y engaño con un menor a través de internet con el objetivo deliberado de obtener favores sexuales o material pedófilo.",
    referencia: "Tema 39 - Campañas sobre redes sociales: prevención del grooming"
  },
  {
    id: "T40-001",
    tema: 40,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En el programa escolar 'Escolares responsables con las nuevas tecnologías', ¿qué término define al conjunto de normas de cortesía, respeto y convivencia pacífica aplicables en las comunicaciones digitales?",
    opciones: {
      A: "Netiqueta",
      B: "Firewall moral",
      C: "Ciberseguridad cuántica",
      D: "Algoritmo de control parental"
    },
    correcta: "A",
    explicacion: "La 'netiqueta' (etiqueta de la red) comprende las pautas de conducta social, respeto mutuo y cortesía que deben observarse al interactuar mediante correo electrónico, foros, redes sociales o chats grupales escolares.",
    referencia: "Tema 40 - Escolares responsables con TIC: netiqueta"
  },
  {
    id: "T01-003",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 14 de la Constitución Española proclama el principio de igualdad de los españoles ante la ley. ¿Cuál de las siguientes afirmaciones es correcta?",
    opciones: {
      A: "Solo prohíbe la discriminación por razón de nacimiento, pero no por religión u opinión",
      B: "Prohíbe que prevalezca discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social",
      C: "Solo se aplica a ciudadanos mayores de edad con plenitud de derechos políticos",
      D: "Permite la discriminación salarial por motivos de pertenencia territorial"
    },
    correcta: "B",
    explicacion: "El art. 14 CE dispone que los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por nacimiento, raza, sexo, religión, opinión o cualquier otra condición personal o social.",
    referencia: "Tema 1 - Constitución Española: art. 14 principio de igualdad"
  },
  {
    id: "T02-003",
    tema: 2,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el Estatuto de Autonomía de la Comunitat Valenciana, ¿quién nombra al President de la Generalitat una vez otorgada la confianza por Les Corts?",
    opciones: {
      A: "El Presidente del Gobierno de España mediante Real Decreto",
      B: "El Rey mediante Real Decreto",
      C: "El Presidente de Les Corts Valencianes",
      D: "El Consejo de Ministros"
    },
    correcta: "B",
    explicacion: "El artículo 27.1 del EACV establece que el President de la Generalitat será elegido por Les Corts de entre sus miembros y nombrado por el Rey.",
    referencia: "Tema 2 - Estatuto de Autonomía CV: art. 27.1 nombramiento del President"
  },
  {
    id: "T03-003",
    tema: 3,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "En virtud del TREBEP (RDLeg 5/2015), ¿a los cuántos años prescriben las faltas disciplinarias MUY GRAVES cometidas por los empleados públicos?",
    opciones: {
      A: "A los 6 meses",
      B: "A los 2 años",
      C: "A los 3 años",
      D: "A los 5 años"
    },
    correcta: "C",
    explicacion: "Conforme al artículo 97 del TREBEP, las infracciones muy graves prescriben a los 3 años, las graves a los 2 años y las leves a los 6 meses.",
    referencia: "Tema 3 - TREBEP: art. 97 prescripción de faltas y sanciones"
  },
  {
    id: "T04-003",
    tema: 4,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "De acuerdo con el artículo 21 de la Ley 39/2015 (LPACAP), cuando las normas reguladoras de los procedimientos no fijen un plazo máximo para notificar la resolución expresa, este será de:",
    opciones: {
      A: "1 mes",
      B: "3 meses",
      C: "6 meses",
      D: "1 año"
    },
    correcta: "B",
    explicacion: "El artículo 21.3 de la Ley 39/2015 estipula que cuando las normas reguladoras no fijen plazo máximo, este será de 3 meses contados conforme a las reglas del precepto.",
    referencia: "Tema 4 - Ley 39/2015: art. 21.3 plazo máximo de resolución"
  },
  {
    id: "T05-002",
    tema: 5,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el TRLRHL (RDLeg 2/2004), el presupuesto general de una entidad local contendrá para cada ejercicio económico:",
    opciones: {
      A: "Únicamente la previsión de ingresos tributarios",
      B: "La previsión de los ingresos a liquidar y la limitación de los gastos a comprometer",
      C: "Un catálogo de deseos no vinculante jurídicamente",
      D: "Solo las nóminas del personal laboral indefinido"
    },
    correcta: "B",
    explicacion: "El art. 162 del TRLRHL define los presupuestos generales de las entidades locales como la expresión cifrada, conjunta y sistemática de las obligaciones (gastos con carácter limitativo) y derechos (ingresos con carácter estimativo).",
    referencia: "Tema 5 - TRLRHL: art. 162 concepto y contenido del presupuesto"
  },
  {
    id: "T06-002",
    tema: 6,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "De conformidad con el artículo 25.2.n de la Ley 7/1985 (LRBRL), los municipios ejercerán en todo caso competencias propias en materia de:",
    opciones: {
      A: "Participar en la vigilancia del cumplimiento de la escolaridad obligatoria y cooperar con las Administraciones educativas en la obtención de solares y sostenimiento de centros",
      B: "Diseñar los planes de estudio universitarios oficiales de grado y máster",
      C: "Fijar el salario base de los inspectores de educación del Estado",
      D: "Aprobar las leyes orgánicas educativas"
    },
    correcta: "A",
    explicacion: "El art. 25.2.n de la LRBRL atribuye al municipio como competencia propia participar en la vigilancia de la escolaridad obligatoria y cooperar en la conservación y mantenimiento de centros públicos de educación infantil y primaria.",
    referencia: "Tema 6 - Ley 7/1985 (LRBRL): art. 25.2.n competencias educativas municipales"
  },
  {
    id: "T07-002",
    tema: 7,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Para la válida constitución del Pleno de una Corporación Local en primera convocatoria se requiere la asistencia de:",
    opciones: {
      A: "Al menos la mayoría absoluta del número legal de miembros",
      B: "Un tercio del número legal de miembros, que nunca podrá ser inferior a tres, requiriéndose siempre la presencia de Presidente y Secretario o quienes legalmente les sustituyan",
      C: "La totalidad de los concejales electos sin excepción",
      D: "Únicamente el Alcalde y el Interventor municipal"
    },
    correcta: "B",
    explicacion: "El art. 46.2.c de la Ley 7/1985 dispone que el Pleno se constituye válidamente con la asistencia de un tercio del número legal de miembros, nunca inferior a tres, requiriéndose la presencia del Presidente y Secretario.",
    referencia: "Tema 7 - Régimen local: art. 46.2.c LRBRL quórum del Pleno"
  },
  {
    id: "T08-002",
    tema: 8,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Ley 1/2022 de Transparencia y Buen Gobierno de la Comunitat Valenciana garantiza a la ciudadanía el derecho de acceso a la información pública. Dicho derecho:",
    opciones: {
      A: "Exige que el solicitante acredite un interés legítimo directo y cualificado",
      B: "Puede ejercerse sin necesidad de motivar la solicitud, no estando condicionado a un interés personal",
      C: "Solo puede ejercerse mediante procurador y abogado colegiado",
      D: "Está prohibido para personas empadronadas en municipios de menos de 50.000 habitantes"
    },
    correcta: "B",
    explicacion: "El derecho de acceso a la información pública no exige motivar la solicitud ni demostrar un interés cualificado; cualquier persona puede solicitar información pública en los términos de la Ley 19/2013 y Ley CV 1/2022.",
    referencia: "Tema 8 - Transparencia CV: derecho de acceso a la información pública"
  },
  {
    id: "T09-002",
    tema: 9,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En la teoría del desarrollo cognitivo de Jean Piaget, el tramo de edad escolar de 7 a 11 años se corresponde con el estadio de:",
    opciones: {
      A: "Inteligencia sensoriomotora",
      B: "Pensamiento preoperacional simbólico",
      C: "Operaciones concretas",
      D: "Operaciones formales abstractas"
    },
    correcta: "C",
    explicacion: "Piaget sitúa entre los 7 y los 11/12 años el estadio de las operaciones concretas, donde el menor adquiere la reversibilidad del pensamiento, la conservación y la clasificación lógica ligada a la realidad perceptible.",
    referencia: "Tema 9 - Desarrollo cognitivo infantil: estadio de operaciones concretas de Piaget"
  },
  {
    id: "T10-002",
    tema: 10,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Las dos leyes psicofisiológicas universales que rigen la maduración neuromotriz infantil son:",
    opciones: {
      A: "Ley centrífuga y ley cinética",
      B: "Ley céfalo-caudal y ley próximo-distal",
      C: "Ley de la inercia y ley de gravitación",
      D: "Ley de asimilación y ley de acomodación"
    },
    correcta: "B",
    explicacion: "El control motor progresa desde la cabeza hacia los pies (ley céfalo-caudal) y desde el eje central del cuerpo hacia las extremidades periféricas (ley próximo-distal).",
    referencia: "Tema 10 - Desarrollo psicomotor: leyes céfalo-caudal y próximo-distal"
  },
  {
    id: "T11-002",
    tema: 11,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El concepto de 'Zona de Desarrollo Próximo' (ZDP), formulado por Lev Vygotsky, se define como:",
    opciones: {
      A: "La distancia entre el nivel de desarrollo real determinado por la capacidad de resolver independientemente un problema y el nivel de desarrollo potencial guiado por un adulto o compañero capaz",
      B: "La zona geográfica donde se ubica el aula escolar",
      C: "El radio de acción del patio de recreo para el juego motor",
      D: "El tiempo máximo que un niño puede permanecer sentado en silencio"
    },
    correcta: "A",
    explicacion: "Vygotsky definió la ZDP como el espacio interpersonal en el que el aprendizaje se produce gracias a la mediación y el andamiaje proporcionado por el educador o monitor.",
    referencia: "Tema 11 - Desarrollo cognitivo y lenguaje: Zona de Desarrollo Próximo de Vygotsky"
  },
  {
    id: "T12-002",
    tema: 12,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según la teoría del desarrollo moral de Lawrence Kohlberg, el nivel 'convencional' (habitual a partir de los 9-10 años) se caracteriza por:",
    opciones: {
      A: "Obedecer las normas solo por miedo al castigo físico inmediato",
      B: "El acatamiento de las normas y expectativas sociales para mantener el orden del grupo y sentirse aceptado ('buen chico/buena chica')",
      C: "El razonamiento basado exclusivamente en principios éticos universales superiores a la ley",
      D: "La ausencia total de conciencia de las consecuencias de los propios actos"
    },
    correcta: "B",
    explicacion: "En el nivel convencional de Kohlberg, el individuo internaliza las normas del grupo social y busca la conformidad con el orden establecido y las expectativas de los demás.",
    referencia: "Tema 12 - Desarrollo moral: niveles y estadios de Lawrence Kohlberg"
  },
  {
    id: "T13-002",
    tema: 13,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "El Decreto 104/2018 de la Generalitat Valenciana estructura la respuesta educativa para la inclusión en cuatro niveles. ¿A qué nivel corresponden las medidas de acceso singularizadas que requieren apoyos personales especializados permanentes?",
    opciones: {
      A: "Nivel I (centro)",
      B: "Nivel II (grupo-aula)",
      C: "Nivel III (apoyo ordinario)",
      D: "Nivel IV (respuesta personalizada y singularizada especializada)"
    },
    correcta: "D",
    explicacion: "El Nivel IV del Decreto 104/2018 engloba las medidas de respuesta personalizada y singularizada que conllevan adaptaciones curriculares individuales significativas o recursos de apoyo especializado de alta intensidad.",
    referencia: "Tema 13 - Decreto 104/2018 CV de inclusión: Nivel IV de respuesta educativa"
  },
  {
    id: "T14-002",
    tema: 14,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuáles son los 3 principios fundamentales en los que se asienta el Diseño Universal para el Aprendizaje (DUA)?",
    opciones: {
      A: "Múltiples formas de representación, múltiples formas de acción y expresión, y múltiples formas de implicación",
      B: "Exámenes escritos, castigos tipificados y lecturas obligatorias",
      C: "Separación por géneros, pruebas psicométricas y notas numéricas",
      D: "Memoria visual, fuerza física y velocidad de carrera"
    },
    correcta: "A",
    explicacion: "El marco DUA (CAST) se articula en torno a 3 redes cerebrales y principios: proporcionar múltiples medios de representación (el 'qué'), de acción y expresión (el 'cómo') y de implicación/motivación (el 'porqué').",
    referencia: "Tema 14 - DUA: los tres principios de inclusión pedagógica"
  },
  {
    id: "T15-002",
    tema: 15,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Para facilitar la participación activa y reducir la ansiedad de un menor con Trastorno del Espectro Autista (TEA) en la ludoteca municipal, la monitora debe emplear prioritariamente:",
    opciones: {
      A: "Ruidos imprevistos constantes para entrenar su tolerancia",
      B: "Agendas visuales con pictogramas y anticipación clara de las secuencias de actividad y transiciones",
      C: "Castigar sus estereotipias motoras aislándolo del grupo",
      D: "Cambiar continuamente las reglas del juego sin previo aviso"
    },
    correcta: "B",
    explicacion: "Las agendas visuales y la anticipación estructurada proporcionan predictibilidad y seguridad, reduciendo la desregulación emocional ante los cambios en personas con TEA.",
    referencia: "Tema 15 - TEA: adaptación de entornos y apoyos visuales estructurados"
  },
  {
    id: "T16-002",
    tema: 16,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La medida pedagógica consistente en ampliar la profundidad y variedad de los contenidos y actividades sin avanzar de curso a un menor con altas capacidades intelectuales se denomina:",
    opciones: {
      A: "Aceleración de etapa",
      B: "Enriquecimiento curricular",
      C: "Retención de nivel",
      D: "Aislamiento intelectual"
    },
    correcta: "B",
    explicacion: "El enriquecimiento curricular consiste en diversificar y profundizar en las experiencias de aprendizaje e investigación adaptadas a los intereses del alumno con altas capacidades en su grupo de edad habitual.",
    referencia: "Tema 16 - Altas capacidades: enriquecimiento curricular"
  },
  {
    id: "T17-002",
    tema: 17,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Los talleres extraescolares, las escuelas estivales y las actividades de la ludoteca municipal organizadas por el Ayuntamiento se clasifican en el ámbito de:",
    opciones: {
      A: "La educación formal reglada universitaria",
      B: "La educación no formal",
      C: "La educación informal difusa involuntaria",
      D: "La instrucción militar básica"
    },
    correcta: "B",
    explicacion: "La educación no formal comprende toda actividad educativa organizada, intencional y planificada que se desarrolla fuera del marco del sistema educativo formal reglado (títulos oficiales obligatorios).",
    referencia: "Tema 17 - Educación no formal: concepto y características en el ámbito municipal"
  },
  {
    id: "T18-002",
    tema: 18,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Cuál es la fase inicial imprescindible en el diseño de cualquier proyecto socioeducativo municipal de infancia antes de fijar objetivos y actividades?",
    opciones: {
      A: "La liquidación del presupuesto",
      B: "El diagnóstico o evaluación inicial de necesidades del colectivo y del entorno",
      C: "La entrega de diplomas finales a los niños",
      D: "La contratación definitiva de empresas de catering"
    },
    correcta: "B",
    explicacion: "Todo proyecto socioeducativo debe comenzar con un diagnóstico de necesidades para conocer la realidad, características y demandas de la población destinataria antes de planificar objetivos y recursos.",
    referencia: "Tema 18 - Proyectos socioeducativos: fases de formulación"
  },
  {
    id: "T20-002",
    tema: 20,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La técnica de dinámica grupal 'Phillips 66' consiste en:",
    opciones: {
      A: "Dividir un grupo numeroso en subgrupos de 6 personas para discutir un tema durante 6 minutos",
      B: "Hacer 6 preguntas tipo test a 60 alumnos en 6 segundos",
      C: "Pintar un mural con 6 colores diferentes durante 6 semanas",
      D: "Expulsar del aula a 6 alumnos por cada falta cometida"
    },
    correcta: "A",
    explicacion: "El Phillips 66, ideado por J. Donald Phillips, fracciona un grupo en equipos de 6 miembros que debaten un aspecto concreto durante 6 minutos, nombrando un portavoz que resume las conclusiones al plenario.",
    referencia: "Tema 20 - Dinamización grupal: técnica Phillips 66"
  },
  {
    id: "T21-002",
    tema: 21,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En un proceso de mediación escolar o resolución pacífica de conflictos infantiles, el papel de la monitora mediadora debe ser:",
    opciones: {
      A: "Imponer una sentencia castigando unilateralmente a ambas partes",
      B: "Actuar como tercera parte imparcial y neutral que facilita la comunicación para que las propias partes alcancen un acuerdo consensuado",
      C: "Tomar partido explícito a favor del menor con mejor comportamiento habitual",
      D: "Obligarles a darse la mano sin permitirles expresar lo ocurrido"
    },
    correcta: "B",
    explicacion: "La mediadora no juzga ni impone soluciones; su rol es neutral y facilitador del diálogo constructivo, ayudando a las partes a empatizar y generar acuerdos compartidos.",
    referencia: "Tema 21 - Resolución pacífica de conflictos: principios de la mediación"
  },
  {
    id: "T22-002",
    tema: 22,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según la clasificación clásica del juego infantil formulada por Jean Piaget, los tres tipos evolutivos sucesivos son:",
    opciones: {
      A: "Juego de azar, juego de tablero y juego de casino",
      B: "Juego sensoriomotor (o de ejercicio), juego simbólico y juego de reglas",
      C: "Juego pasivo, juego agresivo y juego indiferente",
      D: "Juego digital, juego mecánico y juego químico"
    },
    correcta: "B",
    explicacion: "Piaget demostró que las estructuras de juego evolucionan desde el juego de ejercicio sensoriomotor (0-2 años), pasando por el juego simbólico (2-6 años) hasta culminar en el juego reglado social (a partir de los 6-7 años).",
    referencia: "Tema 22 - El juego infantil: tipología evolutiva de Jean Piaget"
  },
  {
    id: "T24-002",
    tema: 24,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "Ante un accidente con corte sangrante en el patio, el orden correcto de actuación protocolaria en primeros auxilios según el acrónimo P.A.S. es:",
    opciones: {
      A: "Preguntar, Abrazar, Solucionar",
      B: "Proteger (el lugar del accidente), Avisar (a los servicios de emergencia) y Socorrer (a la víctima)",
      C: "Precipitarse, Alertar a la prensa y Salir corriendo",
      D: "Parar la respiración, Administrar antibióticos y Sedar"
    },
    correcta: "B",
    explicacion: "La conducta PAS es el principio básico de los primeros auxilios: Proteger a la víctima y a uno mismo de nuevos peligros, Avisar al 112 facilitando ubicación exacta, y Socorrer aplicando maniobras asistenciales básicas.",
    referencia: "Tema 24 - Primeros auxilios y emergencias: conducta PAS"
  },
  {
    id: "T25-002",
    tema: 25,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "De acuerdo con el Reglamento (UE) nº 1169/2011 sobre información alimentaria facilitada al consumidor, ¿cuántos alérgenos e ingredientes de obligada declaración existen en las fichas de menús y comedores?",
    opciones: {
      A: "4",
      B: "8",
      C: "14",
      D: "26"
    },
    correcta: "C",
    explicacion: "El anexo II del Reglamento (UE) 1169/2011 establece la lista de 14 sustancias o productos que causan alergias o intolerancias de mención obligatoria en la restauración y comedores escolares.",
    referencia: "Tema 25 - Alergias alimentarias: los 14 alérgenos del Reglamento UE 1169/2011"
  },
  {
    id: "T26-002",
    tema: 26,
    categoria: "Especifica",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "La Ley Orgánica 8/2021 (LOPIVI) impone a cualquier persona o profesional que detecte una situación de violencia o riesgo contra un menor el deber de:",
    opciones: {
      A: "Guardar silencio si los progenitores son personas influyentes",
      B: "Comunicarlo de forma inmediata a la autoridad competente o fuerzas de seguridad, sin que pueda demorarse bajo ningún pretexto",
      C: "Esperar a que el menor cumpla 18 años para que declare por sí mismo",
      D: "Pedir permiso previo a los presuntos agresores"
    },
    correcta: "B",
    explicacion: "El art. 15 de la LOPIVI consagra el deber general y reforzado de comunicación inmediata de cualquier sospecha de violencia ejercida sobre niños, niñas y adolescentes.",
    referencia: "Tema 26 - LOPIVI (LO 8/2021): art. 15 deber de comunicación de situaciones de violencia"
  },
  {
    id: "T32-002",
    tema: 32,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "En la organización de las Escuelas Estivales de Sant Joan d'Alacant, el control de asistencia y de recogida diaria de los menores exige:",
    opciones: {
      A: "Permitir que cualquier desconocido se lleve a los niños si estos afirman conocerle",
      B: "Firma de registro diario y entrega únicamente a progenitores o personas adultas expresamente autorizadas por escrito y debidamente identificadas mediante DNI",
      C: "Que los niños se marchen solos a pie sin supervisión al terminar la jornada",
      D: "Un sorteo diario al azar para decidir quién se lleva a cada menor"
    },
    correcta: "B",
    explicacion: "El protocolo de seguridad infantil de las actividades municipales prohíbe entregar a un menor a terceras personas no identificadas y sin autorización expresa firmada por los representantes legales.",
    referencia: "Tema 32 - Escuela Estival Sant Joan: protocolo de entrega y recogida segura"
  },
  {
    id: "T33-002",
    tema: 33,
    categoria: "Especifica",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El programa 'Aula Concilia' de Sant Joan d'Alacant se financia y orienta estratégicamente en el marco de:",
    opciones: {
      A: "El Plan Corresponsables, para fomentar la conciliación familiar y la corresponsabilidad de los cuidados",
      B: "El Fondo Monetario Internacional para créditos hipotecarios",
      C: "La Ley de Caza y Pesca Fluvial",
      D: "El plan de repoblación forestal autonómico"
    },
    correcta: "A",
    explicacion: "Los programas Aula Concilia y Aula Matinera se integran en las actuaciones locales del Plan Corresponsables, impulsando servicios de cuidado profesional infantil para favorecer la conciliación laboral y familiar.",
    referencia: "Tema 33 - Programas de conciliación: Plan Corresponsables y Aula Concilia"
  },
  {
    id: "T34-002",
    tema: 34,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "El método de educación musical infantil que utiliza el propio cuerpo como instrumento de percusión y la improvisación vocal se conoce como:",
    opciones: {
      A: "Método Orff-Schulwerk",
      B: "Método Fonético Rígido",
      C: "Solfeo algebraico",
      D: "Canto gregoriano monofónico"
    },
    correcta: "A",
    explicacion: "Carl Orff desarrolló una pedagogía musical basada en la relación natural entre ritmo, lenguaje, percusión corporal y pequeña percusión escolar (xilófonos, metalófonos).",
    referencia: "Tema 34 - Educación musical infantil: método Orff"
  },
  {
    id: "T35-002",
    tema: 35,
    categoria: "Especifica",
    dificultad: "media",
    tipo: "test",
    enunciado: "La técnica de narración oral tradicional de origen japonés que utiliza láminas ilustradas deslizables dentro de un pequeño teatrillo de madera se denomina:",
    opciones: {
      A: "Kamishibai (teatro de papel)",
      B: "Origami",
      C: "Ikebana",
      D: "Haiku"
    },
    correcta: "A",
    explicacion: "El Kamishibai es un recurso de animación a la lectura muy eficaz en edades tempranas que aúna imagen, suspense y narración oral para captar la atención de los menores.",
    referencia: "Tema 35 - Animación lectora y cuentacuentos: técnica del Kamishibai"
  }
];

export const BANCO_PREGUNTAS: Question[] = [
  ...BASE_BANCO_PREGUNTAS,
  ...BANCO_GENERAL_EXPANDED,
  ...BANCO_PEDAGOGIA_EXPANDED,
  ...BANCO_SALUD_JUEGO_EXPANDED,
  ...BANCO_CASOS_EXPANDED
];

// 2 CASOS PRÁCTICOS OFICIALES (EJERCICIO 2 DE LA OPOSICIÓN)
export const CASOS_PRACTICOS_OFICIALES: PracticalCase[] = [
  {
    id: "SUPUESTO-A",
    title: "Supuesto Práctico A: Escuela Estival Municipal de Sant Joan d'Alacant · Organización Inclusiva, Alergias y Gestión de Olas de Calor",
    location: "Ayuntamiento de Sant Joan d'Alacant · CEIP Lo Romero / Cristo de la Paz",
    context: `Durante el mes de julio, el Ayuntamiento de Sant Joan d'Alacant organiza su tradicional Escuela Estival ('Escola d'Estiu') para 120 menores de 3 a 12 años, distribuida en grupos por edades. Usted ha obtenido la plaza de Monitora Infantil de Educación (Grupo C1, funcionaria de carrera) y es designada coordinadora técnica del tramo de 6 a 8 años (grupo de 25 participantes).

En su grupo cuenta con dos situaciones específicas:
1. Marc (7 años), menor diagnosticado con TEA Grado 1 (apoyo moderado), que muestra hipersensibilidad acústica y bloqueos ante transiciones imprevistas.
2. Sofía (6 años), alumna con alergia anafiláctica severa a los frutos secos y derivados, debidamente acreditada con informe médico y autoinyector de adrenalina custodiado en el botiquín del centro.
3. A las 11:30 horas, la Agencia Estatal de Meteorología (AEMET) y el Centro de Coordinación de Emergencias de la Generalitat declaran alerta roja por ola de calor severa con temperaturas previstas superiores a 40 °C en la comarca de L'Alacantí, momento en el que el programa tenía prevista una yincana de agua a pleno sol en el patio exterior.
4. Paralelamente, durante el momento del almuerzo en el comedor, un compañero ofrece de forma inadvertida a Sofía unas galletas caseras traídas de su casa sin etiquetado de alérgenos.`,
    questions: [
      {
        id: "SUP-A-01",
        tema: 32,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "Ante la declaración de alerta roja por calor extremo comunicada a las 11:30 h, ¿cuál es la decisión técnico-organizativa prioritaria que debe adoptar la monitora?",
        opciones: {
          A: "Mantener la yincana en el exterior pero ordenando a los niños que corran más rápido para terminar antes",
          B: "Suspender de inmediato las actividades de esfuerzo en el exterior y reubicar al grupo en aulas climatizadas con juegos de agua estáticos o talleres lúdicos de baja exigencia física",
          C: "Permitir que los menores salgan a la calle sin supervisión para que busquen sombras en el parque municipal",
          D: "Ignorar la alerta puesto que los niños llevan gorra y protección solar"
        },
        correcta: "B",
        explicacion: "Ante una alerta meteorológica extrema de nivel rojo, el deber de custodia y protección de la salud infantil exige cancelar cualquier actividad motriz de esfuerzo bajo insolación directa, trasladando las dinámicas a recintos climatizados protegidos.",
        referencia: "Supuesto A · P. 1 - Protocolo municipal frente a olas de calor"
      },
      {
        id: "SUP-A-02",
        tema: 15,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "¿Qué medida preventiva previa debió haber implementado la monitora al inicio de la jornada para facilitar el bienestar y adaptación de Marc (menor con TEA)?",
        opciones: {
          A: "Ocultarle el horario del día para que aprenda a convivir con la incertidumbre",
          B: "Proporcionarle un panel visual con pictogramas de la secuencia horaria y disponer de un rincón de calma con protectores auditivos",
          C: "Obligarlo a situarse siempre en el centro del grupo donde haya mayor volumen sonoro",
          D: "Prohibirle interactuar con los demás niños durante todo el mes"
        },
        correcta: "B",
        explicacion: "La anticipación visual mediante secuencias de pictogramas y la facilitación de espacios de autorregulación sensorial (auriculares o rincón de calma) son ajustes razonables básicos para alumnado con TEA.",
        referencia: "Supuesto A · P. 2 - Adaptación metodológica para ACNEAE (TEA)"
      },
      {
        id: "SUP-A-03",
        tema: 32,
        categoria: "Especifica",
        dificultad: "dificil",
        tipo: "supuesto",
        enunciado: "Respecto a la situación de Sofía en el momento del almuerzo, ¿cuál es la pauta preventiva obligatoria que rige en las escuelas de verano municipales sobre alimentos externos?",
        opciones: {
          A: "Permitir que los niños intercambien libremente cualquier tipo de comida casera sin control",
          B: "Prohibir estrictamente el intercambio de alimentos no verificados y supervisar activamente que los menores alérgicos consuman exclusivamente la comida validada por sus familias",
          C: "Confiar en el criterio de un niño de 6 años para leer los ingredientes de una galleta casera",
          D: "Expulsar a Sofía del comedor escolar y obligarla a comer en el pasillo sola"
        },
        correcta: "B",
        explicacion: "Para evitar shock anafiláctico, en comedores y aulas infantiles rige el principio preventivo de tolerancia cero al intercambio de comida casera no etiquetada, con supervisión visual permanente de la monitora.",
        referencia: "Supuesto A · P. 3 - Protocolo de seguridad en alergias e intolerancias alimentarias"
      },
      {
        id: "SUP-A-04",
        tema: 22,
        categoria: "Especifica",
        dificultad: "dificil",
        tipo: "supuesto",
        enunciado: "Si Sofía llega a ingerir accidentalmente la galleta y presenta de forma inmediata edema labial, disnea respiratoria y urticaria generalizada, ¿cuál es el protocolo de actuación de urgencia?",
        opciones: {
          A: "Llamar a los padres y esperar a que lleguen en su coche antes de hacer nada",
          B: "Activar de inmediato el 112, administrar el autoinyector de adrenalina prescrito según el protocolo médico autorizado y avisar a coordinación y familia",
          C: "Hacerle beber dos vasos de leche entera y tumbarla boca abajo",
          D: "Esperar media hora a ver si los síntomas remiten espontáneamente"
        },
        correcta: "B",
        explicacion: "Ante una reacción anafiláctica con afectación respiratoria, la administración precoz de adrenalina intramuscular por personal autorizado y la activación inmediata del Servicio de Emergencias Médicas (112) salva vidas.",
        referencia: "Supuesto A · P. 4 - Primeros auxilios y anafilaxia en el ámbito escolar"
      },
      {
        id: "SUP-A-05",
        tema: 6,
        categoria: "General",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "¿En qué competencia municipal del artículo 25 de la Ley 7/1985 (LRBRL) se ampara la organización de la Escuela Estival por parte del Ayuntamiento de Sant Joan d'Alacant?",
        opciones: {
          A: "Competencia exclusiva en relaciones diplomáticas internacionales",
          B: "Competencias en educación, actividades de ocio y tiempo libre y promoción de la juventud y cultura",
          C: "Gestión penitenciaria de régimen cerrado",
          D: "Aprobación de tratados europeos de libre comercio"
        },
        correcta: "B",
        explicacion: "Los artículos 25.2.m) y 25.2.n) de la LRBRL reconocen como competencias propias municipales la promoción de la cultura y equipamientos culturales, del deporte y ocupación del tiempo libre, y la cooperación educativa.",
        referencia: "Supuesto A · P. 5 - LRBRL: art. 25 competencias municipales"
      },
      {
        id: "SUP-A-06",
        tema: 13,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "Durante una actividad plástica en el aula climatizada, Marc se angustia ante el ruido repentino de un ventilador averiado. ¿Cómo debe intervenir la monitora?",
        opciones: {
          A: "Gritarle para que se calme y amenazarle con no darle su dibujo",
          B: "Apagar el ventilador ruidoso, acompañar a Marc a un espacio tranquilo, modular el tono de voz y facilitarle su elemento de autorregulación",
          C: "Obligarlo a escuchar el ventilador de cerca para habituarlo",
          D: "Sacarlo del aula al pasillo a oscuras"
        },
        correcta: "B",
        explicacion: "La sobrecarga sensorial en niños con TEA exige eliminar la fuente de molestia acústica, desescalar la tensión con presencia afectiva calmada y proporcionar el apoyo sensorial pactado.",
        referencia: "Supuesto A · P. 6 - Desescalada y regulación sensorial en el aula"
      },
      {
        id: "SUP-A-07",
        tema: 23,
        categoria: "Especifica",
        dificultad: "facil",
        tipo: "supuesto",
        enunciado: "Para aprovechar pedagógicamente la suspensión del patio por la ola de calor, la monitora organiza un taller sobre el cambio climático y el uso responsable del agua. Esto encaja en:",
        opciones: {
          A: "La educación en valores ambientales como eje metodológico transversal",
          B: "Una infracción grave del horario de ocio",
          C: "Una actividad puramente disciplinaria de castigo",
          D: "Un examen evaluable con nota curricular"
        },
        correcta: "A",
        explicacion: "El tema 23 establece la educación ambiental y en valores como un eje transversal que aprovecha situaciones cotidianas para generar conciencia cívica y sostenible en la infancia.",
        referencia: "Supuesto A · P. 7 - Educación en valores: eje ambiental"
      },
      {
        id: "SUP-A-08",
        tema: 21,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "El gabinete de prensa municipal acude a las aulas para tomar fotos de las actividades de verano para el boletín local. La monitora debe verificar previamente:",
        opciones: {
          A: "Que todos los menores lleven la misma ropa de marca",
          B: "La lista de autorizaciones de derechos de imagen firmadas por las familias, impidiendo que se fotografíe a menores cuyos tutores no lo autorizaron expresamente",
          C: "Que no haya niños zurdos en la foto",
          D: "Cobrar una tasa económica al fotógrafo"
        },
        correcta: "B",
        explicacion: "Conforme a la normativa de protección de datos (RGPD/LOPDGDD) y la Ley de Protección Jurídica del Menor, ningún menor puede ser fotografiado ni publicado sin autorización expresa previa de sus representantes legales.",
        referencia: "Supuesto A · P. 8 - Protección de datos y derechos de imagen de menores"
      },
      {
        id: "SUP-A-09",
        tema: 3,
        categoria: "General",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "Como funcionaria de carrera del Ayuntamiento de Sant Joan d'Alacant, la monitora debe observar en todo momento los principios éticos y de conducta regulados en:",
        opciones: {
          A: "Los artículos 52 a 54 del TREBEP (RDLeg 5/2015)",
          B: "El Código de Comercio de 1885",
          C: "El Estatuto de los Trabajadores exclusivamente",
          D: "Las directivas comunitarias sobre banca de inversión"
        },
        correcta: "A",
        explicacion: "El Título III, Capítulo VI del TREBEP (arts. 52 a 54) recoge el Código de Conducta de los empleados públicos, articulado en principios éticos y principios de conducta de obligado cumplimiento.",
        referencia: "Supuesto A · P. 9 - TREBEP: Código de conducta (arts. 52-54)"
      },
      {
        id: "SUP-A-10",
        tema: 32,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "Al finalizar la jornada a las 14:00 h, un menor no es recogido por sus progenitores transcurridos 45 minutos del cierre oficial y los teléfonos no responden. La actuación protocolaria correcta es:",
        opciones: {
          A: "Dejar al menor solo en la puerta del colegio y marcharse a casa",
          B: "Permanecer con el menor custodiándolo en todo momento, avisar a la coordinación municipal y, si persiste la imposibilidad de contacto, solicitar la colaboración de la Policía Local de Sant Joan d'Alacant",
          C: "Llevarse al menor a su domicilio particular de vacaciones",
          D: "Entregar al menor a cualquier persona desconocida que pase por la calle"
        },
        correcta: "B",
        explicacion: "El deber 'in vigilando' obliga a custodiar al menor hasta su entrega formal; ante la falta de comparecencia e ilocalización de los familiares, se recurre a la Policía Local para localizar a los tutores legales salvaguardando la seguridad del menor.",
        referencia: "Supuesto A · P. 10 - Protocolo de custodia y entrega de menores en actividades municipales"
      }
    ]
  },
  {
    id: "SUPUESTO-B",
    title: "Supuesto Práctico B: Programa Municipal de Estudio Vigilado y Aula Concilia · Detección de Acoso Escolar y Negligencia Familiar",
    location: "Ayuntamiento de Sant Joan d'Alacant · Centro Social / Casa de Cultura",
    context: `El Ayuntamiento de Sant Joan d'Alacant desarrolla durante el curso lectivo el 'Programa Municipal de Estudio Vigilado y Refuerzo Educativo', destinado a menores de Educación Primaria (6 a 12 años) derivados por servicios sociales y centros educativos. Usted se encuentra contratada como Monitora Infantil de Educación (C1, funcionaria de carrera) a cargo del aula de 16:30 a 19:30 h.

Durante el desarrollo de las sesiones observa con detalle dos casos:
1. Caso Álvaro (9 años): Alumno que asiste sistemáticamente con ropa visiblemente deteriorada, descalzo en días de lluvia por falta de calzado adecuado, con olor corporal persistente y que manifiesta un hambre voraz en cuanto se ofrece la merienda municipal. Además, no acude al centro de salud para revisiones prescritas de visión según comenta el propio menor.
2. Caso Lucía (10 años): Alumna tímida que sufre burlas continuadas, motes ofensivos y exclusión sistemática en el patio de recreo del programa por parte de un grupo liderado por otros dos menores del aula, quienes además han difundido stickers ofensivos sobre ella en un grupo de WhatsApp escolar de la actividad. Lucía llora con frecuencia, manifiesta dolor de barriga antes de entrar y ha bajado bruscamente su rendimiento en las tareas.`,
    questions: [
      {
        id: "SUP-B-01",
        tema: 26,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "Los indicadores observados en Álvaro (falta continuada de higiene, calzado inadecuado para la meteorología, malnutrición observable y desatención médica de la vista) apuntan tipológicamente a:",
        opciones: {
          A: "Maltrato físico con agresión traumática activa",
          B: "Negligencia o abandono de necesidades básicas por parte de los cuidadores",
          C: "Una fobia escolar voluntaria del menor",
          D: "Un trastorno del aprendizaje de tipo dislexia"
        },
        correcta: "B",
        explicacion: "La falta sistemática de atención a las necesidades básicas de alimentación, vestido, higiene y salud, disponiendo los progenitores de medios o cauces para cubrirlas, constituye un caso clásico de negligencia infantil.",
        referencia: "Supuesto B · P. 1 - Indicadores de maltrato infantil: negligencia"
      },
      {
        id: "SUP-B-02",
        tema: 25,
        categoria: "Especifica",
        dificultad: "dificil",
        tipo: "supuesto",
        enunciado: "¿Cuál es el cauce de intervención inmediato y protocolario que debe seguir la monitora ante la detección objetiva de estos indicadores en Álvaro?",
        opciones: {
          A: "Interrogar agresivamente a la madre a la salida del aula delante de todos los padres",
          B: "Cumplimentar la hoja de notificación/registro de sospecha con datos objetivos y fehacientes y remitirla a través de la coordinación a los Servicios Sociales Municipales de Sant Joan d'Alacant",
          C: "Ignorar el caso para no buscarse problemas con los vecinos del pueblo",
          D: "Publicar las fotos del menor en redes sociales pidiendo ayuda benéfica"
        },
        correcta: "B",
        explicacion: "La detección exige registrar hechos objetivos y contrastables (sin valoraciones personales) y cursar la comunicación a los Servicios Sociales de Atención Primaria para la correspondiente valoración técnica e intervención familiar.",
        referencia: "Supuesto B · P. 2 - Protocolo de detección y notificación a Servicios Sociales"
      },
      {
        id: "SUP-B-03",
        tema: 31,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "En la situación de Lucía concurren burlas reiteradas, motes descalificativos, exclusión social y difusión de stickers por WhatsApp. Esta situación se tipifica inequívocamente como:",
        opciones: {
          A: "Un juego ordinario infantil que no requiere intervención de adultos",
          B: "Un caso de acoso escolar y ciberacoso (ciberbullying)",
          C: "Un problema exclusivamente imputable a la baja autoestima de la niña",
          D: "Un desacuerdo puntual de debate infantil"
        },
        correcta: "B",
        explicacion: "Reúne los tres elementos esenciales del acoso escolar (intencionalidad, reiteración y asimetría de poder), agravado por el canal digital del ciberacoso (ciberbullying).",
        referencia: "Supuesto B · P. 3 - Tipificación de acoso escolar y ciberacoso"
      },
      {
        id: "SUP-B-04",
        tema: 31,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "¿Cuál de las siguientes acciones está EXPRESAMENTE DESACONSEJADA por los protocolos oficiales de intervención en acoso escolar?",
        opciones: {
          A: "Garantizar protección y seguridad a la víctima",
          B: "Confrontar cara a cara a la víctima y a los acosadores en un careo directo en el aula",
          C: "Registrar por escrito los incidentes observados",
          D: "Entrevistar individualmente a los menores agresores y activar medidas correctoras"
        },
        correcta: "B",
        explicacion: "Los careos y mediaciones directas entre agresor y víctima están prohibidos en casos de acoso escolar porque revictimizan a la persona agredida e incrementan la desigualdad de poder.",
        referencia: "Supuesto B · P. 4 - Protocolo de acoso: prohibición de careos víctima-agresor"
      },
      {
        id: "SUP-B-05",
        tema: 24,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "De acuerdo con el artículo 16 de la Ley Orgánica 8/2021 (LOPIVI), toda persona que por razón de su cargo o profesión tenga conocimiento de un acto de violencia contra un menor tiene:",
        opciones: {
          A: "La mera facultad voluntaria de comentarlo si lo considera oportuno",
          B: "El deber ineludible de comunicarlo de forma inmediata a la autoridad competente, servicios sociales o fiscalía",
          C: "La obligación de ocultarlo bajo secreto bancario",
          D: "La prohibición de redactar ningún informe"
        },
        correcta: "B",
        explicacion: "La LOPIVI impone un deber cualificado de comunicación inmediata a todos los profesionales que desempeñen actividades educativas, deportivas o de ocio con menores ante indicios de violencia.",
        referencia: "Supuesto B · P. 5 - LOPIVI art. 16: deber de comunicación"
      },
      {
        id: "SUP-B-06",
        tema: 28,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "En la gestión cotidiana del aula de estudio vigilado, ¿cuál es la mejor metodología para organizar el tiempo de los 15 menores?",
        opciones: {
          A: "Dejar que cada menor haga lo que quiera sin pauta alguna",
          B: "Establecer una rutina: planificación inicial de tareas con agenda escolar (10 min), bloque de concentración individual, descansos activos y revisión final conjunta",
          C: "Obligarles a estar 3 horas seguidas en silencio absoluto sin levantarse ni beber agua",
          D: "Hacer los deberes entre todos gritando las respuestas al unísono"
        },
        correcta: "B",
        explicacion: "El estudio vigilado requiere enseñar hábitos y autorregulación: planificación inicial con agenda escolar, tiempo de concentración, pausas estructuradas y comprobación final.",
        referencia: "Supuesto B · P. 6 - Metodología del estudio vigilado"
      },
      {
        id: "SUP-B-07",
        tema: 29,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "Para trabajar la convivencia en el grupo tras el conflicto con Lucía, la monitora diseña una sesión de role-playing sobre la empatía y el apoyo a compañeros. Esto pertenece al desarrollo de:",
        opciones: {
          A: "Habilidades sociales y resolución pacífica de conflictos",
          B: "Un expediente sancionador mercantil",
          C: "Un simulacro de juicio penal ordinario",
          D: "Un examen de lengua extranjera"
        },
        correcta: "A",
        explicacion: "El entrenamiento en habilidades sociales mediante dinámicas vivenciales y role-playing fomenta la empatía, el desarrollo moral y la erradicación del rol de espectador pasivo.",
        referencia: "Supuesto B · P. 7 - Programa de habilidades sociales y empatía"
      },
      {
        id: "SUP-B-08",
        tema: 4,
        categoria: "General",
        dificultad: "dificil",
        tipo: "supuesto",
        enunciado: "Los progenitores de uno de los menores sancionados con pérdida temporal del derecho al programa solicitan audiencia y copia del expediente. Conforme a la Ley 39/2015 (LPACAP):",
        opciones: {
          A: "Tienen derecho a acceder al expediente y presentar alegaciones, disociando los datos que afecten a la intimidad y seguridad de otros menores",
          B: "No tienen ningún derecho y se les debe prohibir el acceso a dependencias municipales",
          C: "Solo pueden acceder mediante autorización expresa del Congreso de los Diputados",
          D: "El acceso se concede inmediatamente entregando el teléfono privado de la víctima"
        },
        correcta: "A",
        explicacion: "Los interesados tienen derecho al trámite de audiencia y vista del expediente (art. 53 y 82 LPACAP), debiendo la administración proteger los datos personales especialmente protegidos y la intimidad de las víctimas.",
        referencia: "Supuesto B · P. 8 - Ley 39/2015: derechos de los interesados y vista del expediente"
      },
      {
        id: "SUP-B-09",
        tema: 40,
        categoria: "Especifica",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "Ante la difusión de los stickers ofensivos en el grupo de mensajería, la monitora imparte una cápsula del programa 'Escolares responsables con las nuevas tecnologías', incidiendo en:",
        opciones: {
          A: "Que en internet todo es anónimo y no existen consecuencias legales",
          B: "La netiqueta, el respeto a la intimidad ajena y que la difusión no consentida de imágenes vejatorias de compañeros puede constituir infracción o delito",
          C: "Enseñarles trucos para que no les descubran los administradores",
          D: "Comprar teléfonos móviles más caros a todos los niños"
        },
        correcta: "B",
        explicacion: "La alfabetización digital responsable enseña que el ciberespacio no es un limbo de impunidad; difundir contenidos lesivos para la intimidad vulnera derechos fundamentales y tiene repercusiones legales.",
        referencia: "Supuesto B · P. 9 - Escolares responsables con TIC: ciberconvivencia"
      },
      {
        id: "SUP-B-10",
        tema: 3,
        categoria: "General",
        dificultad: "media",
        tipo: "supuesto",
        enunciado: "La monitora guarda estricta reserva profesional sobre la situación sociofamiliar de Álvaro y Lucía frente a otros vecinos de Sant Joan d'Alacant, en cumplimiento de:",
        opciones: {
          A: "El deber de secreto y confidencialidad exigido a los empleados públicos en el artículo 53.12 del TREBEP",
          B: "Un pacto verbal sin fuerza legal",
          C: "La costumbre de los usos mercantiles marítimos",
          D: "Las normas de protocolo heráldico municipal"
        },
        correcta: "A",
        explicacion: "El art. 53.12 del TREBEP establece taxativamente que los empleados públicos 'guardarán secreto de las materias clasificadas u otras cuya difusión esté prohibida legalmente, y mantendrán la debida discreción sobre aquellos asuntos que conozcan por razón de su cargo'.",
        referencia: "Supuesto B · P. 10 - TREBEP: art. 53.12 deber de secreto y confidencialidad"
      }
    ]
  }
];
