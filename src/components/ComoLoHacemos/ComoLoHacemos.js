import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './ComoLoHacemos.css';

function ComoLoHacemos() {
  return (
    <>
      <Navbar />
      <div className="como-lo-hacemos">
        <div className="container">
          <header className="page-header">
            <h1>Cómo lo hacemos</h1>
          </header>

          <section className="intro-section">
            <div className="intro-content">
              <h2>Nuestro servicio de captación de leads con IA</h2>
              <p>
                En Ainnovate diseñamos un sistema de prospección B2B totalmente automatizado que combina 
                Inteligencia Artificial y personalización avanzada para generar clientes recurrentes.
              </p>
            </div>
            <div className="intro-image">
              <img src="/Banner de LinkedIn Tecnología Abstracto Azul y Blanco.png" alt="AI Lead Generation" />
            </div>
          </section>

          <section className="process-section">
            <div className="step">
              <div className="step-content">
                <h3>🔹 Creación y optimización de la oferta</h3>
                <p>
                  Antes de lanzar cualquier campaña, trabajamos contigo para definir o mejorar tu propuesta de valor. 
                  Ajustamos el mensaje y el ángulo de la oferta para que conecte de forma clara con tu mercado objetivo.
                </p>
                <ul className="step-list">
                  <li>Análisis de tu propuesta de valor actual</li>
                  <li>Optimización del mensaje principal</li>
                  <li>Definición del ángulo de comunicación</li>
                  <li>Alineación con el mercado objetivo</li>
                </ul>
              </div>
              <div className="step-image">
                <img src="/oferta.png" alt="Optimización de oferta" />
              </div>
            </div>

            <div className="step reverse">
              <div className="step-image">
                <img src="/mercado.png" alt="Análisis de mercado" />
              </div>
              <div className="step-content">
                <h3>🔹 Análisis del mercado y definición del cliente ideal</h3>
                <p>
                  Investigamos tu mercado y construimos un avatar detallado de tu cliente ideal. Con esa información, 
                  seleccionamos hasta 18.000 prospectos que encajan lo más posible con tu público.
                </p>
                <ul className="step-list">
                  <li>Investigación profunda del mercado objetivo</li>
                  <li>Construcción del avatar del cliente ideal</li>
                  <li>Selección de hasta 18.000 prospectos cualificados</li>
                  <li>Segmentación avanzada por criterios específicos</li>
                </ul>
              </div>
            </div>

            <div className="step">
              <div className="step-content">
                <h3>🔹 Prospección personalizada a gran escala</h3>
                <p>
                  Utilizamos más de 10 cuentas de correo dedicadas para contactar a esos prospectos. Cada email es 
                  redactado por nuestro primer agente de IA, que analiza la web de la empresa y el perfil completo 
                  de LinkedIn del prospecto para generar un mensaje 100% personalizado.
                </p>
                <ul className="step-list">
                  <li>Más de 10 cuentas de correo dedicadas</li>
                  <li>Análisis automático de sitios web corporativos</li>
                  <li>Revisión de perfiles completos de LinkedIn</li>
                  <li>Generación de mensajes 100% personalizados por IA</li>
                </ul>
              </div>
              <div className="step-image">
                <img src="/prospección.png" alt="Prospección personalizada" />
              </div>
            </div>

            <div className="step reverse">
              <div className="step-image">
                <img src="/ia.png" alt="Seguimiento con IA" />
              </div>
              <div className="step-content">
                <h3>🔹 Seguimiento inteligente con IA</h3>
                <p>
                  Cuando un prospecto responde, entra en acción un segundo agente de IA entrenado con la información 
                  de tu negocio. Este agente aprende con cada interacción y acompaña la conversación hasta acercar 
                  la oportunidad de venta.
                </p>
                <ul className="step-list">
                  <li>Segundo agente de IA especializado en conversaciones</li>
                  <li>Entrenamiento con información específica de tu negocio</li>
                  <li>Aprendizaje continuo con cada interacción</li>
                  <li>Acompañamiento hasta la oportunidad de venta</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="result-section">
            <div className="result-content">
              <h2>El Resultado</h2>
              <p>
                Un flujo constante de leads calificados y reuniones comerciales, con un sistema que trabaja 
                para tu negocio 24/7 sin que tengas que preocuparte por nada.
              </p>
            </div>
          </section>

          <section className="calendly-section">
            <h3>¿Listo para implementar este sistema en tu negocio?</h3>
            <div className="calendly-embed">
              <iframe 
                src="https://calendly.com/ainnovate/web" 
                width="100%" 
                height="800" 
                frameBorder="0"
                scrolling="no"
                title="Agenda una llamada con Ainnovate"
              ></iframe>
            </div>
          </section>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default ComoLoHacemos;
