import React, { useState } from 'react';
import './PaymentSection.css';

const PaymentSection = ({ id, title, icon, description, features, instructions, section1Preview }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showFullTerms, setShowFullTerms] = useState(false);
  const isTerms = id === 'terms';

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const onKeyToggle = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand();
    }
  };

  return (
    <section id={id} className="payment-section">
      <div className="container">
        <div
          className="payment-card"
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          onClick={toggleExpand}
          onKeyDown={onKeyToggle}
        >
          <div className="payment-header">
            <div className="payment-icon">{icon}</div>
            <div className="payment-info">
              <h2 className="payment-title">{title}</h2>
              <p className="payment-description">{description}</p>
              <div className="payment-features">
                {features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
            <button
              className="expand-button"
              onClick={(e) => { e.stopPropagation(); toggleExpand(); }}
              aria-label={isExpanded ? 'Collapse instructions' : 'Expand instructions'}
            >
              {isExpanded ? '−' : '+'}
            </button>
          </div>
          
          {isExpanded && (
            <div className="payment-details">
              <div className="instructions-section">
                {!isTerms && <h3>Step-by-Step Instructions:</h3>}
                <div className="instructions-text">
                  {isTerms && !showFullTerms ? (
                    <>
                      <p>{section1Preview}</p>
                      <button 
                        className="view-more-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowFullTerms(true);
                        }}
                      >
                        Press to view more
                      </button>
                    </>
                  ) : (
                    instructions.split('\n').map((line, index) => {
                      const isSection = line.startsWith('SECTION');
                      const isNote = line.startsWith('Note:');
                      let className = 'step';
                      if (isSection) className = 'section-header';
                      else if (isNote) className = 'note';
                      return (
                        <p key={index} className={className}>
                          {line}
                        </p>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
