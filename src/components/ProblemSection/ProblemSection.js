import React from 'react';
import './ProblemSection.css';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';
import image7 from '../../assets/images/7.png';

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
            <div className="card-header" style={{backgroundImage: `url(${image5})`}}>
              <div className="problem-number">01</div>
            </div>
            <div className="card-content">
              <h3>Leads de baja calidad</h3>
              <p>
                Inviertes tiempo y dinero en campañas que atraen personas que no están realmente interesadas en tu propuesta.
              </p>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="card-header" style={{backgroundImage: `url(${image6})`}}>
              <div className="problem-number">02</div>
            </div>
            <div className="card-content">
              <h3>Pierdes tiempo persiguiendo leads tibios</h3>
              <p>Probaste ads, freelancers, campañas sueltas... nada te dio un sistema real</p>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="card-header" style={{backgroundImage: `url(${image7})`}}>
              <div className="problem-number">03</div>
            </div>
            <div className="card-content">
              <h3>Ves crecer a otros con menos talento</h3>
              <p>Solo porque tienen sistemas de adquisición que funcionan en automático</p>
            </div>
          </div>
        </div>
        
       
          <div className="cta-content">
            <h4>¿Te suena familiar?</h4>
            <p>Es hora de cambiar el juego y tener un sistema que trabaje para ti, no al revés.</p>
          </div>
    
        
        <div className="external-cta">
          <a href="/como-lo-hacemos" className="primary-cta-button">
            Cómo lo Hacemos
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
