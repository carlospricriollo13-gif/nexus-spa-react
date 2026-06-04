# Pruebas de API en Postman

Primero levanta la API simulada:

```bash
npm run api
```

Base URL:

```text
http://localhost:3001
```

## Endpoints principales

### Libros

```http
GET http://localhost:3001/books
```

```http
GET http://localhost:3001/books/1
```

```http
GET http://localhost:3001/books?_sort=sales&_order=desc&_limit=10
```

```http
GET http://localhost:3001/books?category=Ingenieria%20de%20software
```

```http
GET http://localhost:3001/books?year=2025
```

### Categorias

```http
GET http://localhost:3001/categories
```

### Login simulado

```http
GET http://localhost:3001/users?email=alumno@nexus.edu&password=123456
```

### Compras

```http
GET http://localhost:3001/purchases?userId=1
```

```http
POST http://localhost:3001/purchases
```

Body JSON:

```json
{
  "userId": 1,
  "bookId": 2,
  "date": "2026-06-02"
}
```

### Espacios de co-working

```http
GET http://localhost:3001/spaces
```

```http
GET http://localhost:3001/spaces/1
```

### Reservas

```http
GET http://localhost:3001/reservations
```

```http
POST http://localhost:3001/reservations
```

Body JSON:

```json
{
  "userId": 1,
  "spaceId": 2,
  "date": "2026-06-03",
  "from": "10:00",
  "until": "12:00"
}
```

## Ejecucion completa de la aplicacion

Usa dos terminales:

```bash
npm run api
```

```bash
npm run dev
```

La aplicacion React consume la API mediante `src/services/mockApi.js` usando `fetch`.
