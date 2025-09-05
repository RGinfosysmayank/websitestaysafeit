import React from 'react';

const About = () => {
  return (
    <div style={{ marginTop: '80px' }}>
      {/* About Hero Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>About StaySafe IT Solutions</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            Leading website development company in India with 5+ years of experience in delivering 
            high-quality web and mobile solutions to businesses worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Our Story</h2>
              <p>
                Founded with a vision to bridge the technology gap for businesses, StaySafe IT Solutions 
                has grown from a small startup to a trusted technology partner for over 150+ clients globally. 
                Based in Delhi, India, we specialize in cutting-edge web and mobile development solutions.
              </p>
              <p>
                Our journey began with a simple mission: to provide high-quality, cost-effective IT solutions 
                that help businesses thrive in the digital age. Today, we're proud to have completed 200+ 
                successful projects spanning various industries and technologies.
              </p>
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses with innovative technology solutions that drive growth, efficiency, 
                and digital transformation. We believe in creating long-term partnerships with our clients 
                by delivering exceptional value through our expertise.
              </p>
              <div className="mt-2">
                <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Our Expertise</h2>
            <p>Skilled professionals with deep expertise in modern technologies</p>
          </div>
          <div className="grid grid-4">
            <div className="card text-center">
              <div className="service-icon">⚛️</div>
              <h3>Frontend</h3>
              <p>ReactJS, Angular, Vue.js, HTML5, CSS3, JavaScript</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">⚙️</div>
              <h3>Backend</h3>
              <p>.NET Core, Java, Node.js, Python, PHP</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">📱</div>
              <h3>Mobile</h3>
              <p>React Native, Flutter, iOS, Android</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">☁️</div>
              <h3>Cloud</h3>
              <p>AWS, Azure, DevOps, Docker, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Our Core Values</h2>
          </div>
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="service-icon">🎯</div>
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every project is built with attention to detail and industry best practices.</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🤝</div>
              <h3>Client Partnership</h3>
              <p>We believe in building long-term relationships with our clients through transparent communication and reliable delivery.</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-3">
            <h2 style={{ color: 'white' }}>Our Achievements</h2>
          </div>
          <div className="grid grid-4">
            <div className="text-center">
              <div className="stat-number" style={{ color: '#667eea' }}>200+</div>
              <div className="stat-label" style={{ color: 'white' }}>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="stat-number" style={{ color: '#667eea' }}>150+</div>
              <div className="stat-label" style={{ color: 'white' }}>Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="stat-number" style={{ color: '#667eea' }}>5+</div>
              <div className="stat-label" style={{ color: 'white' }}>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="stat-number" style={{ color: '#667eea' }}>24/7</div>
              <div className="stat-label" style={{ color: 'white' }}>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss your project and see how we can help you achieve your goals.</p>
          <div className="mt-2">
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get Quote
            </a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-success">
              Hire Developers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
