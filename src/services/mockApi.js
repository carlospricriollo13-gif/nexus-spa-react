import { books as fallbackBooks, categories as fallbackCategories, purchasedBookIds, spaces as fallbackSpaces, user as fallbackUser } from '../data/mockData.js';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';
const fallbackReservations = [];

async function request(path, options) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status} al consultar ${path}`);
  }

  return response.json();
}

export async function login(email, password) {
  let users;

  try {
    users = await request(`/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  } catch {
    users = email === fallbackUser.email && password === fallbackUser.password ? [fallbackUser] : [];
  }

  const loggedUser = users[0];

  if (!loggedUser) return null;

  const { password: _password, ...safeUser } = loggedUser;
  return safeUser;
}

export async function getTopBooks() {
  try {
    return await request('/books?_sort=sales&_order=desc&_limit=10');
  } catch {
    return [...fallbackBooks].sort((a, b) => b.sales - a.sales).slice(0, 10);
  }
}

export async function getCategories() {
  try {
    const categories = await request('/categories');
    return categories.map((category) => category.name);
  } catch {
    return fallbackCategories;
  }
}

export async function getBooks(filters = {}) {
  const params = new URLSearchParams();

  if (filters.category) params.set('category', filters.category);
  if (filters.year) params.set('year', filters.year);
  if (filters.type) params.set('type', filters.type);

  const query = params.toString();
  try {
    return await request(`/books${query ? `?${query}` : ''}`);
  } catch {
    return fallbackBooks.filter((book) => {
      const categoryMatch = !filters.category || book.category === filters.category;
      const yearMatch = !filters.year || book.year === Number(filters.year);
      const typeMatch = !filters.type || book.type === filters.type;
      return categoryMatch && yearMatch && typeMatch;
    });
  }
}

export async function getBookById(id) {
  try {
    return await request(`/books/${id}`);
  } catch {
    return fallbackBooks.find((book) => Number(book.id) === Number(id)) ?? null;
  }
}

export async function getPurchasedBooks() {
  try {
    const [purchases, books] = await Promise.all([
      request('/purchases?userId=1'),
      request('/books'),
    ]);

    const purchasedIds = purchases.map((purchase) => Number(purchase.bookId));
    return books.filter((book) => purchasedIds.includes(Number(book.id)));
  } catch {
    return fallbackBooks.filter((book) => purchasedBookIds.includes(Number(book.id)));
  }
}

export async function purchaseBook(id) {
  const book = await getBookById(id);
  let purchase;

  try {
    purchase = await request('/purchases', {
      method: 'POST',
      body: JSON.stringify({ userId: 1, bookId: Number(id), date: new Date().toISOString().slice(0, 10) }),
    });
  } catch {
    purchase = { id: Date.now(), userId: 1, bookId: Number(id), date: new Date().toISOString().slice(0, 10) };
  }

  return { ok: true, book, purchase };
}

export async function getSpaces() {
  try {
    return await request('/spaces');
  } catch {
    return fallbackSpaces;
  }
}

export async function getReservations() {
  let reservations;
  let spaces;

  try {
    [reservations, spaces] = await Promise.all([
      request('/reservations'),
      request('/spaces'),
    ]);
  } catch {
    reservations = fallbackReservations;
    spaces = fallbackSpaces;
  }

  return reservations.map((reservation) => ({
    ...reservation,
    space: spaces.find((space) => Number(space.id) === Number(reservation.spaceId)),
  }));
}

export async function getSpaceById(id) {
  try {
    return await request(`/spaces/${id}`);
  } catch {
    return fallbackSpaces.find((space) => Number(space.id) === Number(id)) ?? null;
  }
}

export async function reserveSpace(id, form) {
  const space = await getSpaceById(id);
  let reservation;

  try {
    reservation = await request('/reservations', {
      method: 'POST',
      body: JSON.stringify({ userId: 1, spaceId: Number(id), ...form }),
    });
  } catch {
    reservation = { id: Date.now(), userId: 1, spaceId: Number(id), ...form };
    fallbackReservations.push(reservation);
  }

  return { ok: true, space, reservation };
}
