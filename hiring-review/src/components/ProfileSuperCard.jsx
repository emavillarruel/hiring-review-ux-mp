import { useState, useEffect, useRef } from 'react';
import hiringData from '../data/hiringProcess.json';
import JobDescriptionModal from './JobDescriptionModal';
import '../styles/ProfileSuperCard.css';

const ProfileSuperCard = ({ onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const opportunityData = hiringData.opportunity;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calcular el progreso del scroll dentro de esta sección
      const startScroll = sectionTop - windowHeight;
      const endScroll = sectionTop + sectionHeight / 2;
      const scrollRange = endScroll - startScroll;
      const currentProgress = (scrollPosition - startScroll) / scrollRange;

      // Limitar entre 0 y 1
      const progress = Math.max(0, Math.min(1, currentProgress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calcular inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar si estamos en estado inicial (0-0.5) o transformado (0.5-1)
  const isTransformed = scrollProgress > 0.5;
  const transformProgress = isTransformed ? (scrollProgress - 0.5) * 2 : 0;

  return (
    <div ref={sectionRef} className="profile-supercard-section">
      <div className="profile-supercard-sticky-wrapper">
        <div
          className={`profile-supercard ${isTransformed ? 'transformed' : 'initial'}`}
          style={{ '--transform-progress': transformProgress }}
        >
          {/* Card Oscura - Se reduce desde derecha a izquierda */}
          <div className="supercard-initial">
            <div className="supercard-dark-bg">
              <h2 className="supercard-title-centered">¿Qué perfil buscamos?</h2>
            </div>
          </div>

          {/* Card Blanca - Aparece desde la derecha */}
          <div className="supercard-transformed">
            <div className="supercard-right">
              <div className="supercard-content-card">
                {/* Badge con gradiente */}
                <div className="supercard-badge">
                  <div className="badge-gradient-circle">
                    <div className="badge-icon">✱</div>
                  </div>
                  <span className="badge-text">{opportunityData.jobDescription.role}</span>
                </div>

                {/* Título del rol */}
                <h3 className="supercard-role-description">
                  {opportunityData.jobDescription.intro}
                </h3>

                {/* Botones */}
                <div className="supercard-buttons">
                  <button
                    className="supercard-cta-button secondary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Conocer responsabilidades y expectativas
                  </button>
                  <button
                    className="supercard-cta-button primary"
                    onClick={onNavigate}
                  >
                    Ver mi proceso de entrevistas →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Job Description */}
      <JobDescriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobDescription={opportunityData.jobDescription}
      />
    </div>
  );
};

export default ProfileSuperCard;
