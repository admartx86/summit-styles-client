import React from 'react';
import products from '../productData';
import { useParams } from 'react-router-dom';  // Step 1: Import useParams
import Product from './Product';
import ProductList from './ProductList';
import Sale from './Sale';
import NewFeatured from './NewFeatured';
import Womens from './Womens';
import Mens from './Mens';
import Kids from './Kids';
import BagsGear from './BagsGear';
import { Routes, Route, Outlet} from 'react-router-dom';

const ProductPage = () => {   // Step 3: Remove productId from parameters
    const { productId } = useParams();  // Step 2: Extract productId from the URL

    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <p>Product not found!</p>;
    }

    const renderColor = product.color == null ? false : true;
    const renderSize = product.size == null ? false : true;

    return (
        <div>
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
                        renderAddToCart={true}
                        renderAddToWishlist={true}
                
                        renderColor={renderColor}
                        
                        renderSize={renderSize}
                        renderQuantity={true}
                        renderDescription={true}
                    />
                <Routes>
                <Route path="/" element={<Sale />} />
                {/* <Route path="sale" element={<Sale />} />
                <Route path="new-featured" element={<NewFeatured />} />
                <Route path="womens" element={<Womens />} />
                <Route path="mens" element={<Mens />} />
                <Route path="kids" element={<Kids />} />
                <Route path="bags-gear" element={<BagsGear />} />
                <Route path="product/:productId" element={<ProductPage />} /> */}
            </Routes>
            <Outlet />
            {/* <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Size: {product.size}</p>
            <p>Category: {product.category}</p> */}
        </div>
    );
}

export default ProductPage;