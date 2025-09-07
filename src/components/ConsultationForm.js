import React, { useState } from 'react';
import Modal from './Modal';

const ConsultationForm = ({ isOpen, onClose, preSelectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    favouredTime: '',
    service: preSelectedService,
    message: ''
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
    
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Consultation form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      phone: '',
      favouredTime: '',
      service: preSelectedService,
      message: ''
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
        Our team will book a calendar invite shortly and get back to you within 24 hours.
      </p>
      <button className="success-close" onClick={handleClose}>
        Close
      </button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Schedule Free Consultation">
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
            <label className="form-label required">Work Email</label>
            <input
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your work email address"
            />
            {errors.workEmail && <div className="form-error">{errors.workEmail}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your phone number (optional)"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Favoured Time</label>
            <input
              type="datetime-local"
              name="favouredTime"
              value={formData.favouredTime}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Service Interest</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select a service (optional)</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="ai-automation">AI/Automation</option>
              <option value="testing">Testing Services</option>
              <option value="salesforce">Salesforce Solutions</option>
              <option value="cloud">Cloud Computing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Tell us about your project or any specific requirements..."
              rows="4"
            />
          </div>

          <button type="submit" className="form-submit">
            Schedule Consultation
          </button>
        </form>
      )}
    </Modal>
  );
};

export default ConsultationForm;
