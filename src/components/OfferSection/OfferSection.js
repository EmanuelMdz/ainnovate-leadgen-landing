import React, { useState, useEffect, useRef } from 'react';
import './OfferSection.css';

function OfferSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = numberRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const target = 36000;
    const duration = 3000; // 2.5 seconds
    const startTime = Date.now();

    const easeOutQuart = (t) => {
      return 1 - Math.pow(1 - t, 5);
    };

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apply easing function
      const easedProgress = easeOutQuart(progress);
      const current = Math.floor(easedProgress * target);
      
      setCount(current);
      
      if (progress >= 1) {
        setCount(target);
        clearInterval(timer);
      }
    }, 16);
  };

  const formatNumber = (num) => {
    return num.toLocaleString('es-ES');
  };

  return (
    <section className="offer-section">
      <div className="container">
        <h2 className="section-title">¿Qué pasa cuando trabajas con nosotros?</h2>
        <div className="main-result-box">
          <div className="result-number" ref={numberRef}>
            +{formatNumber(count)}
          </div>
          <div className="result-text">
            <h3>Emails hiperpersonalizados enviados en 6 meses</h3>
            <p>Nuestro sistema filtra, responde y entrega solo leads interesados. Vos no tenés que contestar nada. Solo te subís a la llamada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
