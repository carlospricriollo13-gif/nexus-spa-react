# Nexus SPA React - Actividad 3

Aplicacion web SPA para la Actividad 3 de Desarrollo Web Orientado a Componentes.

## Requisitos cubiertos

- React con Vite.
- React Router con rutas publicas y rutas protegidas.
- Login con contexto global usando `useContext`.
- Uso de `useState`, `useEffect` y `useContext`.
- Custom hook `useApiResource` para consumir datos de la API simulada.
- API simulada en `src/services/mockApi.js` con datos de `src/data/mockData.js`.
- API HTTP simulada con `json-server` y datos en `db.json`, lista para probar en Postman.
- Vistas de landing, libreria, categorias/filtros, detalle de libro, libros adquiridos, compra, co-working, detalle de espacio y reserva.
- Responsividad para moviles y tablets mediante media queries en `src/styles.css`.
- Tests con React Testing Library y Vitest sobre mas de diez componentes/vistas.

## Medidas responsive probadas

- Movil pequeno: 390 x 844 px.
- Movil grande: 430 x 932 px.
- Tablet vertical: 768 x 1024 px.
- Tablet horizontal: 1024 x 768 px.

## Credenciales de prueba

- Email: `alumno@nexus.edu`
- Password: `123456`

## Rutas principales

- `/`: landing con los 10 libros mas vendidos.
- `/login`: acceso de usuario.
- `/libreria`: catalogo con categorias y filtros.
- `/libreria/:bookId`: detalle individual de libro o revista.
- `/mis-libros`: libros comprados previamente.
- `/comprar/:bookId`: compra simulada.
- `/coworking`: espacios de co-working.
- `/coworking/:spaceId`: detalle individual de espacio.
- `/reservar/:spaceId`: reserva simulada.

## Ejecucion local

Instalar dependencias:

```bash
npm install
```

Levantar la API simulada en una terminal:

```bash
npm run api
```

Levantar React en otra terminal:

```bash
npm run dev
```

API local para Postman: `http://localhost:3001`.

Guia de endpoints: `POSTMAN_API.md`.

## Compilacion

```bash
npm run build
```

## Testing

Ejecutar la suite de pruebas:

```bash
npm run test
```

Componentes y vistas cubiertos en `src/__tests__/activity3.test.jsx`:

- `BookCard`.
- `SpaceCard`.
- `Layout`.
- `ProtectedRoute`.
- `LandingPage`.
- `BookStorePage`.
- `CoworkingPage`.
- `BookDetailPage`.
- `CheckoutPage`.
- `PurchasedBooksPage`.
- `SpaceDetailPage`.
- `ReservationPage`.
- `LoginPage`.

## Despliegue recomendado

Subir el proyecto a GitHub y conectarlo con Vercel o Netlify. Comando de build: `npm run build`. Carpeta de salida: `dist`.

## Guia breve para la video memoria

1. Explicar la adaptacion responsive y las cuatro medidas probadas.
2. Mostrar `src/__tests__/activity3.test.jsx` y ejecutar `npm run test`.
3. Explicar las rutas publicas y protegidas desde `src/App.jsx`.
4. Recorrer las vistas: landing, libreria, detalle, compra, mis libros, co-working, detalle y reserva.
5. Mostrar la API simulada `db.json`, `json-server`, `mockApi.js` y las pruebas de Postman.
6. Enseñar la aplicacion desplegada o ejecutandose en local.
