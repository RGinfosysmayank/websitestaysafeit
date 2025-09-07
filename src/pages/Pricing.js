import React, { useState } from 'react';
import QuoteForm from '../components/QuoteForm';

const Pricing = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹25,000',
      duration: 'Starting from',
      description: 'Perfect for small businesses and startups',
      features: [
        'Static Website (ReactJS)',
        'Responsive Design',
        'SEO Optimization',
        'Contact Form Integration',
        '3 Pages',
        '1 Month Support',
        'Basic Analytics Setup'
      ],
      popular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '₹75,000',
      duration: 'Starting from',
      description: 'Ideal for growing businesses with dynamic needs',
      features: [
        'Dynamic Web Application',
        'Admin Panel',
        'Database Integration',
        'User Authentication',
        'Payment Gateway',
        '3 Months Support',
        'Advanced SEO',
        'API Integration',
        'Mobile Responsive'
      ],
      popular: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '₹1,50,000',
      duration: 'Starting from',
      description: 'Comprehensive solutions for large organizations',
      features: [
        'Full-Stack Web Application',
        'Mobile App (React Native)',
        'Advanced Admin Dashboard',
        'Third-party Integrations',
        'Cloud Deployment',
        '6 Months Support',
        'Custom Features',
        'Performance Optimization',
        'Security Implementation',
        'Scalable Architecture'
      ],
      popular: false,
      buttonText: 'Contact Us'
    }
  ];

  const services = [
    {
      category: 'Web Development',
      services: [
        { name: 'ReactJS Website', price: '₹25,000 - ₹1,00,000' },
        { name: 'MERN Stack Application', price: '₹75,000 - ₹2,50,000' },
        { name: '.NET Core Application', price: '₹80,000 - ₹3,00,000' },
        { name: 'Angular Application', price: '₹70,000 - ₹2,00,000' },
        { name: 'E-commerce Platform', price: '₹1,50,000 - ₹5,00,000' }
      ]
    },
    {
      category: 'Mobile Development',
      services: [
        { name: 'React Native App', price: '₹1,00,000 - ₹4,00,000' },
        { name: 'Flutter App', price: '₹90,000 - ₹3,50,000' },
        { name: 'Native iOS App', price: '₹1,50,000 - ₹5,00,000' },
        { name: 'Native Android App', price: '₹1,20,000 - ₹4,50,000' },
        { name: 'Hybrid App Development', price: '₹80,000 - ₹3,00,000' }
      ]
    },
    {
      category: 'Specialized Services',
      services: [
        { name: 'AI/ML Consulting', price: '₹50,000 - ₹2,00,000' },
        { name: 'Automation Testing Setup', price: '₹30,000 - ₹1,00,000' },
        { name: 'Cloud Migration', price: '₹40,000 - ₹1,50,000' },
        { name: 'DevOps Implementation', price: '₹60,000 - ₹2,50,000' },
        { name: 'UI/UX Design', price: '₹20,000 - ₹80,000' }
      ]
    }
  ];

  const factors = [
    {
      icon: '📊',
      title: 'Project Complexity',
      description: 'Simple websites cost less than complex applications with multiple features'
    },
    {
      icon: '⏱️',
      title: 'Timeline',
      description: 'Urgent projects may require additional resources and faster delivery'
    },
    {
      icon: '🔧',
      title: 'Features & Functionality',
      description: 'Advanced features like AI, payment gateways, and integrations affect pricing'
    },
    {
      icon: '👥',
      title: 'Team Size',
      description: 'Larger projects may require bigger teams and specialized expertise'
    },
    {
      icon: '🎨',
      title: 'Design Requirements',
      description: 'Custom designs and animations require additional design and development time'
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Enterprise-level security and compliance requirements add to the cost'
    }
  ];

  return (
    <div style={{ marginTop: '80px' }}>
      {/* Pricing Hero Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>How Much Does Website Development Cost in India?</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            If you're looking for transparent pricing from a reliable website development company in Delhi, India, 
            you're in the right place. StaySafe IT Solutions offers competitive rates for high-quality web and 
            mobile development services. Here's our complete pricing breakdown with no hidden costs.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Choose Your Plan</h2>
            <p>Flexible pricing options to suit businesses of all sizes</p>
          </div>
          <div className="grid grid-3">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`card ${plan.popular ? 'popular-plan' : ''}`}
                style={{ 
                  position: 'relative',
                  border: plan.popular ? '3px solid #667eea' : '1px solid #eee'
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#667eea',
                    color: 'white',
                    padding: '5px 20px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 style={{ color: plan.popular ? '#667eea' : '#2c3e50' }}>{plan.name}</h3>
                  <div style={{ margin: '20px 0' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: '700', color: '#667eea' }}>
                      {plan.price}
                    </span>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>{plan.duration}</div>
                  </div>
                  <p style={{ color: '#666', marginBottom: '30px' }}>{plan.description}</p>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{ 
                      marginBottom: '10px', 
                      color: '#666',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ color: '#28a745', marginRight: '10px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://forms.gle/AyAqUqRSrLDfkzDfA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%' }}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Service-wise Pricing</h2>
            <p>Detailed pricing for specific services and technologies</p>
          </div>
          <div className="grid grid-3">
            {services.map((category, index) => (
              <div key={index} className="card">
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>{category.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} style={{ 
                      marginBottom: '15px',
                      paddingBottom: '15px',
                      borderBottom: '1px solid #eee'
                    }}>
                      <div style={{ fontWeight: '600', color: '#2c3e50' }}>{service.name}</div>
                      <div style={{ color: '#667eea', fontWeight: '600' }}>{service.price}</div>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://forms.gle/AyAqUqRSrLDfkzDfA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '20px' }}
                >
                  Get Custom Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>What Affects Pricing?</h2>
            <p>Understanding the factors that influence project costs</p>
          </div>
          <div className="grid grid-3">
            {factors.map((factor, index) => (
              <div key={index} className="card text-center">
                <div className="service-icon">{factor.icon}</div>
                <h3>{factor.title}</h3>
                <p>{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Process */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-3">
            <h2 style={{ color: 'white' }}>Payment Process</h2>
            <p style={{ color: 'white' }}>Simple and transparent payment structure</p>
          </div>
          <div className="grid grid-4">
            <div className="text-center">
              <div className="service-icon" style={{ margin: '0 auto 20px' }}>1️⃣</div>
              <h3 style={{ color: 'white' }}>Initial Discussion</h3>
              <p style={{ color: '#bdc3c7' }}>Free consultation to understand requirements</p>
            </div>
            <div className="text-center">
              <div className="service-icon" style={{ margin: '0 auto 20px' }}>2️⃣</div>
              <h3 style={{ color: 'white' }}>Proposal & Quote</h3>
              <p style={{ color: '#bdc3c7' }}>Detailed proposal with timeline and pricing</p>
            </div>
            <div className="text-center">
              <div className="service-icon" style={{ margin: '0 auto 20px' }}>3️⃣</div>
              <h3 style={{ color: 'white' }}>50% Advance</h3>
              <p style={{ color: '#bdc3c7' }}>Project kickoff with advance payment</p>
            </div>
            <div className="text-center">
              <div className="service-icon" style={{ margin: '0 auto 20px' }}>4️⃣</div>
              <h3 style={{ color: 'white' }}>Final Payment</h3>
              <p style={{ color: '#bdc3c7' }}>Remaining amount on project delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Why Our Pricing is Fair?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                  <span>No hidden costs or surprise charges</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                  <span>Competitive rates compared to market standards</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                  <span>High-quality deliverables and ongoing support</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                  <span>Flexible payment options and milestone-based billing</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                  <span>5+ years of experience and proven track record</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Get Custom Quote</h3>
              <p>Have a specific requirement? Get a personalized quote tailored to your needs.</p>
              <p><strong>📞 Phone:</strong> +91-8800869033</p>
              <p><strong>✉️ Email:</strong> sales@staysafeit.com</p>
              <div className="mt-2">
                <button onClick={() => setIsQuoteModalOpen(true)} className="btn btn-primary">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'white' }}>
            Contact us today for a free consultation and detailed project proposal.
          </p>
          <div>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-success">
              Start Your Project
            </a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Schedule Call
            </a>
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuoteForm 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default Pricing;
