import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar-header">
      <div className="logo">
        <img src="/logo_ainnovate_svg_blanco_horizontal.svg" alt="Ainnovate Logo" />
      </div>
      <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="/#about" onClick={toggleMenu}>Sobre Nosotros</a></li>
          <li><a href="/como-lo-hacemos" onClick={toggleMenu}>Cómo lo hacemos</a></li>
          <li><a href="/#contact" onClick={toggleMenu}>Contacto</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/emanuelmdzz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
          <img src="/ig.svg" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/emendoza-ainnovate/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <img src="/lk.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/@emanuelmendozaainnovate" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
          <img src="/yt.svg" alt="YouTube" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
