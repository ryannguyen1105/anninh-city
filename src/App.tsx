// src/App.tsx

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/Home';           
import About from './pages/About';         
import Services from './pages/Services';   
import Contact from './pages/Contact';    
import Blog from './pages/Blog';           
import BlogDetail from './pages/BlogDetail'; 
import ServiceDetail from './pages/ServiceDetail'; 


function App() {
  return (
    <Router basename="/">
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/services/:slug" element={<ServiceDetail />} /> 
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1 style={{textAlign: 'center', padding: '100px 0'}}>404 - Trang không tồn tại</h1>} />
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;