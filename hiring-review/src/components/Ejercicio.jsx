import { useEffect } from 'react';
import hiringData from '../data/hiringProcess.json';
import Navbar from './Navbar';
import Hero from './Hero';
import Tips from './Tips';
import NextSteps from './NextSteps';
import ScrollTransition from './ScrollTransition';
import '../styles/Ejercicio.css';

const Ejercicio = ({ userData, onLogout, onStepSelect }) => {
  const steps = hiringData.steps;
  const currentStep = steps.find(s => s.id === 3); // Ejercicio

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
        title: 'Cómo prepararte',
        type: 'bullets',
        content: currentStep.howToPrepare
      },
      {
        title: 'Tips',
        type: 'bullets',
        content: currentStep.tips
      }
    ]
  };

  return (
    <div className="ejercicio-page">
      {/* Navbar */}
      <Navbar
        userName={userData.name}
        onUserClick={onLogout}
        showNavigation={true}
        currentSection="process"
        steps={steps}
        currentStepId={3}
        onStepSelect={onStepSelect}
      />

      {/* Hero */}
      <ScrollTransition animation="fade" duration={0.6}>
        <Hero
          title={currentStep.whatIsThis}
          description={currentStep.description}
          duration={currentStep.duration}
          participants={currentStep.whoWillBeThere?.join(', ')}
          videoSrc={currentStep.videoSrc}
          badge={currentStep.isOptional ? '⚡ Opcional' : null}
        />
      </ScrollTransition>

      {/* Optional Badge Notice */}
      <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
        <div className="optional-notice">
          <div className="optional-notice-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 10.6667V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="5.66667" r="0.666667" fill="currentColor"/>
            </svg>
          </div>
          <div className="optional-notice-content">
            <h3 className="optional-notice-title">Este paso es opcional</h3>
            <p className="optional-notice-text">
              Solo algunos candidatos reciben este ejercicio dependiendo del perfil y lo que necesitemos validar en profundidad.
            </p>
          </div>
        </div>
      </ScrollTransition>

      {/* Exercises Cards */}
      <ScrollTransition animation="fade-up" duration={0.8} delay={0.2}>
        <div className="exercises-container">
          <h2 className="exercises-title">Tipos de ejercicio</h2>
          <p className="exercises-subtitle">Se elige uno de los dos ejercicios según lo que se necesite validar</p>

          <div className="exercises-grid">
            {currentStep.exercises.map((exercise, index) => (
              <div key={exercise.type} className="exercise-card">
                <div className="exercise-header">
                  <span className="exercise-number">Opción {index + 1}</span>
                  <h3 className="exercise-name">{exercise.name}</h3>
                </div>
                <p className="exercise-description">{exercise.description}</p>

                <div className="exercise-validates">
                  <h4 className="validates-title">Se valida:</h4>
                  <ul className="validates-list">
                    {exercise.validates.map((item, idx) => (
                      <li key={idx} className="validates-item">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="exercise-timeframe">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{exercise.timeframe}</span>
                </div>

                {exercise.downloadFile && (
                  <a
                    href={exercise.downloadFile}
                    download={exercise.downloadFileName}
                    className="exercise-download-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 12.5L10 3.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M13.3333 9.16667L10 12.5L6.66667 9.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33333 14.1667V15.8333C3.33333 16.2754 3.50893 16.6993 3.82149 17.0118C4.13405 17.3244 4.55797 17.5 5 17.5H15C15.442 17.5 15.866 17.3244 16.1785 17.0118C16.4911 16.6993 16.6667 16.2754 16.6667 15.8333V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Descargar ejercicio (PDF)
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollTransition>

      {/* Tips Section */}
      <ScrollTransition animation="fade-up" duration={0.8} delay={0.3}>
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Tips items={tipsData.items} />
        </div>
      </ScrollTransition>

      {/* Next Steps */}
      <NextSteps
        nextStepsText={currentStep.nextSteps}
        buttonText="Continuar a Hiring Manager →"
        onContinue={() => onStepSelect(4)}
      />
    </div>
  );
};

export default Ejercicio;
