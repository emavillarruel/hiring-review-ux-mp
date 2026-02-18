import { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css';
import LogoIcon from '../assets/Logo/Mercado Pago.svg';
import LogoText from '../assets/Logo/Text.svg';
import ChevronDown from '../assets/Chevron down.svg';
import ArrowRight from '../assets/Arrow right.svg';
import hiringData from '../data/hiringProcess.json';

const Navbar = ({
  userName,
  onUserClick,
  showNavigation = true,
  currentSection,
  showBackButton = false,
  onBackClick,
  steps = [],
  currentStepId = null,
  onStepSelect,
  onNavigateToVideo,
  isOnVideoPage = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Cerrar panel expandido al presionar ESC
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll cuando está expandido
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelectStep = (stepId) => {
    if (onStepSelect) {
      onStepSelect(stepId);
    }
    setIsExpanded(false);
  };

  const handleSelectVideo = () => {
    if (onNavigateToVideo) {
      onNavigateToVideo();
    }
    setIsExpanded(false);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const currentStep = steps.find(s => s.id === currentStepId);

  // Mapeo de iconos para cada step
  const getStepIcon = (icon) => {
    const iconMap = {
      'info': '📋',
      'users': '👥',
      'presentation': '📊',
      'search': '🔍',
      'check-circle': '✅'
    };
    return iconMap[icon] || '📌';
  };

  return (
    <>
      {/* Navbar Islas (collapsed state) */}
      <nav className="navbar" ref={navbarRef}>
        <div className="navbar-left">
          {/* Logo grande */}
          <div className="navbar-logo-large">
            <img src={LogoIcon} alt="Mercado Pago" className="navbar-logo-icon-large" />
            <img src={LogoText} alt="mercado pago" className="navbar-logo-text-large" />
          </div>

          {/* Botón para expandir */}
          {showNavigation && steps.length > 0 && (
            <div className="navbar-dropdown-container">
              <button
                className="navbar-expand-button"
                onClick={handleToggleExpanded}
              >
                <span className="navbar-expand-text">
                  {currentStep ? currentStep.shortName : 'Tu proceso'}
                </span>
                <img
                  src={ChevronDown}
                  alt="chevron"
                  className="navbar-expand-chevron"
                />
              </button>
            </div>
          )}
        </div>

        {/* Usuario en la derecha */}
        <div className="navbar-right">
          {showBackButton && onBackClick && (
            <button className="navbar-back" onClick={onBackClick}>
              ← Volver
            </button>
          )}
          <button className="navbar-user" onClick={onUserClick}>
            {userName || 'Usuario'}
          </button>
          <button className="navbar-close-icon" onClick={onUserClick}>
            ✕
          </button>
        </div>
      </nav>

      {/* Navbar Expandida (expanded panel) */}
      {isExpanded && (
        <div className="navbar-expanded-panel">
          {/* Contenido en dos columnas */}
          <div className="navbar-expanded-content">
            {/* Columna izquierda: Título y descripción */}
            <div className="navbar-expanded-left">
              <div className="navbar-expanded-greeting">
                Hola 
              </div>
              <h1 className="navbar-expanded-title">
                {hiringData.process.title}
              </h1>
              <p className="navbar-expanded-description">
                {hiringData.process.objective}
              </p>
            </div>

            {/* Columna derecha: Lista de etapas */}
            <div className="navbar-expanded-right">
              {hiringData.steps.map((step) => (
                <button
                  key={step.id}
                  className={`navbar-expanded-step ${step.id === currentStepId ? 'active' : ''}`}
                  onClick={() => handleSelectStep(step.id)}
                >
                  <div className="navbar-expanded-step-link">
                    <span className="navbar-expanded-step-name">
                      {step.name}
                    </span>
                    {step.id === currentStepId && (
                      <span className="navbar-expanded-step-badge">
                        Estás en esta etapa
                      </span>
                    )}
                    <img
                      src={ArrowRight}
                      alt="arrow"
                      className="navbar-expanded-step-arrow"
                    />
                  </div>
                  <div className="navbar-expanded-step-description">
                    {step.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
