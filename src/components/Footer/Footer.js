import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-newsletter">
            <h3>Recibe las últimas noticias sobre IA y ventas.</h3>
            <p>Suscríbete para recibir tips exclusivos y actualizaciones.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </form>
          </div>
          <div className="footer-column">
            <h4>CONTACTO</h4>
            <ul>
              <li><a href="https://calendly.com/osm-meet/web">AGENDA UNA LLAMADA</a></li>
              <li><a href="#about">SOBRE NOSOTROS</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>SERVICIOS</h4>
            <ul>
              <li><a href="#solution">GENERACIÓN DE LEADS</a></li>
              <li><a href="#offer">EMAIL MARKETING</a></li>
              <li><a href="#guarantee">CONSULTORÍA</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="/privacy-policy">POLÍTICA DE PRIVACIDAD</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Ainnovate LLC. Todos los derechos reservados 2025.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/emanuelmdzz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/ig.svg" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/emendoza-ainnovate/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/lk.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/@emanuelmendozaainnovate" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/yt.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
