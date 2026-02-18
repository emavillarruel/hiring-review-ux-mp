const Step = ({ step, status, isViewing, onClick }) => {
  // Mapeo de iconos (usando emojis por ahora, se puede cambiar a iconos SVG)
  const iconMap = {
    'wave': '👋',
    'users': '👥',
    'presentation': '📊',
    'code': '💻',
    'search': '🔍',
    'check-circle': '✅',
    'help': '❓'
  };

  const statusTextMap = {
    'completed': 'Completado',
    'current': 'Tu etapa',
    'pending': 'Próximamente'
  };

  return (
    <div
      className={`step ${status} ${isViewing ? 'viewing' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`${step.name} - ${statusTextMap[status]}`}
    >
      <div className="step-circle">
        <span className="step-circle-icon">
          {status === 'completed' ? '✓' : iconMap[step.icon] || '•'}
        </span>
      </div>

      <div className="step-label">
        <div className="step-name">{step.shortName || step.name}</div>
        <div className="step-status">
          {isViewing && status !== 'current' ? '👁️ Viendo' : statusTextMap[status]}
        </div>
      </div>
    </div>
  );
};

export default Step;
