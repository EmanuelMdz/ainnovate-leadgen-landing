import React from 'react';
import './ProblemSection.css';

function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-header">
          <h2 className="section-title">¿Cansado de perseguir leads que nunca se convierten?</h2>
          <p className="section-subtitle">
            Tienes una buena oferta, sabes que funciona... pero no logras ponerla frente a las personas correctas de forma constante.
          </p>
        </div>
        
        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-number">01</div>
            <div className="problem-content">
              <div className="problem-icon">
                <img src="/logoscaracteristicas/2.svg" alt="Fuego" />
              </div>
              <h3>Vives apagando incendios</h3>
              <p>No sabes de dónde vendrá la próxima venta y eso te genera ansiedad constante</p>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="problem-number">02</div>
            <div className="problem-content">
              <div className="problem-icon">
                <img src="/logoscaracteristicas/3.svg" alt="Tiempo" />
              </div>
              <h3>Pierdes tiempo persiguiendo leads tibios</h3>
              <p>Probaste ads, freelancers, campañas sueltas... nada te dio un sistema real</p>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="problem-number">03</div>
            <div className="problem-content">
              <div className="problem-icon">
                <img src="/logoscaracteristicas/4.svg" alt="Crecimiento" />
              </div>
              <h3>Ves crecer a otros con menos talento</h3>
              <p>Solo porque tienen sistemas de adquisición que funcionan en automático</p>
            </div>
          </div>
        </div>
        
        <div className="problem-cta">
          <div className="cta-content">
            <h4>¿Te suena familiar?</h4>
            <p>Es hora de cambiar el juego y tener un sistema que trabaje para ti, no al revés.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
