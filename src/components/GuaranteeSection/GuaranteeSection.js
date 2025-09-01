import React from 'react';
import './GuaranteeSection.css';

function GuaranteeSection() {
  return (
    <section className="guarantee-section">
      <div className="container">
        <div className="guarantee-box">
          <div className="guarantee-icon">
            <img src="/guarantee.svg" alt="Garantía" />
          </div>
          <h2 className="guarantee-title">Nuestra garantía</h2>
          <p className="guarantee-text">
            Si no enviamos al menos 36,000 correos efectivos o no entregamos contactos calificados, 
            extendemos la campaña sin costo hasta cumplir.
          </p>
          <p className="guarantee-footer">
            <em>Sin letra chica. Sin excusas.</em>
          </p>
        </div>
      </div>
    </section>
  );
}

export default GuaranteeSection;
