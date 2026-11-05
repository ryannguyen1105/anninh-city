// src/pages/About.tsx 

import React from 'react';
import './About.css'; 

const whyChooseUsNew = [
    {
      title: "Tính chuyên nghiệp",
      content: "Đội ngũ nhân viên bảo vệ được công ty bảo vệ AN NINH KHẢI PHONG  chọn lọc kỹ lưỡng, ưu tiên chọn bộ đội, công an xuất ngũ có kinh nghiệm trong lĩnh vực an ninh. Ngoài ra với +1000 nhân viên bảo vệ ưu tú và hơn 20 chi nhánh trên toàn quốc, chúng tôi tự tin khẳng định vị thế điểm mạnh của mình.",
      icon: "🎖️" 
    },
    {
      title: "Tính chất lượng",
      content: "Không những đội ngũ nhân viên ưu tú, chúng tôi còn có hệ thống quản lý chất lượng, kèm với những trang thiết bị hiện đại theo tiêu chuẩn ISO 9001:2015. Nhằm đảm bảo tính an toàn hiệu quả nhất trong quá trình hợp tác với khách hàng.",
      icon: "⭐"
    },
    {
      title: "Tính linh hoạt",
      content: "Bảng giá dịch vụ bảo vệ tại Công ty dịch vụ bảo vệ AN NINH KHẢI PHONG  được công khai minh bạch cho khách hàng. Với mức chi phí cạnh tranh trên thị trường từ sơ cấp đến cao cấp đảm bảo đáp ứng được mọi nhu cầu của khách hàng.",
      icon: "💡"
    },
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-heading-section">
        <div className="container">
          <h1>CÔNG TY TNHH BẢO VỆ AN NINH KHẢI PHONG </h1>
        </div>
      </section>
      <section className="about-main-content centered-content-section"> 
        <div className="container about-centered-grid">
          
          <div className="about-text-column centered-column">
            <h2 className="section-title">Về Chúng Tôi</h2>
            <p className="intro-text">
              Công ty Bảo vệ AN NINH KHẢI PHONG  được sáng lập do các nhà lãnh đạo từng là các cựu chiến sĩ trong quân đội – công an, có nhiều năm kinh nghiệm trong lĩnh vực bảo vệ an ninh. AN NINH KHẢI PHONG  tự hào là một trong những top công ty tiên phong trong lĩnh vực cung cấp các dịch vụ bảo vệ an ninh như: bảo vệ nhà máy – nhà xưởng – khu công nghiệp, tòa nhà – văn phòng công ty, công trình xây dựng, trường học bệnh viện, nhà hàng khách sạn resort,… được nhiều khách hàng đánh giá uy tín và chuyên nghiệp hiện nay.
            </p>

            <h2 className="section-title services-benefits-title">Lợi ích dịch vụ bảo vệ AN NINH KHẢI PHONG </h2>
            <div className="benefits-grid centered-benefits-grid"> 
              <div className="benefit-item">
                <span className="bullet-icon">●</span> Đội ngũ bảo vệ kỷ luật
              </div>
              <div className="benefit-item">
                <span className="bullet-icon">●</span> Tác phong chuyên nghiệp
              </div>
              <div className="benefit-item">
                <span className="bullet-icon">●</span> Trách nhiệm an ninh hàng đầu
              </div>
              <div className="benefit-item">
                <span className="bullet-icon">●</span> Trung thực mọi hoạt động
              </div>
              <div className="benefit-item">
                <span className="bullet-icon">●</span> Đồng cảm xử lý tình huống
              </div>
              <div className="benefit-item">
                <span className="bullet-icon">●</span> Thông minh nhạy bén trong công việc
              </div>
            </div>

            <div className="about-cta-buttons">
              <a href="tel:0907 375 377" className="cta-primary-blue">Gọi Ngay</a>
              <a href="/contact" className="cta-secondary-outline">Liên Hệ</a>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us-section">
        <div className="container">
          <h2 className="section-title">Vì Sao Chọn Chúng Tôi</h2>
          <div className="new-value-proposition-grid">
             
            <p className="main-new-statement">
                Để đạt được thành tích nhiều năm liền trong quá trình hoạt động, Công ty bảo vệ AN NINH KHẢI PHONG  luôn tự tin mang đến cho quý khách hàng:
            </p>

            {whyChooseUsNew.map((item, index) => (
                <div key={index} className="value-item">
                    <h3 className="value-title">
                        <span className="value-icon">{item.icon}</span> {item.title}
                    </h3>
                    <p className="value-content">{item.content}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
      <section className="commitment-section">
        <div className="container commitment-grid">
            
            <div className="commitment-text-column">
                <h2 className="section-title blue-title centered-title">LUÔN LẤY LỢI ÍCH KHÁCH HÀNG ĐỂ PHÁT TRIỂN</h2>

                <h3 className="commitment-sub-title">TÍNH AN TOÀN:</h3>
                <ul className="commitment-list">
                    <li>Đảm bảo an ninh cho khách hàng, tài sản, cơ sở vật chất.</li>
                    <li>Kỹ lưỡng, nhanh chóng, kịp thời các tình huống phát sinh.</li>
                </ul>
                
                <h3 className="commitment-sub-title">ĐỘI NGŨ NHÂN SỰ:</h3>
                <ul className="commitment-list">
                    <li>Đội ngũ bảo vệ được đào tạo bài bản về kỹ năng nghiệp vụ, PCCC, sơ cứu y tế.</li>
                    <li>Thái độ làm việc: tận tâm, trung thực, có trách nhiệm.</li>
                </ul>

                <h3 className="commitment-sub-title">UY TÍN VÀ TRÁCH NHIỆM:</h3>
                <ul className="commitment-list">
                    <li>Cam kết bồi thường thiệt hại nếu lỗi thuộc về công ty bảo vệ.</li>
                    <li>Hợp tác minh bạch, hợp đồng rõ ràng, không phát sinh chi phí ẩn.</li>
                </ul>

                <h3 className="commitment-sub-title">DỊCH VỤ 24/7:</h3>
                <ul className="commitment-list">
                    <li>Hỗ trợ khách hàng mọi lúc, kể cả ngày lễ, Tết. Đảm bảo an ninh cho khách hàng, tài sản, cơ sở vật chất.</li>
                    <li>Giám sát, phản ứng nhanh chóng khi có sự cố.</li>
                </ul>
                
                <h3 className="commitment-sub-title">GIẢI PHÁP LINH HOẠT:</h3>
                <ul className="commitment-list">
                    <li>Cung cấp dịch vụ bảo vệ ưu phù hợp với từng nhu cầu của Khách hàng.</li>
                    <li>Có phương án bảo vệ đặc thù cho doanh nghiệp, nhà máy, sự kiện, cá nhân.</li>
                </ul>
            </div>
            <div className="commitment-image-column">
                <img 
                    src="/images/BAOVE2.png" 
                    alt="Hình ảnh đội ngũ bảo vệ chuyên nghiệp" 
                    className="commitment-main-image" 
                />
            </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;