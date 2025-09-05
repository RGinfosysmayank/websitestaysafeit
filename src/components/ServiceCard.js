import React from 'react';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="card">
      <div className="service-icon">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {features && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {features.map((feature, index) => (
            <li key={index} style={{ marginBottom: '8px', color: '#666' }}>
              ✓ {feature}
            </li>
          ))}
        </ul>
      )}
      <a 
        href="https://forms.gle/AyAqUqRSrLDfkzDfA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ marginTop: '20px', display: 'inline-block' }}
      >
        Learn More
      </a>
    </div>
  );
};

export default ServiceCard;
