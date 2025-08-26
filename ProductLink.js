import React, { useState } from 'react';
import AgeVerification from './AgeVerification';
import './ProductLink.css';

const ProductLink = ({ to, children }) => {
  const [showAgeVerification, setShowAgeVerification] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowAgeVerification(true);
  };

  const handleVerificationSuccess = () => {
    setShowAgeVerification(false);
    window.location.href = to;
  };

  const handleVerificationCancel = () => {
    setShowAgeVerification(false);
  };

  return (
    <>
      <a href={to} onClick={handleClick} className="product-link">
        {children}
      </a>
      {showAgeVerification && (
        <AgeVerification
          onVerified={handleVerificationSuccess}
          onCancel={handleVerificationCancel}
        />
      )}
    </>
  );
};

export default ProductLink; 