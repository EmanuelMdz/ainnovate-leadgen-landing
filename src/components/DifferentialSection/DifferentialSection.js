import React from 'react';
import './DifferentialSection.css';

function DifferentialSection() {
  return (
    <section className="differential-section">
      <div className="container">
        <h2 className="section-title">
          Mientras otros venden cursos o freelancers... nosotros construimos un sistema que trabaja en piloto automático
        </h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <div className="others">
              <h4>OTROS SERVICIOS</h4>
              <p>Campañas sueltas</p>
            </div>
            <div className="vs">VS</div>
            <div className="us">
              <h4>AINNOVATE</h4>
              <p>Sistema completo DFY</p>
            </div>
          </div>
          <div className="comparison-item">
            <div className="others">
              <p>Mensajes genéricos</p>
            </div>
            <div className="vs">VS</div>
            <div className="us">
              <p>IA que personaliza cada email</p>
            </div>
          </div>
          <div className="comparison-item">
            <div className="others">
              <p>Depende de ti</p>
            </div>
            <div className="vs">VS</div>
            <div className="us">
              <p>100% hecho por nosotros</p>
            </div>
          </div>
          <div className="comparison-item">
            <div className="others">
              <p>Métricas falsas</p>
            </div>
            <div className="vs">VS</div>
            <div className="us">
              <p>Solo respuestas y reuniones reales</p>
            </div>
          </div>
        </div>
        <p className="differential-support">
          No es marketing. Es prospección predictiva, ejecutada por nosotros, con resultados medibles.
        </p>
      </div>
    </section>
  );
}

export default DifferentialSection;
