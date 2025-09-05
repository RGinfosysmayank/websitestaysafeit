import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web App Development',
      description: 'Custom web applications built with modern technologies for scalable business solutions.',
      features: [
        'ReactJS Development',
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'Angular Applications',
        '.NET Core Development',
        'Java Enterprise Applications',
        'Progressive Web Apps (PWA)',
        'API Development & Integration'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'React Native Development',
        'Flutter Applications',
        'Native iOS Development',
        'Native Android Development',
        'Hybrid App Development',
        'App Store Optimization',
        'Mobile UI/UX Design'
      ]
    },
    {
      icon: '💻',
      title: 'Static Website Development',
      description: 'Fast, SEO-optimized static websites built with ReactJS for better performance.',
      features: [
        'ReactJS Static Sites',
        'SEO Optimization',
        'Responsive Design',
        'Fast Loading Performance',
        'Modern UI/UX',
        'Content Management',
        'Analytics Integration'
      ]
    },
    {
      icon: '🧪',
      title: 'Automation Testing',
      description: 'Comprehensive testing solutions to ensure your applications work flawlessly.',
      features: [
        'Selenium Test Automation',
        'JIRA Integration & Management',
        'Cypress End-to-End Testing',
        'Jest Unit Testing',
        'QA Automation Framework',
        'Performance Testing',
        'Bug Tracking & Reporting'
      ]
    },
    {
      icon: '🤖',
      title: 'AI Agent Consulting',
      description: 'Intelligent automation and AI solutions to transform your business processes.',
      features: [
        'AI/ML Solution Development',
        'Process Automation',
        'ChatBot Development',
        'Data Analytics & Insights',
        'Smart Recommendation Systems',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ]
    },
    {
      icon: '☁️',
      title: 'Digital Transformation',
      description: 'Complete digital transformation with cloud solutions and modern DevOps practices.',
      features: [
        'AWS Cloud Solutions',
        'Microsoft Azure Services',
        'DevOps Implementation',
        'Cloud Migration Services',
        'Infrastructure as Code',
        'CI/CD Pipeline Setup',
        'Microservices Architecture'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and engagement.',
      features: ['Wireframing & Prototyping', 'User Interface Design', 'User Experience Optimization', 'Design Systems']
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: '24/7 technical support and maintenance services for your applications.',
      features: ['Bug Fixes & Updates', 'Performance Monitoring', 'Security Updates', 'Technical Support']
    },
    {
      icon: '📊',
      title: 'Consulting Services',
      description: 'Strategic technology consulting to help you make informed decisions.',
      features: ['Technology Architecture', 'Project Planning', 'Technical Audits', 'Best Practices']
    }
  ];

  return (
    <div style={{ marginTop: '80px' }}>
      {/* Services Hero Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>What Services Does StaySafe IT Solutions Offer?</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            If you're looking for comprehensive IT solutions in Delhi, India, here's everything StaySafe IT Solutions 
            can do for your business. We specialize in modern web development, mobile apps, AI consulting, and 
            digital transformation services.
          </p>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Common Questions Our Clients Ask About Our Services</h2>
          </div>
          
          <div className="grid grid-2" style={{ marginBottom: '50px' }}>
            <div className="card">
              <h3 style={{ color: '#667eea' }}>Q: Which company in Delhi provides ReactJS development services?</h3>
              <p>StaySafe IT Solutions is a leading ReactJS development company in Delhi, India. We have successfully delivered 200+ ReactJS projects including e-commerce platforms, business websites, and complex web applications for clients worldwide.</p>
            </div>
            <div className="card">
              <h3 style={{ color: '#667eea' }}>Q: Do you provide .NET Core development in India?</h3>
              <p>Yes, StaySafe IT Solutions specializes in .NET Core development. Our team has extensive experience building enterprise-grade applications using .NET Core, with expertise in microservices architecture, API development, and cloud deployment.</p>
            </div>
            <div className="card">
              <h3 style={{ color: '#667eea' }}>Q: Can you build mobile apps using React Native?</h3>
              <p>Absolutely! We are experts in React Native development and have built cross-platform mobile apps for various industries including healthcare, finance, e-commerce, and logistics. Our apps are available on both iOS and Android platforms.</p>
            </div>
            <div className="card">
              <h3 style={{ color: '#667eea' }}>Q: Does StaySafe IT Solutions offer AI consulting services?</h3>
              <p>Yes, we provide comprehensive AI consulting services including chatbot development, machine learning solutions, process automation, and AI integration. We help businesses leverage AI to improve efficiency and customer experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Core Services</h2>
            <p>Our primary expertise areas that drive business success</p>
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

      {/* Additional Services */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Additional Services</h2>
            <p>Supporting services to complement your main project requirements</p>
          </div>
          <div className="grid grid-3">
            {additionalServices.map((service, index) => (
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

      {/* Technology Stack */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Technologies We Work With</h2>
            <p>Modern technologies and frameworks for robust solutions</p>
          </div>
          <div className="grid grid-4">
            <div className="card text-center">
              <h3>Frontend</h3>
              <p>ReactJS, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Tailwind CSS</p>
            </div>
            <div className="card text-center">
              <h3>Backend</h3>
              <p>.NET Core, Java Spring, Node.js, Python Django, PHP Laravel, Ruby on Rails</p>
            </div>
            <div className="card text-center">
              <h3>Mobile</h3>
              <p>React Native, Flutter, Swift (iOS), Kotlin (Android), Xamarin, Ionic</p>
            </div>
            <div className="card text-center">
              <h3>Database</h3>
              <p>MongoDB, MySQL, PostgreSQL, SQL Server, Firebase, Redis, DynamoDB</p>
            </div>
            <div className="card text-center">
              <h3>Cloud & DevOps</h3>
              <p>AWS, Azure, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform</p>
            </div>
            <div className="card text-center">
              <h3>Testing</h3>
              <p>Selenium, Cypress, Jest, JUnit, JIRA, TestRail, Postman, LoadRunner</p>
            </div>
            <div className="card text-center">
              <h3>AI/ML</h3>
              <p>TensorFlow, PyTorch, OpenAI, ChatGPT API, NLP, Computer Vision</p>
            </div>
            <div className="card text-center">
              <h3>Others</h3>
              <p>GraphQL, REST API, Microservices, WebSockets, Payment Gateways</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-3">
            <h2 style={{ color: 'white' }}>Our Development Process</h2>
            <p style={{ color: 'white' }}>Structured approach ensuring project success</p>
          </div>
          <div className="grid grid-4">
            <div className="text-center">
              <div className="service-icon" style={{ margin: '0 auto 20px' }}>1️⃣</div>
              <h3 style={{ color: 'white' }}>Discovery</h3>
              <p style={{ color: '#bdc3c7' }}>Understanding your requirements and business goals</p>
            </div>
            <div className="text-center">
              <div className="service-icon" style={{ margin: '0 auto 20px' }}>2️⃣</div>
              <h3 style={{ color: 'white' }}>Planning</h3>
              <p style={{ color: '#bdc3c7' }}>Creating detailed project roadmap and timeline</p>
            </div>
            <div className="text-center">
              <div className="service-icon" style={{ margin: '0 auto 20px' }}>3️⃣</div>
              <h3 style={{ color: 'white' }}>Development</h3>
              <p style={{ color: '#bdc3c7' }}>Agile development with regular updates</p>
            </div>
            <div className="text-center">
              <div className="service-icon" style={{ margin: '0 auto 20px' }}>4️⃣</div>
              <h3 style={{ color: 'white' }}>Delivery</h3>
              <p style={{ color: '#bdc3c7' }}>Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Start Your Project?</h2>
          <p>Get a free consultation and detailed project proposal for your requirements.</p>
          <div className="mt-2">
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get Free Quote
            </a>
            <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-success">
              View Pricing Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
