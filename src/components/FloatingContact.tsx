import React from 'react';
import './FloatingContact.css'; // File CSS đi kèm

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      {/* Nút Zalo */}
      <a 
        href="https://zalo.me/0907375377" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="contact-icon zalo-icon"
        title="Chat Zalo"
      >
        <span className="icon-text">Zalo</span>
      </a>

      {/* Nút Gọi Hotline */}
      <a 
        href="tel:0907375377" 
        className="contact-icon phone-icon"
        title="Gọi ngay"
      >
        <div className="hotline-badge">
          <span className="hotline-title">Hotline (24/7)</span>
          <span className="hotline-number">0907 375 377</span>
        </div>
        <div className="phone-circle">
          <i className="fa fa-phone">📞</i>
        </div>
      </a>
    </div>
  );
};

export default FloatingContact;