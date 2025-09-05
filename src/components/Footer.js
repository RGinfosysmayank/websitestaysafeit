import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>StaySafe IT Solutions</h3>
            <p>Leading website development company in India specializing in ReactJS, .NET Core, Java, and mobile app development.</p>
            <p><strong>📍 Based in Delhi, India – Serving Globally</strong></p>
            <p><strong>📞 +91-8800869033</strong></p>
            <p><strong>✉️ sales@staysafeit.com</strong></p>
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
          <p>&copy; 2024 StaySafe IT Solutions. All rights reserved. | High-Quality Web & Mobile Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
