import React from 'react';
import ProductList from './ProductList';

const Mens = () => {
  return (
    <div>
      <h1 className="shop-title">Men's</h1>
      <ProductList category="mens" />
    </div>
  );
};

export default Mens;
