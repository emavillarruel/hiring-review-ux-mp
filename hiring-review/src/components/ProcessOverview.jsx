import { useState, useEffect } from 'react';
import hiringData from '../data/hiringProcess.json';
import Navbar from './Navbar';
import Hero from './Hero';
import Momento from './Momento';
import JobDescriptionModal from './JobDescriptionModal';
import NextSteps from './NextSteps';
import ScrollTransition from './ScrollTransition';
import { seniorUXDesignerJD } from '../data/jobDescriptions';
import '../styles/ProcessOverview.css';

const ProcessOverview = ({ userData, onLogout, onContinue, onStepSelect }) => {
  const steps = hiringData.steps;
  const processStep = steps.find(s => s.id === 0); // Step "Sobre la búsqueda"
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top cuando se monta el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="process-overview-page">
      {/* Navbar */}
      <Navbar
        userName={userData?.name || 'Usuario'}
        onUserClick={onLogout}
        showNavigation={true}
        currentSection="process"
        steps={steps}
        currentStepId={0}
        onStepSelect={onStepSelect}
        isOnVideoPage={false}
      />

      {/* Hero Section */}
      {processStep && (
        <ScrollTransition animation="fade" duration={1}>
          <Hero
            title={processStep.whatIsThis}
            description={processStep.description}
            duration={processStep.duration}
            videoSrc={processStep.videoSrc}
          />
        </ScrollTransition>
      )}

      {/* Momento - Job Description */}
      <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
        <div style={{ marginTop: '16px', marginBottom: '40px' }}>
          <Momento
            badge="¿Qué perfil buscamos?"
            title={hiringData.opportunity.jobDescription.role}
            scope="Scope: Cobranza de Créditos"
            description={hiringData.opportunity.jobDescription.context}
            buttonText="Conocer responsabilidades y expectativas"
            onButtonClick={handleOpenModal}
            onFavoriteClick={() => console.log('Favorito clickeado')}
          />
        </div>
      </ScrollTransition>

      <JobDescriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sections={seniorUXDesignerJD.sections}
      />

      {/* Next Steps */}
      {onContinue && processStep && (
        <NextSteps
          nextStepsText={processStep.nextSteps}
          buttonText="Comenzar con las entrevistas →"
          onContinue={onContinue}
        />
      )}
    </div>
  );
};

export default ProcessOverview;
