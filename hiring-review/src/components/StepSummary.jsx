import '../styles/StepSummary.css';
import ClockIcon from '../assets/Clock.svg';
import UserIcon from '../assets/User.svg';

const StepSummary = ({ duration, participants }) => {
  return (
    <div className="step-summary">
      {/* Badge de duración */}
      {duration && (
        <div className="step-summary-badge">
          <div className="step-summary-icon-container">
            <img src={ClockIcon} alt="duration" className="step-summary-icon" />
          </div>
          <div className="step-summary-text">
            {duration}
          </div>
        </div>
      )}

      {/* Badge de participantes */}
      {participants && (
        <div className="step-summary-badge">
          <div className="step-summary-icon-container">
            <img src={UserIcon} alt="participants" className="step-summary-icon" />
          </div>
          <div className="step-summary-text">
            {participants}
          </div>
        </div>
      )}
    </div>
  );
};

export default StepSummary;
