import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from './Product';

const ProductPage = () => {
  
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`, { withCredentials: true });
        setProduct(res.data);
      }
      catch (error) {
        console.error("There was an error fetching the data", error);
      }
    };
    fetchData();
  }, [productId]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-favorites`, {withCredentials: true,});
        if (response.status === 200) {
          setFavoriteItems(response.data.favorites);
          const favoriteIds = response.data.favorites.map(item => item.id);
          setIsFavorite(favoriteIds.includes(Number(productId)));
        }
      }
      catch (error) {
        console.error('Failed to fetch favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }
  
  const renderColor = product.color == null ? false : true;
  const renderSize = product.size == null ? false : true;
  
  return (
    <div className="product-page">
      <Product
        key={product.id}
        productId={productId}
        productImage={product.image}
        productName={product.name}
        productDescription={product.description}
        productPrice={product.price}
        productColor={product.color}
        productSize={product.size}
        productCategory={product.category}
        renderAddToCart={true}
        renderAddToFavorites={!isFavorite}
        renderRemoveFromFavorites={isFavorite}
        renderColor={renderColor}
        renderSize={renderSize}
        renderQuantity={true}
        renderDescription={true}
      />
    </div>
  );

};

export default ProductPage;