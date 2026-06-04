import BookCard from '../components/BookCard.jsx';
import useApiResource from '../hooks/useApiResource.js';
import { getTopBooks } from '../services/mockApi.js';

export default function LandingPage() {
  const { data: topBooks, loading } = useApiResource(getTopBooks, []);

  return (
    <section>
      <div className="hero">
        <div>
          <p className="eyebrow">Libreria universitaria y espacio multifuncional</p>
          <h1>Nexus conecta libros, estudio y colaboracion en una sola experiencia.</h1>
          <p>Aplicacion SPA desarrollada con React, React Router, contexto de autenticacion y consumo de una API simulada.</p>
        </div>
        <div className="hero-panel">
          <strong>Credenciales demo</strong>
          <span>alumno@nexus.edu</span>
          <span>123456</span>
        </div>
      </div>

      <h2>10 libros mas vendidos</h2>
      {loading ? <p>Cargando libros...</p> : <div className="grid">{topBooks.map((book) => <BookCard key={book.id} book={book} />)}</div>}
    </section>
  );
}
