import { Link } from 'react-router-dom';

export default function SpaceCard({ space }) {
  return (
    <article className={`card space-card ${space.occupied ? 'occupied' : 'available'}`} title={space.description}>
      <div>
        <p className="eyebrow">Capacidad: {space.capacity} personas</p>
        <h3>{space.name}</h3>
        <p>{space.description}</p>
        {space.occupied ? (
          <p className="status busy">Ocupado por {space.occupiedBy}, {space.from} - {space.until}</p>
        ) : (
          <p className="status free">Disponible ahora</p>
        )}
      </div>
      <div className="card-actions">
        <Link to={`/coworking/${space.id}`}>Ver espacio</Link>
        <Link className="button" to={`/reservar/${space.id}`}>Reservar</Link>
      </div>
    </article>
  );
}
