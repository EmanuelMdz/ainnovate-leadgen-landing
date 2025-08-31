import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Características</h2>
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="feature-icon-ai"></i>
            </div>
            <h3>Inteligencia Artificial</h3>
            <p>Utilizamos algoritmos de IA avanzados para identificar prospectos de alta calidad.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="feature-icon-auto"></i>
            </div>
            <h3>Automatización</h3>
            <p>Automatiza todo el proceso de prospección para que puedas enfocarte en cerrar ventas.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="feature-icon-data"></i>
            </div>
            <h3>Análisis de Datos</h3>
            <p>Obten informes detallados sobre el rendimiento de tus campañas de generación de leads.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
