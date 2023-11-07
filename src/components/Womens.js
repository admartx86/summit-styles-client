import React from 'react';
import ProductList from './ProductList';

const Womens = () => {
  return (
    <div>
      <h1 className="shop-title">Women's</h1>
      <section>
        <ProductList category="womens" />
      </section>
    </div>
  );
};

export default Womens;
