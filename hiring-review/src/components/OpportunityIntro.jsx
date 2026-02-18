import { useEffect } from 'react';
import hiringData from '../data/hiringProcess.json';
import Navbar from './Navbar';
import ProfileSuperCard from './ProfileSuperCard';
import VideoSrc from '../assets/SEPA01.mp4';
import '../styles/OpportunityIntro.css';

const OpportunityIntro = ({ userData, mode, onContinue, onLogout, onStepSelect }) => {
  const steps = hiringData.steps;

  // Scroll to top cuando se monta el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Sección del Video */}
      <div className="opportunity-intro-page">
        {/* Navbar */}
        <Navbar
          userName={userData?.name || 'Usuario'}
          onUserClick={onLogout}
          showNavigation={true}
          currentSection="opportunity"
          steps={steps}
          currentStepId={null}
          onStepSelect={onStepSelect}
          isOnVideoPage={true}
        />

        {/* Video Section */}
        <div className="video-section">
          {/* Video HTML5 con autoplay */}
          <video
            className="video-background"
            src={VideoSrc}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Título superpuesto */}
          <h1 className="video-title">
            Cómo pensamos y hacemos diseño en MeLi
          </h1>
        </div>
      </div>

      {/* Super Card - Transición con scroll */}
      <ProfileSuperCard onNavigate={onContinue} />
    </>
  );
};

export default OpportunityIntro;
