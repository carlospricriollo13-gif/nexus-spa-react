import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <article className="card book-card" title={book.description}>
      <img className="book-cover" src={book.image} alt={`Portada de ${book.title}`} />
      <div className="book-info">
        <p className="eyebrow">{book.type} | {book.year}</p>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p className="muted">{book.category}</p>
        <strong>${book.price}</strong>
      </div>
      <div className="card-actions">
        <Link to={`/libreria/${book.id}`}>Ver detalle</Link>
        <Link className="button" to={`/comprar/${book.id}`}>Comprar</Link>
      </div>
    </article>
  );
}
