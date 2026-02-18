import { useState, useEffect } from 'react';
import hiringData from '../data/hiringProcess.json';
import Step from './Step';
import StepDetailNew from './StepDetailNew';
import Navbar from './Navbar';
import '../styles/Stepper.css';
import '../styles/animations.css';

const Stepper = ({ mode = 'candidate', userData, onLogout, onBackToVideo, currentStepId, onStepSelect }) => {
  // Estado de visualización (qué paso está viendo el usuario)
  const [viewingStepId, setViewingStepId] = useState(currentStepId || 4); // Por defecto muestra Definición

  // Estado real del candidato (en qué etapa está realmente en el proceso)
  // TODO: Esto debería venir de la base de datos
  const [actualStepId, setActualStepId] = useState(4); // Hardcodeado: Definición
  const [completedSteps, setCompletedSteps] = useState([1, 2, 3]); // Ha completado Talent Acquisition, Portfolio Review y Hiring Manager

  const isPreviewMode = mode === 'preview';

  // Actualizar viewingStepId cuando currentStepId cambia
  useEffect(() => {
    if (currentStepId) {
      setViewingStepId(currentStepId);
    }
  }, [currentStepId]);

  // Cargar estado real del candidato (simulado por ahora)
  useEffect(() => {
    if (!isPreviewMode) {
      // TODO: Aquí haríamos el fetch a la API para obtener el estado real
      // fetch(`/api/candidates/${userData.email}/status`)
      //   .then(res => res.json())
      //   .then(data => {
      //     setActualStepId(data.currentStepId);
      //     setCompletedSteps(data.completedSteps);
      //     setViewingStepId(data.currentStepId); // Inicializa en la etapa actual
      //   });

      // Por ahora, hardcodeamos que está en Definición (paso 4)
      setActualStepId(4);
      setCompletedSteps([1, 2, 3]);
      if (!currentStepId) {
        setViewingStepId(4);
      }
    }
  }, [isPreviewMode, userData, currentStepId]);

  // Obtener todos los pasos (ahora son solo 4 fijos)
  const steps = hiringData.steps;

  // Calcular progreso basado en la etapa real del candidato
  const progress = ((completedSteps.length / steps.length) * 100).toFixed(0);

  // Función para manejar el click en un paso
  const handleStepClick = (stepId) => {
    // Si es step 0, 1, 2 o 3, navegar a su propia página
    if ((stepId === 0 || stepId === 1 || stepId === 2 || stepId === 3) && onStepSelect) {
      onStepSelect(stepId);
    } else {
      // Si es step 4, cambiar la visualización dentro del Stepper
      setViewingStepId(stepId);
    }
  };

  // Función para avanzar al siguiente paso en la visualización
  const handleNextStep = () => {
    const currentIndex = steps.findIndex(s => s.id === viewingStepId);

    // Avanzar al siguiente paso en la visualización
    if (currentIndex < steps.length - 1) {
      setViewingStepId(steps[currentIndex + 1].id);
    }
  };

  // Obtener el paso que se está visualizando
  const viewingStep = steps.find(s => s.id === viewingStepId);

  // Determinar el estado visual de cada paso
  const getStepStatus = (stepId) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === actualStepId) return 'current'; // La etapa real donde está el candidato
    return 'pending';
  };

  // Determinar si un paso está siendo visualizado (pero no es el actual)
  const isViewingStep = (stepId) => {
    return stepId === viewingStepId && stepId !== actualStepId;
  };

  // Calcular el progreso de la línea del timeline (basado en la etapa real)
  const getLineProgress = () => {
    const currentIndex = steps.findIndex(s => s.id === actualStepId);
    const totalSteps = steps.length - 1; // -1 porque el progreso es entre pasos
    return (currentIndex / totalSteps) * 100;
  };

  return (
    <div className="stepper-container">
      {/* Navbar */}
      <Navbar
        userName={userData?.name || 'Usuario'}
        onUserClick={onLogout}
        showNavigation={true}
        currentSection="process"
        steps={steps}
        currentStepId={viewingStepId}
        onStepSelect={handleStepClick}
        onNavigateToVideo={onBackToVideo}
        isOnVideoPage={false}
      />

      {/* Header */}
      <div className="stepper-header">
        <p className="stepper-greeting">{hiringData.process.greeting}</p>
        <h1 className="stepper-title">{hiringData.process.title}</h1>
        <p className="stepper-subtitle">
          {hiringData.process.objective}
        </p>

        {/* Badge de etapa actual */}
        {!isPreviewMode && (
          <div className="current-stage-badge">
            <span className="badge-label">Tu etapa actual:</span>
            <span className="badge-value">
              {steps.find(s => s.id === actualStepId)?.name}
            </span>
          </div>
        )}

        {isPreviewMode && (
          <div className="preview-mode-notice">
            <span className="notice-icon">ℹ️</span>
            <p className="notice-text">
              Estás explorando el proceso en modo <strong>solo lectura</strong>.
              Los cambios no se guardarán.
            </p>
          </div>
        )}

        {/* Barra de progreso */}
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="progress-text">Progreso: {progress}%</p>
      </div>

      {/* Timeline del stepper */}
      <div className="stepper-timeline">
        <div className="stepper-line">
          <div
            className="stepper-line-progress"
            style={{ width: `${getLineProgress()}%` }}
          />
        </div>

        {steps.map((step) => (
          <Step
            key={step.id}
            step={step}
            status={getStepStatus(step.id)}
            isViewing={isViewingStep(step.id)}
            onClick={() => handleStepClick(step.id)}
          />
        ))}
      </div>

      {/* Detalles del paso que se está visualizando */}
      {viewingStep && (
        <StepDetailNew
          step={viewingStep}
          onNext={handleNextStep}
          isActualStep={viewingStepId === actualStepId}
          isPreviewMode={isPreviewMode}
        />
      )}
    </div>
  );
};

export default Stepper;
