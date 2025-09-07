import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>StaySafe IT Solutions - Delhi, India</h3>
            <p>Leading website development company in Delhi, India, specializing in ReactJS, .NET Core, Java, and mobile app development. Serving clients globally with 5+ years of experience and 200+ successful projects.</p>
            <p><strong>🏢 Company:</strong> StaySafe IT Solutions Pvt. Ltd.</p>
            <p><strong>📍 Location:</strong> Based in Delhi, NCR, India – Serving Globally</p>
            <p><strong>📞 Phone:</strong> +91-8800869033 (Available 24/7)</p>
            <p><strong>✉️ Email:</strong> sales@staysafeit.com</p>
            <p><strong>💼 LinkedIn:</strong> <a href="https://linkedin.com/company/staysafeit" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>Connect with us</a></p>
            <p><strong>⭐ Rating:</strong> 4.8/5 (150+ Client Reviews)</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer">Web Development</a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer">Mobile Apps</a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer">Testing Services</a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer">AI Consulting</a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer">Digital Transformation</a>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer">Sitemap</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 StaySafe IT Solutions Pvt. Ltd. | Delhi, India | All rights reserved.</p>
          <p>High-Quality Web & Mobile Solutions | ReactJS • .NET Core • Java • React Native • AI Consulting</p>
          <p>🏆 200+ Projects Completed | 150+ Happy Clients | 5+ Years Experience | 24/7 Support</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
