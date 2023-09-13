import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import axios from 'axios';  // Import axios
import { useParams } from 'react-router-dom';
import Product from './Product';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sale from './Sale';

const ProductPage = () => {
    const [product, setProduct] = useState(null); // Create a state variable for product
    const { productId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            // Fetch specific product data by productId
            console.log("Product ID:", productId);
            console.log("Backend URL:", `${process.env.REACT_APP_BACKEND_URL}/products/${productId}`);
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`, { withCredentials: true });
                setProduct(res.data);
              } catch (error) {
                console.error("There was an error fetching the data", error);
              }
              
            
        };
        
        fetchData();
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>;  // Show loading message until the data is fetched
    }

    const renderColor = product.color == null ? false : true;
    const renderSize = product.size == null ? false : true;

    return (
        <div>
            <div className="product-page">
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
            </div>
            <Routes>
                <Route path="/*" element={<Sale />} />
            </Routes>
            <Outlet />
        </div>
    );
};

export default ProductPage;