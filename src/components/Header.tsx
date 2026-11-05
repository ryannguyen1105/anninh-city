// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
// 1. Import Link từ react-router-dom
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const HOTLINE = '0907 375 377';
  const DESKTOP_BREAKPOINT = 1200; 

  const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Dịch vụ', path: '/services' },
    { name: 'Tin tức', path: '/blog' },
    { name: 'Liên hệ', path: '/contact' },
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
        {/* 2. Đổi <a> thành <Link> cho Logo */}
        <Link to="/" className="logo-link">
          <img 
            src="/favicon.png" 
            alt="Anninh Khải Phong Logo" 
            className="site-logo" 
          />
        </Link>

        {/* Nút hotline mở ứng dụng gọi điện thì giữ nguyên <a> href="tel:..." */}
        <a href={`tel:${HOTLINE.replace(/\s+/g, '')}`} className="hotline-button mobile-hotline-visible">
           {HOTLINE}
        </a>

        {/* 3. Đổi <a> thành <Link to="..."> cho Menu Desktop */}
        <nav className="nav-menu desktop-menu">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="nav-item">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a href={`tel:${HOTLINE.replace(/\s+/g, '')}`} className="hotline-button desktop-hotline-only">
            {HOTLINE}
          </a>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </div>

      {/* 4. Đổi <a> thành <Link to="..."> cho Menu Mobile */}
      {isOpen && (
        <nav className="nav-menu mobile-menu">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="nav-item-mobile" 
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;