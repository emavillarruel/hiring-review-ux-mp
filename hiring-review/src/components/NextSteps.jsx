import ScrollTransition from './ScrollTransition';
import '../styles/NextSteps.css';

const NextSteps = ({ nextStepsText, buttonText, onContinue, showButton = true, variant = 'default' }) => {
  return (
    <div className="next-steps-container">
      {/* Próximos pasos */}
      {nextStepsText && (
        <ScrollTransition animation="fade-up" duration={0.8}>
          <div className={`next-steps-card ${variant}`}>
            <p className="next-steps-text">
              {variant === 'success' ? (
                nextStepsText
              ) : (
                <>
                  {nextStepsText}
                </>
              )}
            </p>
          </div>
        </ScrollTransition>
      )}

      {/* Botón de continuar */}
      {showButton && buttonText && onContinue && (
        <ScrollTransition animation="fade-up" duration={0.6}>
          <div className="button-wrapper">
            <button onClick={onContinue} className="continue-button">
              {buttonText}
            </button>
          </div>
        </ScrollTransition>
      )}
    </div>
  );
};

export default NextSteps;
