import React from 'react';
import './AgeVerification.css';

const AgeVerification = ({ onVerified, onCancel }) => {
  return (
    <div className="age-verification-overlay">
      <div className="age-verification-modal">
        <h2>年齡驗證</h2>
        <p>您是否已年滿18歲？</p>
        <div className="button-group">
          <button className="verify-button" onClick={onVerified}>是，我已滿18歲</button>
          <button className="cancel-button" onClick={onCancel}>否，我未滿18歲</button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification; 