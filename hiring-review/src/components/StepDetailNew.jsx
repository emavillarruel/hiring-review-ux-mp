import { useState } from 'react';
import Hero from './Hero';
import Momento from './Momento';
import StepSummary from './StepSummary';
import Tips from './Tips';
import Resultados from './Resultados';
import JobDescriptionModal from './JobDescriptionModal';
import ScrollTransition from './ScrollTransition';
import hiringData from '../data/hiringProcess.json';
import { seniorUXDesignerJD } from '../data/jobDescriptions';
import '../styles/StepDetailNew.css';

const StepDetailNew = ({ step, onNext, isActualStep, isPreviewMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Preparar datos de Tips si existen
  const tipsData = (step.whatToExpect || step.howToPrepare || step.tips) ? {
    items: []
  } : null;

  if (tipsData) {
    if (step.whatToExpect && step.whatToExpect.length > 0) {
      tipsData.items.push({
        title: 'Qué esperar',
        type: 'bullets',
        content: step.whatToExpect
      });
    }
    if (step.howToPrepare && step.howToPrepare.length > 0) {
      tipsData.items.push({
        title: 'Cómo podes prepararte',
        type: 'bullets',
        content: step.howToPrepare
      });
    }
    if (step.tips && step.tips.length > 0) {
      tipsData.items.push({
        title: 'Tips importantes',
        type: 'text',
        content: step.tips
      });
    }
  }

  return (
    <div className="step-detail-new">
      {/* Banner informativo si no es la etapa actual */}
      {!isActualStep && !isPreviewMode && (
        <ScrollTransition animation="fade-down" duration={0.6}>
          <div className="info-banner">
            <span className="info-banner-icon">👁️</span>
            <p className="info-banner-text">
              <strong>Estás explorando una etapa futura.</strong> Esta información te ayuda a prepararte para lo que viene. Tu etapa actual aparece marcada en el timeline.
            </p>
          </div>
        </ScrollTransition>
      )}

      {/* Hero Section */}
      <ScrollTransition animation="fade" duration={1}>
        <Hero
          title={step.whatIsThis || step.description}
          description={step.description}
          duration={step.duration}
          participants={step.whoWillBeThere?.[0]}
          videoSrc={step.videoSrc}
        />
      </ScrollTransition>

      {/* Momento - Solo para step 0 (La posición) */}
      {step.id === 0 && (
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

      {/* StepSummary - Para steps con participantes (excepto 0 y 4) */}
      {step.id !== 0 && step.id !== 4 && step.whoWillBeThere && (
        <ScrollTransition animation="fade-up" duration={0.8} delay={0.2}>
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <StepSummary
              duration={step.duration}
              participants={step.whoWillBeThere[0]}
            />
          </div>
        </ScrollTransition>
      )}

      {/* Tips - Para steps que tengan contenido de tips */}
      {tipsData && tipsData.items.length > 0 && (
        <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <Tips items={tipsData.items} />
          </div>
        </ScrollTransition>
      )}

      {/* Resultados - Solo para step 4 (Definición) */}
      {step.id === 4 && step.possibleOutcomes && (
        <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <Resultados />
          </div>
        </ScrollTransition>
      )}

      {/* Próximos pasos */}
      {step.nextSteps && (
        <ScrollTransition animation="fade-up" duration={0.8}>
          <div className="next-steps-card">
            <p className="next-steps-text">
              <strong>📍 Cómo sigue:</strong> {step.nextSteps}
            </p>
          </div>
        </ScrollTransition>
      )}

      {/* Botón de siguiente (si no es el paso final) */}
      {step.id !== 4 && (
        <ScrollTransition animation="fade-up" duration={0.6}>
          <button onClick={onNext} className="next-step-button">
            Continuar al siguiente paso →
          </button>
        </ScrollTransition>
      )}

      {/* Mensaje final si es el último paso */}
      {step.id === 4 && (
        <ScrollTransition animation="scale" duration={0.8}>
          <div className="final-message">
            <div className="final-message-icon">🎯</div>
            <h3 className="final-message-title">Ya casi llegamos</h3>
            <p className="final-message-text">
              Estás a un paso de conocer el resultado de tu proceso. ¡Mucha suerte! 🍀
            </p>
          </div>
        </ScrollTransition>
      )}
    </div>
  );
};

export default StepDetailNew;
