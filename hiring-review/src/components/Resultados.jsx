import '../styles/Resultados.css';

const Resultados = () => {
  return (
    <div className="resultados-container">
      <div className="resultados-header">
        <h1 className="resultados-title">Posibles resultados</h1>
      </div>

      <div className="resultados-cards">
        {/* Tarjeta Positiva */}
        <div className="resultado-card resultado-card-positive">
          <div className="resultado-card-header">
            <h2 className="resultado-card-title">Oferta laboral</h2>
          </div>

          <div className="resultado-card-content">
            <p className="resultado-card-subtitle">
              Si el resultado es positivo, recibirás una oferta formal con todos los detalles
            </p>

            <div className="resultado-card-list">
              <p>→ Propuesta de compensación y beneficios</p>
              <p>→ Fecha de inicio sugerida</p>
              <p>→ Detalles sobre el onboarding</p>
              <p>→ Próximos pasos administrativos</p>
            </div>
          </div>

          <button className="resultado-icon-button resultado-icon-positive" aria-label="Thumb up">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 9V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3L8 11V21H18.28C18.7623 21.0055 19.2304 20.8364 19.5979 20.524C19.9654 20.2116 20.2077 19.7769 20.28 19.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#282834" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 11H4C3.46957 11 2.96086 11.2107 2.58579 11.5858C2.21071 11.9609 2 12.4696 2 13V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H8V11Z" stroke="#282834" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tarjeta Negativa */}
        <div className="resultado-card resultado-card-negative">
          <div className="resultado-card-header">
            <h2 className="resultado-card-title">Feedback constructivo</h2>
          </div>

          <div className="resultado-card-content">
            <p className="resultado-card-subtitle">
              Si decidimos no avanzar, te daremos feedback sobre tu proceso
            </p>

            <div className="resultado-card-list">
              <p>→ Razones claras de la decisión</p>
              <p>→ Aspectos positivos de tu perfil</p>
              <p>→ Áreas de mejora identificadas</p>
              <p>→ Posibilidad de futuras oportunidades</p>
            </div>
          </div>

          <button className="resultado-icon-button resultado-icon-negative" aria-label="Thumb down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 15V19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21L16 13V3H5.72C5.23771 2.99451 4.76962 3.16359 4.40209 3.47599C4.03457 3.78839 3.79231 4.2231 3.72 4.7L2.34 12.7C2.29649 12.9866 2.31583 13.2793 2.39667 13.5577C2.47751 13.8362 2.61793 14.0937 2.80815 14.3125C2.99838 14.5313 3.23393 14.7061 3.49843 14.8248C3.76293 14.9435 4.05009 15.0033 4.34 15H10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H20C20.5304 13 21.0391 12.7893 21.4142 12.4142C21.7893 12.0391 22 11.5304 22 11V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3H16V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resultados;
