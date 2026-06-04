import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Layout() {
  const navigate = useNavigate();
  const { currentUser, isAuthenticated, signOut } = useAuth();

  function handleLogout() {
    signOut();
    navigate('/');
  }

  return (
    <>
      <header className="topbar">
        <NavLink className="brand" to="/">Nexus</NavLink>
        <nav className="nav">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/libreria">Libreria</NavLink>
          <NavLink to="/mis-libros">Mis libros</NavLink>
          <NavLink to="/coworking">Co-working</NavLink>
        </nav>
        <div className="session">
          {isAuthenticated ? (
            <>
              <span>{currentUser.name}</span>
              <button onClick={handleLogout}>Salir</button>
            </>
          ) : (
            <NavLink className="button" to="/login">Login</NavLink>
          )}
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
