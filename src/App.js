import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import ContactSection from './components/ContactSection/ContactSection';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}

export default App;
