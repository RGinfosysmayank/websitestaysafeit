import React, { useState } from 'react';
import ArticleSubmissionForm from '../components/ArticleSubmissionForm';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  const blogPosts = [
    {
      title: 'What Are the Best ReactJS Practices?',
      excerpt: 'If you\'re wondering about the latest ReactJS best practices, here\'s a comprehensive guide on performance optimization, state management, and modern development techniques that every developer should know.',
      date: 'December 15, 2024',
      category: 'ReactJS',
      readTime: '5 min read',
      link: 'https://www.linkedin.com/pulse/what-best-reactjs-practices-staysafeit-6otle'
    },
    {
      title: 'Why Should You Choose .NET Core for Enterprise Applications?',
      excerpt: 'Is .NET Core the right choice for your enterprise project? This article explains the benefits, performance advantages, and why companies in India are choosing .NET Core for their business applications.',
      date: 'December 10, 2024',
      category: '.NET Core',
      readTime: '7 min read',
      link: 'https://www.linkedin.com/pulse/why-should-you-choose-net-core-enterprise-applications-staysafeit-zhfae'
    },
    {
      title: 'React Native vs Flutter: Which Is Better for Your Mobile App?',
      excerpt: 'Confused between React Native and Flutter? Here\'s a detailed comparison to help you decide the best framework for your mobile app development project in 2024.',
      date: 'December 5, 2024',
      category: 'Mobile Development',
      readTime: '8 min read',
      link: 'https://www.linkedin.com/pulse/react-native-vs-flutter-which-better-your-mobile-app-staysafeit-bxare'
    },
    {
      title: 'How Can You Integrate AI into Your Web Applications?',
      excerpt: 'Want to add AI capabilities to your website? This step-by-step guide shows you how to integrate ChatGPT, machine learning models, and AI features into your web applications.',
      date: 'November 30, 2024',
      category: 'AI/ML',
      readTime: '10 min read',
      link: 'https://www.linkedin.com/pulse/how-can-you-integrate-ai-your-web-applications-staysafeit-sm7ge'
    },
    {
      title: 'What Are the Best Cloud Migration Strategies for Small Businesses?',
      excerpt: 'Planning to move your business to the cloud? Here are the essential strategies, cost considerations, and best practices for successful cloud migration that won\'t break your budget.',
      date: 'November 25, 2024',
      category: 'Cloud Computing',
      readTime: '6 min read',
      link: 'https://www.linkedin.com/pulse/what-best-cloud-migration-strategies-small-businesses-2025-q1cse'
    },
    {
      title: 'Which Automation Testing Tools Should You Use in 2024?',
      excerpt: 'Wondering about the best testing tools for your project? Learn about Selenium, Cypress, Jest, and other automation testing tools with practical examples and implementation tips.',
      date: 'November 20, 2024',
      category: 'Testing',
      readTime: '9 min read',
      link: 'https://forms.gle/AyAqUqRSrLDfkzDfA'
    }
  ];

  const categories = [
    'All', 'ReactJS', '.NET Core', 'Mobile Development', 'AI/ML', 'Cloud Computing', 'Testing', 'Java'
  ];

  const popularTopics = [
    {
      title: 'AI-Powered Development & Code Automation',
      description: 'AI tools like GitHub Copilot, Tabnine, and AI-driven personalization.',
      icon: '🤖',
      link: 'https://wpengine.com/blog/web-development-trends/?utm_source=chatgpt.com'
    },
    {
      title: 'Low-Code / No-Code Platforms',
      description: 'Visual platforms enabling rapid app development without heavy coding.',
      icon: '⚡',
      link: 'https://wpengine.com/blog/web-development-trends/?utm_source=chatgpt.com'
    },
    {
      title: 'Progressive Web Apps (PWAs) & Headless Architectures',
      description: 'PWAs provide app-like web experiences, and headless CMS offers flexible scalability.',
      icon: '📱',
      link: 'https://www.geeksforgeeks.org/blogs/top-web-development-trends/?utm_source=chatgpt.com'
    },
    {
      title: 'Emerging Technologies (WebAssembly, Server-Driven UI, Jamstack)',
      description: 'High-performance architectures and decoupled UI design.',
      icon: '🚀',
      link: 'https://www.geeksforgeeks.org/blogs/top-web-development-trends/?utm_source=chatgpt.com'
    },
    {
      title: 'AI-Powered Tools & Generative AI',
      description: 'AI website builders, smarter analytics, generative AI in dev workflows.',
      icon: '🧠',
      link: 'https://www.digitalocean.com/resources/articles/ai-tools-web-development?utm_source=chatgpt.com'
    },
    {
      title: 'DevSecOps, Security, and Performance Metrics',
      description: 'Integrated security practices and Core Web Vitals optimization.',
      icon: '🔒',
      link: 'https://wpengine.com/blog/web-development-trends/?utm_source=chatgpt.com'
    },
    {
      title: 'Microservices, Serverless, and Edge Computing',
      description: 'Scalable, low-latency architectures adopted by enterprises.',
      icon: '☁️',
      link: 'https://en.wikipedia.org/wiki/Microservices?utm_source=chatgpt.com'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div style={{ marginTop: '80px' }}>
      {/* Blog Hero Section */}
      <section className="section section-primary">
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>What's New in Web Development?</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            Looking for the latest insights in web development, mobile apps, and AI? StaySafe IT Solutions' tech blog 
            answers the most common questions developers and businesses ask about modern technology trends, 
            best practices, and implementation guides.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Browse by Category</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: '2px solid #667eea',
                    background: selectedCategory === category ? '#667eea' : 'transparent',
                    color: selectedCategory === category ? 'white' : '#667eea',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.background = '#667eea';
                      e.target.style.color = 'white';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#667eea';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Latest Articles</h2>
            <p>Expert insights and tutorials from our development team</p>
          </div>
          <div className="grid grid-2">
            {filteredPosts.map((post, index) => (
              <article key={index} className="card">
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ 
                    background: '#667eea', 
                    color: 'white', 
                    padding: '5px 15px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    marginRight: '10px'
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>
                    {post.readTime}
                  </span>
                </div>
                <h3 style={{ marginBottom: '15px' }}>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#2c3e50', textDecoration: 'none' }}
                  >
                    {post.title}
                  </a>
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                  {post.excerpt}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid #eee',
                  paddingTop: '15px'
                }}>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>
                    {post.date}
                  </span>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', textAlign: 'center' }}>
            <h2 style={{ color: 'white' }}>Stay Updated</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
              Subscribe to our newsletter for the latest tech insights, tutorials, and industry updates.
            </p>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  .libutton {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 7px;
                    text-align: center;
                    outline: none;
                    text-decoration: none !important;
                    color: #ffffff !important;
                    width: 200px;
                    height: 32px;
                    border-radius: 16px;
                    background-color: #0A66C2;
                    font-family: "SF Pro Text", Helvetica, sans-serif;
                    margin: 0 auto;
                    transition: all 0.3s ease;
                  }
                  .libutton:hover {
                    background-color: #004182;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(10, 102, 194, 0.4);
                  }
                `
              }} />
              <a 
                className="libutton" 
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7062527732164833280" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Popular Topics</h2>
            <p>Most searched and trending topics in web development</p>
          </div>
          <div className="grid" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {popularTopics.map((topic, index) => (
              <div key={index} className="card text-center" style={{ 
                padding: '25px', 
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '24px'
                }}>
                  {topic.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '15px',
                  color: '#2c3e50',
                  lineHeight: '1.3'
                }}>
                  {topic.title}
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6', 
                  marginBottom: '20px',
                  fontSize: '0.95rem'
                }}>
                  {topic.description}
                </p>
                <a 
                  href={topic.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Explore
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Guest Posts */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Want to Contribute?</h2>
              <p>
                We welcome guest posts from industry experts and developers. 
                Share your knowledge and insights with our community.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>✓</span>
                  Technical tutorials and guides
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>✓</span>
                  Industry insights and trends
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>✓</span>
                  Best practices and case studies
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#28a745', marginRight: '10px' }}>✓</span>
                  Tool reviews and comparisons
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Submit Your Article</h3>
              <p>Send us your article proposal and we'll get back to you within 24 hours.</p>
              <p><strong>📧 Email:</strong> blog@staysafeit.com</p>
              <p><strong>📞 Phone:</strong> +91-8800869033</p>
              <div className="mt-2">
                <button 
                  onClick={() => setIsArticleModalOpen(true)}
                  className="btn btn-primary"
                >
                  Submit Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Submission Modal */}
      <ArticleSubmissionForm 
        isOpen={isArticleModalOpen} 
        onClose={() => setIsArticleModalOpen(false)} 
      />
    </div>
  );
};

export default Blog;
