import React from 'react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
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
            <h1 className="fade-in-up">Leading Website Development Company in India</h1>
            <p className="fade-in-up" style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Specializing in ReactJS, .NET Core, Java, and mobile app development. 
              Transform your business with our high-quality web & mobile solutions.
            </p>
            <div className="fade-in-up">
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Quote
              </a>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Hire Developers
              </a>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                Get Free Consultation
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
            <h2>Why Choose StaySafe IT Solutions?</h2>
            <p>We deliver excellence through innovation, expertise, and commitment</p>
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
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-success">
              Get Free Quote
            </a>
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
    </div>
  );
};

export default Home;
