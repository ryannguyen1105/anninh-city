import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    
    const COMPANY_ADDRESS = '38 Cộng Hoà, Phường Tân Sơn Nhất, Thành phố Hồ Chí Minh, Việt Nam';
    const COMPANY_EMAIL = 'baove.anninhcity@gmail.com'; 
    
    const MAP_EMBED_SRC = 
        `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4194.698591347034!2d106.65738431089633!3d10.801012989304864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752930bfbb6657%3A0x2a871270fed27d69!2zMzggQ-G7mW5nIEjDsmEsIFBoxrDhu51uZyA0LCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1764232415840!5m2!1svi!2s`;
    
    const GOOGLE_MAP_EMBED = 
        `<iframe 
            src="${MAP_EMBED_SRC}" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Vị trí Công ty Anninh City"
        ></iframe>`;

    const DIRECTIONS_LINK = 
        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY_ADDRESS)}`;

    return (
        <footer className="main-footer">
            <div className="container footer-grid">
                <div className="footer-col company-info">
                    <h3>AN NINH CITY</h3>
                    <p>Chuyên cung cấp các giải pháp an ninh, bảo vệ chuyên nghiệp và thiết bị giám sát công nghệ cao.</p>
                    <p>Mã số thuế: 0319232661</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61583069896949&mibextid=wwXIfr&rdid=F5ZOiBZZEyxuDInb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17dEK2oCrU%2F%3Fmibextid%3DwwXIfr#" aria-label="Facebook">FB</a> | 
                        <a href="https://zalo.me" aria-label="Zalo">Zalo</a> 
                    </div>
                </div>
                <div className="footer-col quick-links">
                    <h4>Liên kết Nhanh</h4>
                    <ul>
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/about">Về chúng tôi</Link></li>
                        <li><Link to="/services">Dịch vụ</Link></li>
                        <li><Link to="/blog">Tin tức</Link></li>
                        <li><Link to="/contact">Liên hệ</Link></li>
                    </ul>
                </div>
                <div className="footer-col contact-details">
                    <h4>Thông tin Liên hệ</h4>
                    <p>Địa chỉ: {COMPANY_ADDRESS}</p>
                    <p>Hotline: <a href="tel:0909773302">0909773302 </a></p>
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
                <p>© {new Date().getFullYear()} Anninh City. All rights reserved. Thiết kế bởi Anninh City IT.</p>
            </div>
        </footer>
    );
};

export default Footer;