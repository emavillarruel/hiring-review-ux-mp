import { useEffect } from 'react';
import hiringData from '../data/hiringProcess.json';
import Navbar from './Navbar';
import Hero from './Hero';
import Tips from './Tips';
import NextSteps from './NextSteps';
import ScrollTransition from './ScrollTransition';
import '../styles/TalentAcquisition.css';

const TalentAcquisition = ({ userData, onLogout, onStepSelect }) => {
  const steps = hiringData.steps;
  const currentStep = steps.find(s => s.id === 1); // Talent Acquisition

  // Scroll to top cuando se monta el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Preparar datos de Tips
  const tipsData = {
    items: [
      {
        title: 'Qué esperar',
        type: 'bullets',
        content: currentStep.whatToExpect
      },
      {
        title: 'Cómo podes prepararte',
        type: 'bullets',
        content: currentStep.howToPrepare
      }
    ]
  };

  return (
    <div className="talent-acquisition-page">
      {/* Navbar */}
      <Navbar
        userName={userData?.name || 'Usuario'}
        onUserClick={onLogout}
        showNavigation={true}
        currentSection="talent-acquisition"
        steps={steps}
        currentStepId={1}
        onStepSelect={onStepSelect}
        isOnVideoPage={false}
      />

      {/* Hero Section */}
      {currentStep && (
        <ScrollTransition animation="fade" duration={1}>
          <Hero
            title={currentStep.whatIsThis}
            description={currentStep.description}
            duration={currentStep.duration}
            participants={currentStep.whoWillBeThere?.[0]}
            videoSrc={currentStep.videoSrc}
          />
        </ScrollTransition>
      )}

      {/* Tips Section */}
      <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Tips items={tipsData.items} />
        </div>
      </ScrollTransition>

      {/* Next Steps */}
      <NextSteps
        nextStepsText={currentStep.nextSteps}
        buttonText="Continuar a Portfolio Review →"
        onContinue={() => onStepSelect(2)}
      />
    </div>
  );
};

export default TalentAcquisition;
