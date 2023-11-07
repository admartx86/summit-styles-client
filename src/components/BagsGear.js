import React from 'react';
import ProductList from './ProductList';

const BagsGear = () => {
  return (
    <div>
      <h1 className="shop-title">Bags & Gear</h1>
      <section>
        <ProductList category="bags-and-gear" />
      </section>
    </div>
  );
};

export default BagsGear;
