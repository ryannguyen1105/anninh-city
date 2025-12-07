import React from 'react';
import './AboutDetail.css';

const features = [
    'Đội ngũ nhân viên được đào tạo theo tiêu chuẩn quốc tế.',
    'Ứng dụng công nghệ giám sát và báo động tiên tiến nhất.',
    'Phản ứng nhanh chóng, sẵn sàng 24/7.',
    'Giải pháp an ninh tùy chỉnh, phù hợp mọi quy mô.',
];

const AboutDetail: React.FC = () => {
  return (
    <section className="about-detail-section">
      <div className="container about-grid">
        <div className="about-image-col">
            <div className="about-image-placeholder">
                [ẢNH: Đội ngũ hoặc Trụ sở công ty]
            </div>
        </div>
        <div className="about-content-col">
          <span className="subtitle-tag">Về chúng tôi</span>
          <h2>Lý do khách hàng tin tưởng và lựa chọn Anninh City</h2>
          <p>
            Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi không chỉ cung cấp dịch vụ bảo vệ mà còn là đối tác chiến lược, mang đến sự an toàn bền vững và sự yên tâm tuyệt đối cho khách hàng.
          </p>
          
          <ul className="feature-list">
            {features.map((feature, index) => (
                <li key={index}><span className="check-icon">✓</span> {feature}</li>
            ))}
          </ul>

          <a href="/about" className="learn-more-button">
            Khám phá thêm về Anninh City
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutDetail;