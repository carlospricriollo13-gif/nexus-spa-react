import SpaceCard from '../components/SpaceCard.jsx';
import useApiResource from '../hooks/useApiResource.js';
import { getReservations, getSpaces } from '../services/mockApi.js';

export default function CoworkingPage() {
  const { data: spaces, loading } = useApiResource(getSpaces, []);
  const { data: reservations, loading: loadingReservations } = useApiResource(getReservations, []);

  return (
    <section>
      <p className="eyebrow">Co-working universitario</p>
      <h1>Espacios disponibles en la planta Nexus</h1>
      {loading ? <p>Cargando espacios...</p> : <div className="grid">{spaces.map((space) => <SpaceCard key={space.id} space={space} />)}</div>}

      <section className="reservations-panel">
        <p className="eyebrow">Reservas registradas</p>
        <h2>Historial de reservas</h2>
        {loadingReservations ? <p>Cargando reservas...</p> : reservations.length === 0 ? (
          <p className="muted">Todavia no hay reservas registradas.</p>
        ) : (
          <table className="reservations-table">
            <thead>
              <tr>
                <th>Espacio</th>
                <th>Fecha</th>
                <th>Desde</th>
                <th>Hasta</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.space?.name ?? `Espacio ${reservation.spaceId}`}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.from}</td>
                  <td>{reservation.until}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </section>
  );
}
