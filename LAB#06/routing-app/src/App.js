// App root with responsive nav and router
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import './index.css';

export default function App(){
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <div className="brand">MyStore</div>
          <button className={`nav-toggle ${menuOpen ? 'open' : ''}`} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">☰</button>
          <nav className={`nav ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="content" onClick={closeMenu}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="footer">
          <div>© {new Date().getFullYear()} MyStore — Demo</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
