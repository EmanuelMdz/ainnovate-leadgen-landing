import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <header className="header">
        <div className="logo">
          <img src="/logo.svg" alt="Ainnovate Logo" />
          <span className="logo-text">Ainnovate</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            LA NUEVA FORMA DE GENERAR <span className="hero__highlight">LEADS</span>: 
            <span className="hero__highlight block">AUTOMÁTICA,</span> 
            <span className="hero__subheading">PRECISA Y <span className="hero__highlight">CONSTANTE</span></span>
          </h1>
          <p className="hero__description">
            En Ainnovate usamos inteligencia artificial para que consigas nuevos clientes todos los días, sin invertir
            horas en mensajes ni búsquedas. Automatiza tu prospección en Instagram desde múltiples cuentas y
            enfócate en lo que mejor sabes hacer: cerrar ventas.
          </p>
          <div className="hero__cta">
            <a href="#contact" className="btn hero__btn">
              Agenda una llamada gratis
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img src="/hero-person.png" alt="Persona Ainnovate" className="hero-person" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
