import React from 'react';
import './ProblemSection.css';

function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="container">
        <h2 className="section-title">¿Cansado de perseguir leads que nunca se convierten?</h2>
        <p className="section-subtitle">
          Tienes una buena oferta, sabes que funciona... pero no logras ponerla frente a las personas correctas de forma constante.
        </p>
        <div className="pain-points">
          <div className="pain-point">
            <div className="pain-icon">🔥</div>
            <h3>Vives apagando incendios</h3>
            <p>No sabes de dónde vendrá la próxima venta y eso te genera ansiedad constante</p>
          </div>
          <div className="pain-point">
            <div className="pain-icon">⏰</div>
            <h3>Pierdes tiempo persiguiendo leads tibios</h3>
            <p>Probaste ads, freelancers, campañas sueltas... nada te dio un sistema real</p>
          </div>
          <div className="pain-point">
            <div className="pain-icon">📈</div>
            <h3>Ves crecer a otros con menos talento</h3>
            <p>Solo porque tienen sistemas de adquisición que funcionan en automático</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
