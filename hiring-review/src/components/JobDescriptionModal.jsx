import { useEffect } from 'react';
import '../styles/JobDescriptionModal.css';

const JobDescriptionModal = ({ isOpen, onClose, sections = [] }) => {
  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="jd-modal-overlay" onClick={onClose}>
      <div className="jd-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="jd-modal-close" onClick={onClose} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="jd-modal-content">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="jd-modal-section">
                <p className="jd-section-title">{section.title}</p>
                <div className="jd-section-body">
                  {section.items.map((item, itemIndex) => (
                    <p key={itemIndex}>{item}</p>
                  ))}
                </div>
              </div>
              {sectionIndex < sections.length - 1 && <div className="jd-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionModal;
