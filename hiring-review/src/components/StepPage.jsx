import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Momento from './Momento';
import StepSummary from './StepSummary';
import Tips from './Tips';
import Resultados from './Resultados';
import JobDescriptionModal from './JobDescriptionModal';
import ScrollTransition from './ScrollTransition';
import hiringData from '../data/hiringProcess.json';
import { seniorUXDesignerJD } from '../data/jobDescriptions';

const StepPage = ({ stepId = 0, userName = "Emanuel Villarruel" }) => {
  const steps = hiringData.steps;
  const currentStep = steps.find(step => step.id === stepId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!currentStep) {
    return <div>Step no encontrado</div>;
  }

  const handleStepSelect = (selectedStepId) => {
    console.log('Step seleccionado:', selectedStepId);
    // Aquí podrías implementar navegación entre steps
  };

  const handleUserClick = () => {
    console.log('Usuario clickeado');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Preparar datos de Tips si existen
  const tipsData = currentStep.tips ? {
    items: [
      {
        title: 'Qué esperar',
        type: 'bullets',
        content: currentStep.whatToExpect || []
      },
      {
        title: 'Cómo podes prepararte',
        type: 'bullets',
        content: currentStep.howToPrepare || []
      },
      {
        title: 'Tips importantes',
        type: 'text',
        content: currentStep.tips || []
      }
    ]
  } : null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'white',
      padding: '16px'
    }}>
      <Navbar
        userName={userName}
        onUserClick={handleUserClick}
        showNavigation={true}
        currentSection="process"
        steps={steps}
        currentStepId={stepId}
        onStepSelect={handleStepSelect}
        isOnVideoPage={false}
      />

      <ScrollTransition animation="fade" duration={1}>
        <Hero
          title={currentStep.whatIsThis || currentStep.description}
          description={currentStep.description}
          duration={currentStep.duration}
          participants={currentStep.whoWillBeThere?.[0]}
          videoSrc={currentStep.videoSrc}
        />
      </ScrollTransition>

      {/* Momento - Solo para step 0 (La posición) */}
      {stepId === 0 && (
        <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
          <div style={{ marginTop: '16px', marginBottom: '16px' }}>
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
      )}

      <JobDescriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sections={seniorUXDesignerJD.sections}
      />

      {/* StepSummary - Para todos los steps excepto 0 y 4 */}
      {stepId !== 0 && stepId !== 4 && (
        <ScrollTransition animation="fade-up" duration={0.8} delay={0.2}>
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <StepSummary
              duration={currentStep.duration}
              participants={currentStep.whoWillBeThere?.[0] || 'Equipo de Mercado Pago'}
            />
          </div>
        </ScrollTransition>
      )}

      {/* Tips - Para steps que tengan tips (como step 2) */}
      {tipsData && (
        <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <Tips items={tipsData.items} />
          </div>
        </ScrollTransition>
      )}

      {/* Resultados - Solo para step 4 (Definición) */}
      {stepId === 4 && (
        <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <Resultados />
          </div>
        </ScrollTransition>
      )}
    </div>
  );
};

export default StepPage;
