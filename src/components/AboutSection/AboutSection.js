import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="/ainnovatecuadrada.png" alt="AInnovate Logo" />
          </div>
          <div className="about-text">
            <h2 className="about-title">¿Quiénes Somos?</h2>
            <div className="about-description">
              <p>
                En AInnovate fuimos la primera agencia de Inteligencia Artificial en Uruguay, pioneros en aplicar la IA al crecimiento de negocios en Latinoamérica.
              </p>
              <p>
                Nuestro propósito es claro: simplificar procesos, generar oportunidades y escalar resultados para empresas de todos los tamaños.
              </p>
              <p>
                Somos especialistas en automatizaciones inteligentes, integración de herramientas y sistemas, y en el diseño de estrategias de prospección outbound con IA que realmente generan reuniones y clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Nuestro Equipo</h3>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="/Foto de Perfil IA.jpg" alt="Emanuel Mendoza" />
              </div>
              <div className="member-info">
                <h4 className="member-name">EMANUEL MENDOZA</h4>
                <p className="member-title">CEO & Founder</p>
                <p className="member-description">
                  Fundador de AInnovate y apasionado por la inteligencia artificial aplicada a los negocios.
                  Con más de 4 años de experiencia en automatizaciones, marketing y generación de leads con IA, Emanuel lidera la visión de AInnovate: acercar soluciones innovadoras y escalables a empresas de Latinoamérica.
                </p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/emendoza-ainnovate/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/logoscaracteristicas/6.svg" alt="LinkedIn" />
                  </a>
                  <a href="https://www.youtube.com/@emanuelmendozaainnovate" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                    <img src="/logoscaracteristicas/7.svg" alt="YouTube" />
                  </a>
                  <a href="https://www.instagram.com/emanuelmdzz" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                    <img src="/logoscaracteristicas/5.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <img src="/jf.jpg" alt="Juan Francisco Márquez" />
              </div>
              <div className="member-info">
                <h4 className="member-name">JUAN FRANCISCO MÁRQUEZ</h4>
                <p className="member-title">Consultor de Ventas</p>
                <p className="member-description">
                  Especialista en estrategias comerciales y cierre de ventas.
                  Juan Francisco acompaña a nuestros clientes para transformar prospectos en clientes reales, brindando consultoría personalizada y mejores prácticas en todo el proceso de ventas.
                </p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/emendoza-ainnovate/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/logoscaracteristicas/6.svg" alt="LinkedIn" />
                  </a>
                  <a href="https://www.youtube.com/@emanuelmendozaainnovate" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                    <img src="/logoscaracteristicas/7.svg" alt="YouTube" />
                  </a>
                  <a href="https://www.instagram.com/emanuelmdzz" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                    <img src="/logoscaracteristicas/5.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
