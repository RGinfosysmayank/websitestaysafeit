import React, { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import QuoteForm from '../components/QuoteForm';
import ConsultationForm from '../components/ConsultationForm';

const Portfolio = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  
  const projects = [
    {
      title: 'Post-Acute Care Portal',
      technology: 'ReactJS + .NET Core',
      description: 'Healthcare management platform for post-acute care facilities with patient tracking and care coordination.',
      features: ['Patient Management', 'Care Coordination', 'Medical Records', 'Reporting Dashboard'],
      category: 'Healthcare'
    },
    {
      title: 'LibreView AEM Platform',
      technology: 'Adobe Experience Manager',
      description: 'Content management and digital experience platform built on Adobe Experience Manager.',
      features: ['Content Management', 'Digital Experience', 'Multi-site Management', 'Analytics Integration'],
      category: 'Enterprise Platform'
    },
    {
      title: 'Dental Patient & Doctor Apps',
      technology: 'React Native + Flutter',
      description: 'Mobile applications for dental practices including patient scheduling and doctor management systems.',
      features: ['Appointment Booking', 'Patient Records', 'Treatment Plans', 'Billing Integration'],
      category: 'Healthcare Mobile'
    },
    {
      title: 'Carloca Online Platform',
      technology: 'MERN Stack',
      description: 'Comprehensive cars marketplace platform with advanced search, financing options, and dealer management.',
      features: ['Car Listings', 'Advanced Search', 'Financing Calculator', 'Dealer Portal'],
      category: 'E-Commerce'
    },
    {
      title: 'Annex2 PSE Assessment',
      technology: 'Angular + Java',
      description: 'Swiss Agency for Development and Cooperation assessment platform for project evaluation.',
      features: ['Assessment Tools', 'Data Analytics', 'Reporting System', 'Multi-language Support'],
      category: 'Government Portal'
    },
    {
      title: 'Smart Assessment OECD Data',
      technology: 'Python + AI/ML',
      description: 'OECD data analysis platform with intelligent assessment capabilities and automated reporting.',
      features: ['Data Analytics', 'AI-powered Assessment', 'Automated Reports', 'Visualization Tools'],
      category: 'Data Platform'
    },
    {
      title: 'Salesforce Sales Cloud',
      technology: 'Salesforce Platform',
      description: 'Custom Salesforce Sales Cloud implementation with advanced automation and integration.',
      features: ['Lead Management', 'Sales Automation', 'Pipeline Analytics', 'Custom Objects'],
      category: 'CRM Solution'
    },
    {
      title: 'Salesforce Service Cloud',
      technology: 'Salesforce Platform',
      description: 'Service Cloud implementation for customer support with case management and knowledge base.',
      features: ['Case Management', 'Knowledge Base', 'Service Analytics', 'Omnichannel Support'],
      category: 'Customer Service'
    },
    {
      title: 'Salesforce Finance Cloud',
      technology: 'Salesforce Financial Services',
      description: 'Financial services platform built on Salesforce with client management and compliance features.',
      features: ['Client Management', 'Compliance Tracking', 'Financial Planning', 'Risk Assessment'],
      category: 'Financial Services'
    },
    {
      title: 'PSE Project Assessment (World Bank)',
      technology: 'ReactJS + .NET Core',
      description: 'World Bank project assessment platform for evaluating development projects and impact analysis.',
      features: ['Project Evaluation', 'Impact Analysis', 'Document Management', 'Stakeholder Portal'],
      category: 'International Development'
    },
    {
      title: 'Contact Database (SDC)',
      technology: 'MERN Stack',
      description: 'Swiss Development Cooperation contact management system with advanced search and reporting.',
      features: ['Contact Management', 'Advanced Search', 'Data Analytics', 'Export Tools'],
      category: 'Database Management'
    },
    {
      title: 'EAP Poverty Portal (World Bank)',
      technology: 'Angular + Java',
      description: 'East Asia and Pacific poverty analysis portal with data visualization and research tools.',
      features: ['Data Visualization', 'Research Tools', 'Statistical Analysis', 'Report Generation'],
      category: 'Research Platform'
    },
    {
      title: 'EAPDE-TF Portal (World Bank)',
      technology: 'ReactJS + Python',
      description: 'East Asia and Pacific Development Effectiveness Trust Fund management portal.',
      features: ['Fund Management', 'Project Tracking', 'Financial Reporting', 'Stakeholder Dashboard'],
      category: 'Fund Management'
    },
    {
      title: 'Hardisty CRN (UK)',
      technology: 'PowerApps + SharePoint',
      description: 'UK-based Customer Relationship Network built on Microsoft PowerApps with integrated website.',
      features: ['Customer Management', 'Workflow Automation', 'Document Management', 'Mobile Access'],
      category: 'CRM Platform'
    },
    {
      title: 'Task Management System',
      technology: 'React + Node.js',
      description: 'Open-source task management application with team collaboration features.',
      features: ['Task Assignment', 'Team Collaboration', 'Progress Tracking', 'Time Management'],
      category: 'Productivity Tool'
    },
    {
      title: 'Inventory Management Portal',
      technology: 'Vue.js + Laravel',
      description: 'Open-source inventory management system for small to medium businesses.',
      features: ['Stock Management', 'Order Processing', 'Supplier Management', 'Reports & Analytics'],
      category: 'Business Tool'
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
            <button onClick={() => setIsQuoteModalOpen(true)} className="btn btn-primary">
              Start Your Project
            </button>
            <button onClick={() => setIsConsultationModalOpen(true)} className="btn btn-success">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
      
      {/* Modals */}
      <QuoteForm 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <ConsultationForm 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
