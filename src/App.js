import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import ProblemSection from './components/ProblemSection/ProblemSection';
import SolutionSection from './components/SolutionSection/SolutionSection';
import DifferentialSection from './components/DifferentialSection/DifferentialSection';
import OfferSection from './components/OfferSection/OfferSection';
import GuaranteeSection from './components/GuaranteeSection/GuaranteeSection';
import UrgencySection from './components/UrgencySection/UrgencySection';
import FinalCTASection from './components/FinalCTASection/FinalCTASection';
import FAQSection from './components/FAQSection/FAQSection';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferentialSection />
      <OfferSection />
      <GuaranteeSection />
      <UrgencySection />
      <FinalCTASection />
      <FAQSection />
    </div>
  );
}

export default App;
