import '../styles/Hero.css';
import StepSummary from './StepSummary';

const Hero = ({ title, description, duration, participants, videoSrc }) => {
  return (
    <div className="hero-container">
      {/* Video de fondo o gradiente */}
      <div className="hero-background">
        {videoSrc ? (
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="hero-gradient" />
        )}
      </div>

      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className="hero-overlay" />

      {/* Contenido del hero */}
      <div className="hero-content">
        {/* Texto principal */}
        <div className="hero-text">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>
        </div>

        {/* Badges de resumen */}
        <div className="hero-summary">
          <StepSummary duration={duration} participants={participants} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
