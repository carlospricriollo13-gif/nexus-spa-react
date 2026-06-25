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
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', category: 'Ingenieria de software', year: 2024, type: 'Libro', price: 42, sales: 128, image: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg', description: 'Practicas profesionales para escribir codigo legible, mantenible y facil de probar.' },
  { id: 2, title: 'Design Patterns', author: 'Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides', category: 'Arquitectura', year: 2023, type: 'Libro', price: 48, sales: 119, image: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg', description: 'Catalogo clasico de patrones de diseno aplicables a sistemas orientados a objetos.' },
  { id: 3, title: "Don't Make Me Think", author: 'Steve Krug', category: 'Investigacion', year: 2022, type: 'Libro', price: 34, sales: 101, image: 'https://covers.openlibrary.org/b/isbn/9780321965516-L.jpg', description: 'Referencia practica sobre usabilidad, experiencia de usuario y validacion de interfaces.' },
  { id: 4, title: "HBR's 10 Must Reads on Strategy", author: 'Harvard Business Review', category: 'Revistas academicas', year: 2025, type: 'Revista', price: 18, sales: 96, image: 'https://covers.openlibrary.org/b/isbn/9781422157985-L.jpg', description: 'Seleccion editorial con articulos clave sobre estrategia, ventaja competitiva y gestion.' },
  { id: 5, title: 'Refactoring', author: 'Martin Fowler', category: 'Ingenieria de software', year: 2024, type: 'Libro', price: 46, sales: 89, image: 'https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg', description: 'Tecnicas para mejorar codigo existente sin alterar su comportamiento observable.' },
  { id: 6, title: 'The Lean Startup', author: 'Eric Ries', category: 'Negocios digitales', year: 2023, type: 'Libro', price: 36, sales: 77, image: 'https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg', description: 'Metodo para crear productos digitales mediante experimentacion, aprendizaje y metricas.' },
  { id: 7, title: 'Peopleware', author: 'Tom DeMarco y Timothy Lister', category: 'Ingenieria de software', year: 2022, type: 'Libro', price: 32, sales: 74, image: 'https://covers.openlibrary.org/b/isbn/9780321934116-L.jpg', description: 'Analisis sobre productividad, equipos de desarrollo y entorno de trabajo.' },
  { id: 8, title: 'Sprint', author: 'Jake Knapp, John Zeratsky y Braden Kowitz', category: 'Investigacion', year: 2021, type: 'Libro', price: 29, sales: 69, image: 'https://covers.openlibrary.org/b/isbn/9781501121746-L.jpg', description: 'Metodo de cinco dias para validar ideas, prototipos y soluciones con usuarios reales.' },
  { id: 9, title: 'MIT Technology Review: The Innovators Issue', author: 'MIT Technology Review', category: 'Revistas academicas', year: 2024, type: 'Revista', price: 14, sales: 62, image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80', description: 'Edicion especial sobre innovacion tecnologica, inteligencia artificial y sociedad digital.' },
  { id: 10, title: 'Building Microservices', author: 'Sam Newman', category: 'Arquitectura', year: 2025, type: 'Libro', price: 44, sales: 58, image: 'https://covers.openlibrary.org/b/isbn/9781491950357-L.jpg', description: 'Guia para disenar, desplegar y operar arquitecturas basadas en microservicios.' },
  { id: 11, title: 'Domain-Driven Design', author: 'Eric Evans', category: 'Arquitectura', year: 2022, type: 'Libro', price: 50, sales: 41, image: 'https://covers.openlibrary.org/b/isbn/9780321125217-L.jpg', description: 'Enfoque para modelar software complejo a partir del conocimiento del dominio.' },
  { id: 12, title: 'Scrum: The Art of Doing Twice the Work in Half the Time', author: 'Jeff Sutherland', category: 'Negocios digitales', year: 2021, type: 'Libro', price: 31, sales: 39, image: 'https://covers.openlibrary.org/b/isbn/9780385346450-L.jpg', description: 'Introduccion practica a Scrum para gestionar equipos, productos y entregas iterativas.' },
];

export const purchasedBookIds = [1, 4, 8];

export const spaces = [
  { id: 1, name: 'Mesa Colaborativa A', capacity: 6, occupied: true, occupiedBy: 'Maria Lopez', from: '09:00', until: '11:30', image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=900&q=80', equipment: ['Pantalla', 'Pizarra', 'Enchufes'], description: 'Mesa amplia para sesiones de equipo y revision de proyectos.' },
  { id: 2, name: 'Cabina Silenciosa B', capacity: 2, occupied: false, occupiedBy: null, from: null, until: null, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', equipment: ['Aislamiento acustico', 'Lampara regulable'], description: 'Cabina individual o para pareja, ideal para lectura y videollamadas.' },
  { id: 3, name: 'Sala Creativa C', capacity: 8, occupied: true, occupiedBy: 'Grupo DataLab', from: '10:00', until: '13:00', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80', equipment: ['Proyector', 'Pizarra movil', 'Post-its'], description: 'Espacio orientado a ideacion, reuniones y presentaciones cortas.' },
  { id: 4, name: 'Mesa Alta D', capacity: 4, occupied: false, occupiedBy: null, from: null, until: null, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80', equipment: ['Tomas USB', 'Sillas ergonomicas'], description: 'Puesto informal para trabajo rapido junto al area de cafeteria.' },
  { id: 5, name: 'Zona Investigadores E', capacity: 10, occupied: true, occupiedBy: 'Semillero Nexus', from: '08:30', until: '12:00', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80', equipment: ['Monitores', 'Red cableada', 'Pizarra'], description: 'Zona de mayor capacidad para investigacion y trabajo academico guiado.' },
  { id: 6, name: 'Puesto Ventana F', capacity: 1, occupied: false, occupiedBy: null, from: null, until: null, image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80', equipment: ['Luz natural', 'Toma electrica'], description: 'Puesto individual con vista exterior para estudio concentrado.' },
];
