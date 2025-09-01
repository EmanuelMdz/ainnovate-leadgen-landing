import React from 'react';
import './UrgencySection.css';

function UrgencySection() {
  return (
    <section className="urgency-section">
      <div className="container">
        <h2 className="section-title">¿Qué pasa si no actúas?</h2>
        <div className="consequences">
          <div className="consequence">
            <span className="warning-icon">⚠️</span>
            <p>Seguir dependiendo del boca a boca</p>
          </div>
          <div className="consequence">
            <span className="warning-icon">⚠️</span>
            <p>Quedarte estancado en el mismo lugar durante años</p>
          </div>
          <div className="consequence">
            <span className="warning-icon">⚠️</span>
            <p>Ver cómo otros con menos talento crecen porque tienen sistemas</p>
          </div>
          <div className="consequence">
            <span className="warning-icon">⚠️</span>
            <p>Sentir que tenés todo para crecer pero te falta el "cómo"</p>
          </div>
        </div>
        <div className="powerful-quote">
          <p>"No te falta una mejor oferta. Te falta un sistema que la ponga frente a la persona correcta todos los días."</p>
        </div>
      </div>
    </section>
  );
}

export default UrgencySection;
