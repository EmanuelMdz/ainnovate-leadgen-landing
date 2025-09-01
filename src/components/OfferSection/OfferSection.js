import React from 'react';
import './OfferSection.css';

function OfferSection() {
  return (
    <section className="offer-section">
      <div className="container">
        <h2 className="section-title">¿Qué pasa cuando trabajas con nosotros?</h2>
        <p className="main-result">
          Enviamos +36,000 emails hiperpersonalizados a prospectos calificados durante 6 meses. 
          Nuestro sistema filtra, responde y entrega solo leads interesados. Vos no tenés que contestar nada. 
          Solo te subís a la llamada.
        </p>
        <div className="includes-grid">
          <div className="includes-column">
            <div className="include-item">
              <span className="checkmark">✅</span>
              <p>Configuración técnica completa (dominio, warm-up, DNS, validación)</p>
            </div>
            <div className="include-item">
              <span className="checkmark">✅</span>
              <p>Base de datos personalizada para tu cliente ideal</p>
            </div>
            <div className="include-item">
              <span className="checkmark">✅</span>
              <p>+36,000 correos enviados en 6 meses</p>
            </div>
            <div className="include-item">
              <span className="checkmark">✅</span>
              <p>IA que responde automáticamente en tu nombre</p>
            </div>
          </div>
          <div className="includes-column">
            <div className="include-item">
              <span className="checkmark">✅</span>
              <p>Solo leads calificados con contexto completo</p>
            </div>
            <div className="include-item">
              <span className="checkmark">✅</span>
              <p>Reportes semanales con métricas clave</p>
            </div>
            <div className="include-item">
              <span className="checkmark">✅</span>
              <p>Setup completo en 15-20 días</p>
            </div>
          </div>
        </div>
        <div className="key-differential">
          <div className="differential-icon">🎯</div>
          <p>La IA responde por vos. Solo aparecés cuando hay alguien del otro lado que quiere hablar con vos.</p>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
