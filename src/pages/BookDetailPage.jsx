import { Link, useParams } from 'react-router-dom';
import useApiResource from '../hooks/useApiResource.js';
import { getBookById } from '../services/mockApi.js';

export default function BookDetailPage() {
  const { bookId } = useParams();
  const { data: book, loading } = useApiResource(() => getBookById(bookId), [bookId]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!book) return <p>No se encontro el libro solicitado.</p>;

  return (
    <section className="detail">
      <img className="book-cover large" src={book.image} alt={`Portada de ${book.title}`} />
      <div className="card detail-card">
        <p className="eyebrow">{book.type} | {book.category}</p>
        <h1>{book.title}</h1>
        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Ano:</strong> {book.year}</p>
        <p>{book.description}</p>
        <h2>${book.price}</h2>
        <Link className="button" to={`/comprar/${book.id}`}>Comprar libro</Link>
      </div>
    </section>
  );
}
