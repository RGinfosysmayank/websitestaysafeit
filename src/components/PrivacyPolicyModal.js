import React from 'react';
import Modal from './Modal';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div style={{ maxHeight: '60vh', overflowY: 'auto', lineHeight: '1.6', color: '#1e3a8a' }}>
        <h3 style={{ color: '#2c3e50', fontWeight: 'bold' }}>Privacy Policy for StaySafe IT Solutions</h3>
        <p style={{ color: '#1e3a8a' }}><strong>Last Updated:</strong> September 2025</p>
        
        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>1. Information We Collect</h4>
        <p style={{ color: '#1e3a8a' }}>
          We collect information you provide directly to us, such as when you create an account, 
          request services, or contact us. This may include:
        </p>
        <ul style={{ color: '#1e3a8a' }}>
          <li>Personal information (name, email address, phone number)</li>
          <li>Business information (company name, project requirements)</li>
          <li>Technical information (IP address, browser type, device information)</li>
        </ul>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>2. How We Use Your Information</h4>
        <p style={{ color: '#1e3a8a' }}>We use the information we collect to:</p>
        <ul style={{ color: '#1e3a8a' }}>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Send you technical notices and support messages</li>
          <li>Communicate with you about services, offers, and events</li>
        </ul>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>3. Information Sharing and Disclosure</h4>
        <p style={{ color: '#1e3a8a' }}>
          We do not sell, trade, or rent your personal information to third parties. 
          We may share your information only in the following circumstances:
        </p>
        <ul style={{ color: '#1e3a8a' }}>
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and interests</li>
          <li>With service providers who assist us in operations</li>
        </ul>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>4. Data Security</h4>
        <p style={{ color: '#1e3a8a' }}>
          We implement appropriate technical and organizational security measures to protect 
          your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>5. Your Rights Under Indian IT Act</h4>
        <p style={{ color: '#1e3a8a' }}>Under the Information Technology Act, 2000 and related rules, you have the right to:</p>
        <ul style={{ color: '#1e3a8a' }}>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>6. Contact Information</h4>
        <p style={{ color: '#1e3a8a' }}>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: privacy@staysafeit.com
          <br />
          Address: Delhi, India
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>7. Changes to This Policy</h4>
        <p style={{ color: '#1e3a8a' }}>
          We may update this Privacy Policy from time to time. We will notify you of any changes 
          by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
      </div>
    </Modal>
  );
};

export default PrivacyPolicyModal;
