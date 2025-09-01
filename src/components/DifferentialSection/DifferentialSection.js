import React from 'react';
import './DifferentialSection.css';

function DifferentialSection() {
  return (
    <section className="differential-section">
      <div className="container">
        <h2 className="section-title">
          ¿Por qué elegir nuestro sistema de IA?
        </h2>
        <div className="advantages-disadvantages">
          <div className="advantages-card">
            <div className="card-header advantages-header">
              <div className="card-icon advantages-icon">
                <span>✓</span>
              </div>
              <h3>VENTAJAS</h3>
              <p>De usar nuestro sistema de IA</p>
            </div>
            <div className="card-content">
              <div className="advantage-item">
                <span className="check-icon">✓</span>
                <p>Sistema 100% automatizado que trabaja 24/7</p>
              </div>
              <div className="advantage-item">
                <span className="check-icon">✓</span>
                <p>IA que personaliza cada mensaje automáticamente</p>
              </div>
              <div className="advantage-item">
                <span className="check-icon">✓</span>
                <p>Múltiples cuentas de email para mayor alcance</p>
              </div>
              <div className="advantage-item">
                <span className="check-icon">✓</span>
                <p>Solo pagas por resultados reales y medibles</p>
              </div>
              <div className="advantage-item">
                <span className="check-icon">✓</span>
                <p>Configuración completa incluida sin costo extra</p>
              </div>
            </div>
          </div>
          
          <div className="disadvantages-card">
            <div className="card-header disadvantages-header">
              <div className="card-icon disadvantages-icon">
                <span>✗</span>
              </div>
              <h3>DESVENTAJAS</h3>
              <p>De seguir como hasta ahora</p>
            </div>
            <div className="card-content">
              <div className="disadvantage-item">
                <span className="cross-icon">✗</span>
                <p>Perder tiempo en prospección manual</p>
              </div>
              <div className="disadvantage-item">
                <span className="cross-icon">✗</span>
                <p>Mensajes genéricos con baja tasa de respuesta</p>
              </div>
              <div className="disadvantage-item">
                <span className="cross-icon">✗</span>
                <p>Depender solo del boca a boca para crecer</p>
              </div>
              <div className="disadvantage-item">
                <span className="cross-icon">✗</span>
                <p>Invertir en herramientas que no garantizan resultados</p>
              </div>
              <div className="disadvantage-item">
                <span className="cross-icon">✗</span>
                <p>Ver cómo la competencia crece mientras tú te estancas</p>
              </div>
            </div>
          </div>
        </div>
        <p className="differential-support">
          No es marketing tradicional. Es prospección predictiva con IA, ejecutada por nosotros, con resultados medibles.
        </p>
      </div>
    </section>
  );
}

export default DifferentialSection;
