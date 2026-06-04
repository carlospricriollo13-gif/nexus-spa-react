import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import BookStorePage from './pages/BookStorePage.jsx';
import BookDetailPage from './pages/BookDetailPage.jsx';
import PurchasedBooksPage from './pages/PurchasedBooksPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import CoworkingPage from './pages/CoworkingPage.jsx';
import SpaceDetailPage from './pages/SpaceDetailPage.jsx';
import ReservationPage from './pages/ReservationPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/libreria" element={<BookStorePage />} />
          <Route path="/libreria/:bookId" element={<BookDetailPage />} />
          <Route path="/mis-libros" element={<PurchasedBooksPage />} />
          <Route path="/comprar/:bookId" element={<CheckoutPage />} />
          <Route path="/coworking" element={<CoworkingPage />} />
          <Route path="/coworking/:spaceId" element={<SpaceDetailPage />} />
          <Route path="/reservar/:spaceId" element={<ReservationPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
