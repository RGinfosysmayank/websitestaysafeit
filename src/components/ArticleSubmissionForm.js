import React, { useState } from 'react';
import Modal from './Modal';

const ArticleSubmissionForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    email: '',
    submittedBy: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.body.trim()) {
      newErrors.body = 'Article body is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.submittedBy.trim()) {
      newErrors.submittedBy = 'Author name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Article submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      body: '',
      email: '',
      submittedBy: ''
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  const SuccessMessage = () => (
    <div className="success-message">
      <div className="success-icon">✅</div>
      <h3 className="success-title">Article Submitted Successfully!</h3>
      <p className="success-text">
        Your article has been submitted successfully and is now in review. Our editorial team will review your submission and get back to you within 2-3 business days.
      </p>
      <button className="success-close" onClick={handleClose}>
        Close
      </button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Submit Your Article">
      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label required">Article Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your article title"
            />
            {errors.title && <div className="form-error">{errors.title}</div>}
          </div>

          <div className="form-group">
            <label className="form-label required">Article Body</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Write your article content here..."
              rows="10"
              style={{ minHeight: '200px' }}
            />
            {errors.body && <div className="form-error">{errors.body}</div>}
          </div>

          <div className="form-group">
            <label className="form-label required">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email address"
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label className="form-label required">Submitted By</label>
            <input
              type="text"
              name="submittedBy"
              value={formData.submittedBy}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your name"
            />
            {errors.submittedBy && <div className="form-error">{errors.submittedBy}</div>}
          </div>

          <button type="submit" className="form-submit">
            Send for Review
          </button>
        </form>
      )}
    </Modal>
  );
};

export default ArticleSubmissionForm;
