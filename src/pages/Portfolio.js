import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      technology: 'ReactJS + .NET Core',
      description: 'Complete e-commerce solution with payment gateway integration, inventory management, and admin dashboard.',
      features: ['Payment Integration', 'Inventory Management', 'User Authentication', 'Admin Panel'],
      category: 'Web Development'
    },
    {
      title: 'Mobile Banking App',
      technology: 'React Native',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction processing.',
      features: ['Biometric Security', 'Real-time Transactions', 'Account Management', 'Bill Payments'],
      category: 'Mobile Development'
    },
    {
      title: 'Healthcare Management System',
      technology: 'MERN Stack',
      description: 'Comprehensive healthcare management system for hospitals with patient records and appointment scheduling.',
      features: ['Patient Records', 'Appointment Booking', 'Doctor Portal', 'Reports & Analytics'],
      category: 'Web Development'
    },
    {
      title: 'Real Estate Portal',
      technology: 'Angular + Java',
      description: 'Property listing and management platform with advanced search and virtual tour capabilities.',
      features: ['Property Listings', 'Advanced Search', 'Virtual Tours', 'Agent Management'],
      category: 'Web Development'
    },
    {
      title: 'Food Delivery App',
      technology: 'Flutter',
      description: 'Cross-platform food delivery application with real-time tracking and multiple payment options.',
      features: ['Real-time Tracking', 'Multiple Payments', 'Restaurant Management', 'Order History'],
      category: 'Mobile Development'
    },
    {
      title: 'AI Chatbot Platform',
      technology: 'Python + AI/ML',
      description: 'Intelligent chatbot platform with natural language processing and automated customer support.',
      features: ['NLP Processing', 'Auto Responses', 'Analytics Dashboard', 'Multi-channel Support'],
      category: 'AI Development'
    }
  ];

  const clientLogos = [
    'TechStart Solutions',
    'Digital Innovations',
    'Global Enterprises',
    'Healthcare Plus',
    'EduTech Systems',
    'FinanceFlow',
    'RetailMax',
    'StartupHub'
  ];

  return (
    <div style={{ marginTop: '80px' }}>
      {/* Portfolio Hero Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>What Has StaySafe IT Solutions Built?</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            Wondering about our work quality and experience? Here's a showcase of successful projects we've delivered 
            for clients worldwide. From simple websites to complex enterprise applications, StaySafe IT Solutions, 
            based in Delhi, India, has proven expertise across various industries and technologies.
          </p>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="section">
        <div className="container">
          <div className="stats">
            <div className="grid grid-4">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Industries Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Featured Projects</h2>
            <p>Some of our most successful and innovative project deliveries</p>
          </div>
          <div className="grid grid-2">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ 
                    background: '#667eea', 
                    color: 'white', 
                    padding: '5px 15px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {project.category}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '10px' }}>
                  {project.technology}
                </p>
                <p>{project.description}</p>
                <div style={{ marginTop: '20px' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '10px' }}>Key Features:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ marginBottom: '5px', color: '#666' }}>
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a 
                    href="https://forms.gle/AyAqUqRSrLDfkzDfA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Industries We Serve</h2>
            <p>Our expertise spans across multiple industry verticals</p>
          </div>
          <div className="grid grid-4">
            <div className="card text-center">
              <div className="service-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Hospital management, telemedicine, patient portals</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🛒</div>
              <h3>E-Commerce</h3>
              <p>Online stores, marketplaces, payment solutions</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🏦</div>
              <h3>Finance</h3>
              <p>Banking apps, fintech solutions, trading platforms</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🎓</div>
              <h3>Education</h3>
              <p>E-learning platforms, LMS, educational apps</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🏠</div>
              <h3>Real Estate</h3>
              <p>Property portals, CRM systems, virtual tours</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🚚</div>
              <h3>Logistics</h3>
              <p>Supply chain, tracking systems, delivery apps</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🍕</div>
              <h3>Food & Beverage</h3>
              <p>Restaurant apps, food delivery, POS systems</p>
            </div>
            <div className="card text-center">
              <div className="service-icon">🚗</div>
              <h3>Automotive</h3>
              <p>Fleet management, booking systems, service apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-3">
            <h2 style={{ color: 'white' }}>Trusted by Leading Companies</h2>
            <p style={{ color: 'white' }}>We've had the privilege of working with amazing clients</p>
          </div>
          <div className="grid grid-4">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center" style={{ padding: '20px' }}>
                <div style={{ 
                  background: 'white', 
                  padding: '20px', 
                  borderRadius: '10px',
                  fontWeight: '600',
                  color: '#2c3e50'
                }}>
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Technologies We Master</h2>
            <p>Cutting-edge technologies powering our successful projects</p>
          </div>
          <div className="grid grid-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
            {[
              'ReactJS', '.NET Core', 'Java', 'React Native', 'Flutter', 'Angular',
              'Node.js', 'Python', 'AWS', 'Azure', 'MongoDB', 'SQL Server'
            ].map((tech, index) => (
              <div key={index} className="card text-center" style={{ padding: '20px' }}>
                <h4 style={{ color: '#667eea', margin: 0 }}>{tech}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to See Your Project Here?</h2>
          <p>Let's discuss your requirements and create something amazing together.</p>
          <div className="mt-2">
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Start Your Project
            </a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-success">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
