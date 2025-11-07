import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [logoAvailable, setLogoAvailable] = useState(true);
  return (
    <header className="header">
      <div className="header-content">
        <div className="company-branding">
          <div className="logo-container">
            {logoAvailable ? (
              <img
                src="/MCMovers Logo/logo.png"
                alt="MC Movers Logo"
                className="company-logo"
                onError={() => setLogoAvailable(false)}
              />
            ) : (
              <div className="logo-placeholder">
                <div className="logo-shield">
                  <div className="logo-mc">MC</div>
                  <div className="logo-movers">MOVERS</div>
                  <div className="logo-truck">🚛</div>
                  <div className="logo-tagline">My Community Movers</div>
                </div>
              </div>
            )}
          </div>
          <div className="company-text">
            <h1 className="company-name">MC Movers</h1>
            <p className="company-tagline">My Community Movers</p>
          </div>
        </div>
        <div className="contact-info">
          <a className="phone" href="tel:+18008072173">(800) 807-2173</a>
          <a className="email" href="mailto:info@mc-movers.com">info@mc-movers.com</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
