import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useApiResource from '../hooks/useApiResource.js';
import { getSpaceById, reserveSpace } from '../services/mockApi.js';

export default function ReservationPage() {
  const { spaceId } = useParams();
  const [form, setForm] = useState({ date: '', from: '', until: '' });
  const [message, setMessage] = useState('');
  const { data: space, loading } = useApiResource(() => getSpaceById(spaceId), [spaceId]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await reserveSpace(spaceId, form);
    setMessage(result.ok ? `Reserva registrada para ${result.space.name}` : 'No se pudo registrar la reserva.');
  }

  if (loading) return <p>Cargando reserva...</p>;
  if (!space) return <p>No se encontro el espacio solicitado.</p>;

  if (space.occupied) {
    return (
      <section className="form-page">
        <div className="card form">
          <p className="eyebrow">Espacio no disponible</p>
          <h1>{space.name}</h1>
          <p className="busy">Este espacio esta ocupado por {space.occupiedBy} de {space.from} a {space.until}.</p>
          <p className="muted">Selecciona otro espacio disponible desde la vista de co-working.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="form-page">
      <form className="card form" onSubmit={handleSubmit}>
        <p className="eyebrow">Reserva sin pasarela de pago</p>
        <h1>{space.name}</h1>
        <label>Fecha<input type="date" value={form.date} onChange={(event) => updateField('date', event.target.value)} required /></label>
        <label>Desde<input type="time" value={form.from} onChange={(event) => updateField('from', event.target.value)} required /></label>
        <label>Hasta<input type="time" value={form.until} onChange={(event) => updateField('until', event.target.value)} required /></label>
        <button type="submit">Confirmar reserva</button>
        {message && <p className="success">{message}</p>}
      </form>
    </section>
  );
}
