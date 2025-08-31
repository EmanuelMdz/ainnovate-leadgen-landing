import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="section-title">Sobre Ainnovate</h2>
            <p className="about__description">
              En Ainnovate, somos expertos en la generación de leads de alta calidad para empresas
              que desean aumentar sus ventas y expandir su alcance en el mercado.
            </p>
            <p className="about__description">
              Nuestro equipo combina la potencia de la inteligencia artificial con estrategias
              de marketing digital para ofrecer soluciones personalizadas que generan resultados
              tangibles para nuestros clientes.
            </p>
            <div className="about__stats">
              <div className="stat-item">
                <h3 className="stat-number">2000+</h3>
                <p className="stat-label">Clientes Satisfechos</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">85%</h3>
                <p className="stat-label">Tasa de Conversión</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">24/7</h3>
                <p className="stat-label">Soporte Técnico</p>
              </div>
            </div>
          </div>
          <div className="about__image">
            {/* Image placeholder */}
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
