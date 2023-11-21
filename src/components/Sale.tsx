import React from 'react';
import ProductList from './ProductList';

const Sale = () => {
  return (
    <div>
      <h1 className='shop-title'>Sale</h1>
      <section>
        <ProductList category="sale" />
      </section>
    </div>
  );
};

export default Sale;
