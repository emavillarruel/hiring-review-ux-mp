import { useState, useEffect } from 'react';
import hiringData from '../data/hiringProcess.json';
import '../styles/StepsOverview.css';

const StepsOverview = ({ currentStepId, onStepClick, alwaysVisible = false }) => {
  const [isVisible, setIsVisible] = useState(alwaysVisible);
  const steps = hiringData.steps;

  useEffect(() => {
    if (alwaysVisible) {
      // Si alwaysVisible es true, mostrar después de un delay
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    } else {
      // Si no, basarse en scroll
      const handleScroll = () => {
        setIsVisible(window.scrollY > 100);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check inicial

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [alwaysVisible]);

  return (
    <div className={`steps-overview ${isVisible ? 'visible' : 'hidden'}`}>
      {steps.map((step) => (
        <div
          key={step.id}
          className={`step-card ${currentStepId === step.id ? 'active' : ''}`}
          onClick={() => onStepClick && onStepClick(step.id)}
        >
          <div className="step-card-name">{step.name}</div>
          <div className="step-card-number">Etapa {step.id}</div>
        </div>
      ))}
    </div>
  );
};

export default StepsOverview;
