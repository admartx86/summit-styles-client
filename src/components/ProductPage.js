import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { Routes, Route, Outlet } from 'react-router-dom';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Product ID:", productId);
      console.log("Backend URL:", `${process.env.REACT_APP_BACKEND_URL}/products/${productId}`);
      
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`, { withCredentials: true });
        setProduct(res.data);
        console.log("Product:", res.data);
      } catch (error) {
        console.error("There was an error fetching the data", error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const renderColor = product.color == null ? false : true;
  const renderSize = product.size == null ? false : true;

  return (
    <div>
      <div className="product-page">
        <Product
          
          key={product.id}
          productId={productId}
          productImage={product.image}
          productName={product.name}
          productDescription={product.description}
          productPrice={product.price}
          productColor={null}
          productSize={product.size}
          productCategory={product.category}
          //onAddToCart={...}  // Add respective functions
          //onAddToWishlist={...} // Add respective functions
          renderAddToCart={true}
          renderAddToFavorites={true}
          renderRemoveFromFavorites={false}
          renderColor={renderColor}
          renderSize={renderSize}
          renderQuantity={true}
          renderDescription={true}
        />
      </div>
      {/* <Routes>
        <Route path="/*" element={<`{product.category}` />} />
      </Routes>
      <Outlet /> */}
    </div>
  );
};

export default ProductPage;