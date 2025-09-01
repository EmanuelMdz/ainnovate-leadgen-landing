import React, { useEffect } from 'react';
import './FinalCTASection.css';

function FinalCTASection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="final-cta-section">
      <div className="container">
        <h2 className="cta-title">Empezá a llenar tu agenda hoy</h2>
        <p className="cta-subtitle">
          Enviamos +36,000 emails. La IA responde por vos. Vos solo aparecés cuando el lead quiere avanzar.
        </p>
        
        <div className="calendly-container">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/osm-meet/web" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
        
        <p className="cta-support">
          En 15 minutos analizamos tu negocio y vemos si es un fit. Sin compromiso.
        </p>
      </div>
    </section>
  );
}

export default FinalCTASection;
