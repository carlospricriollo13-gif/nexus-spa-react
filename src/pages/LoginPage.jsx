import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('alumno@nexus.edu');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const ok = await signIn(email, password);

    if (ok) {
      navigate(location.state?.from ?? '/libreria', { replace: true });
    } else {
      setError('Credenciales incorrectas. Usa el usuario demo indicado.');
    }
  }

  return (
    <section className="form-page">
      <form className="card form" onSubmit={handleSubmit}>
        <p className="eyebrow">Acceso protegido</p>
        <h1>Login</h1>
        <label>Email<input value={email} onChange={(event) => setEmail(event.target.value)} /></label>
        <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}
