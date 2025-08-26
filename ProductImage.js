import React, { useState } from 'react';
import AgeVerification from './AgeVerification';
import './ProductImage.css';

const ProductImage = ({ src, alt, requiresAgeVerification = true }) => {
  const [showAgeVerification, setShowAgeVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleImageClick = (e) => {
    e.preventDefault();
    console.log('Image clicked');
    if (requiresAgeVerification && !isVerified) {
      console.log('Showing age verification');
      setShowAgeVerification(true);
    }
  };

  const handleVerificationSuccess = () => {
    console.log('Verification successful');
    setIsVerified(true);
    setShowAgeVerification(false);
  };

  const handleVerificationCancel = () => {
    console.log('Verification cancelled');
    setShowAgeVerification(false);
  };

  return (
    <div className="product-image-container" onClick={handleImageClick}>
      <img
        src={src}
        alt={alt}
        className={`product-image ${!isVerified && requiresAgeVerification ? 'blurred' : ''}`}
      />
      {showAgeVerification && (
        <AgeVerification
          onVerified={handleVerificationSuccess}
          onCancel={handleVerificationCancel}
        />
      )}
    </div>
  );
};

export default ProductImage; 