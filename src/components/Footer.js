import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [logoAvailable, setLogoAvailable] = useState(true);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="mc-movers-logo">
            {logoAvailable ? (
              <img
                src="/MCMovers Logo/logo.png"
                alt="MC Movers Logo"
                className="footer-logo-img"
                onError={() => setLogoAvailable(false)}
              />
            ) : (
              <div className="footer-logo-shield">
                <div className="footer-logo-mc">MC</div>
                <div className="footer-logo-movers">MOVERS</div>
                <div className="footer-logo-truck">🚛</div>
                <div className="footer-logo-tagline">My Community Movers</div>
              </div>
            )}
          </div>
          <p className="footer-tagline">Your trusted moving partner</p>
        </div>
        
        <div className="footer-info">
          <div className="compliance-info">
            <h4>Licensed & Insured</h4>
            <p>DOT #1234567 | MC #9876543</p>
            <p>Fully Licensed in All 50 States</p>
          </div>
          
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p className="contact-line">📞 <a href="tel:+18008072173" className="contact-link">(800) 807-2173</a> | <span className="email-group">✉️ <a href="mailto:info@mc-movers.com" className="contact-link">info@mc-movers.com</a></span> | <span className="location-group">📍 Based in Miami, Serving Nationwide</span></p>
          </div>
          
          <div className="legal-links">
            <h4>Legal</h4>
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#insurance">Insurance Coverage</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-text">SSL Secured</span>
            </div>
            <div className="trust-badge">
              <span className="badge-text">Licensed</span>
            </div>
            <div className="trust-badge">
              <span className="badge-text">4.9/5 Rating</span>
            </div>
          </div>
          <p className="copyright">© 2025 MC Movers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
