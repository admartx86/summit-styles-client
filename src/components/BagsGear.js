import React from 'react';
import ProductList from './ProductList';

const BagsGear = () => {
    return(
        <div>
        <h1  className='shop-title'>Bags & Gear</h1>
        <ProductList category='bags-and-gear' />
        </div>
    );
}

export default BagsGear;