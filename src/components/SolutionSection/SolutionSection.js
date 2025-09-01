import React from 'react';
import './SolutionSection.css';

function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="container">
        <h2 className="section-title">La nueva forma de generar leads con IA: Automática, Precisa y Constante</h2>
        <p className="section-description">
          En Ainnovate usamos inteligencia artificial para que consigas nuevos clientes todos los días, sin invertir 
          horas en mensajes ni búsquedas. Automatiza tu prospección por Email desde múltiples cuentas y 
          enfócate en lo que mejor sabes hacer: cerrar ventas.
        </p>
        <div className="solution-pillars">
          <div className="pillar">
            <div className="pillar-icon">
              <img src="/dianarayoai/2.svg" alt="IA" />
            </div>
            <h3>IA + Personalización Avanzada</h3>
            <ul>
              <li>Scrapeamos la web de la empresa y el LinkedIn del prospecto</li>
              <li>Generamos mensajes hiperpersonalizados que parecen escritos a mano</li>
              <li>Aumentamos significativamente la tasa de respuesta</li>
            </ul>
          </div>
          <div className="pillar">
            <div className="pillar-icon">
              <img src="/dianarayoai/3.svg" alt="Infraestructura" />
            </div>
            <h3>Infraestructura lista para escalar</h3>
            <ul>
              <li>+10 cuentas de correo dedicadas trabajando 24/7</li>
              <li>Dominios, warm-up y mantenimiento incluido</li>
              <li>Sin que tengas que preocuparte por nada técnico</li>
            </ul>
          </div>
          <div className="pillar">
            <div className="pillar-icon">
              <img src="/dianarayoai/4.svg" alt="Métricas" />
            </div>
            <h3>Sin métricas de vanidad</h3>
            <ul>
              <li>No trackeamos aperturas que afectan la entregabilidad</li>
              <li>Solo medimos lo que importa: respuestas reales y reuniones agendadas</li>
              <li>Consultoría de ventas incluida para cerrar más clientes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
