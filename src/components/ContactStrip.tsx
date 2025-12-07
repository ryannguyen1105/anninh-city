import React from 'react';
import './ContactStrip.css';

interface ContactStripProps {
    isLargeCta?: boolean; 
}

const ContactStrip: React.FC<ContactStripProps> = ({ isLargeCta = false }) => {
  return (
    <section className={`contact-strip ${isLargeCta ? 'large-cta-section' : ''}`}>
      <div className="container strip-content">
        <h2>
            {isLargeCta 
                ? 'Đăng ký ngay để nhận tư vấn miễn phí 24/7'
                : 'Bạn đang cần giải pháp an ninh tối ưu?'}
        </h2>
        <p>
            {isLargeCta
                ? 'Đội ngũ chuyên gia của chúng tôi sẽ gọi lại cho bạn trong vòng 30 phút.'
                : 'Liên hệ ngay để nhận được sự tư vấn chuyên nghiệp và báo giá tốt nhất.'}
        </p>
        <a 
            href="/contact" 
            className={`contact-strip-cta ${isLargeCta ? 'large-cta-button' : ''}`}
        >
          {isLargeCta ? 'ĐĂNG KÝ TƯ VẤN' : 'GỌI TƯ VẤN NGAY (090xxxxxxx)'}
        </a>
      </div>
    </section>
  );
};

export default ContactStrip;