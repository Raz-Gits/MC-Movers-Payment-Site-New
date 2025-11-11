import React, { useState } from 'react';
import './PaymentSection.css';

const PaymentSection = ({ id, title, icon, description, features, instructions, section1Preview }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showFullTerms, setShowFullTerms] = useState(false);
  const isTerms = id === 'terms';
  const isZelle = id === 'zelle';
  const isCheck = id === 'check';
  const isVenmo = id === 'venmo';
  const hasMedia = isZelle || isCheck || isVenmo;
  const zelleImageSrc = `${process.env.PUBLIC_URL}/zelle.jpg`;
  const checkImageSrc = `${process.env.PUBLIC_URL}/${encodeURIComponent('Screenshot 2025-11-07 at 4.19.13 PM.png')}`;
  const venmoImageSrc = `${process.env.PUBLIC_URL}/${encodeURIComponent('Screenshot 2025-11-07 at 16.15.48.jpeg')}`;

  const renderParagraphs = (text) =>
    text
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line, index) => {
        const isSection = line.startsWith('SECTION');
        const isNote = line.startsWith('Note:');
        let className = 'step';
        if (isSection) className = 'section-header';
        else if (isNote) className = 'note';

        if (isVenmo && line.startsWith('Link:')) {
          const url = line.replace('Link:', '').trim();
          return (
            <p key={`${id}-line-${index}`} className={className}>
              Link:{' '}
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </p>
          );
        }

        return (
          <p key={`${id}-line-${index}`} className={className}>
            {line}
          </p>
        );
      });

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
                <div className={`instructions-text ${hasMedia ? 'with-media' : ''}`}>
                  <div className="instructions-body">
                    <div className="instructions-list">
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
                        renderParagraphs(instructions)
                      )}
                    </div>
                    {hasMedia && (
                      <div className="instructions-media">
                        {isZelle && (
                          <img
                            src={zelleImageSrc}
                            alt="Pay with Zelle"
                          />
                        )}
                        {isCheck && (
                          <img
                            src={checkImageSrc}
                            alt="Paper check example"
                          />
                        )}
                        {isVenmo && (
                          <img
                            src={venmoImageSrc}
                            alt="Venmo payment example"
                          />
                        )}
                      </div>
                    )}
                  </div>
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
