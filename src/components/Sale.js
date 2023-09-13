import React from 'react';
import ProductList from './ProductList';

const Sale = () => {
    return (
        <div>
            <h1 className='shop-title'>Sale</h1>
            <ProductList category="sale" /> 
        </div>
    );
}

    export default Sale;