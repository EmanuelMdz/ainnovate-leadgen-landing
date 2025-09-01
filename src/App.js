import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import ProblemSection from './components/ProblemSection/ProblemSection';
import SolutionSection from './components/SolutionSection/SolutionSection';
import DifferentialSection from './components/DifferentialSection/DifferentialSection';
import OfferSection from './components/OfferSection/OfferSection';
import AboutSection from './components/AboutSection/AboutSection';
import GuaranteeSection from './components/GuaranteeSection/GuaranteeSection';
import UrgencySection from './components/UrgencySection/UrgencySection';
import FinalCTASection from './components/FinalCTASection/FinalCTASection';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import ComoLoHacemos from './components/ComoLoHacemos/ComoLoHacemos';
import './styles/main.css';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferentialSection />
      <OfferSection />
      <AboutSection />
      <GuaranteeSection />
      <UrgencySection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/como-lo-hacemos" element={<ComoLoHacemos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
