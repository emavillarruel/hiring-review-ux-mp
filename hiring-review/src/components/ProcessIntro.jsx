import { useState } from 'react';
import hiringData from '../data/hiringProcess.json';
import Navbar from './Navbar';
import Hero from './Hero';
import Momento from './Momento';
import JobDescriptionModal from './JobDescriptionModal';
import ScrollTransition from './ScrollTransition';
import { seniorUXDesignerJD } from '../data/jobDescriptions';
import '../styles/ProcessIntro.css';

const ProcessIntro = ({ userData, onLogout, onStepSelect, onBackToVideo, currentStepId, showNavbar = true }) => {
  const steps = hiringData.steps;
  const currentStep = steps.find(s => s.id === currentStepId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="process-intro-page">
      {/* Navbar */}
      {showNavbar && (
        <Navbar
          userName={userData?.name || 'Usuario'}
          onUserClick={onLogout}
          showNavigation={true}
          currentSection="talent-acquisition"
          steps={steps}
          currentStepId={currentStepId}
          onStepSelect={onStepSelect}
          onNavigateToVideo={onBackToVideo}
          isOnVideoPage={false}
        />
      )}

      {/* Hero Section */}
      {currentStep && (
        <ScrollTransition animation="fade" duration={1}>
          <Hero
            title={currentStep.whatIsThis || currentStep.description}
            description={currentStep.description}
            duration={currentStep.duration}
            participants={currentStep.whoWillBeThere?.[0]}
            videoSrc={currentStep.videoSrc}
          />
        </ScrollTransition>
      )}

      {/* Momento - Job Description */}
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

      <JobDescriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sections={seniorUXDesignerJD.sections}
      />
    </div>
  );
};

export default ProcessIntro;
