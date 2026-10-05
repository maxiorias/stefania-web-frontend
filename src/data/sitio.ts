// Contenido del sitio en un solo lugar: para cambiar textos no hace falta tocar componentes
import fotoLicenciatura from '../assets/foto-egreso-licenciatura.jpeg';
import fotoMaestria from '../assets/foto-egreso-maestria-dos.jpeg';
import fotoLibro from '../assets/foto-presentacion-libro.jpg';
import fotoCongreso from '../assets/foto-congreso.jpeg';
import fotoEvaluacion from '../assets/foto-evaluacion-neuro.png';
import fotoDiagnostico from '../assets/foto-diagnostico.png';
import fotoTalleres from '../assets/foto-talleres.png';
import fotoConsultoria from '../assets/foto-consultoria.png';

export const persona = {
  nombre: 'Stefania del Valle Alberti',
  titulo: 'Mgtr. Lic. Stefania del Valle Alberti',
  bajada: [
    'Lic. en Psicopedagogía especializada en Derechos Humanos y Políticas Públicas de Niñez, Adolescencia y Familia.',
    'Magíster en Derechos Humanos y democratización en Latinoamérica y el Caribe.',
  ],
  matricula: 'MP-125269',
  ubicacion: 'Trelew, Chubut, Argentina',
  email: 'stefaniaalbertipsp2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/stefaniaalberti2/',
  tesis: 'https://www.ciep.unsam.edu.ar/wp-content/uploads/2024/09/Tesis-destacadas-LATMA-2022-2023_-Stefania-Del-Valle-Alberti.pdf',
  cv: '/cv-stefania-alberti.pdf',
  // Número en formato internacional sin "+" ni espacios (ej. 5492804123456). Vacío = no se muestra
  whatsapp: '',
};

export const trayectoria = [
  {
    titulo: 'Licenciatura en Psicopedagogía',
    anio: '2018',
    texto: 'Formación en Psicopedagogía con enfoque en procesos de aprendizaje, desarrollo personal y acompañamiento educativo.',
    foto: fotoLicenciatura,
    alt: 'Licenciatura en Psicopedagogía',
  },
  {
    titulo: 'Maestría en Derechos Humanos de Latinoamérica y el Caribe',
    anio: '2023',
    texto: 'Especialización en Derechos Humanos y Políticas Públicas de Niñez, Adolescencia y Familia.',
    foto: fotoMaestria,
    alt: 'Maestría en Derechos Humanos',
  },
  {
    titulo: 'Feria Nacional del Libro',
    texto: 'Presentación de la tesis de maestría y difusión de su trabajo en el ámbito académico y social.',
    foto: fotoLibro,
    alt: 'Feria Nacional del Libro',
  },
  {
    titulo: 'XV Congreso Nacional de Psicopedagogía',
    texto: 'Exposición de la tesis de maestría ante colegas y profesionales del campo de la Psicopedagogía.',
    foto: fotoCongreso,
    alt: 'Congreso Nacional de Psicopedagogía',
  },
];

export const servicios = [
  {
    titulo: 'Evaluación Neurocognitiva',
    texto: 'Exploración integral de las funciones cognitivas para acompañar el desarrollo y aprendizaje.',
    foto: fotoEvaluacion,
  },
  {
    titulo: 'Diagnóstico y Tratamiento Psicopedagógico',
    texto: 'Intervenciones personalizadas para promover estrategias de aprendizaje y bienestar académico.',
    foto: fotoDiagnostico,
  },
  {
    titulo: 'Talleres y Capacitaciones',
    texto: 'Espacios de formación en temáticas de niñez, adolescencia, familia y derechos humanos.',
    foto: fotoTalleres,
  },
  {
    titulo: 'Servicios de Consultoría',
    texto: 'Asesoramiento técnico en políticas públicas, inclusión educativa y abordajes interdisciplinarios.',
    foto: fotoConsultoria,
  },
];
