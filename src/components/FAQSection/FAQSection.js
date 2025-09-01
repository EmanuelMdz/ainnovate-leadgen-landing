import React from 'react';
import './FAQSection.css';

function FAQSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>¿Funciona en mi industria?</h3>
            <p>Nuestro sistema funciona en cualquier industria B2B donde necesites contactar tomadores de decisión por email.</p>
          </div>
          <div className="faq-item">
            <h3>¿Cuánto tiempo toma ver resultados?</h3>
            <p>Los primeros leads calificados empiezan a llegar entre la semana 2-3. El sistema alcanza su máximo rendimiento al mes.</p>
          </div>
          <div className="faq-item">
            <h3>¿Qué pasa si no funciona?</h3>
            <p>Tenemos nuestra garantía: si no cumplimos con los 36,000 emails o no entregamos leads calificados, extendemos sin costo.</p>
          </div>
          <div className="faq-item">
            <h3>¿Es legal el cold email?</h3>
            <p>Sí, cumplimos con todas las regulaciones de email marketing y incluimos opciones de unsuscribe en cada mensaje.</p>
          </div>
          <div className="faq-item">
            <h3>¿Por qué no hacer esto interno?</h3>
            <p>Requiere infraestructura técnica, conocimiento especializado y tiempo completo. Nosotros ya tenemos todo configurado y optimizado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
