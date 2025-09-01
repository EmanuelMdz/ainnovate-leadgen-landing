import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Funciona en mi industria?",
      answer: "Nuestro sistema funciona en cualquier industria B2B donde necesites contactar tomadores de decisión por email."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Los primeros leads calificados empiezan a llegar entre la semana 2-3. El sistema alcanza su máximo rendimiento al mes."
    },
    {
      question: "¿Qué pasa si no funciona?",
      answer: "Tenemos nuestra garantía: si no cumplimos con los 36,000 emails o no entregamos leads calificados, extendemos sin costo."
    },
    {
      question: "¿Es legal el cold email?",
      answer: "Sí, cumplimos con todas las regulaciones de email marketing y incluimos opciones de unsuscribe en cada mensaje."
    },
    {
      question: "¿Por qué no hacer esto interno?",
      answer: "Requiere infraestructura técnica, conocimiento especializado y tiempo completo. Nosotros ya tenemos todo configurado y optimizado."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className={`faq-arrow ${openFAQ === index ? 'open' : ''}`}>
                  ▶
                </span>
              </div>
              <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
