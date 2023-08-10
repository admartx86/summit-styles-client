import React from 'react';
import products from '../productData';
import { useParams } from 'react-router-dom';  // Step 1: Import useParams

const ProductPage = () => {   // Step 3: Remove productId from parameters
    const { productId } = useParams();  // Step 2: Extract productId from the URL

    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Size: {product.size}</p>
            <p>Category: {product.category}</p>
        </div>
    );
}

export default ProductPage;