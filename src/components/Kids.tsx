import React from 'react';
import ProductList from './ProductList';

const Kids = () => {
  return (
    <div>
      <h1 className="shop-title">Kids</h1>
      <section>
        <ProductList category="kids'" />
      </section>
    </div>
  );
};

export default Kids;
