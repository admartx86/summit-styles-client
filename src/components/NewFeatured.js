import React from 'react';
import ProductList from './ProductList';

const NewFeatured = () => {
  return (
    <div>
      <h1 className="shop-title">New & Featured</h1>
      <section>
        <ProductList category="new-and-featured" />
      </section>
    </div>
  );
};

export default NewFeatured;
