import { useEffect } from 'react';
import hiringData from '../data/hiringProcess.json';
import Navbar from './Navbar';
import Hero from './Hero';
import Tips from './Tips';
import Resultados from './Resultados';
import NextSteps from './NextSteps';
import ScrollTransition from './ScrollTransition';
import '../styles/Definicion.css';

const Definicion = ({ userData, onLogout, onStepSelect }) => {
  const steps = hiringData.steps;
  const currentStep = steps.find(s => s.id === 5); // Definición

  // Scroll to top cuando se monta el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Preparar datos de Tips (solo "Qué esperar" porque es el final)
  const tipsData = {
    items: [
      {
        title: 'Qué esperar',
        type: 'bullets',
        content: currentStep.whatToExpect
      }
    ]
  };

  return (
    <div className="definicion-page">
      {/* Navbar */}
      <Navbar
        userName={userData?.name || 'Usuario'}
        onUserClick={onLogout}
        showNavigation={true}
        currentSection="definicion"
        steps={steps}
        currentStepId={5}
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

      {/* Resultados */}
      <ScrollTransition animation="fade-up" duration={0.8} delay={0.2}>
        <Resultados />
      </ScrollTransition>

      {/* Next Steps */}
      <NextSteps
        nextStepsText={currentStep.nextSteps}
        showButton={false}
        variant="success"
      />
    </div>
  );
};

export default Definicion;
