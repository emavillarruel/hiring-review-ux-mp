import '../styles/Momento.css';
import FireIcon from '../assets/Fire.svg';
import FavoriteIcon from '../assets/Favorite.svg';
import DefaultImage from '../assets/Image (3).png';

const Momento = ({
  badge,
  title,
  scope,
  description,
  buttonText,
  imageSrc,
  onButtonClick,
  onFavoriteClick
}) => {
  return (
    <div className="momento-container">
      {/* Panel de detalle (izquierda) */}
      <div className="momento-detail">
        {/* Título y Badge en la parte superior */}
        <div className="momento-header">
          {/* Badge con glassmorphism */}
          <div className="momento-badge">
            <div className="momento-badge-icon">
              <div className="momento-badge-gradient">
                <div className="momento-badge-gradient-inner"></div>
                <div className="momento-badge-gradient-blur"></div>
              </div>
              <div className="momento-badge-asterisk">
                <img src={FireIcon} alt="Fire" />
              </div>
            </div>
            <span className="momento-badge-label">{badge}</span>
          </div>

          {/* Título principal */}
          <h1 className="momento-title">{title}</h1>
        </div>

        {/* Descripción y botón en la parte inferior */}
        <div className="momento-footer">
          <h2 className="momento-scope">{scope}</h2>
          <p className="momento-description">{description}</p>
          <button className="momento-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>

        {/* Botón de favorito */}
        <button className="momento-favorite" onClick={onFavoriteClick}>
          <img src={FavoriteIcon} alt="Favorite" />
        </button>
      </div>

      {/* Panel de imagen (derecha) */}
      <div className="momento-image">
        <img
          src={imageSrc || DefaultImage}
          alt={title}
          className="momento-image-content"
        />
      </div>
    </div>
  );
};

export default Momento;
