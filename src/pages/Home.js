import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import QuoteForm from '../components/QuoteForm';
import HireDeveloperForm from '../components/HireDeveloperForm';

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  
  const services = [
    {
      icon: '🌐',
      title: 'Web App Development',
      description: 'Custom web applications built with modern technologies for scalable business solutions.',
      features: ['ReactJS Development', 'MERN Stack', 'Angular Applications', '.NET Core', 'Java Enterprise']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development', 'Hybrid Apps']
    },
    {
      icon: '💻',
      title: 'Static Website Development',
      description: 'Fast, SEO-optimized static websites built with ReactJS for better performance.',
      features: ['ReactJS Websites', 'SEO Optimization', 'Responsive Design', 'Fast Loading', 'Modern UI/UX']
    },
    {
      icon: '🧪',
      title: 'Automation Testing',
      description: 'Comprehensive testing solutions to ensure your applications work flawlessly.',
      features: ['Selenium Testing', 'JIRA Integration', 'Cypress Testing', 'Jest Unit Testing', 'QA Automation']
    },
    {
      icon: '🤖',
      title: 'AI Agent Consulting',
      description: 'Intelligent automation and AI solutions to transform your business processes.',
      features: ['AI/ML Solutions', 'Process Automation', 'ChatBot Development', 'Data Analytics', 'Smart Systems']
    },
    {
      icon: '☁️',
      title: 'Digital Transformation',
      description: 'Complete digital transformation with cloud solutions and modern DevOps practices.',
      features: ['AWS Solutions', 'Azure Cloud', 'DevOps Implementation', 'Cloud Migration', 'Infrastructure']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'TechStart Solutions',
      testimonial: 'StaySafe IT delivered an exceptional ReactJS application that exceeded our expectations. Their team\'s expertise in modern web technologies is outstanding.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Product Manager',
      company: 'Digital Innovations',
      testimonial: 'The mobile app developed by StaySafe IT has significantly improved our customer engagement. Their React Native development skills are top-notch.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      role: 'CTO',
      company: 'Global Enterprises',
      testimonial: 'Outstanding AI consulting services! They helped us implement automation that saved 40% of our operational time. Highly recommended for digital transformation.',
      rating: 5
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const whyChooseUs = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: '🎯',
      title: 'Expert Team',
      description: '5+ years of experience with latest technologies'
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Creative approaches to solve complex business challenges'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Industry-standard security practices and reliable code'
    },
    {
      icon: '💰',
      title: 'Cost-Effective',
      description: 'Competitive pricing with maximum ROI for your investment'
    },
    {
      icon: '🚀',
      title: 'Scalable Architecture',
      description: 'Future-ready solutions that grow with your business'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in-up">Are You Looking for the Best Website Development Company in India?</h1>
            <p className="fade-in-up" style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              If you're searching for a reliable website development company in Delhi, India, StaySafe IT Solutions is your answer. 
              We are a leading technology partner specializing in ReactJS, .NET Core, Java, and mobile app development, 
              serving clients globally from our base in Delhi, NCR.
            </p>
            <div className="fade-in-up">
              <button onClick={() => setIsQuoteModalOpen(true)} className="btn btn-primary">
                Get Free Quote
              </button>
              <button onClick={() => setIsHireModalOpen(true)} className="btn btn-secondary">
                Hire Expert Developers
              </button>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats">
            <div className="grid grid-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Our Services</h2>
            <p>Comprehensive IT solutions to accelerate your business growth</p>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Why Choose StaySafe IT Solutions in Delhi, India?</h2>
            <p>If you're wondering why StaySafe IT Solutions stands out among website development companies in India, here's our story and what makes us different:</p>
          </div>
          
          {/* Our Story */}
          <div className="card" style={{ marginBottom: '40px', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
            <h3>Our Journey: From Delhi to Global Recognition</h3>
            <p>
              StaySafe IT Solutions started in Delhi, India, with a simple mission: to help businesses transform digitally 
              using the latest technologies. Over the past 5+ years, we've grown from a small team to a trusted technology 
              partner for 150+ clients worldwide. Based in Delhi NCR, we understand the Indian market dynamics while 
              delivering international-quality solutions.
            </p>
            <p>
              What began as a passion project to bridge the technology gap for small businesses has evolved into a 
              comprehensive IT solutions provider. We've completed 200+ successful projects, ranging from simple websites 
              to complex enterprise applications, always maintaining our core values of quality, transparency, and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* FAQ Section for GEO */}
          <div style={{ marginTop: '60px' }}>
            <h3 className="text-center mb-2">Common Questions Our Clients Ask</h3>
            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div className="card">
                <h4 style={{ color: '#667eea' }}>Q: Why should I choose a Delhi-based company for my project?</h4>
                <p>Delhi NCR is India's technology hub with access to top talent and cost-effective solutions. StaySafe IT Solutions combines local expertise with global standards, offering you the best of both worlds.</p>
              </div>
              <div className="card">
                <h4 style={{ color: '#667eea' }}>Q: Do you work with international clients?</h4>
                <p>Yes! While we're based in Delhi, India, we serve clients globally. We've successfully delivered projects for companies in the US, Europe, Australia, and across Asia, with seamless communication and project management.</p>
              </div>
              <div className="card">
                <h4 style={{ color: '#667eea' }}>Q: What makes your ReactJS development different?</h4>
                <p>Our ReactJS development focuses on performance, scalability, and SEO optimization. We follow industry best practices and use modern tools to ensure your website loads fast and ranks well on search engines.</p>
              </div>
              <div className="card">
                <h4 style={{ color: '#667eea' }}>Q: How do you ensure project success?</h4>
                <p>We follow agile development methodology with regular updates, milestone-based delivery, and transparent communication. Our 98% client satisfaction rate speaks for our commitment to project success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses worldwide for quality deliverables</p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Ready to Transform Your Business?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'white' }}>
            Let's discuss your project and create something amazing together
          </p>
          <div>
            <button onClick={() => setIsQuoteModalOpen(true)} className="btn btn-success">
              Get Free Quote
            </button>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h3>Get In Touch</h3>
              <p><strong>📞 Phone:</strong> +91-8800869033</p>
              <p><strong>✉️ Email:</strong> sales@staysafeit.com</p>
              <p><strong>📍 Location:</strong> Based in Delhi, India – Serving Globally</p>
              <p><strong>🌐 Website:</strong> StaySafe IT Solutions</p>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Contact Us
              </a>
            </div>
            <div className="card">
              <h3>Business Hours</h3>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST</p>
              <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM IST</p>
              <p><strong>Sunday:</strong> Closed</p>
              <p><strong>Support:</strong> 24/7 Available</p>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                Get Free Consultation
              </a>
            </div>
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

export default Home;
