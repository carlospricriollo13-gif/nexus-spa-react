import { Link, useParams } from 'react-router-dom';
import useApiResource from '../hooks/useApiResource.js';
import { getSpaceById } from '../services/mockApi.js';

export default function SpaceDetailPage() {
  const { spaceId } = useParams();
  const { data: space, loading } = useApiResource(() => getSpaceById(spaceId), [spaceId]);

  if (loading) return <p>Cargando espacio...</p>;
  if (!space) return <p>No se encontro el espacio solicitado.</p>;

  return (
    <section className="detail">
      <img className="space-image" src={space.image} alt={`Imagen referencial de ${space.name}`} />
      <div className="card detail-card">
        <p className="eyebrow">Detalle de co-working</p>
        <h1>{space.name}</h1>
        <p>{space.description}</p>
        <p><strong>Capacidad:</strong> {space.capacity} personas</p>
        <p><strong>Estado:</strong> {space.occupied ? `Ocupado por ${space.occupiedBy} de ${space.from} a ${space.until}` : 'Disponible'}</p>
        <p><strong>Equipamiento:</strong> {space.equipment.join(', ')}</p>
        <Link className="button" to={`/reservar/${space.id}`}>Reservar espacio</Link>
      </div>
    </section>
  );
}
