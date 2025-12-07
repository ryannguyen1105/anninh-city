import React from 'react';
import './Home.css';
import Services from '../components/Services';
import ContactStrip from '../components/ContactStrip';
import AboutDetail from '../components/AboutDetail'; 
import Projects from '../components/Projects'; 
import ImageSlider from '../components/ImageSlider';

const HERO_BANNER_URL = '/images/BAOVE1.png'; 

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section 
        className="hero-section hero-full-banner"
        style={{
          backgroundImage: `url(${HERO_BANNER_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-overlay"></div> 
        <div className="hero-content-wrapper">
            <div className="hero-content">
                <h1>
                    CÔNG TY TNHH BẢO VỆ
                    <br/>
                    AN NINH CITY
                </h1>
                <p className="hero-subtitle">
                    Chúng tôi cung cấp dịch vụ bảo vệ chuyên nghiệp, được đào tạo bài bản và giàu kinh nghiệm, cam kết đảm bảo an ninh và sự an toàn tuyệt đối cho doanh nghiệp và gia đình, hoạt động 24/7 để bạn hoàn toàn yên tâm.
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