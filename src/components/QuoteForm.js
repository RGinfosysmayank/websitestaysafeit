import React, { useState } from 'react';
import Modal from './Modal';

const QuoteForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    briefRequirement: ''
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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }
    
    if (!formData.briefRequirement.trim()) {
      newErrors.briefRequirement = 'Brief requirement is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Quote form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      projectType: '',
      briefRequirement: ''
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  const SuccessMessage = () => (
    <div className="success-message">
      <div className="success-icon">✅</div>
      <h3 className="success-title">Request Submitted Successfully!</h3>
      <p className="success-text">
        Thank you for your interest! Our team will review your requirements and get back to you within 24 hours with a detailed quote.
      </p>
      <button className="success-close" onClick={handleClose}>
        Close
      </button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Get Free Quote">
      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label required">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your full name"
            />
            {errors.fullName && <div className="form-error">{errors.fullName}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your company name (optional)"
            />
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
            <label className="form-label required">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your phone number"
            />
            {errors.phone && <div className="form-error">{errors.phone}</div>}
          </div>

          <div className="form-group">
            <label className="form-label required">Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select project type</option>
              <option value="website">Website</option>
              <option value="mobile-app">Mobile App</option>
              <option value="ai-automation">AI/Automation</option>
              <option value="other">Other</option>
            </select>
            {errors.projectType && <div className="form-error">{errors.projectType}</div>}
          </div>

          <div className="form-group">
            <label className="form-label required">Brief Requirement</label>
            <textarea
              name="briefRequirement"
              value={formData.briefRequirement}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Please describe your project requirements in detail..."
              rows="4"
            />
            {errors.briefRequirement && <div className="form-error">{errors.briefRequirement}</div>}
          </div>

          <button type="submit" className="form-submit">
            Submit Quote Request
          </button>
        </form>
      )}
    </Modal>
  );
};

export default QuoteForm;
