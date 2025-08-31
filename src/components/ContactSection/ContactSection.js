import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="contact__content">
          <div className="contact__info">
            <h3>¿Listo para automatizar tu generación de leads?</h3>
            <p>
              Nuestro equipo está disponible para ayudarte a implementar una estrategia
              personalizada de generación de leads para tu negocio. Contáctanos hoy mismo
              para comenzar.
            </p>
            
            <div className="contact__details">
              <div className="contact-item">
                <i className="contact-icon email"></i>
                <span>info@ainnovate.com</span>
              </div>
              <div className="contact-item">
                <i className="contact-icon phone"></i>
                <span>+34 912 456 789</span>
              </div>
              <div className="contact-item">
                <i className="contact-icon location"></i>
                <span>Madrid, España</span>
              </div>
            </div>
            
            <div className="social-media">
              <a href="#" className="social-icon instagram">
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-icon facebook">
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-icon linkedin">
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="social-icon twitter">
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="contact__form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn contact__btn">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
