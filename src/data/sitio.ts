// Contenido del sitio en un solo lugar: para cambiar textos no hace falta tocar componentes.
// Todo lo que está acá sale de lo que Stefania ya publicó (web anterior + Instagram).
import fotoLicenciatura from '../assets/foto-egreso-licenciatura.jpeg';
import fotoMaestria from '../assets/foto-egreso-maestria-dos.jpeg';
import fotoLibro from '../assets/foto-presentacion-libro.jpg';
import fotoCongreso from '../assets/foto-congreso.jpeg';
import fotoEvaluacion from '../assets/foto-evaluacion-neuro.png';
import fotoDiagnostico from '../assets/foto-diagnostico.png';
import fotoTalleres from '../assets/foto-talleres.png';
import fotoConsultoria from '../assets/foto-consultoria.png';
import logoOsde from '../assets/obras-sociales/osde.png';
import logoSancor from '../assets/obras-sociales/sancor.png';
import logoOspe from '../assets/obras-sociales/ospe.png';
import logoSeros from '../assets/obras-sociales/seros.png';

export const persona = {
  nombre: 'Stefania del Valle Alberti',
  titulo: 'Mgtr. Lic. Stefania del Valle Alberti',
  presentacion:
    'Soy Licenciada en Psicopedagogía con más de 8 años de experiencia en neurorehabilitación. Trabajo desde un abordaje neurocognitivo en evaluación, diagnóstico y tratamiento, junto a la familia y la escuela, en Trelew y Puerto Madryn.',
  matriculas: [
    { numero: 'MP 345', provincia: 'Chubut' },
    { numero: 'MP 12-5269', provincia: 'Córdoba' },
  ],
  ubicacion: 'Trelew y Puerto Madryn, Chubut, Argentina',
  sedes: [
    { ciudad: 'Trelew', detalle: 'Atención presencial' },
    { ciudad: 'Puerto Madryn', detalle: 'Los jueves' },
  ],
  email: 'stefaniaalbertipsp2@gmail.com',
  telefono: '3548-565370',
  // Formato internacional sin "+" ni espacios. Vacío = no se muestra
  whatsapp: '5493548565370',
  mensajeWhatsapp: 'Hola Stefania, quería hacerte una consulta sobre una evaluación.',
  linkedin: 'https://www.linkedin.com/in/stefaniaalberti2/',
  instagram: 'https://www.instagram.com/psicopedagoga.stefaniaalberti/',
  tesis: 'https://www.ciep.unsam.edu.ar/wp-content/uploads/2024/09/Tesis-destacadas-LATMA-2022-2023_-Stefania-Del-Valle-Alberti.pdf',
  cv: '/cv-stefania-alberti.pdf',
};

export const enlaceWhatsapp = persona.whatsapp
  ? `https://wa.me/${persona.whatsapp}?text=${encodeURIComponent(persona.mensajeWhatsapp)}`
  : '';

// Sección Evaluaciones: textos tomados de sus publicaciones
export const evaluaciones = {
  intro:
    'La valoración neurocognitiva permite conocer el perfil de funcionamiento en cada etapa de la vida y orientar intervenciones adecuadas.',
  foto: fotoEvaluacion,
  items: [
    {
      titulo: 'Evaluación neurocognitiva',
      texto: 'Exploración integral de las funciones cognitivas para comprender fortalezas y desafíos, y acompañar el desarrollo y el aprendizaje.',
    },
    {
      titulo: 'Escalas de Wechsler',
      texto: 'Evalúan el funcionamiento intelectual analizando comprensión verbal, razonamiento, memoria de trabajo y velocidad de procesamiento. En sus tres versiones se aplican desde los 2 hasta los 90 años.',
    },
    {
      titulo: 'Evaluación para el CUD',
      texto: 'En el marco del Certificado Único de Discapacidad, la evaluación con Escalas de Wechsler puede ser un insumo clave para acreditar compromiso en el funcionamiento intelectual, siempre dentro de una valoración interdisciplinaria.',
    },
  ],
  cita: 'La evaluación no es una etiqueta: es una herramienta para garantizar derechos y generar apoyos adecuados.',
};

export const proceso = [
  {
    titulo: 'Historia de desarrollo',
    texto: 'Conocemos la historia del niño o la niña para identificar hitos importantes que pueden incidir en su aprendizaje.',
  },
  {
    titulo: 'Evaluación y diagnóstico',
    texto: 'Utilizamos herramientas neurocognitivas que permiten comprender mejor sus fortalezas y desafíos.',
  },
  {
    titulo: 'Plan de tratamiento',
    texto: 'Construimos un plan personalizado, donde el juego cumple un rol fundamental para aprender, explorar y desarrollar habilidades.',
  },
];

export const servicios = [
  { titulo: 'Evaluación neurocognitiva', texto: 'Perfil de funcionamiento cognitivo para fundamentar diagnósticos y orientar intervenciones.', foto: fotoEvaluacion },
  { titulo: 'Diagnóstico y tratamiento psicopedagógico', texto: 'Intervenciones personalizadas para promover estrategias de aprendizaje y bienestar académico.', foto: fotoDiagnostico },
  { titulo: 'Talleres y capacitaciones', texto: 'Espacios de formación en temáticas de niñez, adolescencia, familia y derechos humanos.', foto: fotoTalleres },
  { titulo: 'Servicios de consultoría', texto: 'Asesoramiento técnico en políticas públicas, inclusión educativa y abordajes interdisciplinarios.', foto: fotoConsultoria },
];

// Servicios sin foto, se muestran como etiquetas debajo de las tarjetas
export const otrosServicios = ['Orientación vocacional', 'Acompañamiento a familias', 'Orientación a centros educativos'];

export const trayectoria = [
  {
    titulo: 'Licenciatura en Psicopedagogía',
    anio: '2018',
    texto: 'Universidad Provincial de Córdoba. Formación con enfoque en procesos de aprendizaje, desarrollo personal y acompañamiento educativo.',
    foto: fotoLicenciatura,
    posicion: 'center 30%',
    alt: 'Licenciatura en Psicopedagogía',
  },
  {
    titulo: 'Neurorehabilitación',
    etiqueta: '+8 años',
    texto: 'Evaluación, diagnóstico y tratamiento desde un abordaje neurocognitivo, incluyendo la Clínica Universitaria Reina Fabiola (Córdoba). Coordinación de equipos interdisciplinarios junto a profesionales de la salud y la educación.',
  },
  {
    titulo: 'Maestría en Derechos Humanos de Latinoamérica y el Caribe',
    anio: '2023',
    texto: 'Universidad Nacional de San Martín, con investigación en Educación Inclusiva.',
    foto: fotoMaestria,
    posicion: 'center 35%',
    alt: 'Maestría en Derechos Humanos',
  },
  {
    titulo: 'Feria Nacional del Libro',
    etiqueta: 'Tesis publicada',
    texto: 'Presentación de la tesis de maestría y difusión de su trabajo en el ámbito académico y social.',
    foto: fotoLibro,
    posicion: 'center 80%',
    alt: 'Feria Nacional del Libro',
  },
  {
    titulo: 'XV Congreso Nacional de Psicopedagogía',
    etiqueta: 'Exposición',
    texto: 'Exposición de la tesis de maestría ante colegas y profesionales del campo de la Psicopedagogía.',
    foto: fotoCongreso,
    posicion: 'center 30%',
    alt: 'Congreso Nacional de Psicopedagogía',
  },
  {
    titulo: 'Especialización en Políticas Públicas en Niñez, Adolescencia y Familia',
    etiqueta: 'En curso',
    texto: 'Universidad Nacional de Entre Ríos.',
  },
];

// Preguntas frecuentes: responden búsquedas típicas en Google con sus propios textos
export const preguntas = [
  {
    pregunta: '¿Qué es una evaluación neurocognitiva?',
    respuesta: 'Es una valoración que permite conocer el perfil de funcionamiento en cada etapa de la vida: fortalezas, desafíos y cómo inciden en el aprendizaje. Sus resultados orientan las intervenciones adecuadas.',
  },
  {
    pregunta: '¿Qué evalúan las Escalas de Wechsler y desde qué edad se aplican?',
    respuesta: 'Son una de las herramientas más reconocidas a nivel mundial para evaluar el funcionamiento intelectual. No solo dan un puntaje global: analizan comprensión verbal, razonamiento, memoria de trabajo y velocidad de procesamiento. En sus tres versiones se aplican desde los 2 hasta los 90 años.',
  },
  {
    pregunta: '¿La evaluación sirve para tramitar el CUD?',
    respuesta: 'En el marco del Certificado Único de Discapacidad, la evaluación con Escalas de Wechsler puede ser un insumo clave cuando se necesita acreditar compromiso en el funcionamiento intelectual, siempre dentro de una valoración interdisciplinaria.',
  },
  {
    pregunta: '¿Cuándo conviene consultar a una psicopedagoga?',
    respuesta: 'Si como familia o docente venís notando dificultades en el aprendizaje, la atención o la organización, es un buen momento para consultar. Consultar a tiempo es una forma de cuidado.',
  },
  {
    pregunta: '¿Cómo es el proceso de evaluación y tratamiento?',
    respuesta: 'Primero conocemos la historia de desarrollo; después hacemos la evaluación y el diagnóstico con herramientas neurocognitivas; y a partir de ahí se construye un plan de tratamiento personalizado, donde el juego cumple un rol fundamental.',
  },
  {
    pregunta: '¿Trabajás con obras sociales?',
    respuesta: 'Sí. Soy prestadora de OSDE, Sancor Salud y OSPE, y con SEROS trabajo por reintegro. También atiendo pacientes con CUD y de manera particular.',
  },
  {
    pregunta: '¿Dónde atendés?',
    respuesta: 'Atiendo de manera presencial en Trelew y los jueves en Puerto Madryn, Chubut. Podés consultar por WhatsApp al 3548-565370.',
  },
];

// Coberturas. Sin `logo` se muestra el nombre en tipografía; los logos van en src/assets/obras-sociales/
export const coberturas: { nombre: string; modalidad: string; logo?: ImageMetadata }[] = [
  { nombre: 'OSDE', modalidad: 'Prestadora', logo: logoOsde },
  { nombre: 'Sancor Salud', modalidad: 'Prestadora', logo: logoSancor },
  { nombre: 'OSPE', modalidad: 'Prestadora', logo: logoOspe },
  { nombre: 'SEROS', modalidad: 'Con reintegro', logo: logoSeros },
];

export const otrasCoberturas = [
  { nombre: 'CUD', detalle: 'Pacientes con Certificado Único de Discapacidad' },
  { nombre: 'Particular', detalle: 'Atención sin obra social' },
];
