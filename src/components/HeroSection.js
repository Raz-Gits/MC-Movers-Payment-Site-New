import React from 'react';
import './HeroSection.css';
import Aurora from './Aurora';

const HeroSection = ({ paymentMethods, selectedMethod, onSelectMethod }) => {
  const handleMethodClick = (method) => {
    onSelectMethod(method);
    // Scroll to the payment section
    setTimeout(() => {
      const element = document.getElementById(method.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="hero-container">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-text">Secure Payment Portal</span>
        </div>
        <h1 className="main-title">MC Movers Payment Portal</h1>
        
        <div className="payment-method-buttons">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              className={`method-button ${selectedMethod?.id === method.id ? 'selected' : ''}`}
              onClick={() => handleMethodClick(method)}
            >
              <span className="method-icon">{method.icon}</span>
              <span className="method-title">{method.title}</span>
              <span className="method-description">{method.description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
