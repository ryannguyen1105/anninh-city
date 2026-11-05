// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import './Header.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const HOTLINE = '0907 375 377';
  const DESKTOP_BREAKPOINT = 1200; 

  const navItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '/about' },
    { name: 'Dịch vụ', href: '/services' },
    { name: 'Tin tức', href: '/blog' },
    { name: 'Liên hệ', href: '/contact' },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > DESKTOP_BREAKPOINT && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]); 

  return (
    <header className="main-header">
      <div className="header-container">
        <a href="/" className="logo-link">
          <img 
            src="/favicon.png" 
            alt="Anninh Khải Phong Logo" 
            className="site-logo" 
          />
        </a>
        <a href={`tel:${HOTLINE}`} className="hotline-button mobile-hotline-visible">
           {HOTLINE}
        </a>
        <nav className="nav-menu desktop-menu">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-item">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href={`tel:${HOTLINE}`} className="hotline-button desktop-hotline-only">
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
            <a key={item.name} href={item.href} className="nav-item-mobile" onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;