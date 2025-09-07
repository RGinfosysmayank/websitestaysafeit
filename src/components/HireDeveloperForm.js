import React, { useState } from 'react';
import Modal from './Modal';

const HireDeveloperForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    technologyRequirement: '',
    duration: '',
    additionalNotes: ''
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
    
    if (!formData.technologyRequirement) {
      newErrors.technologyRequirement = 'Please select a technology requirement';
    }
    
    if (!formData.duration) {
      newErrors.duration = 'Please select project duration';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Hire developer form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      technologyRequirement: '',
      duration: '',
      additionalNotes: ''
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
        Thank you for your interest in hiring our expert developers! Our HR team will review your requirements and get back to you within 24 hours to discuss the next steps.
      </p>
      <button className="success-close" onClick={handleClose}>
        Close
      </button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Hire Expert Developers">
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
            <label className="form-label required">Technology Requirement</label>
            <select
              name="technologyRequirement"
              value={formData.technologyRequirement}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select technology requirement</option>
              <option value="reactjs">ReactJS</option>
              <option value="mern">MERN Stack</option>
              <option value="dotnet-core">.NET Core</option>
              <option value="java">Java</option>
              <option value="react-native">React Native</option>
              <option value="flutter">Flutter</option>
              <option value="ai-ml">AI/ML</option>
              <option value="testing">Testing</option>
            </select>
            {errors.technologyRequirement && <div className="form-error">{errors.technologyRequirement}</div>}
          </div>

          <div className="form-group">
            <label className="form-label required">Duration</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select project duration</option>
              <option value="short-term">Short-term (1-3 months)</option>
              <option value="long-term">Long-term (3-12 months)</option>
              <option value="dedicated-team">Dedicated Team (12+ months)</option>
            </select>
            {errors.duration && <div className="form-error">{errors.duration}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Additional Notes</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Any additional requirements or notes..."
              rows="4"
            />
          </div>

          <button type="submit" className="form-submit">
            Submit Hiring Request
          </button>
        </form>
      )}
    </Modal>
  );
};

export default HireDeveloperForm;
