import React, { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import HireDeveloperForm from '../components/HireDeveloperForm';
import ConsultationForm from '../components/ConsultationForm';
import ScrollToTop from '../components/ScrollToTop';

const Contact = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.projectDetails) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission (you can integrate with actual backend later)
    console.log('Form submitted:', formData);
    
    // Clear form and show success message
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      projectDetails: ''
    });
    setIsSubmitted(true);
    
    // Hide success message after 10 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 10000);
  };
  
  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      info: '+91-8800869033',
      description: 'Call us for immediate assistance'
    },
    {
      icon: '✉️',
      title: 'Email',
      info: 'sales@staysafeit.com',
      description: 'Send us your project requirements'
    },
    {
      icon: '📍',
      title: 'Location',
      info: 'Delhi, India',
      description: 'Based in Delhi, Serving Globally'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      info: 'Mon-Fri: 9 AM - 6 PM IST',
      description: '24/7 Support Available'
    }
  ];

  const services = [
    'Web App Development (ReactJS, MERN, Angular, .NET Core)',
    'Mobile App Development (React Native, Flutter)',
    'Static Website Development',
    'Automation Testing (Selenium, Cypress, Jest)',
    'AI Agent Consulting & Development',
    'Digital Transformation (AWS, Azure, DevOps)'
  ];

  const faqs = [
    {
      question: 'How long does it take to develop a website?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we provide comprehensive support and maintenance services. Our basic plan includes 3-6 months of free support.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in ReactJS, .NET Core, Java, React Native, Flutter, AWS, Azure, and various modern web technologies.'
    },
    {
      question: 'Can you work with international clients?',
      answer: 'Absolutely! We serve clients globally and have experience working across different time zones and project requirements.'
    },
    {
      question: 'Do you offer custom development solutions?',
      answer: 'Yes, we provide fully customized solutions tailored to your specific business needs and requirements.'
    }
  ];

  return (
    <div style={{ marginTop: '80px' }}>
      {/* Contact Hero Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>How Can You Reach StaySafe IT Solutions?</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            Looking to connect with a reliable website development company in Delhi, India? Here are all the ways 
            you can reach StaySafe IT Solutions. We're available 24/7 to discuss your project requirements and 
            provide free consultations for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="card text-center">
                <div className="service-icon">{contact.icon}</div>
                <h3>{contact.title}</h3>
                <p style={{ fontWeight: '600', color: '#667eea', fontSize: '1.1rem' }}>
                  {contact.info}
                </p>
                <p style={{ color: '#666' }}>{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Form */}
            <div className="card">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleFormSubmit} style={{ marginTop: '30px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #eee',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #eee',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #eee',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                    Service Required
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #eee',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-ml">AI/ML Consulting</option>
                    <option value="testing">Testing Services</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                    Project Details *
                  </label>
                  <textarea 
                    rows="5"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Describe your project requirements..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #eee',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Send Message
                </button>
                
                {/* Success Message */}
                {isSubmitted && (
                  <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#f0f9ff',
                    border: '2px solid #22c55e',
                    borderRadius: '5px',
                    color: '#22c55e',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    ✅ Request Submitted Successfully! Thank you for your interest! Our team will review your requirements and get back to you within 24 hours with a detailed quote.
                  </div>
                )}
              </form>
            </div>

            {/* Company Info */}
            <div>
              <div className="card">
                <h3>StaySafe IT Solutions</h3>
                <p>
                  Leading website development company in India with 5+ years of experience 
                  in delivering high-quality web and mobile solutions.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>📍 Address:</strong><br />Delhi, India</p>
                  <p><strong>📞 Phone:</strong><br />+91-8800869033</p>
                  <p><strong>✉️ Email:</strong><br />sales@staysafeit.com</p>
                  <p><strong>🌐 Website:</strong><br />StaySafe IT Solutions</p>
                </div>
              </div>

              <div className="card" style={{ marginTop: '20px' }}>
                <h3>Quick Actions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="btn btn-primary"
                  >
                    Get Free Quote
                  </button>
                  <button 
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="btn btn-success"
                  >
                    Schedule Consultation
                  </button>
                  <button 
                    onClick={() => setIsHireModalOpen(true)}
                    className="btn btn-secondary"
                  >
                    Hire Expert Developers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Services We Offer</h2>
            <p>Comprehensive IT solutions for your business needs</p>
          </div>
          <div className="grid grid-2">
            <div>
              <h3>Our Expertise</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {services.map((service, index) => (
                  <li key={index} style={{ 
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{ color: '#28a745', marginRight: '10px', marginTop: '2px' }}>✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Why Choose Us?</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>⚡</span>
                  <span>5+ Years of Experience</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>🎯</span>
                  <span>200+ Successful Projects</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>🌟</span>
                  <span>150+ Happy Clients</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>🚀</span>
                  <span>Latest Technologies</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>💰</span>
                  <span>Competitive Pricing</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>🔒</span>
                  <span>24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our services and process</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="card" style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#667eea', marginBottom: '15px' }}>
                  Q: {faq.question}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  A: {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <p>Have more questions?</p>
            <a 
              href="mailto:sales@staysafeit.com"
              className="btn btn-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Need Immediate Assistance?</h2>
          <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '30px' }}>
            For urgent project requirements or technical support, contact us directly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a 
              href="tel:+918800869033"
              className="btn btn-success"
            >
              📞 Call Now: +91-8800869033
            </a>
            <a 
              href="mailto:sales@staysafeit.com"
              className="btn btn-secondary"
            >
              ✉️ Email: sales@staysafeit.com
            </a>
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
      <ConsultationForm 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default Contact;
