import React from 'react';

const TestimonialCard = ({ name, role, company, testimonial, rating }) => {
  return (
    <div className="testimonial">
      <p>{testimonial}</p>
      <div className="testimonial-author">{name}</div>
      <div className="testimonial-role">{role}, {company}</div>
      {rating && (
        <div style={{ marginTop: '10px', color: '#ffd700' }}>
          {'★'.repeat(rating)}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
