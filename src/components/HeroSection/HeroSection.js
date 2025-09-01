import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section 
        className="hero"
        style={{
          backgroundImage: "url('/bg-landing.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <header className="header">
          <div className="logo">
            <img src="/logo_ainnovate_svg_blanco_horizontal.svg" alt="Ainnovate Logo" />
          </div>
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#features" onClick={toggleMenu}>Features</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#service" onClick={toggleMenu}>Service</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
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
        
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              LA NUEVA FORMA DE GENERAR <span className="hero__highlight">LEADS CON IA</span>: 
              <span className='block' > AUTOMÁTICA,</span> 
              <span className="hero__subheading">PRECISA Y <span className="hero__highlight">CONSTANTE</span></span>
            </h1>
            <p className="hero__description">
              En Ainnovate usamos inteligencia artificial para que consigas nuevos clientes todos los días, sin invertir
              horas en mensajes ni búsquedas. Automatiza tu prospección por Email desde múltiples cuentas y
              enfócate en lo que mejor sabes hacer: cerrar ventas.
            </p>
            <div className="hero__cta">
              <a href="https://calendly.com/osm-meet/web" target="_blank" rel="noopener noreferrer" className="btn hero__btn">
                Agenda una llamada gratis
              </a>
            </div>
          </div>
          <div className="hero__image">
            <img src="/hero-person.png" alt="Persona Ainnovate" className="hero-person" />
          </div>
        </div>
    </section>
    </>
  );
}

export default HeroSection;
