import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    // Navigate to services page and scroll to specific section
    window.location.href = `/services#${service.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <>
      <footer className="footer" style={{
        backgroundColor: '#1e293b',
        color: '#ffffff',
        padding: '40px 20px',
        marginTop: '3rem'
      }}>
        <div className="footer-container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Column 1: StaySafe IT Solutions */}
          <div className="footer-column">
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '15px', 
              fontWeight: 'bold',
              color: '#ffffff'
            }}>
              StaySafe IT Solutions
            </h3>
            <p style={{ 
              marginBottom: '15px', 
              lineHeight: '1.6',
              color: '#d1d5db',
              fontSize: '0.9rem'
            }}>
              Leading website development company in Delhi, India, specializing in modern web technologies 
              and mobile app development.
            </p>
            <div style={{ marginTop: '15px' }}>
              <p style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#d1d5db' }}>📍 Delhi, NCR, India</p>
              <p style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#d1d5db' }}>📞 +91-8800869033</p>
              <p style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#d1d5db' }}>✉️ sales@staysafeit.com</p>
              <p style={{ fontSize: '0.9rem', color: '#d1d5db' }}>⭐ 4.8/5 (150+ Client Reviews)</p>
              <a 
                href="https://linkedin.com/company/staysafeit" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#d1d5db', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  display: 'block',
                  marginTop: '10px',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                onMouseOut={(e) => e.target.style.color = '#d1d5db'}
              >
                🔗 Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '15px', 
              fontWeight: 'bold',
              color: '#ffffff'
            }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link 
                  to="/" 
                  style={{ 
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link 
                  to="/about" 
                  style={{ 
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  About
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link 
                  to="/services" 
                  style={{ 
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Services
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link 
                  to="/portfolio" 
                  style={{ 
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Portfolio
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link 
                  to="/pricing" 
                  style={{ 
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Pricing
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link 
                  to="/contact" 
                  style={{ 
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-column">
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '15px', 
              fontWeight: 'bold',
              color: '#ffffff'
            }}>
              Our Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => handleServiceClick('web-development')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Web Development
                </button>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => handleServiceClick('mobile-apps')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Mobile Apps
                </button>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => handleServiceClick('testing-services')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Testing Services
                </button>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => handleServiceClick('ai-consulting')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  AI Consulting
                </button>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => handleServiceClick('digital-transformation')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Digital Transformation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Legal */}
          <div className="footer-column">
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '15px', 
              fontWeight: 'bold',
              color: '#ffffff'
            }}>
              Connect & Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link 
                  to="/blog" 
                  style={{ 
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  📝 Blog
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Privacy Policy
                </button>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.2)', 
          marginTop: '30px', 
          paddingTop: '20px',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#9ca3af'
        }}>
          <p style={{ marginBottom: '5px' }}>
            &copy; 2025 StaySafe IT Solutions Pvt. Ltd. | Delhi, India | All rights reserved.
          </p>
          <p style={{ marginBottom: '5px' }}>
            High-Quality Web & Mobile Solutions | ReactJS • .NET Core • Java • React Native • AI Consulting
          </p>
          <p>
            🏆 200+ Projects Completed | 150+ Happy Clients | 5+ Years Experience | 24/7 Support
          </p>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
    </>
  );
};

export default Footer;
