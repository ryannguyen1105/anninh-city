// src/components/Header.tsx

import React, { useState } from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const HOTLINE = '0909.7733.02';

  const navItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '/about' },
    { name: 'Dịch vụ', href: '/services' },
    { name: 'Tin tức', href: '/blog' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  return (
    <header className="main-header">
      <div className="header-container">
        <a href="/" className="logo-link">
          <img 
            src="/favicon.png" 
            alt="Anninh City Logo" 
            className="site-logo" 
          />
        </a>
        <nav className="nav-menu desktop-menu">
          {navItems.map((item) => (
            <Link key={item.name} to={item.href} className="nav-item">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a href={`tel:${HOTLINE}`} className="hotline-button">
            {HOTLINE}
          </a>
          
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="nav-menu mobile-menu">
          {navItems.map((item) => (
            <Link key={item.name} to={item.href} className="nav-item-mobile" onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}
          <a href={`tel:${HOTLINE}`} className="hotline-button-mobile" onClick={() => setIsOpen(false)}>
            Gọi ngay: {HOTLINE}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;