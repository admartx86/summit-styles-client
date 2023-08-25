import React from 'react';
import Product from './Product';
import products from '../productData';
import { Link } from 'react-router-dom';

const ProductList = ({ category }) => {

    //const productIdsToRender = [1, 2, 3, 4, 5];

    //const filteredProducts = products.filter(product => productIdsToRender.includes(product.id));

    const filteredProducts = products.filter(product => product.category.includes(category));

    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <div key={product.id}>
                <Product
                    key={product.id}
                    productImage={product.image}
                    productName={product.name}
                    productDescription={product.description}
                    productPrice={product.price}
                    productColor={product.color}
                    productSize={product.size}
                    productCategory={product.category}
                    //onAddToCart={...}  // Add respective functions
                    //onAddToWishlist={...} // Add respective functions
                />
                <Link to={`/shop/product/${product.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;