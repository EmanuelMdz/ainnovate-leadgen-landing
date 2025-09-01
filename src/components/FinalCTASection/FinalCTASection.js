import React from 'react';
import './FinalCTASection.css';

function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <h2 className="cta-title">Empezá a llenar tu agenda hoy</h2>
        <p className="cta-subtitle">
          Enviamos +36,000 emails. La IA responde por vos. Vos solo aparecés cuando el lead quiere avanzar.
        </p>
        <div className="cta-button-container">
          <a href="https://calendly.com/osm-meet/web" target="_blank" rel="noopener noreferrer" className="btn final-cta-btn">
            📅 Agenda una llamada gratis
          </a>
        </div>
        <p className="cta-support">
          En 15 minutos analizamos tu negocio y vemos si es un fit. Sin compromiso.
        </p>
      </div>
    </section>
  );
}

export default FinalCTASection;
