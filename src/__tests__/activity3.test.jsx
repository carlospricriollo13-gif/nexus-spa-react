import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import BookCard from '../components/BookCard.jsx';
import Layout from '../components/Layout.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import SpaceCard from '../components/SpaceCard.jsx';
import BookDetailPage from '../pages/BookDetailPage.jsx';
import BookStorePage from '../pages/BookStorePage.jsx';
import CheckoutPage from '../pages/CheckoutPage.jsx';
import CoworkingPage from '../pages/CoworkingPage.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import PurchasedBooksPage from '../pages/PurchasedBooksPage.jsx';
import ReservationPage from '../pages/ReservationPage.jsx';
import SpaceDetailPage from '../pages/SpaceDetailPage.jsx';

const serviceMocks = vi.hoisted(() => ({
  getTopBooks: vi.fn(),
  getCategories: vi.fn(),
  getBooks: vi.fn(),
  getBookById: vi.fn(),
  getPurchasedBooks: vi.fn(),
  purchaseBook: vi.fn(),
  getSpaces: vi.fn(),
  getReservations: vi.fn(),
  getSpaceById: vi.fn(),
  reserveSpace: vi.fn(),
}));

const authMock = vi.hoisted(() => ({
  value: {
    currentUser: null,
    isAuthenticated: false,
    signIn: vi.fn(),
    signOut: vi.fn(),
  },
}));

vi.mock('../services/mockApi.js', () => serviceMocks);
vi.mock('../context/AuthContext.jsx', () => ({
  useAuth: () => authMock.value,
  AuthProvider: ({ children }) => children,
}));

const book = {
  id: 1,
  title: 'React Aplicado a Componentes',
  author: 'Laura Vidal',
  category: 'Ingenieria de software',
  year: 2025,
  type: 'Libro',
  price: 38,
  sales: 128,
  image: '/covers/react-componentes.svg',
  description: 'Guia practica para construir interfaces SPA modernas.',
};

const secondBook = {
  ...book,
  id: 2,
  title: 'Testing de Aplicaciones SPA',
  author: 'Jorge Prieto',
  year: 2023,
  price: 33,
};

const space = {
  id: 1,
  name: 'Mesa Colaborativa A',
  capacity: 6,
  occupied: true,
  occupiedBy: 'Maria Lopez',
  from: '09:00',
  until: '11:30',
  equipment: ['Pantalla', 'Pizarra'],
  description: 'Mesa amplia para sesiones de equipo.',
};

const availableSpace = {
  ...space,
  id: 2,
  name: 'Cabina Silenciosa B',
  capacity: 2,
  occupied: false,
  occupiedBy: null,
  from: null,
  until: null,
};

function renderWithRouter(ui, initialEntries = ['/']) {
  return render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>);
}

beforeEach(() => {
  vi.clearAllMocks();
  serviceMocks.getTopBooks.mockResolvedValue([book, secondBook]);
  serviceMocks.getCategories.mockResolvedValue(['Ingenieria de software', 'Revistas academicas']);
  serviceMocks.getBooks.mockResolvedValue([book, secondBook]);
  serviceMocks.getBookById.mockResolvedValue(book);
  serviceMocks.getPurchasedBooks.mockResolvedValue([book]);
  serviceMocks.purchaseBook.mockResolvedValue({ ok: true, book, purchase: { id: 1 } });
  serviceMocks.getSpaces.mockResolvedValue([space, availableSpace]);
  serviceMocks.getReservations.mockResolvedValue([{ id: 1, spaceId: 1, space, date: '2026-06-26', from: '09:00', until: '10:00' }]);
  serviceMocks.getSpaceById.mockResolvedValue(space);
  serviceMocks.reserveSpace.mockResolvedValue({ ok: true, space, reservation: { id: 1 } });
  authMock.value = {
    currentUser: null,
    isAuthenticated: false,
    signIn: vi.fn(),
    signOut: vi.fn(),
  };
});

describe('Actividad 3 - componentes probados con React Testing Library', () => {
  it('BookCard muestra datos y enlaces de libro', () => {
    renderWithRouter(<BookCard book={book} />);

    expect(screen.getByRole('img', { name: /portada de react aplicado/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: book.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver detalle/i })).toHaveAttribute('href', '/libreria/1');
    expect(screen.getByRole('link', { name: /comprar/i })).toHaveAttribute('href', '/comprar/1');
  });

  it('SpaceCard muestra estado ocupado y enlaces de reserva', () => {
    renderWithRouter(<SpaceCard space={space} />);

    expect(screen.getByRole('heading', { name: space.name })).toBeInTheDocument();
    expect(screen.getByText(/ocupado por maria lopez/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /reservar/i })).toHaveAttribute('href', '/reservar/1');
  });

  it('Layout muestra navegacion y login cuando no hay sesion', () => {
    renderWithRouter(
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<p>Contenido inicial</p>} />
        </Route>
      </Routes>
    );

    expect(screen.getByRole('link', { name: /nexus/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /libreria/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
  });

  it('ProtectedRoute redirige al login si no hay autenticacion', () => {
    renderWithRouter(
      <Routes>
        <Route path="/privada" element={<ProtectedRoute />}>
          <Route index element={<p>Zona privada</p>} />
        </Route>
        <Route path="/login" element={<p>Pantalla login</p>} />
      </Routes>,
      ['/privada']
    );

    expect(screen.getByText(/pantalla login/i)).toBeInTheDocument();
  });

  it('LandingPage carga los libros mas vendidos', async () => {
    renderWithRouter(<LandingPage />);

    expect(screen.getByText(/cargando libros/i)).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: book.title })).toBeInTheDocument();
    expect(screen.getByText(/credenciales demo/i)).toBeInTheDocument();
  });

  it('BookStorePage muestra categorias, filtros y catalogo', async () => {
    renderWithRouter(<BookStorePage />);

    expect(await screen.findByRole('button', { name: /ingenieria de software/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/ano/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: book.title })).toBeInTheDocument();
  });

  it('CoworkingPage muestra espacios y reservas', async () => {
    renderWithRouter(<CoworkingPage />);

    expect(await screen.findByRole('heading', { name: space.name })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: availableSpace.name })).toBeInTheDocument();
    expect(screen.getByText('2026-06-26')).toBeInTheDocument();
  });

  it('BookDetailPage muestra el detalle individual de un libro', async () => {
    renderWithRouter(
      <Routes>
        <Route path="/libreria/:bookId" element={<BookDetailPage />} />
      </Routes>,
      ['/libreria/1']
    );

    expect(await screen.findByRole('heading', { name: book.title })).toBeInTheDocument();
    expect(screen.getByText(/autor:/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /comprar libro/i })).toHaveAttribute('href', '/comprar/1');
  });

  it('CheckoutPage confirma la compra simulada', async () => {
    const user = userEvent.setup();
    renderWithRouter(
      <Routes>
        <Route path="/comprar/:bookId" element={<CheckoutPage />} />
      </Routes>,
      ['/comprar/1']
    );

    await user.click(await screen.findByRole('button', { name: /confirmar compra/i }));

    expect(serviceMocks.purchaseBook).toHaveBeenCalledWith('1');
    expect(await screen.findByText(/compra confirmada/i)).toBeInTheDocument();
  });

  it('PurchasedBooksPage muestra libros adquiridos previamente', async () => {
    renderWithRouter(<PurchasedBooksPage />);

    expect(await screen.findByRole('heading', { name: book.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /libros adquiridos previamente/i })).toBeInTheDocument();
  });

  it('SpaceDetailPage muestra informacion individual del espacio', async () => {
    renderWithRouter(
      <Routes>
        <Route path="/coworking/:spaceId" element={<SpaceDetailPage />} />
      </Routes>,
      ['/coworking/1']
    );

    expect(await screen.findByRole('heading', { name: space.name })).toBeInTheDocument();
    expect(screen.getByText(/pantalla, pizarra/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /reservar espacio/i })).toHaveAttribute('href', '/reservar/1');
  });

  it('ReservationPage registra una reserva simulada', async () => {
    const user = userEvent.setup();
    renderWithRouter(
      <Routes>
        <Route path="/reservar/:spaceId" element={<ReservationPage />} />
      </Routes>,
      ['/reservar/1']
    );

    await screen.findByRole('heading', { name: space.name });
    await user.type(screen.getByLabelText(/fecha/i), '2026-06-26');
    await user.type(screen.getByLabelText(/desde/i), '09:00');
    await user.type(screen.getByLabelText(/hasta/i), '10:00');
    await user.click(screen.getByRole('button', { name: /confirmar reserva/i }));

    expect(serviceMocks.reserveSpace).toHaveBeenCalledWith('1', { date: '2026-06-26', from: '09:00', until: '10:00' });
    expect(await screen.findByText(/reserva registrada/i)).toBeInTheDocument();
  });

  it('LoginPage informa error con credenciales invalidas', async () => {
    const user = userEvent.setup();
    authMock.value.signIn = vi.fn().mockResolvedValue(false);
    renderWithRouter(<LoginPage />);

    await user.clear(screen.getByLabelText(/email/i));
    await user.type(screen.getByLabelText(/email/i), 'incorrecto@nexus.edu');
    await user.click(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => expect(authMock.value.signIn).toHaveBeenCalledWith('incorrecto@nexus.edu', '123456'));
    expect(await screen.findByText(/credenciales incorrectas/i)).toBeInTheDocument();
  });
});
