// src/pages/Contact.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; 

const companyInfo = {
    name: "CÔNG TY BẢO VỆ AN NINH KHẢI PHONG ",
    hotline: "0907 375 377",
    email: "anninhkhaiphong@gmail.com",
    address: "855/18 Quang Trung, Phường An Hội Tây, Tp. Hồ Chí Minh",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.8685946546358!2d106.64101488099807!3d10.843549824727829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299b3176d05d%3A0xc77424187a4fc9e!2zODU1IFF1YW5nIFRydW5nLCBBbiBI4buZaSBUw6J5LCBI4buTIENow60gTWluaCA3MjAwMDAsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1793857647435!5m2!1svi!2s" 
};

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        content: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Đã gửi thông tin:\nTên: ${formData.name}\nEmail: ${formData.email}\nSĐT: ${formData.phone}\nNội dung: ${formData.content}`);
        setFormData({ name: '', email: '', phone: '', content: '' });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    placeholder="📝 Họ Tên" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    name="email"
                    placeholder="📧 Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <input 
                    type="tel" 
                    name="phone"
                    placeholder="📞 Điện Thoại" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <textarea 
                    name="content"
                    placeholder="💬 Nội Dung" 
                    rows={5}
                    value={formData.content} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit" className="btn-submit">GỬI THÔNG TIN</button>
        </form>
    );
};

const ContactSidebar: React.FC = () => {
    return (
        <div className="contact-sidebar">
            <div className="sidebar-block emergency-cta-block">
                <h3 className="sidebar-title cta-title">🚨 Hỗ Trợ Khẩn Cấp 24/7</h3>
                <p>Nếu bạn gặp vấn đề an ninh nghiêm trọng cần can thiệp ngay lập tức.</p>
                <a href={`tel:${companyInfo.hotline}`} className="btn-emergency-call">
                    GỌI NGAY: {companyInfo.hotline}
                </a>
            </div>
            <div className="sidebar-block working-hours-block">
                <h3 className="sidebar-title">⏰ Giờ Làm Việc</h3>
                <p>Chúng tôi luôn sẵn sàng phục vụ:</p>
                <ul>
                    <li>**Phòng Kinh doanh:** Thứ Hai - Thứ Bảy (8:00 - 17:00)</li>
                    <li>**Bộ phận An ninh:** 24 giờ / 7 ngày (Bao gồm Lễ, Tết)</li>
                </ul>
            </div>
            <div className="sidebar-block quick-links-contact">
                <h3 className="sidebar-title">Liên Kết Nhanh</h3>
                <ul className="quick-link-list">
                    <li><Link to="/services">Dịch Vụ Bảo Vệ</Link></li>
                    <li><Link to="/blog?category=cam-nang">Cẩm Nang An Ninh</Link></li>
                    <li><Link to="/about">Về Chúng Tôi</Link></li>
                </ul>
            </div>
        </div>
    );
};


const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="page-title">LIÊN HỆ VỚI AN NINH KHẢI PHONG </h1>
                
                <div className="contact-grid">
                    <div className="contact-main">
                        
                        <div className="contact-info-section">
                            <div className="contact-intro">
                                <h2>AN NINH KHẢI PHONG  luôn sẵn sàng lắng nghe bạn!</h2>
                                <p>
                                    Nếu bạn có bất kỳ thắc mắc, yêu cầu báo giá hay cần tư vấn chuyên sâu về giải pháp an ninh, vui lòng liên hệ ngay với chúng tôi. Đội ngũ chuyên gia của chúng tôi cam kết phản hồi trong vòng **24 giờ**.
                                </p>
                            </div>
                            
                            <div className="contact-details">
                                <h3 className="details-title">Thông Tin Liên Hệ Chính</h3>
                                <ul>
                                    <li>📞 **Hotline:** <a href={`tel:${companyInfo.hotline}`}>{companyInfo.hotline}</a></li>
                                    <li>📧 **Email:** <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></li>
                                    <li>📍 **Địa chỉ Văn phòng:** {companyInfo.address}</li>
                                </ul>
                            </div>
                            
                            <div className="map-block">
                                <h3 className="details-title">Vị Trí Của Chúng Tôi</h3>
                                <iframe 
                                    src={companyInfo.mapEmbedUrl} 
                                    width="100%" 
                                    height="300" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={true} 
                                    loading="lazy"
                                    title="Google Map Vị Trí AN NINH KHẢI PHONG "
                                />
                            </div>
                        </div>
                        
                        <div className="contact-form-section">
                            <h2 className="form-heading">Gửi Yêu Cầu Tư Vấn</h2>
                            <ContactForm />
                        </div>
                    </div>
                    <ContactSidebar />
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;