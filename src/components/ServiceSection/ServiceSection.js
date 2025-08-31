import React from 'react';
import './ServiceSection.css';

function ServiceSection() {
  return (
    <section id="service" className="service">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="service__intro">
          <p>
            Ofrecemos soluciones avanzadas de generación de leads que transformarán
            tu estrategia de ventas y marketing. Con nuestra tecnología impulsada por IA,
            automatizamos el proceso completo de prospección en Instagram.
          </p>
        </div>
        
        <div className="service__list">
          <div className="service-card">
            <div className="service-icon">
              <span className="service-number">01</span>
            </div>
            <div className="service-content">
              <h3>Análisis de Audiencia</h3>
              <p>
                Identificamos a tu audiencia ideal con tecnología de IA avanzada
                para encontrar los prospectos con mayor probabilidad de conversión.
              </p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <span className="service-number">02</span>
            </div>
            <div className="service-content">
              <h3>Automatización de Mensajes</h3>
              <p>
                Nuestra plataforma se encarga de enviar mensajes personalizados y
                seguimiento automático para captar la atención de tus prospectos.
              </p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <span className="service-number">03</span>
            </div>
            <div className="service-content">
              <h3>Gestión Multi-Cuenta</h3>
              <p>
                Administra múltiples cuentas de Instagram para maximizar tu alcance
                y aumentar exponencialmente tus oportunidades de venta.
              </p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <span className="service-number">04</span>
            </div>
            <div className="service-content">
              <h3>Análisis y Reportes</h3>
              <p>
                Recibe informes detallados sobre el rendimiento de tus campañas con
                métricas clave para optimizar continuamente tus resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
