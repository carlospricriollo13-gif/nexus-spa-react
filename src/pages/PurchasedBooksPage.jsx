import BookCard from '../components/BookCard.jsx';
import useApiResource from '../hooks/useApiResource.js';
import { getPurchasedBooks } from '../services/mockApi.js';

export default function PurchasedBooksPage() {
  const { data: books, loading } = useApiResource(getPurchasedBooks, []);

  return (
    <section>
      <p className="eyebrow">Historial de usuario</p>
      <h1>Libros adquiridos previamente</h1>
      {loading ? <p>Cargando compras...</p> : <div className="grid">{books.map((book) => <BookCard key={book.id} book={book} />)}</div>}
    </section>
  );
}
