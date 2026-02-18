import '../styles/Hero.css';
import StepSummary from './StepSummary';

const Hero = ({ title, description, duration, participants, videoSrc }) => {
  return (
    <div className="hero-container">
      {/* Video de fondo o gradiente */}
      <div className="hero-background">
        {videoSrc ? (
          videoSrc.includes('vimeo.com') ? (
            <iframe
              className="hero-video"
              src={`${videoSrc}&autoplay=1&loop=1&muted=1&background=1&controls=0`}
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          ) : (
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )
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
