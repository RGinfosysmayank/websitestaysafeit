import React, { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import HireDeveloperForm from '../components/HireDeveloperForm';

const About = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  
  return (
    <div style={{ marginTop: '80px' }}>
      {/* About Hero Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>Who Is StaySafe IT Solutions?</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            If you're curious about who we are, here's our story: StaySafe IT Solutions is a Delhi-based website development 
            company that has been transforming businesses digitally for over 5 years. We're not just another IT company – 
            we're your technology partners committed to your success.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>How Did StaySafe IT Solutions Begin?</h2>
              <p>
                Our journey started in 2019 in Delhi, India, when our founders recognized a gap in the market. Many businesses, 
                especially small and medium enterprises, were struggling to find reliable, affordable, and high-quality 
                technology solutions. We decided to bridge this gap.
              </p>
              <p>
                What began as a small team of passionate developers in Delhi has now grown into a trusted technology partner 
                for over 150+ clients globally. We've completed 200+ successful projects, but what we're most proud of is 
                the long-term relationships we've built with our clients.
              </p>
              <p>
                <strong>The StaySafe Promise:</strong> Every project we undertake comes with our commitment to quality, 
                transparency, and timely delivery. We believe in building solutions that not only meet your current needs 
                but also scale with your business growth.
              </p>
            </div>
            <div>
              <h2>What Drives Us Every Day?</h2>
              <p>
                Our mission is simple: to empower businesses with innovative technology solutions that drive growth, 
                efficiency, and digital transformation. Whether you're a startup in Delhi looking for your first website 
                or a multinational corporation needing complex enterprise solutions, we approach every project with the 
                same level of dedication.
              </p>
              <p>
                <strong>Why Choose Us Over Other Companies in Delhi?</strong> While there are many IT companies in Delhi NCR, 
                what sets StaySafe IT Solutions apart is our client-first approach. We don't just build software; we build 
                relationships. Our 98% client retention rate and 24/7 support commitment are testament to this philosophy.
              </p>
              <div className="mt-2">
                <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Start Your Project With Us
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
            <button onClick={() => setIsQuoteModalOpen(true)} className="btn btn-primary">
              Get Quote
            </button>
            <button onClick={() => setIsHireModalOpen(true)} className="btn btn-success">
              Hire Developers
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuoteForm 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <HireDeveloperForm 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      />
    </div>
  );
};

export default About;
