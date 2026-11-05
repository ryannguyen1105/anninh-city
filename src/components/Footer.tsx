// src/components/Footer.tsx (Đã sửa lỗi Email link)

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    
    const COMPANY_ADDRESS = '855/18 Quang Trung, Phường An Hội Tây, Tp. Hồ Chí Minh';
    const COMPANY_EMAIL = 'anninhkhaiphong@gmail.com'; 
    
    const MAP_EMBED_SRC = 
        `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.8685946546358!2d106.64101488099807!3d10.843549824727829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299b3176d05d%3A0xc77424187a4fc9e!2zODU1IFF1YW5nIFRydW5nLCBBbiBI4buZaSBUw6J5LCBI4buTIENow60gTWluaCA3MjAwMDAsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1793857647435!5m2!1svi!2s`;
    
    const GOOGLE_MAP_EMBED = 
        `<iframe 
            src="${MAP_EMBED_SRC}" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Vị trí Công ty AN NINH KHẢI PHONG "
        ></iframe>`;

    const DIRECTIONS_LINK = 
        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY_ADDRESS)}`;

    return (
        <footer className="main-footer">
            <div className="container footer-grid">
                <div className="footer-col company-info">
                    <h3>AN NINH KHẢI PHONG </h3>
                    <p>Chuyên cung cấp các giải pháp an ninh, bảo vệ chuyên nghiệp và thiết bị giám sát công nghệ cao.</p>
                    <p>Mã số thuế: 0318700067</p>
                    {/* <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61583069896949&mibextid=wwXIfr&rdid=F5ZOiBZZEyxuDInb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17dEK2oCrU%2F%3Fmibextid%3DwwXIfr#" aria-label="Facebook">FB</a> | 
                        <a href="https://zalo.me" aria-label="Zalo">Zalo</a> 
                    </div> */}
                </div>
                <div className="footer-col quick-links">
                    <h4>Liên kết Nhanh</h4>
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/about">Về chúng tôi</a></li>
                        <li><a href="/services">Dịch vụ</a></li>
                        <li><a href="/blog">Tin tức</a></li>
                        <li><a href="/contact">Liên hệ</a></li>
                    </ul>
                </div>
                <div className="footer-col contact-details">
                    <h4>Thông tin Liên hệ</h4>
                    <p>Địa chỉ: {COMPANY_ADDRESS}</p>
                    <p>Hotline: <a href="tel:0907 375 377"> 0907 375 377 </a></p>
                    <p>Email: <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></p>
                </div>
                <div className="footer-col map-embed">
                    <h4>Vị trí của chúng tôi</h4>
                    <div 
                        className="google-map-iframe"
                        dangerouslySetInnerHTML={{ __html: GOOGLE_MAP_EMBED }} 
                    />
                    <a 
                        href={DIRECTIONS_LINK} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="directions-link"
                    >
                        ▶ Nhận chỉ đường
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} AN NINH KHẢI PHONG . All rights reserved. Thiết kế bởi AN NINH KHẢI PHONG  IT.</p>
            </div>
        </footer>
    );
};

export default Footer;