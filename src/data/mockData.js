export const user = {
  id: 1,
  name: 'Steffano Aguayo',
  email: 'alumno@nexus.edu',
  password: '123456',
};

export const categories = [
  'Ingenieria de software',
  'Arquitectura',
  'Investigacion',
  'Revistas academicas',
  'Negocios digitales',
];

export const books = [
  { id: 1, title: 'React Aplicado a Componentes', author: 'Laura Vidal', category: 'Ingenieria de software', year: 2025, type: 'Libro', price: 38, sales: 128, image: '/covers/react-componentes.svg', description: 'Guia practica para construir interfaces SPA modernas con componentes, rutas y estado.' },
  { id: 2, title: 'Arquitectura Limpia en Frontend', author: 'Miguel Rivas', category: 'Arquitectura', year: 2024, type: 'Libro', price: 42, sales: 119, image: '/covers/arquitectura-limpia.svg', description: 'Patrones de organizacion para proyectos web mantenibles y escalables.' },
  { id: 3, title: 'UX para Bibliotecas Universitarias', author: 'Ana Figueroa', category: 'Investigacion', year: 2023, type: 'Libro', price: 31, sales: 101, image: '/covers/ux-bibliotecas.svg', description: 'Metodos de investigacion y experiencia de usuario aplicados a servicios academicos.' },
  { id: 4, title: 'Revista Nexus Investigacion Vol. 12', author: 'Comite Editorial Nexus', category: 'Revistas academicas', year: 2025, type: 'Revista', price: 15, sales: 96, image: '/covers/revista-nexus.svg', description: 'Articulos recientes sobre educacion superior, tecnologia y espacios colaborativos.' },
  { id: 5, title: 'Gestion de APIs Simuladas', author: 'Carlos Vega', category: 'Ingenieria de software', year: 2024, type: 'Libro', price: 29, sales: 89, image: '/covers/apis-simuladas.svg', description: 'Creacion de backends simulados para validar interfaces antes del servidor real.' },
  { id: 6, title: 'Estrategia Digital para Campus', author: 'Patricia Molina', category: 'Negocios digitales', year: 2022, type: 'Libro', price: 35, sales: 77, image: '/covers/estrategia-campus.svg', description: 'Vision de productos digitales para entornos universitarios y servicios hibridos.' },
  { id: 7, title: 'Testing de Aplicaciones SPA', author: 'Jorge Prieto', category: 'Ingenieria de software', year: 2023, type: 'Libro', price: 33, sales: 74, image: '/covers/testing-spa.svg', description: 'Estrategias para verificar vistas, rutas, formularios y consumo de datos.' },
  { id: 8, title: 'Co-working Academico', author: 'Sofia Lema', category: 'Investigacion', year: 2021, type: 'Libro', price: 27, sales: 69, image: '/covers/coworking-academico.svg', description: 'Analisis de espacios colaborativos para estudiantes, docentes e investigadores.' },
  { id: 9, title: 'Revista Frontend Hoy No. 8', author: 'Equipo Frontend Hoy', category: 'Revistas academicas', year: 2024, type: 'Revista', price: 12, sales: 62, image: '/covers/frontend-hoy.svg', description: 'Tendencias sobre React, accesibilidad, rendimiento y diseno de interfaces.' },
  { id: 10, title: 'Analitica de Servicios Universitarios', author: 'Daniel Torres', category: 'Negocios digitales', year: 2025, type: 'Libro', price: 40, sales: 58, image: '/covers/analitica-servicios.svg', description: 'Uso de datos para mejorar librerias, cafeterias, eventos y zonas de estudio.' },
  { id: 11, title: 'Diseno de Sistemas Visuales', author: 'Elena Ruiz', category: 'Arquitectura', year: 2022, type: 'Libro', price: 37, sales: 41, image: '/covers/sistemas-visuales.svg', description: 'Construccion de sistemas visuales coherentes para productos web.' },
  { id: 12, title: 'Metodologias Agiles en Web', author: 'Ramon Ortega', category: 'Ingenieria de software', year: 2021, type: 'Libro', price: 30, sales: 39, image: '/covers/agiles-web.svg', description: 'Aplicacion de Scrum y Kanban en equipos de desarrollo web.' },
];

export const purchasedBookIds = [1, 4, 8];

export const spaces = [
  { id: 1, name: 'Mesa Colaborativa A', capacity: 6, occupied: true, occupiedBy: 'Maria Lopez', from: '09:00', until: '11:30', equipment: ['Pantalla', 'Pizarra', 'Enchufes'], description: 'Mesa amplia para sesiones de equipo y revision de proyectos.' },
  { id: 2, name: 'Cabina Silenciosa B', capacity: 2, occupied: false, occupiedBy: null, from: null, until: null, equipment: ['Aislamiento acustico', 'Lampara regulable'], description: 'Cabina individual o para pareja, ideal para lectura y videollamadas.' },
  { id: 3, name: 'Sala Creativa C', capacity: 8, occupied: true, occupiedBy: 'Grupo DataLab', from: '10:00', until: '13:00', equipment: ['Proyector', 'Pizarra movil', 'Post-its'], description: 'Espacio orientado a ideacion, reuniones y presentaciones cortas.' },
  { id: 4, name: 'Mesa Alta D', capacity: 4, occupied: false, occupiedBy: null, from: null, until: null, equipment: ['Tomas USB', 'Sillas ergonomicas'], description: 'Puesto informal para trabajo rapido junto al area de cafeteria.' },
  { id: 5, name: 'Zona Investigadores E', capacity: 10, occupied: true, occupiedBy: 'Semillero Nexus', from: '08:30', until: '12:00', equipment: ['Monitores', 'Red cableada', 'Pizarra'], description: 'Zona de mayor capacidad para investigacion y trabajo academico guiado.' },
  { id: 6, name: 'Puesto Ventana F', capacity: 1, occupied: false, occupiedBy: null, from: null, until: null, equipment: ['Luz natural', 'Toma electrica'], description: 'Puesto individual con vista exterior para estudio concentrado.' },
];
