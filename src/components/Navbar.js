import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="flex-between">
            <Link to="/" className="navbar-brand">
              StaySafe IT Solutions
            </Link>
            
            {/* Mobile menu button */}
            {isMobile && (
              <button 
                onClick={toggleMenu}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#2c3e50'
                }}
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            )}
            
            {/* Desktop navigation */}
            {!isMobile && (
              <ul className="navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            )}
          </div>
          
          {/* Mobile navigation */}
          {isMobile && isMenuOpen && (
            <ul 
              className="navbar-nav"
              style={{
                flexDirection: 'column',
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                padding: '20px',
                zIndex: 1000
              }}
            >
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
              <li><Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
              <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </div>
      </nav>
      
      <style jsx>{`
        .navbar-nav li {
          margin-bottom: 10px;
        }
        
        .navbar-nav a {
          display: block;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        @media (min-width: 768px) {
          .navbar-nav {
            flex-direction: row !important;
            position: static !important;
            background-color: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          
          .navbar-nav li {
            margin-bottom: 0;
            margin-left: 2rem;
          }
          
          .navbar-nav a {
            border-bottom: none;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
