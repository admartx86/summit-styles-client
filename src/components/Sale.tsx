import React from 'react';
import ProductList from './ProductList';

const Sale: React.FC = () => {
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
