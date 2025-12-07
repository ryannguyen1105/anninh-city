import React from 'react';
import './Services.css';

const serviceData = [
  {
    icon: '✨', 
    title: 'Bảo vệ chuyên nghiệp',
    description: 'Đội ngũ được đào tạo bài bản, nghiệp vụ vững vàng, đảm bảo an toàn tuyệt đối.',
  },
  {
    icon: '💡',
    title: 'Tuần tra & Giám sát khu vực',
    description: 'Đội tuần tra lưu động kiểm tra định kỳ ngày/đêm, phát hiện và ngăn chặn nguy cơ mất an ninh kịp thời.',
  },
  {
    icon: '🔔',
    title: 'Kiểm soát ra vào',
    description: 'Dịch vụ kiểm soát người và phương tiện vào–ra, bảo vệ tài sản và duy trì trật tự cho doanh nghiệp, tòa nhà và khu dân cư.',
  },
  {
    icon: '🛡️',
    title: 'Phản ứng nhanh chóng',
    description: 'Đội cơ động luôn sẵn sàng can thiệp khẩn cấp trong mọi tình huống.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Dịch vụ & Lợi ích An ninh Cốt lõi</h2>
        <p className="section-subtitle">Chúng tôi cam kết mang lại sự an tâm tuyệt đối cho khách hàng.</p>
        
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/services" className="read-more">Xem chi tiết &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;