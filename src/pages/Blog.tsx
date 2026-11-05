// src/pages/Blog.tsx

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; 

const PLACEHOLDER_IMAGE = "/images/blog-default.jpg"; 

const blogData = [
    { 
        id: 1, 
        title: "Tuyển dụng bảo vệ an ninh TPHCM: Cơ hội việc làm hấp dẫn 2024", 
        summary: "Thông báo tuyển dụng lớn cho vị trí nhân viên bảo vệ chuyên nghiệp tại khu vực TP.HCM. Mức lương hấp dẫn, chế độ đãi ngộ tốt, và cơ hội thăng tiến rõ ràng.", 
        image: "/images/TT1.png",
        slug: "tuyen-dung-bao-ve-an-ninh-hcm",
        category: "Tin Tức",
        date: "20-11-2025"
    },
    { 
        id: 2, 
        title: "5 Bí quyết lựa chọn công ty bảo vệ uy tín tại Việt Nam", 
        summary: "Cẩm nang giúp doanh nghiệp đánh giá và chọn được đối tác an ninh chuyên nghiệp, đảm bảo an toàn tuyệt đối cho tài sản và con người.", 
        image: "/images/TT2.png",
        slug: "bi-quyet-chon-cong-ty-bao-ve",
        category: "Cẩm Nang",
        date: "15-11-2025"
    },
    { 
        id: 3, 
        title: "Quy trình kiểm soát an ninh hàng không chuẩn quốc tế ICAO", 
        summary: "Phân tích chi tiết các bước kiểm soát an ninh tại sân bay, từ soi chiếu hành lý đến giám sát khu vực cấm, theo tiêu chuẩn quốc tế ICAO.", 
        image: "/images/TT3.png",
        slug: "quy-trinh-an-ninh-icao",
        category: "Cẩm Nang",
        date: "10-11-2025"
    },
    { 
        id: 4, 
        title: "Trách nhiệm pháp lý của công ty bảo vệ và chủ đầu tư", 
        summary: "Phân tích rõ ràng về quyền lợi và trách nhiệm pháp lý của cả hai bên khi ký kết hợp đồng dịch vụ bảo vệ chuyên nghiệp.", 
        image: "/images/TT4.png",
        slug: "trach-nhiem-phap-ly",
        category: "Cẩm Nang",
        date: "25-10-2025"
    },
    { 
        id: 5, 
        title: "Gặp gỡ khách hàng tiêu biểu: Công ty Xây dựng Tầm Cao Mới", 
        summary: "Phỏng vấn và chia sẻ kinh nghiệm hợp tác với một trong những khách hàng lớn của AN NINH KHẢI PHONG  trong lĩnh vực xây dựng.", 
        image: "/images/TT5.png",
        slug: "khach-hang-xay-dung",
        category: "Khách Hàng",
        date: "20-10-2025"
    },
    { 
        id: 6, 
        title: "Kỹ năng sơ cứu cơ bản cho nhân viên bảo vệ tại trường học", 
        summary: "Hướng dẫn chi tiết các bước sơ cứu ban đầu, là kỹ năng bắt buộc đối với lực lượng bảo vệ tại môi trường giáo dục.", 
        image: "/images/TT5.png",
        slug: "so-cuu-cho-bao-ve-truong-hoc",
        category: "Cẩm Nang",
        date: "10-10-2025"
    },
];

const categories = [
    { slug: 'dich-vu-bao-ve', title: 'Dịch Vụ Bảo Vệ', isExternal: true, path: '/services' }, 
    { slug: 'khach-hang', title: 'Khách Hàng' },
    { slug: 'cam-nang', title: 'Cẩm Nang' },
    { slug: 'tin-tuc', title: 'Tin Tức' },
];

const VideoCTABlock: React.FC = () => {
    return (
        <div className="sidebar-block youtube-block video-cta-block">
            <h3 className="sidebar-title youtube-title">📺 Video Cẩm Nang An Ninh</h3>
            <div className="video-placeholder">
                <span className="placeholder-text">Video sắp được cập nhật</span>
                <span className="placeholder-icon">▶️</span>
            </div>
            <p className="video-caption">
                Xem các video phòng chống trộm cắp, mẹo an ninh hữu ích từ chuyên gia của AN NINH KHẢI PHONG.
                <a href="https://www.youtube.com/@AnNinhKhaiPhong" target="_blank" rel="noopener noreferrer" className="youtube-link">
                    Truy cập kênh YouTube của chúng tôi »
                </a>
            </p>
        </div>
    );
};


const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const urlParams = new URLSearchParams(window.location.search);
    const categoryQuery = urlParams.get('category') || 'cam-nang'; 

    const featuredPost = blogData[0]; 

    const filteredPosts = useMemo(() => {
        let filtered = blogData; 
        
     
        const currentCategory = categories.find(c => c.slug === categoryQuery)?.title;
        
     
        const categoryToFilter = currentCategory && currentCategory !== 'Dịch Vụ Bảo Vệ' ? currentCategory : 'Cẩm Nang';
        filtered = blogData.filter(post => post.category === categoryToFilter);


       
        if (searchTerm) {
            filtered = blogData.filter(post => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                post.summary.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
             if (featuredPost && (filtered.findIndex(p => p.id === featuredPost.id) === -1) && (featuredPost.title.toLowerCase().includes(searchTerm.toLowerCase()) || featuredPost.summary.toLowerCase().includes(searchTerm.toLowerCase()))) {
                filtered = [featuredPost, ...filtered];
            }
        }
        
  
        if (!searchTerm && categoryQuery === 'cam-nang' && filtered.findIndex(p => p.id === featuredPost.id) !== -1) {
            filtered = filtered.filter(p => p.id !== featuredPost.id);
        }

        return filtered;
    }, [searchTerm, categoryQuery, featuredPost]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    
    const currentCategoryTitle = categories.find(c => c.slug === categoryQuery)?.title || 'Cẩm Nang';


    return (
        <div className="blog-page">
            <div className="container">
                <h1 className="page-title">DANH MỤC: {currentCategoryTitle.toUpperCase()}</h1>

                <div className="blog-grid">
                    
                    <div className="blog-sidebar">
      
                        <div className="sidebar-block search-block">
                            <h3 className="sidebar-title">Tìm Kiếm Bài Viết</h3>
                            <div className="search-box">
                                <input 
                                    type="text" 
                                    placeholder="Tìm kiếm..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <button className="search-button">🔍</button>
                            </div>
                        </div>
                        <VideoCTABlock />
                        
                    </div>

                    <div className="blog-content">
                        {categoryQuery === 'cam-nang' && !searchTerm && featuredPost && (
                            <div className="featured-post-card">
                                <Link to={`/blog/${featuredPost.slug}`}>
                                    <img src={featuredPost.image} alt={featuredPost.title} className="featured-image" />
                                </Link>
                                <div className="featured-info">
                                    <span className="featured-tag">🔥 Bài Viết Nổi Bật</span>
                                    <Link to={`/blog/${featuredPost.slug}`} className="featured-title-link">
                                        <h2 className="featured-title">{featuredPost.title}</h2>
                                    </Link>
                                    <p className="featured-summary">{featuredPost.summary}</p>
                                    <div className="featured-meta">
                                        <span>{featuredPost.date} | {featuredPost.category}</span>
                                    </div>
                                    <Link to={`/blog/${featuredPost.slug}`} className="read-more-featured">Đọc ngay »</Link>
                                </div>
                            </div>
                        )}
                        {filteredPosts.length > 0 ? (
                            <div className="post-list-grid">
                                {filteredPosts.map(post => (
                                    <div key={post.id} className="post-card">
                                        <Link to={`/blog/${post.slug}`}>
                                            <img src={post.image || PLACEHOLDER_IMAGE} alt={post.title} className="post-image"/>
                                        </Link>
                                        <div className="post-info">
                                            <span className="post-category">
                                                {post.category}
                                            </span>
                                            <Link to={`/blog/${post.slug}`} className="post-title-link">
                                                <h3 className="post-title">{post.title}</h3> 
                                            </Link>
                                            <p className="post-summary">{post.summary}</p>
                                            <div className="post-meta">
                                                <span>Ngày đăng: {post.date}</span>
                                                <Link to={`/blog/${post.slug}`} className="read-more">Đọc thêm »</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-results">Không tìm thấy bài viết nào phù hợp.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;