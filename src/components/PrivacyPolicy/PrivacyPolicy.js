import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="privacy-content">
          <h1>Política de Privacidad</h1>
          <p className="last-updated">Última actualización: 1 de septiembre de 2025</p>

          <section>
            <h2>1. Información que Recopilamos</h2>
            <p>En Ainnovate LLC recopilamos la siguiente información:</p>
            <ul>
              <li>Información de contacto (nombre, email, teléfono)</li>
              <li>Información de la empresa (nombre, sitio web, industria)</li>
              <li>Datos de uso de nuestros servicios</li>
            </ul>
          </section>

          <section>
            <h2>2. Cómo Usamos tu Información</h2>
            <p>Utilizamos tu información para:</p>
            <ul>
              <li>Proporcionar nuestros servicios de generación de leads</li>
              <li>Comunicarnos contigo sobre nuestros servicios</li>
              <li>Mejorar nuestros servicios y experiencia del usuario</li>
              <li>Enviar actualizaciones y contenido relevante (con tu consentimiento)</li>
            </ul>
          </section>

          <section>
            <h2>3. Compartir Información</h2>
            <p>No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios o cuando lo requiera la ley.</p>
          </section>

          <section>
            <h2>4. Seguridad de Datos</h2>
            <p>Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>
          </section>

          <section>
            <h2>5. Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul>
              <li>Acceder a tu información personal</li>
              <li>Corregir información inexacta</li>
              <li>Solicitar la eliminación de tu información</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section>
            <h2>6. Contacto</h2>
            <p>Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:</p>
            <p>Email: privacy@ainnovate.com</p>
          </section>

          <div className="back-link">
            <button onClick={() => window.history.back()} className="back-button">
              ← Volver al sitio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
