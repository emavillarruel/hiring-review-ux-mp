import { useState } from 'react';
import '../styles/Login.css';
import LogoIcon from '../assets/Logo/Mercado Pago.svg';
import LogoText from '../assets/Logo/Text.svg';

const Login = ({ onLogin }) => {
  const [candidateEmail, setCandidateEmail] = useState('');
  const [errors, setErrors] = useState({});

  // Validar email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Manejar cambios en el input
  const handleEmailChange = (value) => {
    setCandidateEmail(value);
    // Limpiar error cuando el usuario empieza a escribir
    if (errors.email) {
      setErrors({});
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    if (!candidateEmail.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(candidateEmail)) {
      newErrors.email = 'El email no es válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Extraer nombre del email (parte antes del @)
      const name = candidateEmail.split('@')[0];

      onLogin({
        mode: 'candidate',
        userData: {
          name: name.charAt(0).toUpperCase() + name.slice(1),
          email: candidateEmail
        }
      });
    }
  };

  // Manejar modo preview
  const handlePreviewMode = () => {
    onLogin({
      mode: 'preview',
      userData: {
        name: 'Modo Vista Previa',
        email: null
      }
    });
  };

  return (
    <div className="login-container">
      {/* Panel izquierdo - Amarillo con branding */}
      <div className="login-brand-panel">
        <div className="brand-logo">
          <img src={LogoIcon} alt="Mercado Pago" className="logo-icon" />
          <img src={LogoText} alt="mercado pago" className="logo-text-img" />
        </div>

        <div className="brand-content">
          <h1 className="brand-title">Hiring Journey</h1>
          <p className="brand-subtitle">UX Team</p>
        </div>
      </div>

      {/* Panel derecho - Blanco con formulario */}
      <div className="login-form-panel">
        <div className="form-container">
          <h2 className="form-main-title">Acceso de candidatos</h2>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Ingresa el email que usaste para aplicar al proceso
                <button
                  type="button"
                  className="info-tooltip"
                  title="Usa el mismo email con el que te contactó el equipo de Talent Acquisition"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 7V11M8 5.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </label>
              <input
                type="email"
                id="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="tu.email@ejemplo.com"
                value={candidateEmail}
                onChange={(e) => handleEmailChange(e.target.value)}
                autoFocus
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <button type="submit" className="submit-button">
              Ingresar como candidato
            </button>
          </form>

          <p className="help-text">
            ¿Problemas para acceder? Contacta a{' '}
            <a href="mailto:talent@mercadopago.com" className="help-link">
              talent@mercadopago.com
            </a>
          </p>

          {/* Link discreto para modo preview */}
          <button
            type="button"
            className="preview-link"
            onClick={handlePreviewMode}
          >
            O explora en modo vista previa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
