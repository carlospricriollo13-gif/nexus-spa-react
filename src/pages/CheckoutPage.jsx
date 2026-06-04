import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useApiResource from '../hooks/useApiResource.js';
import { getBookById, purchaseBook } from '../services/mockApi.js';

export default function CheckoutPage() {
  const { bookId } = useParams();
  const [message, setMessage] = useState('');
  const { data: book, loading } = useApiResource(() => getBookById(bookId), [bookId]);

  async function handlePurchase() {
    const result = await purchaseBook(bookId);
    setMessage(result.ok ? `Compra confirmada: ${result.book.title}` : 'No se pudo completar la compra.');
  }

  if (loading) return <p>Cargando compra...</p>;
  if (!book) return <p>No se encontro el libro solicitado.</p>;

  return (
    <section className="form-page">
      <div className="card form">
        <p className="eyebrow">Compra sin pasarela de pago</p>
        <h1>{book.title}</h1>
        <p>Precio final: <strong>${book.price}</strong></p>
        <button onClick={handlePurchase}>Confirmar compra</button>
        {message && <p className="success">{message}</p>}
        <Link to="/mis-libros">Ir a mis libros</Link>
      </div>
    </section>
  );
}
