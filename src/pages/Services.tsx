import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './Services.css';
const allServicesData = [
    { 
        title: "Bảo Vệ Sân Bay", 
        description: "Dịch vụ bảo vệ sân bay, đảm bảo an ninh, quy trình nghiêm ngặt.",
        link: "/services/bao-ve-san-bay" 
    },
    { 
        title: "Bảo Vệ Khu Dân Cư", 
        description: "An ninh là yếu tố hàng đầu mang lại sự an tâm cho cư dân.",
        link: "/services/bao-ve-khu-dan-cu" 
    },
    { 
        title: "Bảo Vệ Khu Du Lịch, Resort", 
        description: "An ninh yếu tố then chốt, mang lại trải nghiệm hoàn hảo cho khách.",
        link: "/services/bao-ve-du-lich-resort" 
    },
    { 
        title: "Bảo Vệ Toà Nhà Văn Phòng", 
        description: "Giải pháp an ninh chuyên nghiệp 24/7, uy tín, an toàn.",
        link: "/services/bao-ve-toa-nha-van-phong" 
    },
    { 
        title: "Bảo Vệ Nhà Hàng, Khách Sạn", 
        description: "Đảm bảo môi trường an toàn, chuyên nghiệp cho khách hàng và nhân viên.",
        link: "/services/bao-ve-nha-hang-khach-san" 
    },
    { 
        title: "Bảo Vệ Ngân Hàng, Tiệm Vàng", 
        description: "Đảm bảo an ninh nghiêm ngặt cho ngân hàng và tiệm vàng, bảo vệ tài sản và con người.",
        link: "/services/bao-ve-ngan-hang-tiem-vang" 
    },
    { 
        title: "Bảo Vệ Kho Bãi, Nhà Xưởng", 
        description: "Quản lý ra vào nghiêm ngặt, bảo vệ tài sản và máy móc tại kho bãi – nhà xưởng.",
        link: "/services/bao-ve-kho-bai-nha-xuong" 
    },
    { 
        title: "Bảo Vệ Trường Học", 
        description: "Bảo vệ an toàn cho học sinh – giáo viên, tạo môi trường học tập lành mạnh.",
        link: "/services/bao-ve-truong-hoc" 
    },
    { 
        title: "Bảo Vệ Mục Tiêu, Quán Ăn, Cafe", 
        description: "Bảo vệ tài sản, khách hàng và nhân viên tại quán ăn – café một cách chuyên nghiệp.",
        link: "/services/bao-ve-quan-an-cafe" 
    },
];
const getServiceImage = (title: string) => {
    if (title.includes("Sân Bay")) {
        return "/images/DV 1.png"; 
    }
    if (title.includes("Khu Dân Cư")) {
        return "/images/DV2.png"; 
    }
    if (title.includes("Du Lịch")) {
        return "/images/DV3.png"; 
    }
    if (title.includes("Toà Nhà")) {
        return "/images/DV4.png";
    }
    if (title.includes("Nhà Hàng")) {
        return "/images/DV5.png"; 
    }
    if (title.includes("Ngân Hàng")) {
        return "/images/DV6.png"; 
    }
    if (title.includes("Kho Bãi")) {
        return "/images/DV7.png"; 
    }
    if (title.includes("Trường Học")) {
        return "/images/DV8.png"; 
    }
    if (title.includes("Quán Ăn")) {
        return "/images/DV9.png"; 
    }
    return "/images/blog-default.jpg"; 
};


const Services: React.FC = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredServices, setFilteredServices] = useState(allServicesData);
    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
        
        if (lowerCaseSearchTerm === '') {
            setFilteredServices(allServicesData);
            return;
        }

        const results = allServicesData.filter(service => 
            service.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            service.description.toLowerCase().includes(lowerCaseSearchTerm)
        );
        setFilteredServices(results);
    }, [searchTerm]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); 
    };

  return (
    <div className="services-page">
      <section className="page-heading-section simplified-heading no-breadcrumb">
        <div className="container">
          <h1 className="page-title desktop-only">DANH MỤC: DỊCH VỤ BẢO VỆ</h1>
        </div>
      </section>
      <section className="services-content-section">
        <div className="container services-main-grid">
          <div className="services-sidebar">
            <div className="sidebar-block search-block">
              <h3 className="sidebar-title">Tìm Kiếm Dịch Vụ</h3>
              <div className="search-input-group">
                <input 
                    type="text" 
                    placeholder="Tìm dịch vụ theo tên..." 
                    className="search-input" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="search-button" onClick={handleSearchClick}>
                  <span role="img" aria-label="search-icon">🔍</span>
                </button>
              </div>
            </div>
            <div className="sidebar-block cta-block-services">
                <h3 className="sidebar-title cta-title">Tư Vấn & Báo Giá</h3>
                <p>Bạn cần giải pháp an ninh tối ưu cho dự án của mình?</p>
                <a href="tel:0909773302" className="btn-cta-sidebar">GỌI NGAY: 0909.7733.02</a>
                <Link to="/contact" className="btn-cta-secondary">Yêu Cầu Báo Giá Chi Tiết</Link>
            </div>
          </div>
          <div className="services-grid-container">
            <h2 className="section-title mobile-only">DANH MỤC: DỊCH VỤ BẢO VỆ</h2>
            <div className="services-grid-3x3">
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <Link to={service.link} className="service-card" key={index}> 
                    <img 
                      src={getServiceImage(service.title)} 
                      alt={service.title} 
                      className="card-image" 
                    />
                    <div className="card-content">
                      <h4 className="card-title">{service.title}</h4>
                      <p className="card-description">{service.description}</p>
                      <span className="card-link">Xem chi tiết &raquo;</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="no-results-message">Không tìm thấy dịch vụ nào phù hợp với từ khóa **"{searchTerm}"**.</p>
              )}
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default Services;