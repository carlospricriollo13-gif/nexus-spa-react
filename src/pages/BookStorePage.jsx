import { useState } from 'react';
import BookCard from '../components/BookCard.jsx';
import useApiResource from '../hooks/useApiResource.js';
import { getBooks, getCategories } from '../services/mockApi.js';

export default function BookStorePage() {
  const [category, setCategory] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(true);
  const { data: categories } = useApiResource(getCategories, []);
  const { data: books, loading } = useApiResource(() => getBooks({ category, year, type }), [category, year, type]);

  return (
    <section>
      <div className="page-title"><div><p className="eyebrow">Libreria universitaria</p><h1>Catalogo de libros y revistas</h1></div></div>
      <div className="catalog-layout">
        <aside className="sidebar">
          <button className="sidebar-toggle" aria-expanded={filtersOpen} onClick={() => setFiltersOpen((open) => !open)}>
            {filtersOpen ? 'Ocultar categorias y filtros' : 'Mostrar categorias y filtros'}
          </button>
          {filtersOpen && (
            <div className="sidebar-content">
              <h3>Categorias</h3>
              <button className={!category ? 'selected' : ''} onClick={() => setCategory('')}>Todas</button>
              {categories?.map((item) => <button key={item} className={category === item ? 'selected' : ''} onClick={() => setCategory(item)}>{item}</button>)}
              <h3>Filtros</h3>
              <label>Ano<select value={year} onChange={(event) => setYear(event.target.value)}><option value="">Todos</option><option>2025</option><option>2024</option><option>2023</option><option>2022</option><option>2021</option></select></label>
              <label>Tipo<select value={type} onChange={(event) => setType(event.target.value)}><option value="">Todos</option><option>Libro</option><option>Revista</option></select></label>
            </div>
          )}
        </aside>
        <div className="grid content-grid">
          {loading ? <p>Cargando catalogo...</p> : books.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    </section>
  );
}
