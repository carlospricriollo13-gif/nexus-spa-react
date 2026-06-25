# Guia de video memoria

Duracion recomendada: 12 a 15 minutos.

## 1. Presentacion

Presentar la aplicacion Nexus como SPA hecha con React para libreria universitaria y co-working.

## 2. Rutas

Abrir `src/App.jsx` y explicar:

- `/` landing publica.
- `/login` login publico.
- `/libreria`, `/mis-libros`, `/comprar/:bookId`, `/coworking`, `/reservar/:spaceId` como rutas protegidas.
- `ProtectedRoute.jsx` redirige al login si el usuario no esta autenticado.

## 3. Adaptacion responsive

Abrir DevTools de Chrome y mostrar estas medidas:

- Movil pequeno: 390 x 844 px.
- Movil grande: 430 x 932 px.
- Tablet vertical: 768 x 1024 px.
- Tablet horizontal: 1024 x 768 px.

Explicar que la adaptacion esta en `src/styles.css`:

- Se elimino el ancho minimo de escritorio y se usa `min-width: 320px`.
- En tablets se reorganizan cabecera, hero, grids y catalogo.
- En moviles las tarjetas, formularios, navegacion y acciones pasan a una columna.
- La tabla de reservas permite desplazamiento horizontal para no romper el layout.

## 4. Testing

Ejecutar:

```bash
npm run test
```

Mostrar `src/__tests__/activity3.test.jsx` y explicar que se prueban estos componentes/vistas:

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

## 5. Vistas

Recorrer la aplicacion en el navegador:

- Landing con 10 libros mas vendidos.
- Login con `alumno@nexus.edu` y `123456`.
- Catalogo con menu lateral, categorias y filtros.
- Detalle individual de libro o revista.
- Compra simulada.
- Libros adquiridos previamente.
- Vista de espacios de co-working.
- Detalle individual de espacio.
- Reserva simulada.

## 6. Hooks

Mostrar:

- `useState` en formularios y filtros.
- `useEffect` en `AuthContext.jsx` y `useApiResource.js`.
- `useContext` mediante `AuthContext.jsx` y `useAuth`.
- Custom hook `useApiResource.js` para cargar recursos de la API simulada.

## 7. API simulada

Mostrar:

- `db.json` como base de datos simulada.
- `npm run api` levantando `json-server` en `http://localhost:3001`.
- `src/services/mockApi.js` como capa de peticiones HTTP con `fetch`.
- Postman probando `GET /books`, `GET /spaces` y un `POST /reservations`.
- Explicar que las vistas no leen los datos directamente, sino mediante funciones de servicio que consultan la API.

## 8. Despliegue

Mostrar la aplicacion en Vercel o Netlify. Si aun no esta desplegada, mostrar `npm run build` funcionando correctamente.

## 9. Conclusiones

Mencionar que la actividad cumple responsividad, testing, rutas, proteccion, hooks, custom hook, vistas solicitadas y consumo de API simulada.
