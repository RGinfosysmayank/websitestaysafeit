import React from 'react';
import Modal from './Modal';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <div style={{ maxHeight: '60vh', overflowY: 'auto', lineHeight: '1.6', color: '#1e3a8a' }}>
        <h3 style={{ color: '#2c3e50', fontWeight: 'bold' }}>Terms of Service for StaySafe IT Solutions</h3>
        <p style={{ color: '#1e3a8a' }}><strong>Last Updated:</strong> September 2025</p>
        
        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>1. Acceptance of Terms</h4>
        <p style={{ color: '#1e3a8a' }}>
          By accessing and using the services provided by StaySafe IT Solutions ("Company", "we", "us"), 
          you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>2. Description of Service</h4>
        <p style={{ color: '#1e3a8a' }}>
          StaySafe IT Solutions provides web development, mobile app development, software consulting, 
          and related IT services. We reserve the right to modify, suspend, or discontinue any part 
          of our service at any time.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>3. User Obligations</h4>
        <p style={{ color: '#1e3a8a' }}>You agree to:</p>
        <ul style={{ color: '#1e3a8a' }}>
          <li>Provide accurate and complete information</li>
          <li>Use our services for lawful purposes only</li>
          <li>Not interfere with or disrupt our services</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Respect intellectual property rights</li>
        </ul>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>4. Payment Terms</h4>
        <p style={{ color: '#1e3a8a' }}>
          Payment terms will be specified in individual project agreements. All payments are due 
          as per the agreed schedule. Late payments may incur additional charges as per Indian 
          commercial law.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>5. Intellectual Property</h4>
        <p style={{ color: '#1e3a8a' }}>
          All original work created by StaySafe IT Solutions remains our intellectual property until 
          full payment is received. Upon full payment, rights to the delivered work transfer to the client, 
          except for our proprietary tools and methodologies.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>6. Limitation of Liability</h4>
        <p style={{ color: '#1e3a8a' }}>
          To the maximum extent permitted by Indian law, StaySafe IT Solutions shall not be liable 
          for any indirect, incidental, special, consequential, or punitive damages, including without 
          limitation, loss of profits, data, or business interruption.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>7. Termination</h4>
        <p style={{ color: '#1e3a8a' }}>
          Either party may terminate the service agreement with written notice as specified in the 
          individual project contract. Upon termination, all outstanding payments become due immediately.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>8. Governing Law</h4>
        <p style={{ color: '#1e3a8a' }}>
          These terms shall be governed by and construed in accordance with the laws of India, 
          including the Information Technology Act, 2000, and e-commerce regulations.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>9. Dispute Resolution</h4>
        <p style={{ color: '#1e3a8a' }}>
          Any disputes arising out of these terms shall be resolved through arbitration in Delhi, India, 
          in accordance with the Arbitration and Conciliation Act, 1996.
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>10. Contact Information</h4>
        <p style={{ color: '#1e3a8a' }}>
          For questions regarding these Terms of Service, contact us at:
          <br />
          Email: legal@staysafeit.com
          <br />
          Address: Delhi, India
        </p>

        <h4 style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '1.5rem' }}>11. Amendments</h4>
        <p style={{ color: '#1e3a8a' }}>
          We reserve the right to modify these terms at any time. Changes will be effective immediately 
          upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
        </p>
      </div>
    </Modal>
  );
};

export default TermsOfServiceModal;
