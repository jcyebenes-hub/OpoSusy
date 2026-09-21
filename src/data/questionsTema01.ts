import { Question } from '../types';

/**
 * BANCO EXAMINADOR — TEMA 1
 * Constitución Española de 1978: principios generales, estructura, derechos y
 * deberes fundamentales, TC, Defensor del Pueblo y organización territorial.
 * 60 preguntas de tipo examinador (test, 4 opciones).
 */
export const PREGUNTAS_EXAM_TEMA_01: Question[] = [
  {
    id: "T01-101",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "La Constitución Española de 1978 fue aprobada por las Cortes Constituyentes el 31 de octubre de 1978 y promulgada por Su Majestad el Rey. ¿En qué fecha entró en vigor, tras su publicación en el Boletín Oficial del Estado?",
    opciones: {
      A: "El 6 de diciembre de 1978",
      B: "El 29 de diciembre de 1978",
      C: "El 14 de abril de 1980",
      D: "El 31 de octubre de 1979"
    },
    correcta: "B",
    explicacion: "La Constitución fue publicada en el BOE n.º 296 de 29 de diciembre de 1978, fecha en la que entró en vigor. El 6 de diciembre es la fecha de la promulgación por el Rey, no la de la entrada en vigor.",
    referencia: "Tema 1 - Constitución Española: publicación BOE n.º 296, de 29/12/1978"
  },
  {
    id: "T01-102",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "¿Cuál es la estructura normativa de la Constitución Española de 1978?",
    opciones: {
      A: "169 artículos, 10 Títulos, 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final",
      B: "166 artículos, 10 Títulos, 4 adicionales, 9 transitorias, 1 derogatoria y 1 final",
      C: "169 artículos, 11 Títulos, 3 adicionales, 9 transitorias, 1 derogatoria y 1 final",
      D: "169 artículos, 10 Títulos, 4 adicionales, 10 transitorias, 2 derogatorias y 1 final"
    },
    correcta: "A",
    explicacion: "La CE está formada por 169 artículos distribuidos en 10 Títulos, más 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final, precedidos del Preámbulo.",
    referencia: "Tema 1 - Constitución Española: estructura general"
  },
  {
    id: "T01-103",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Sobre la naturaleza jurídica del Preámbulo de la Constitución Española, ¿cuál de las siguientes afirmaciones es correcta?",
    opciones: {
      A: "Es fuente formal de derecho y tiene rango de norma constitucional",
      B: "No es fuente formal de derecho, pero orienta la interpretación del resto del texto constitucional",
      C: "Puede ser objeto de recurso de amparo constitucional por vulnerar derechos fundamentales",
      D: "Requiere ser desarrollado por ley orgánica para producir efectos jurídicos"
    },
    correcta: "B",
    explicacion: "El Preámbulo no tiene carácter normativo (no crea derechos ni obligaciones directamente exigibles), pero la doctrina del Tribunal Constitucional lo utiliza como elemento hermenéutico para la interpretación de la Constitución.",
    referencia: "Tema 1 - Constitución Española: Preámbulo y doctrina del TC"
  },
  {
    id: "T01-104",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 1.2 de la Constitución Española, ¿cuál es la forma del Estado español?",
    opciones: {
      A: "La república parlamentaria",
      B: "La monarquía parlamentaria",
      C: "La monarquía dual",
      D: "La democracia semidirecta"
    },
    correcta: "B",
    explicacion: "El artículo 1.2 CE proclama: 'La forma del Estado español es la Monarquía Parlamentaria'. Es un dato fundamental que la propia reforma constitucional no puede alterar (art. 168.3 CE).",
    referencia: "Tema 1 - Constitución Española: art. 1.2"
  },
  {
    id: "T01-105",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 1.4 de la Constitución Española declara que la diversidad lingüística de España es:",
    opciones: {
      A: "Un problema que el Estado debe resolver mediante la unificación de la lengua",
      B: "Un patrimonio cultural que ha de ser protegido",
      C: "Una facultad discrecional de cada Comunidad Autónoma",
      D: "Un derecho fundamental de rango superior a la igualdad"
    },
    correcta: "B",
    explicacion: "El artículo 1.4 CE establece que 'la diversidad lingüística de España es un patrimonio cultural que ha de ser protegido'. Es el principio que justifica la cooficialidad de las demás lenguas españolas.",
    referencia: "Tema 1 - Constitución Española: art. 1.4"
  },
  {
    id: "T01-106",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 2 de la Constitución Española reconoce:",
    opciones: {
      A: "La independencia de las Comunidades Autónomas respecto del Estado",
      B: "La indisoluble unidad de la Nación española, la solidaridad y el derecho de autonomía de las nacionalidades y regiones",
      C: "El derecho de autodeterminación de las nacionalidades y regiones",
      D: "La libre asociación de provincias en Estados federados"
    },
    correcta: "B",
    explicacion: "El artículo 2 CE proclama la indisoluble unidad de la Nación española, garantiza la solidaridad de todas los españoles, reconoce y garantiza la autonomía de las nacionalidades y regiones y la solidaridad de todas las comunidades españolas. No reconoce el derecho de autodeterminación (doctrina del TC).",
    referencia: "Tema 1 - Constitución Española: art. 2"
  },
  {
    id: "T01-107",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 4.1 de la Constitución Española, la instrucción en castellano:",
    opciones: {
      A: "Es un derecho y un deber de todos los españoles",
      B: "Solo es obligatoria en las Fuerzas Armadas",
      C: "Es facultativa cuando existe una lengua cooficial",
      D: "Corresponde regularla exclusivamente a las Comunidades Autónomas"
    },
    correcta: "A",
    explicacion: "El artículo 4.1 CE: 'El castellano será la lengua oficial del Estado. Serán también oficiales las demás lenguas españolas según lo que los Estatutos de Autonomía establezcan... La enseñanza del castellano será un derecho y un deber.'",
    referencia: "Tema 1 - Constitución Española: art. 4.1"
  },
  {
    id: "T01-108",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 5 de la Constitución Española, la unidad territorial del Estado se articula de tal forma que la entidad territorial básica es:",
    opciones: {
      A: "El municipio",
      B: "La provincia o isla",
      C: "La Comunidad Autónoma",
      D: "La comarca"
    },
    correcta: "B",
    explicacion: "El artículo 5 CE: 'Los Municipios garantizan la autonomía de sus vecinos... Las provincias o islas son la entidad territorial básica. Las Comunidades Autónomas agrupan provincias en grandes entidades regionales.'",
    referencia: "Tema 1 - Constitución Española: art. 5"
  },
  {
    id: "T01-109",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 9.2 de la Constitución Española, corresponde a los poderes públicos:",
    opciones: {
      A: "Establecer la organización territorial del Estado en su proyecto electoral",
      B: "Hacer efectivas las libertades y derechos reconocidos en el Título I y promover las condiciones para su progreso económico y social",
      C: "Garantizar la libertad de empresa como fin último de la acción pública",
      D: "Regular exclusivamente el ejercicio de los derechos mediante ley orgánica"
    },
    correcta: "B",
    explicacion: "El artículo 9.2 CE impone a los poderes públicos la obligación de hacer efectivas los derechos, libertades y deberes reconocidos en el Título I, promover las condiciones para el progreso económico y social y realizar una justa distribución de las rentas dentro del territorio y entre las clases sociales.",
    referencia: "Tema 1 - Constitución Española: art. 9.2"
  },
  {
    id: "T01-110",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "El artículo 10.2 de la Constitución Española dispone que los principios que informan las normas sobre derechos fundamentales se interpretarán conforme a:",
    opciones: {
      A: "La jurisprudencia del Tribunal Supremo",
      B: "La Carta Europea de Derechos Fundamentales de 2000",
      C: "La Convención Europea para la Protección de los Derechos Humanos y las Libertades Públicas",
      D: "La Declaración Universal de Derechos Humanos de 1948"
    },
    correcta: "C",
    explicacion: "El artículo 10.2 CE remite a la Convención Europea para la Protección de los Derechos Humanos y de las Libertades Públicas (Roma, 1950) como parámetro de interpretación de los derechos fundamentales, consolidado por la doctrina del TC.",
    referencia: "Tema 1 - Constitución Española: art. 10.2"
  },
  {
    id: "T01-111",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El artículo 15 de la Constitución Española protege el derecho a la vida y establece que, de conformidad con lo que establezcan los tratados internacionales, la pena de muerte:",
    opciones: {
      A: "Podrá aplicarse en tiempo de guerra por las leyes militares",
      B: "No se podrá imponer en ningún caso",
      C: "Se reserva para los delitos contra la seguridad del Estado",
      D: "Requiere la doble conformidad del Tribunal Supremo"
    },
    correcta: "B",
    explicacion: "El artículo 15 CE: 'Todos tienen derecho a la vida y a la integridad física y moral, sin que, en ningún caso, pueda ser impuesto la pena de muerte.' La prohibición es absoluta e incondicionada.",
    referencia: "Tema 1 - Constitución Española: art. 15"
  },
  {
    id: "T01-112",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 18.2 de la Constitución Española, el domicilio es inviolable y la entrada o registro solo podrán realizarse:",
    opciones: {
      A: "Con orden judicial, salvo en caso de flagrante delito",
      B: "Únicamente con autorización del Ministerio Fiscal",
      C: "Siempre con mandato judicial, sin excepciones",
      D: "Con comunicación posterior a la autoridad judicial en un plazo de 24 horas"
    },
    correcta: "A",
    explicacion: "El artículo 18.2 CE protege la intimidad del domicilio: 'Solo podrá entrar o registrar el domicilio mediante orden judicial, salvo en caso de flagrante delito.' El 18.3 añade la protección por ley del secreto de las comunicaciones y de los datos de carácter personal.",
    referencia: "Tema 1 - Constitución Española: art. 18.2 y 18.3"
  },
  {
    id: "T01-113",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 19 de la Constitución Española reconoce el derecho a no ser:",
    opciones: {
      A: "Extraditado, expulsado o repatriado",
      B: "Alegado en un proceso penal",
      C: "Deportado sin previo aviso",
      D: "Expulsado del territorio de otra Comunidad Autónoma"
    },
    correcta: "A",
    explicacion: "El artículo 19 CE: 'Se reconoce el derecho a no ser extraditado, expulsado o repatriado. No se podrá extraditar a los españoles por origen en virtud de una convención internacional.'",
    referencia: "Tema 1 - Constitución Española: art. 19"
  },
  {
    id: "T01-114",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "En materia de libertad de expresión (art. 20.1.a CE), la Constitución española prohíbe:",
    opciones: {
      A: "La censura previa y la autocensura",
      B: "La censura previa por las autoridades públicas",
      C: "Toda crítica al poder político en cualquier medio",
      D: "La difusión de noticias de interés general"
    },
    correcta: "B",
    explicacion: "El artículo 20.1.a CE: 'Se protege la libertad de expresión y de difusión de información por cualquier medio de difusión. Se prohíbe la censura previa por las autoridades públicas bajo cualquier forma.' La prohibición alcanza exclusivamente a la censura previa ejercida por las autoridades.",
    referencia: "Tema 1 - Constitución Española: art. 20.1.a"
  },
  {
    id: "T01-115",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 20.2 de la Constitución Española, la ley podrá limitar el ejercicio de la libertad de expresión a los fines de garantizar el respeto al derecho al honor, a la intimidad y a la propia imagen, así como:",
    opciones: {
      A: "La confidencialidad de las negociaciones colectivas entre empresas",
      B: "La protección de los secretos profesionales y el control judicial de la cine y la televisión",
      C: "La aprobación previa del Ministerio de Cultura de cualquier obra artística",
      D: "La reserva de la información económica sobre el Sector Público"
    },
    correcta: "B",
    explicacion: "El artículo 20.2 CE permite a la ley limitar los derechos del 20.1 'a los fines de garantizar el respeto al derecho al honor, a la intimidad, a la propia imagen y especialmente a la de los menores, así como a la protección de los secretos profesionales que interesen a la seguridad del Estado', y autoriza el control judicial de la cine, la radio y la televisión.",
    referencia: "Tema 1 - Constitución Española: art. 20.2"
  },
  {
    id: "T01-116",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Sobre el derecho de reunión (art. 21 CE), ¿cuál de las siguientes afirmaciones es correcta?",
    opciones: {
      A: "Toda reunión en vía pública requiere autorización previa de la autoridad",
      B: "El ejercicio del derecho de reunión es libre y no requiere anuncio previo, aunque las manifestaciones deben comunicarse previamente a la autoridad",
      C: "Las reuniones en locales públicos están prohibidas entre semana",
      D: "La comunicación previa de la manifestación constituye una autorización encubierta"
    },
    correcta: "B",
    explicacion: "El artículo 21.1 CE: el derecho de reunión es libre y su ejercicio no requiere autorización, sino únicamente comunicación previa. En el caso de manifestaciones en vías públicas, la comunicación debe hacerse con antelación a la autoridad, que podrá denegarlas por motivos previstos en la ley (Ley Orgánica 9/1983).",
    referencia: "Tema 1 - Constitución Española: art. 21"
  },
  {
    id: "T01-117",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 22.2 de la Constitución Española establece que:",
    opciones: {
      A: "Nadie podrá ser obligado a pertenecer a una asociación",
      B: "Quedan prohibidas las asociaciones secretas y las armas",
      C: "Toda asociación debe obtener autorización administrativa para su constitución",
      D: "Las asociaciones podrán ser disueltas de pleno derecho por el Gobierno"
    },
    correcta: "B",
    explicacion: "El artículo 22.2 CE: 'Quedan prohibidas las asociaciones secretas y las asociaciones armadas de carácter militar.' La prohibición de obligación de pertenecer (22.1) y la disolución por decisión judicial (22.3) están en otros apartados.",
    referencia: "Tema 1 - Constitución Española: art. 22.2"
  },
  {
    id: "T01-118",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El artículo 23.1 de la Constitución Española reconoce el derecho a:",
    opciones: {
      A: "Participar en los asuntos públicos directamente o mediante representantes libremente elegidos",
      B: "El acceso libre e incondicional a cualquier cargo público",
      C: "Votar de forma plural para elegir a tres representantes",
      D: "La representación proporcional obligatoria en todos los cuerpos electorales"
    },
    correcta: "A",
    explicacion: "El artículo 23.1 CE reconoce el derecho a participar en los asuntos públicos, directamente o por medio de representantes libremente elegidos, y el 23.2 el acceso a funciones y cargos públicos en condiciones de igualdad, conforme a la capacidad y méritos.",
    referencia: "Tema 1 - Constitución Española: art. 23"
  },
  {
    id: "T01-119",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Entre las garantías del derecho a la tutela judicial efectiva (art. 24.2 CE) NO se incluye:",
    opciones: {
      A: "El principio de presunción de inocencia",
      B: "El derecho a no declarar contra sí mismo",
      C: "El derecho a un juicio oral, público y contradictorio",
      D: "El derecho a ser asistido gratuitamente por un intérprete en cualquier lengua de la UE"
    },
    correcta: "D",
    explicacion: "El artículo 24.2 CE garantiza el derecho a ser asistido por abogado, el proceso público en un plazo razonable y sin dilaciones indebidas, y el derecho a no ser condenado sin garantías. No incluye el derecho a intérprete en cualquier lengua de la UE (solo se reconoce en relación con la lengua propia, según doctrina del TC).",
    referencia: "Tema 1 - Constitución Española: art. 24.2"
  },
  {
    id: "T01-120",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 35.1 de la Constitución Española, los españoles tienen derecho al trabajo y:",
    opciones: {
      A: "A la movilidad laboral y a la promoción profesional por razones de antigüedad",
      B: "A la libre movilidad y a la promoción por razones de mérito",
      C: "A elegir cualquier puesto de trabajo en la Administración Pública sin oposición",
      D: "A la estabilidad absoluta en el empleo, incluida la pública"
    },
    correcta: "B",
    explicacion: "El artículo 35.1 CE: 'Los españoles tienen derecho al trabajo, a la libre movilidad y a la promoción por razones de mérito.' La promoción por mérito es una exigencia constitucional vinculada también al acceso a la función pública (art. 23.2 CE).",
    referencia: "Tema 1 - Constitución Española: art. 35.1"
  },
  {
    id: "T01-121",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 27.2 de la Constitución Española, la educación básica es:",
    opciones: {
      A: "Gratuita y obligatoria desde los 6 hasta los 16 años",
      B: "Gratuita y obligatoria desde los 5 hasta los 15 años",
      C: "Obligatoria pero de pago desde los 6 hasta los 18 años",
      D: "Gratuita y voluntaria desde los 6 hasta los 16 años"
    },
    correcta: "A",
    explicacion: "El artículo 27.2 CE: 'Se garantiza el derecho a la educación. La educación básica, gratuita y obligatoria, se entenderá desde los 6 hasta los 16 años.' (El art. 27.3 desarrolla el derecho a la educación y la libertad de enseñanza del art. 27.10).",
    referencia: "Tema 1 - Constitución Española: art. 27.2"
  },
  {
    id: "T01-122",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 29.2 de la Constitución Española establece que cuando se ejercite el derecho de huelga en servicios públicos esenciales:",
    opciones: {
      A: "La ley establecerá los mecanismos para garantizar el servicio mínimo indispensable a la comunidad",
      B: "La huelga quedará prohibida en todos los supuestos",
      C: "El Gobierno podrá suspender la huelga por decreto ley",
      D: "Se requerirá la autorización del Ministerio Fiscal"
    },
    correcta: "A",
    explicacion: "El artículo 29.2 CE: 'La ley establecerá los mecanismos para garantizar la prestación de aquellos servicios de interés general estrictamente imprescindibles.' Es la base del servicio mínimo en huelga (desarrollado en el art. 16 del ET).",
    referencia: "Tema 1 - Constitución Española: art. 29.2"
  },
  {
    id: "T01-123",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 30.2 de la Constitución Española, los que por declaración de conciencia se nieguen al servicio militar:",
    opciones: {
      A: "Serán dispensados de todo servicio y no tendrán ninguna consecuencia",
      B: "Podrán cumplir un servicio social alternativo, cuyo desarrollo se establecerá por ley",
      C: "Serán sancionados con una pena de multa",
      D: "Deberán prestar el servicio militar en unidades no armadas"
    },
    correcta: "B",
    explicacion: "El artículo 30.2 CE reconoce la objeción de conciencia al servicio militar y prevé la posibilidad de un servicio social alternativo, regulado por ley (LO 7/1985, derogada tras la supresión del servicio militar obligatorio).",
    referencia: "Tema 1 - Constitución Española: art. 30.2"
  },
  {
    id: "T01-124",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 31.1 de la Constitución Española establece que todos contribuirán al sostenimiento de los gastos públicos:",
    opciones: {
      A: "En función de sus ingresos patrimoniales",
      B: "De manera directa o a través de tributos, de forma proporcionada a su capacidad económica",
      C: "Únicamente mediante impuestos directos y nunca indirectos",
      D: "En función del valor de mercado de sus bienes inmuebles"
    },
    correcta: "B",
    explicacion: "El artículo 31.1 CE: 'Todos contribuirán al sostenimiento de los gastos públicos de forma directa o a través de un sistema tributario justo.' El art. 31.2 añade que el sistema tributario desarrollará los principios de igualdad y progresividad.",
    referencia: "Tema 1 - Constitución Española: arts. 31.1 y 31.2"
  },
  {
    id: "T01-125",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 33.3 de la Constitución Española, la propiedad privada puede ser expropiada:",
    opciones: {
      A: "En todo caso, mediante sentencia judicial firme",
      B: "En cualquier momento, previa comunicación al propietario",
      C: "Sólo por causa de utilidad pública o interés general, debidamente declarada, e indemnización conforme a la ley",
      D: "Únicamente para la construcción de infraestructuras militares"
    },
    correcta: "C",
    explicacion: "El artículo 33.3 CE: 'Nadie puede ser privado de sus bienes y derechos sino por causas justificadas de utilidad pública o interés general, mediante la indication correspondiente en la ley, y con indemnización.'",
    referencia: "Tema 1 - Constitución Española: art. 33.3"
  },
  {
    id: "T01-126",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 34 de la Constitución Española establece que:",
    opciones: {
      A: "La religión católica será la religión oficial del Estado",
      B: "Ninguna confesión tendrá carácter religioso en España y las confesiones podrán establecer relaciones de cooperación con el Estado",
      C: "El Estado subvencionará a todas las confesiones por igual",
      D: "La libertad de culto solo podrá ejercerse en lugares de culto habilitados"
    },
    correcta: "B",
    explicacion: "El artículo 34 CE: 'Se garantiza la libertad ideológica, religiosa y de culto de los individuos y las comunidades sin más limitación, en sus manifestaciones, que las necesarias para el mantenimiento del orden público garantizado por la ley. Ninguna confesión tendrá carácter religioso. Las instituciones del Estado y las Comunidades Autónomas mantendrán relaciones de cooperación con la Iglesia Católica y las demás confesiones.'",
    referencia: "Tema 1 - Constitución Española: art. 34"
  },
  {
    id: "T01-127",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 38 de la Constitución Española, la iniciativa económica privada se ejercerá:",
    opciones: {
      A: "Bajo la regulación exclusiva del Estado",
      B: "Dentro del marco de la economía de mercado y en función de las necesidades de la economía general",
      C: "Únicamente mediante concesión administrativa",
      D: "De forma libre, sin sujeción a ninguna limitación legal"
    },
    correcta: "B",
    explicacion: "El artículo 38.1 CE: 'La Constitución española reconoce y protege la libertad de iniciativa económica privada y su ejercicio dentro del marco de la economía de mercado.' El 38.2 permite a la ley regular o limitar cualquier iniciativa económica o privada para garantizar el pleno empleo.",
    referencia: "Tema 1 - Constitución Española: art. 38"
  },
  {
    id: "T01-128",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 39.2 de la Constitución Española, todos los hijos:",
    opciones: {
      A: "Tendrán los mismos derechos, cualquiera que sea su condición de hijos de padres casados o no",
      B: "Solo tendrán derecho a la nacionalidad española si sus padres son españoles",
      C: "Quedarán bajo la custodia del padre en caso de separación",
      D: "Podrán ser adoptados únicamente por parejas del mismo sexo"
    },
    correcta: "A",
    explicacion: "El artículo 39.2 CE: 'Todos los hijos tendrán los mismos derechos, cualquiera que sea su condición de hijos de padres casados o no.' El 39.3 prevé la adopción: 'La ley establecerá las formas de adopción.'",
    referencia: "Tema 1 - Constitución Española: art. 39.2 y 39.3"
  },
  {
    id: "T01-129",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 41.2 de la Constitución Española reconoce a los ciudadanos el derecho a la asistencia médica y farmacéutica:",
    opciones: {
      A: "En los términos que establezcan las Comunidades Autónomas",
      B: "Gratuita, en su caso, mediante servicios públicos de salud",
      C: "Solo si acreditan rentas por debajo del SMI",
      D: "Exclusivamente a través de la Seguridad Social"
    },
    correcta: "B",
    explicacion: "El artículo 41.2 CE: 'Los ciudadanos tendrán derecho a la asistencia médica y farmacéutica mediante servicios públicos de salud. Se establecen los principios que deben regir la organización y el funcionamiento de los servicios públicos de salud.'",
    referencia: "Tema 1 - Constitución Española: art. 41.2"
  },
  {
    id: "T01-130",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 43.1 de la Constitución Española, se reconoce:",
    opciones: {
      A: "El derecho a la salud física y mental",
      B: "El derecho a la eutanasia",
      C: "El derecho a la atención paliativa universal",
      D: "El derecho a la medicina privada gratuita"
    },
    correcta: "A",
    explicacion: "El artículo 43.1 CE: 'Se reconoce el derecho a la protección de la salud. Compete a los poderes públicos organizar y tutelar la salud pública a través de medidas preventivas y de las prestaciones y servicios necesarios.'",
    referencia: "Tema 1 - Constitución Española: art. 43.1"
  },
  {
    id: "T01-131",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "El artículo 45.1 de la Constitución Española establece que los poderes públicos:",
    opciones: {
      A: "Promoverán y tutelarán el acceso a la cultura a través de todas las disposiciones legales posibles",
      B: "Garantizarán el acceso gratuito a todos los bienes culturales",
      C: "Podrán privar a los españoles del acceso a la cultura en caso de incumplimiento fiscal",
      D: "Regularen la cultura exclusivamente a través de la Ley Orgánica"
    },
    correcta: "A",
    explicacion: "El artículo 45.1 CE: 'Los poderes públicos promoverán y tutelarán el acceso a la cultura a través de todas las disposiciones legales posibles. El derecho de acceso a la cultura se desarrollará mediante una política económica y financiera que tenga en cuenta las necesidades de los españoles.'",
    referencia: "Tema 1 - Constitución Española: art. 45.1"
  },
  {
    id: "T01-132",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 47 de la Constitución Española, todos los españoles tienen derecho a:",
    opciones: {
      A: "Disfrutar de una vivienda adecuada",
      B: "Obtener una vivienda en propiedad mediante subvención estatal",
      C: "Elegir libremente su domicilio sin limitación",
      D: "Acceder a una vivienda pública en el término de un año"
    },
    correcta: "A",
    explicacion: "El artículo 47 CE: 'Todos los españoles tienen derecho a disfrutar de una vivienda digna y adecuada. Los poderes públicos promoverán las condiciones necesarias y establecerán las normas pertinentes para hacer efectivo este derecho, regulando la utilización del suelo de conforma con el interés general.'",
    referencia: "Tema 1 - Constitución Española: art. 47"
  },
  {
    id: "T01-133",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "El artículo 49.1 de la Constitución Española reconoce a las personas con discapacidad física, sensorial o psíquica:",
    opciones: {
      A: "El derecho a una pensión mínima vital",
      B: "El derecho a la autonomía y al máximo desarrollo posible, así como al acceso a un marco de vida y trayecto laboral",
      C: "La exención total del impuesto sobre la renta",
      D: "El acceso prioritario a la función pública sin pruebas"
    },
    correcta: "B",
    explicacion: "El artículo 49.1 CE: 'Los poderes públicos realizarán una política de asistencia y rehabilitación dirigida a las personas sordas, ciegas o con cualquier otra discapacidad.' El 49.2 añade el derecho al acceso al marco de vida y al máximo desarrollo.",
    referencia: "Tema 1 - Constitución Española: art. 49"
  },
  {
    id: "T01-134",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "¿Qué derechos y libertades son tutelables mediante el recurso de amparo constitucional?",
    opciones: {
      A: "Todos los derechos del Capítulo II del Título I",
      B: "Los de la Sección 1.ª (arts. 15 a 29) más el derecho de objeción de conciencia del art. 30.2",
      C: "Únicamente los derechos civiles y políticos",
      D: "Todos los derechos fundamentales y libertades públicas sin excepción"
    },
    correcta: "B",
    explicacion: "El artículo 53.1 CE limita el amparo a los derechos y libertades de la Sección 1.ª del Capítulo II del Título I (arts. 15-29) más el art. 30.2 (objeción de conciencia). Los derechos sociales del art. 35 en adelante no son tutelables por amparo (solo por el procedimiento ordinario, art. 53.2).",
    referencia: "Tema 1 - Constitución Española: art. 53.1"
  },
  {
    id: "T01-135",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 55.2 de la Constitución Española:",
    opciones: {
      A: "Nadie podrá ser extraditado por delitos o faltas de carácter político o ideológico",
      B: "La extradición requiere siempre la aprobación del Congreso",
      C: "Los españoles no podrán ser extraditados en ningún caso",
      D: "La extradición se regula exclusivamente por tratados internacionales"
    },
    correcta: "A",
    explicacion: "El artículo 55.2 CE: 'Nadie podrá ser extraditado por delitos o faltas de carácter político o ideológico.' El 55.1 prevé la extradición con base en tratado o ley, y el 55.3 permite la ley establecer casos de extradición de españoles por origen.",
    referencia: "Tema 1 - Constitución Española: art. 55"
  },
  {
    id: "T01-136",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 56.1 de la Constitución Española, el Rey es:",
    opciones: {
      A: "El Jefe del Gobierno",
      B: "Jefe del Estado, símbolo de la unidad y permanencia de España",
      C: "Presidente de las Cortes Generales",
      D: "Máximo representante de la Generalitat"
    },
    correcta: "B",
    explicacion: "El artículo 56.1 CE: 'El Rey es Jefe del Estado, símbolo de la unidad y permanencia de España. Arbitra y modera el funcionamiento de las instituciones, ejerce la más alta representación del Estado español en relaciones internacionales y le corresponde el mando supremo de las Fuerzas Armadas.'",
    referencia: "Tema 1 - Constitución Española: art. 56.1"
  },
  {
    id: "T01-137",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 56.2 de la Constitución Española, los actos del Rey:",
    opciones: {
      A: "Son inatacables en cualquier caso",
      B: "Serán firmados, en el correspondiente traspaso, por el Presidente del Gobierno",
      C: "Requieren la firma conjunta del Presidente del Congreso y la del Senado",
      D: "Serán publicados directamente en el BOE sin firma"
    },
    correcta: "B",
    explicacion: "El artículo 56.2 CE: 'Los poderes del Rey se ejercen de conformidad con las presentes disposiciones específicas. Sus actos estarán siempre refrendados en la forma reglamentaria por el Presidente del Gobierno o por los Ministros responsables, que serán responsables de ellos.'",
    referencia: "Tema 1 - Constitución Española: art. 56.2"
  },
  {
    id: "T01-138",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Tras la reforma de 2022 (LO 1/2022, de 7 de marzo), el artículo 57.2 de la Constitución Española establece que la mayoría de edad del Príncipe de Asturias será a partir de:",
    opciones: {
      A: "Los 21 años",
      B: "Los 18 años",
      C: "Los 25 años",
      D: "Los 30 años"
    },
    correcta: "B",
    explicacion: "La LO 1/2022 reformó el art. 57.2 CE, que ahora establece: 'La mayoría de edad del Príncipe de Asturias será a partir de los 18 años.' Se sustituye la mayoría de edad (antes 21 años) por la mayoría de edad civil y se prevé el nombramiento del Príncipe por el Rey si el heredero es menor.",
    referencia: "Tema 1 - Constitución Española: art. 57.2 (redacción LO 1/2022)"
  },
  {
    id: "T01-139",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 56.5 de la Constitución Española, al Rey corresponde:",
    opciones: {
      A: "La designación de los Ministros",
      B: "El mando supremo de las Fuerzas Armadas",
      C: "La aprobación de los decretos-leyes",
      D: "La disolución de las Cortes Generales"
    },
    correcta: "B",
    explicacion: "El artículo 56.5 CE: 'Al Rey corresponde el mando supremo de las Fuerzas Armadas.' La designación de Ministros es competencia del Rey en el art. 56.3, pero la designación la propone el Presidente del Gobierno (art. 98.1 CE).",
    referencia: "Tema 1 - Constitución Española: art. 56.5"
  },
  {
    id: "T01-140",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 66.1 de la Constitución Española, el Congreso de los Diputados estará integrado por:",
    opciones: {
      A: "Un número de diputados no inferior a 300 y no superior a 400",
      B: "350 diputados en todo caso",
      C: "Un número fijo de 400 diputados",
      D: "No menos de 150 y no más de 300 diputados"
    },
    correcta: "A",
    explicacion: "El artículo 66.1 CE: 'El Congreso de los Diputados estará integrado por un número de diputados no inferior a 300 y no superior a 400. Su composición se establecerá por ley orgánica.' Actualmente son 350.",
    referencia: "Tema 1 - Constitución Española: art. 66.1"
  },
  {
    id: "T01-141",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 67.1 de la Constitución Española, la duración de la legislatura del Congreso de los Diputados es de:",
    opciones: {
      A: "Tres años",
      B: "Cuatro años",
      C: "Cinco años",
      D: "Seis años"
    },
    correcta: "B",
    explicacion: "El artículo 67.1 CE: 'La duración del Congreso será de cuatro años.' La disolución puede anticipar el fin de la legislatura (art. 67.2 CE).",
    referencia: "Tema 1 - Constitución Española: art. 67.1"
  },
  {
    id: "T01-142",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 68.1 de la Constitución Española, todos los Diputados:",
    opciones: {
      A: "Representan a sus circunscripciones electorales",
      B: "Son representantes de toda la Nación y no estarán sujetos a mandato imperativo",
      C: "Pueden ser responsables por sus votos en caso de moción de censura",
      D: "Deben seguir las instrucciones de su partido político"
    },
    correcta: "B",
    explicacion: "El artículo 68.1 CE: 'Todos los Diputados son representantes de toda la Nación; no estarán sujetos a mandato imperativo alguno ni podrán ser responsables por sus votos u opiniones.' Es el principio del mandato representativo frente al mandato imperativo.",
    referencia: "Tema 1 - Constitución Española: art. 68.1"
  },
  {
    id: "T01-143",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 76.1 de la Constitución Española, en el Senado cada provincia estará representada por:",
    opciones: {
      A: "Un diputado",
      B: "Dos diputados",
      C: "Cuatro diputados",
      D: "Tres diputados"
    },
    correcta: "C",
    explicacion: "El artículo 76.1 CE: 'En el Senado, las provincias estarán representadas por cuatro diputados. En cada provincia insular, cada isla tendrá tres diputados. Las ciudades de Ceuta y Melilla designarán dos diputados cada una. Además, cada Comunidad Autónoma designará un diputado de derecho, o dos si su superficie excediera de 20.000 km² o su población fuera superior a un millón de habitantes.'",
    referencia: "Tema 1 - Constitución Española: art. 76.1"
  },
  {
    id: "T01-144",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 77.1 de la Constitución Española, la iniciativa del Senado para rechazar los proyectos de ley del Congreso se ejercerá:",
    opciones: {
      A: "Mediante una ley orgánica",
      B: "Mediante moción de rechazo",
      C: "Mediante un veto absoluto del Rey",
      D: "Mediante una resolución parlamentaria"
    },
    correcta: "B",
    explicacion: "El artículo 77.1 CE: 'La iniciativa del Senado para rechazar los proyectos de ley del Congreso se ejercerá mediante moción de rechazo, que será aprobada por mayoría absoluta de los miembros del Senado.'",
    referencia: "Tema 1 - Constitución Española: art. 77.1"
  },
  {
    id: "T01-145",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 78.2 de la Constitución Española, el Presidente de las Cortes Generales es:",
    opciones: {
      A: "El Presidente del Senado",
      B: "El Presidente del Congreso de los Diputados",
      C: "El Presidente del Tribunal Constitucional",
      D: "El Rey"
    },
    correcta: "B",
    explicacion: "El artículo 78.2 CE: 'El Presidente de las Cortes Generales será el Presidente del Congreso de los Diputados.' Las Cortes se reúnen en sesión conjunta para actos específicos (lectura del discurso de apertura, etc.).",
    referencia: "Tema 1 - Constitución Española: art. 78.2"
  },
  {
    id: "T01-146",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 85 de la Constitución Española, las leyes orgánicas requieren para su aprobación:",
    opciones: {
      A: "La mayoría simple de los miembros de cada Cámara",
      B: "La mayoría absoluta de los miembros de las Cortes Generales",
      C: "La mayoría de dos tercios de los miembros de cada Cámara",
      D: "La unanimidad de las Cortes Generales"
    },
    correcta: "B",
    explicacion: "El artículo 85 CE: 'Son leyes orgánicas: a) Las de desarrollo de los derechos fundamentales y libertades públicas... b) Los estatutos de autonomía... c) El estatuto general del Cuerpo de Funcionarios... Para su aprobación, modificación o derogación se exigirá mayoría absoluta de los miembros de las Cortes Generales.'",
    referencia: "Tema 1 - Constitución Española: art. 85"
  },
  {
    id: "T01-147",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 86.2 de la Constitución Española, el Gobierno podrá dictar decretos-leyes en caso de:",
    opciones: {
      A: "Necesidad urgente, sin que en ningún caso puedan abordar el régimen constitucional de los derechos fundamentales",
      B: "Crisis institucional, siempre que sea autorizado previamente por el Congreso",
      C: "Estado de alarma declarado por el Gobierno",
      D: "Petición de las Cortes Generales"
    },
    correcta: "A",
    explicacion: "El artículo 86.2 CE: 'El Gobierno podrá dictar decretos-leyes en caso de necesidad urgente, sin que en ningún caso puedan abordar el régimen constitucional de las instituciones básicas del Estado, los derechos, deberes y garantías de los ciudadanos, el régimen de las Comunidades Autónomas ni el Derecho del trabajo.' Deben ser someter al Congreso en un plazo de 30 días (art. 81.2 CE).",
    referencia: "Tema 1 - Constitución Española: arts. 86.2 y 81.2"
  },
  {
    id: "T01-148",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 87.1 de la Constitución Española, el Rey sancionará las leyes aprobadas por las Cortes Generales:",
    opciones: {
      A: "En un plazo máximo de 30 días",
      B: "En un plazo máximo de un mes",
      C: "En un plazo máximo de 15 días",
      D: "Sin plazo determinado"
    },
    correcta: "B",
    explicacion: "El artículo 87.1 CE: 'El Rey sancionará, en el plazo máximo de un mes, las leyes aprobadas por las Cortes Generales y ordenará su inmediata promulgación en el «Boletín Oficial del Estado».' Transcurrido el plazo, el Presidente del Congreso declarará sancionada la ley (art. 91.3 CE no aplica aquí; es el art. 87.1).",
    referencia: "Tema 1 - Constitución Española: art. 87.1"
  },
  {
    id: "T01-149",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 92 de la Constitución Española, los tratados internacionales que impliquen cesión de soberanía o derechos reconocidos en la Constitución requieren:",
    opciones: {
      A: "Aprobación previa por mayoría simple del Congreso",
      B: "Autorización previa por ley orgánica de las Cortes Generales",
      C: "Referéndum nacional",
      D: "Aprobación del Senado únicamente"
    },
    correcta: "B",
    explicacion: "El artículo 92.3 CE: 'Los tratados que impliquen cesión o delegación de soberanía o de derechos reconocidos en la Constitución requerirán autorización previa por ley orgánica.' (El art. 92.2 regula la autorización previa del Congreso para tratados de naturaleza política, militar, etc.).",
    referencia: "Tema 1 - Constitución Española: art. 92"
  },
  {
    id: "T01-150",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 94.1 de la Constitución Española, los tratados internacionales que reconozcan derechos fundamentales podrán ser aplicados por los tribunales:",
    opciones: {
      A: "En todo caso, como norma supletoria",
      B: "Una vez publicados en el «Boletín Oficial del Estado»",
      C: "Solo si han sido ratificados por el Senado",
      D: "Únicamente si el Gobierno lo dispone en una orden ministerial"
    },
    correcta: "B",
    explicacion: "El artículo 94.1 CE: 'Los tratados internacionales que reconozcan derechos fundamentales, siempre que estén en vigor en el momento de su publicación en el «Boletín Oficial del Estado», podrán ser aplicados por los tribunales y tribunales una vez publicados en el mismo.'",
    referencia: "Tema 1 - Constitución Española: art. 94.1"
  },
  {
    id: "T01-151",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 97.2 de la Constitución Española, el Gobierno:",
    opciones: {
      A: "Podrá dictar normas con rango de ley en cualquier materia",
      B: "No podrá dictar normas de desarrollo de las leyes orgánicas",
      C: "Podrá delegar su potestad reglamentaria en los Cuerpos Colegiados",
      D: "No podrá dictar reglamentos en materia de derechos fundamentales"
    },
    correcta: "B",
    explicacion: "El artículo 97.2 CE: 'El Gobierno no podrá dictar normas de desarrollo de las leyes orgánicas.' El 97.3 añade que la potestad reglamentaria no podrá ser delegada en los cuerpos colegiados.",
    referencia: "Tema 1 - Constitución Española: art. 97.2 y 97.3"
  },
  {
    id: "T01-152",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 99.2 de la Constitución Española, una vez designado el candidato a Presidente del Gobierno, este se presentará ante el Congreso:",
    opciones: {
      A: "En un plazo de 48 horas, para exponer el programa de acción que piensa llevar a cabo y pedir la confianza",
      B: "En un plazo de 72 horas, para someterse a una moción de censura",
      C: "En un plazo de 10 días, para celebrar un referéndum",
      D: "En un plazo de 30 días, para presentar su proyecto de ley de bases"
    },
    correcta: "A",
    explicacion: "El artículo 99.2 CE: 'El candidato se presentará, en el plazo de 48 horas desde su designación, ante el Congreso de los Diputados, para exponer el programa de acción que piensa llevar a cabo y solicitar la confianza.' Si no obtiene mayoría absoluta a la primera, se entenderá investido si, transcurridas 48 horas, obtiene mayoría simple (art. 99.3 CE).",
    referencia: "Tema 1 - Constitución Española: art. 99.2 y 99.3"
  },
  {
    id: "T01-153",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 101 de la Constitución Española, la moción de censura:",
    opciones: {
      A: "Puede ser presentada por cualquier diputado",
      B: "Es constructiva y requiere la iniciativa de al menos un décimo de los Diputados y la aprobación por mayoría absoluta del Congreso",
      C: "Requiere la mayoría de dos tercios del Congreso",
      D: "Puede presentarse más de una vez por el mismo candidato en la misma legislatura"
    },
    correcta: "B",
    explicacion: "El artículo 101.1 CE: 'El Congreso podrá forzar la responsabilidad política del Gobierno ante el Rey por la aprobación de una moción de censura.' Requiere iniciativa de al menos un décimo de los Diputados (101.1), es constructiva (el candidato será designado Presidente del Gobierno, 101.3) y nadie podrá ser candidato a más de una moción en la misma legislatura (101.2).",
    referencia: "Tema 1 - Constitución Española: art. 101"
  },
  {
    id: "T01-154",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 103.1 de la Constitución Española, los funcionarios públicos:",
    opciones: {
      A: "Sirven a la Comunidad Autónoma en la que residan",
      B: "Sirven a todo el Estado y no a una parte de él, y su régimen se regirá por los principios de igualdad, mérito y capacidad",
      C: "Serán designados por las corporaciones locales",
      D: "Tendrán carácter interino salvo prueba de oposición"
    },
    correcta: "B",
    explicacion: "El artículo 103.1 CE: 'Los funcionarios públicos sirven a todo el Estado y no a una parte de él.' Su régimen se regirá por los principios de igualdad, mérito y capacidad (art. 23.2 y 103.1 CE).",
    referencia: "Tema 1 - Constitución Española: art. 103.1"
  },
  {
    id: "T01-155",
    tema: 1,
    categoria: "General",
    dificultad: "facil",
    tipo: "test",
    enunciado: "Según el artículo 117.1 de la Constitución Española, la potestad jurisdiccional de administrar justicia en España corresponde:",
    opciones: {
      A: "Al Gobierno",
      B: "Al Tribunal Supremo y a los Juzgados y Tribunales que la ley establezca, en nombre del Rey",
      C: "A las Cortes Generales",
      D: "A las Comunidades Autónomas"
    },
    correcta: "B",
    explicacion: "El artículo 117.1 CE: 'La potestad jurisdiccional de administrar justicia en España corresponde al Tribunal Supremo y a los Juzgados y Tribunales que la ley establezca, y se ejercerá en nombre del Rey.'",
    referencia: "Tema 1 - Constitución Española: art. 117.1"
  },
  {
    id: "T01-156",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 120.1 de la Constitución Española, la justicia será:",
    opciones: {
      A: "Gratuita en todo caso",
      B: "Gratuita en los casos que la ley determine",
      C: "Siempre oral y pública",
      D: "Inaccesible a los extranjeros"
    },
    correcta: "B",
    explicacion: "El artículo 120.1 CE: 'La justicia será gratuita en los casos que la ley determine.' El 120.2 añade que los procesos serán públicos, con las excepciones que la ley establezca, y se resolverán en uno o, en los casos previstos por la ley, en dos instancias, sin dilaciones indebidas.",
    referencia: "Tema 1 - Constitución Española: art. 120.1"
  },
  {
    id: "T01-157",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 122.3 de la Constitución Española, el Fiscal General del Estado será nombrado:",
    opciones: {
      A: "Por las Cortes Generales",
      B: "Por el Rey, a propuesta del Gobierno, oído el Consejo General del Poder Judicial",
      C: "Por el Tribunal Supremo",
      D: "Por el Congreso de los Diputados"
    },
    correcta: "B",
    explicacion: "El artículo 122.3 CE: 'El Fiscal General del Estado será nombrado por el Rey, a propuesta del Gobierno, oído el Consejo General del Poder Judicial.' El 122.1 regula el Ministerio Fiscal como órgano que promueve la acción de la jurisdicción al servicio de la justicia.",
    referencia: "Tema 1 - Constitución Española: art. 122"
  },
  {
    id: "T01-158",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 123.2 de la Constitución Española, los Magistrados del Tribunal Supremo serán nombrados:",
    opciones: {
      A: "Por el Rey, a propuesta del Congreso",
      B: "Por el Gobierno, a propuesta del Consejo General del Poder Judicial, para un mandato de 15 años",
      C: "Por las Cortes Generales, para un mandato vitalicio",
      D: "Por el Senado, a propuesta del Gobierno"
    },
    correcta: "B",
    explicacion: "El artículo 123.2 CE: 'Los Magistrados del Tribunal Supremo serán nombrados por el Gobierno, a propuesta del Consejo General del Poder Judicial, para un mandato de 15 años.' El art. 123.1 establece que el Tribunal Supremo estará integrado por un mínimo de 32 Magistrados.",
    referencia: "Tema 1 - Constitución Española: art. 123"
  },
  {
    id: "T01-159",
    tema: 1,
    categoria: "General",
    dificultad: "dificil",
    tipo: "test",
    enunciado: "Según el artículo 126.1 de la Constitución Española, el Consejo General del Poder Judicial estará integrado por:",
    opciones: {
      A: "El Presidente del Tribunal Supremo, que lo presidirá, y 18 miembros, nombrados por el Rey para un período de 10 años",
      B: "El Presidente del Tribunal Supremo, que lo presidirá, y 18 miembros, nombrados por el Rey para un período de 5 años",
      C: "El Presidente del Gobierno y 20 jueces elegidos por el Congreso",
      D: "El Presidente del Senado y 18 miembros vitalicios"
    },
    correcta: "B",
    explicacion: "El artículo 126.1 CE: 'El Consejo General del Poder Judicial es el órgano de gobierno de los jueces. Está integrado por el Presidente del Tribunal Supremo, que lo presidirá, y 18 miembros nombrados por el Rey para un período de 5 años, de los cuales 9 a propuesta del Congreso y 9 a propuesta del Senado, en cada caso por mayoría de tres quintos.'",
    referencia: "Tema 1 - Constitución Española: art. 126.1"
  },
  {
    id: "T01-160",
    tema: 1,
    categoria: "General",
    dificultad: "media",
    tipo: "test",
    enunciado: "Según el artículo 133.1 de la Constitución Española, el proyecto de Ley de Presupuestos Generales del Estado será presentado a las Cortes Generales:",
    opciones: {
      A: "Como muy tarde un mes antes del fin del año natural",
      B: "Como muy tarde tres meses antes del fin del año natural",
      C: "En cualquier momento del año natural",
      D: "Como muy tarde 15 días antes del fin del año natural"
    },
    correcta: "A",
    explicacion: "El artículo 133.1 CE: 'El proyecto de Ley de Presupuestos Generales del Estado será presentado a las Cortes Generales como muy tarde un mes antes del fin del año natural.' El 133.2 establece que surtirá efecto por un período de un año.",
    referencia: "Tema 1 - Constitución Española: art. 133.1"
  }
];
