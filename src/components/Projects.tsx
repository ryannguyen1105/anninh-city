import React from 'react';
import './Projects.css';

const projects = [
    { title: 'Dự án Lotte Mart', image: '[Ảnh 1]', category: 'Bảo vệ Mục tiêu cố định' },
    { title: 'Hệ thống Camera KCN', image: '[Ảnh 2]', category: 'Camera Giám sát' },
    { title: 'Bảo vệ Yếu nhân VIP', image: '[Ảnh 3]', category: 'Bảo vệ Cá nhân' },
    { title: 'Lắp đặt Báo trộm gia đình', image: '[Ảnh 4]', category: 'Thiết bị An ninh' },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Dự án & Khách hàng Tiêu biểu</h2>
        <p className="section-subtitle">Minh chứng cho chất lượng và uy tín của dịch vụ Anninh City.</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-placeholder">{project.image}</div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more-container">
            <a href="/projects" className="view-more-button">
                Xem Thêm Tất Cả Dự Án
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;