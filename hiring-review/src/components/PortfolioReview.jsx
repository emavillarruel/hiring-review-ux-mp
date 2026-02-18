import { useEffect } from 'react';
import hiringData from '../data/hiringProcess.json';
import Navbar from './Navbar';
import Hero from './Hero';
import Tips from './Tips';
import NextSteps from './NextSteps';
import ScrollTransition from './ScrollTransition';
import '../styles/PortfolioReview.css';

const PortfolioReview = ({ userData, onLogout, onStepSelect }) => {
  const steps = hiringData.steps;
  const currentStep = steps.find(s => s.id === 2); // Portfolio Review

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
      },
      {
        title: 'Tips importantes',
        type: 'bullets',
        content: currentStep.tips
      }
    ]
  };

  return (
    <div className="portfolio-review-page">
      {/* Navbar */}
      <Navbar
        userName={userData?.name || 'Usuario'}
        onUserClick={onLogout}
        showNavigation={true}
        currentSection="portfolio-review"
        steps={steps}
        currentStepId={2}
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
        buttonText="Continuar a Ejercicio (opcional) →"
        onContinue={() => onStepSelect(3)}
      />
    </div>
  );
};

export default PortfolioReview;
