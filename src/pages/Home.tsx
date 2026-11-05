// src/pages/Home.tsx

import React from "react";
import "./Home.css";
import Services from "../components/Services";
import ContactStrip from "../components/ContactStrip";
import AboutDetail from "../components/AboutDetail";
import Projects from "../components/Projects";
import ImageSlider from "../components/ImageSlider";

const HERO_BANNER_URL = "/images/BAOVE1.png";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section
        className="hero-section hero-full-banner"
        style={{
          backgroundImage: `url(${HERO_BANNER_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1>
              Công Ty Bảo Vệ Khải Phong
              <h2 className="hero-tagline">Uy Tín – Chuyên Nghiệp – Tận Tâm</h2>
            </h1>
            <p className="hero-subtitle">
              Bạn đang cần thuê bảo vệ cho công ty, nhà xưởng, cửa hàng hay sự
              kiện? Bảo Vệ Khải Phong cung cấp giải pháp an ninh chuyên nghiệp,
              nhân sự trách nhiệm, chi phí hợp lý. Liên hệ ngay để nhận tư vấn
              và báo giá!
            </p>
            <div className="hero-actions">
              <a href="/contact" className="cta-primary">
                Yêu cầu Báo giá
              </a>
              <a href="/services" className="cta-secondary-white">
                Xem Dịch vụ
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <ImageSlider />
          </div>
        </div>
      </section>
      <Services />
    </div>
  );
};

export default Home;
