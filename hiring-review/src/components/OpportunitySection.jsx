import { useState } from 'react';
import '../styles/OpportunitySection.css';

const OpportunitySection = ({ opportunityData }) => {
  const [isJdExpanded, setIsJdExpanded] = useState(false);

  return (
    <div className="opportunity-section">
      {/* Hero con Video */}
      <div className="opportunity-hero">
        <div className="hero-content">
          <h2 className="hero-title">
            {opportunityData.title}
          </h2>
          <p className="hero-subtitle">
            {opportunityData.subtitle}
          </p>
        </div>

        {/* Video embed de Vimeo */}
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src={opportunityData.videoUrl}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Proyectos del equipo UX"
              className="video-iframe"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Job Description Colapsable */}
      <div className="job-description-card">
        <button
          className={`jd-header ${isJdExpanded ? 'expanded' : ''}`}
          onClick={() => setIsJdExpanded(!isJdExpanded)}
          aria-expanded={isJdExpanded}
        >
          <div className="jd-header-content">
            <div className="jd-icon">📋</div>
            <div className="jd-header-text">
              <h3 className="jd-title">¿Qué perfil buscamos?</h3>
              <p className="jd-hint">
                {isJdExpanded ? 'Ver menos' : 'Ver descripción completa del rol'}
              </p>
            </div>
          </div>
          <div className={`jd-chevron ${isJdExpanded ? 'rotated' : ''}`}>
            ▼
          </div>
        </button>

        {/* Contenido expandible */}
        <div className={`jd-content ${isJdExpanded ? 'expanded' : ''}`}>
          <div className="jd-content-inner">
            {/* Intro */}
            <div className="jd-section">
              <h4 className="jd-role-title">{opportunityData.jobDescription.role}</h4>
              <p className="jd-intro">{opportunityData.jobDescription.intro}</p>
              <p className="jd-context">{opportunityData.jobDescription.context}</p>
            </div>

            {/* Valoramos */}
            {opportunityData.jobDescription.valued && (
              <div className="jd-section">
                <h5 className="jd-section-title">Valoramos especialmente</h5>
                <ul className="jd-list">
                  {opportunityData.jobDescription.valued.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Responsabilidades */}
            {opportunityData.jobDescription.responsibilities && (
              <div className="jd-section">
                <h5 className="jd-section-title">Principales responsabilidades</h5>
                <ul className="jd-list">
                  {opportunityData.jobDescription.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {opportunityData.jobDescription.requirements && (
              <div className="jd-section">
                <h5 className="jd-section-title">Lo que esperamos</h5>
                <ul className="jd-list">
                  {opportunityData.jobDescription.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
