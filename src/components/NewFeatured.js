import React from 'react';
import ProductList from './ProductList';

const NewFeatured = () => {
  return (
    <div>
      <h1 className="shop-title">New & Featured</h1>
      <ProductList category="new-and-featured" />
    </div>
  );
};

export default NewFeatured;
