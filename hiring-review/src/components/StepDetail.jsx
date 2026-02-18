const StepDetail = ({ step, onNext, isActualStep, isPreviewMode }) => {
  const iconMap = {
    'wave': '👋',
    'users': '👥',
    'presentation': '📊',
    'code': '💻',
    'search': '🔍',
    'check-circle': '✅'
  };

  const renderSection = (title, icon, items) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="detail-section">
        <h3>
          <span>{icon}</span> {title}
        </h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderPossibleOutcomes = () => {
    if (!step.possibleOutcomes) return null;

    return (
      <div className="detail-section">
        <h3>
          <span>🔀</span> Posibles resultados
        </h3>
        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1rem' }}>
          {step.possibleOutcomes.map((outcome, index) => (
            <div
              key={index}
              style={{
                padding: '1.5rem',
                background: outcome.type === 'offer' ? 'var(--color-success-light)' : 'var(--color-info-light)',
                borderRadius: 'var(--radius-lg)',
                border: `2px solid ${outcome.type === 'offer' ? 'var(--color-success)' : 'var(--color-info)'}`,
              }}
            >
              <h4 style={{
                marginBottom: '0.75rem',
                color: 'var(--color-gray-900)',
                fontSize: '1.125rem'
              }}>
                {outcome.type === 'offer' ? '✅' : '💬'} {outcome.title}
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-gray-700)',
                marginBottom: '1rem'
              }}>
                {outcome.description}
              </p>
              {outcome.includes && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {outcome.includes.map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-gray-600)',
                      padding: '0.375rem 0',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: outcome.type === 'offer' ? 'var(--color-success)' : 'var(--color-info)'
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="step-detail-card">
      {/* Banner informativo si no es la etapa actual */}
      {!isActualStep && !isPreviewMode && (
        <div style={{
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(0, 158, 227, 0.1) 0%, rgba(0, 119, 190, 0.1) 100%)',
          border: '2px solid var(--color-info)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>👁️</span>
          <p style={{
            margin: 0,
            color: 'var(--color-gray-700)',
            fontSize: '0.95rem',
            lineHeight: '1.5'
          }}>
            <strong>Estás explorando una etapa futura.</strong> Esta información te ayuda a prepararte para lo que viene. Tu etapa actual aparece marcada en el timeline.
          </p>
        </div>
      )}

      {/* Header */}
      <div className="detail-header">
        <div className="detail-icon">
          {iconMap[step.icon] || '•'}
        </div>
        <div className="detail-title-group">
          <h2>{step.name}</h2>
          <div className="detail-meta">
            <span>⏱️ {step.duration}</span>
            {step.whoWillBeThere && (
              <span>👥 {step.whoWillBeThere.join(', ')}</span>
            )}
          </div>
        </div>
      </div>

      {/* Descripción */}
      <div className="detail-section">
        <p style={{ fontSize: '1.125rem', color: 'var(--color-gray-700)', marginBottom: '1rem' }}>
          {step.description}
        </p>
        {step.whatIsThis && (
          <p style={{
            padding: '1.25rem',
            background: 'var(--color-background-warm)',
            borderRadius: 'var(--radius-lg)',
            borderLeft: '4px solid var(--color-primary)',
            fontSize: '1rem',
            color: 'var(--color-gray-700)',
            lineHeight: '1.6'
          }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-900)' }}>
              ¿Qué es esta etapa?
            </strong>
            {step.whatIsThis}
          </p>
        )}
      </div>

      {/* Secciones dinámicas */}
      {renderSection('💡 Qué esperar', '💡', step.whatToExpect)}
      {renderSection('📝 Cómo prepararte', '📝', step.howToPrepare)}
      {renderSection('💎 Tips importantes', '💎', step.tips)}

      {/* Posibles resultados (solo para paso final) */}
      {renderPossibleOutcomes()}

      {/* Próximos pasos */}
      {step.nextSteps && (
        <div className="detail-section" style={{
          padding: '1.25rem',
          background: 'linear-gradient(135deg, var(--color-info) 0%, #0077BE 100%)',
          color: 'white',
          borderRadius: 'var(--radius-lg)',
          marginTop: '2rem'
        }}>
          <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
            <strong>📍 Cómo sigue:</strong> {step.nextSteps}
          </p>
        </div>
      )}

      {/* Botón de siguiente (si no es el paso final) */}
      {step.id !== 4 && (
        <button
          onClick={onNext}
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-warning) 100%)',
            color: 'var(--color-gray-900)',
            border: 'none',
            borderRadius: 'var(--radius-lg)',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            width: '100%',
            transition: 'all 200ms',
            boxShadow: '0 4px 12px rgba(255, 242, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 242, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 242, 0, 0.3)';
          }}
        >
          Continuar al siguiente paso →
        </button>
      )}

      {/* Mensaje final si es el último paso */}
      {step.id === 4 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, var(--color-success-light) 0%, var(--color-info-light) 100%)',
          borderRadius: 'var(--radius-xl)',
          marginTop: '2rem',
          border: '2px solid var(--color-success)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
          <h3 style={{ color: 'var(--color-gray-900)', marginBottom: '0.75rem', fontSize: '1.75rem' }}>
            Ya casi llegamos
          </h3>
          <p style={{ color: 'var(--color-gray-700)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Estás a un paso de conocer el resultado de tu proceso. ¡Mucha suerte! 🍀
          </p>
        </div>
      )}
    </div>
  );
};

export default StepDetail;
