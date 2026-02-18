import { useState } from 'react';
import '../styles/Tips.css';

const Tips = ({ items = [] }) => {
  const [expandedItems, setExpandedItems] = useState([0, 1, 2]); // Todos expandidos por defecto

  const toggleItem = (index) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="tips-container">
      <div className="tips-header">
        <h1 className="tips-title">Ten en cuenta estos tips!</h1>
      </div>

      <div className="tips-list">
        {items.map((item, index) => (
          <div key={index} className="tips-item">
            <button
              className="tips-item-header"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedItems.includes(index)}
            >
              <h3 className="tips-item-title">{item.title}</h3>
              <div className="tips-chevron">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={expandedItems.includes(index) ? 'rotated' : ''}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#282834"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>

            {expandedItems.includes(index) && (
              <div className="tips-item-content">
                {item.type === 'bullets' ? (
                  <ul className="tips-bullets">
                    {item.content.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="tips-text">
                    {item.content.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
