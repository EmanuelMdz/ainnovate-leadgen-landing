import React from 'react';
import './UrgencySection.css';

function UrgencySection() {
  return (
    <section className="urgency-section">
      <div className="container">
        <div className="urgency-header">
          <h2 className="section-title">¿Qué pasa si no actúas?</h2>
          <div className="title-decoration"></div>
        </div>
        
        <div className="consequences-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="consequence-content">
              <h3>Seguir dependiendo del boca a boca</h3>
              <p>Sin control sobre cuándo llegará el próximo cliente</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="consequence-content">
              <h3>Quedarte estancado en el mismo lugar durante años</h3>
              <p>Viendo pasar oportunidades mientras otros avanzan</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="consequence-content">
              <h3>Ver cómo otros con menos talento crecen</h3>
              <p>Porque tienen sistemas de adquisición que funcionan</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot final"></div>
            </div>
            <div className="consequence-content">
              <h3>Sentir que tenés todo para crecer pero te falta el "cómo"</h3>
              <p>La frustración de saber que podrías estar mucho mejor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UrgencySection;
