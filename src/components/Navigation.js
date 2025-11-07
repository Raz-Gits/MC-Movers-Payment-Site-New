import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ paymentMethods, selectedMethod, onSelectMethod }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'check', label: 'A - CHECK' },
    { id: 'zelle', label: 'B - ZELLE' },
    { id: 'venmo', label: 'C - VENMO' },
    { id: 'creditcard', label: 'D - CREDIT / DEBIT CARD' },
    { id: 'terms', label: 'TERMS AND CONDITIONS - BOL - HHG CONTRACT' },
    { id: 'auto', label: 'Z AUTO TRANSPORT DEPOSITS' }
  ];

  const handleNavClick = (id) => {
    const method = paymentMethods?.find(m => m.id === id);
    if (method && onSelectMethod) {
      onSelectMethod(method);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ul className="nav-list nav-list-top">
          {navItems.slice(0, 5).map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="nav-list nav-list-bottom">
          <li>
            <a 
              href={`#${navItems[5].id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(navItems[5].id);
              }}
            >
              {navItems[5].label}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
