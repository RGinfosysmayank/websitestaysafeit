import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'What Are the Best ReactJS Practices for 2024?',
      excerpt: 'If you\'re wondering about the latest ReactJS best practices, here\'s a comprehensive guide on performance optimization, state management, and modern development techniques that every developer should know.',
      date: 'December 15, 2024',
      category: 'ReactJS',
      readTime: '5 min read'
    },
    {
      title: 'Why Should You Choose .NET Core for Enterprise Applications?',
      excerpt: 'Is .NET Core the right choice for your enterprise project? This article explains the benefits, performance advantages, and why companies in India are choosing .NET Core for their business applications.',
      date: 'December 10, 2024',
      category: '.NET Core',
      readTime: '7 min read'
    },
    {
      title: 'React Native vs Flutter: Which Is Better for Your Mobile App?',
      excerpt: 'Confused between React Native and Flutter? Here\'s a detailed comparison to help you decide the best framework for your mobile app development project in 2024.',
      date: 'December 5, 2024',
      category: 'Mobile Development',
      readTime: '8 min read'
    },
    {
      title: 'How Can You Integrate AI into Your Web Applications?',
      excerpt: 'Want to add AI capabilities to your website? This step-by-step guide shows you how to integrate ChatGPT, machine learning models, and AI features into your web applications.',
      date: 'November 30, 2024',
      category: 'AI/ML',
      readTime: '10 min read'
    },
    {
      title: 'What Are the Best Cloud Migration Strategies for Small Businesses?',
      excerpt: 'Planning to move your business to the cloud? Here are the essential strategies, cost considerations, and best practices for successful cloud migration that won\'t break your budget.',
      date: 'November 25, 2024',
      category: 'Cloud Computing',
      readTime: '6 min read'
    },
    {
      title: 'Which Automation Testing Tools Should You Use in 2024?',
      excerpt: 'Wondering about the best testing tools for your project? Learn about Selenium, Cypress, Jest, and other automation testing tools with practical examples and implementation tips.',
      date: 'November 20, 2024',
      category: 'Testing',
      readTime: '9 min read'
    }
  ];

  const categories = [
    'All', 'ReactJS', '.NET Core', 'Mobile Development', 'AI/ML', 'Cloud Computing', 'Testing', 'Java'
  ];

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
                <a
                  key={index}
                  href="https://forms.gle/AyAqUqRSrLDfkzDfA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: '2px solid #667eea',
                    color: '#667eea',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#667eea';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#667eea';
                  }}
                >
                  {category}
                </a>
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
            {blogPosts.map((post, index) => (
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
                    href="https://forms.gle/AyAqUqRSrLDfkzDfA" 
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
                    href="https://forms.gle/AyAqUqRSrLDfkzDfA" 
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
              <a 
                href="https://forms.gle/AyAqUqRSrLDfkzDfA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-success"
                style={{ width: '100%' }}
              >
                Subscribe to Newsletter
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
          <div className="grid grid-4">
            <div className="card text-center">
              <div className="service-icon">⚛️</div>
              <h3>ReactJS Tutorials</h3>
              <p>Learn ReactJS from basics to advanced concepts</p>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Explore
              </a>
            </div>
            <div className="card text-center">
              <div className="service-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>How to integrate AI in your web applications</p>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Explore
              </a>
            </div>
            <div className="card text-center">
              <div className="service-icon">📱</div>
              <h3>Mobile Development</h3>
              <p>React Native and Flutter development guides</p>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Explore
              </a>
            </div>
            <div className="card text-center">
              <div className="service-icon">☁️</div>
              <h3>Cloud Computing</h3>
              <p>AWS and Azure deployment strategies</p>
              <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Explore
              </a>
            </div>
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
                <a href="https://forms.gle/AyAqUqRSrLDfkzDfA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Submit Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
