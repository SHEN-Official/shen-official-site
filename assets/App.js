import React from 'react';
import ProductLink from './ProductLink';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>產品列表</h1>
      <div className="product-grid">
        <ProductLink to="/product/1">
          <div className="product-card">
            <img src="CyberMaid_store_capsule_header.png" alt="產品1" />
            <h3>產品名稱</h3>
          </div>
        </ProductLink>
      </div>
    </div>
  );
}

export default App; 