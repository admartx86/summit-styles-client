import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useProductState from './useProductState';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const {
    products,
    setProducts,
    favoriteItems,
    setFavoriteItems,
    isFavorite,
    setIsFavorite,
    productImage,
    setProductImage,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    quantity,
    setQuantity,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    onAddToCart,
    handleRemoveFromFavorites,
    onAddToFavorites,
    initializeProductState
  } = useProductState(product);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`, { withCredentials: true });
      setProduct(res.data);
      initializeProductState(res.data);
      setProducts([res.data]); //debug
    };
    fetchData();
  }, [productId]);

  useEffect(() => {
    if (favoriteItems.length > 0 && products.length > 0) {
      const favoriteIds = favoriteItems.map(item => item.id);
      setIsFavorite({ [productId]: favoriteIds.includes(Number(productId)) });
    }
  }, [favoriteItems, products, productId]);
  
  if (!product) {
    return <p>Loading...</p>;
  }
  // const renderColor = product.color == null ? false : true;
  // const renderSize = product.size == null ? false : true;

  return (
    <div className="product-page">
      <div className="product">
        <img src={product.image} alt={product.name} />
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{`$${product.price.toFixed(2)}`}</p>
          <div className="product-color">
            <label>Color: </label>
            <select>
              {product.color.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="product-size">
            <label>Size: </label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              {product.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="product-quantity">
            <label>Quantity: </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
          </div>
          <div className="product-buttons">
            <button onClick={() => onAddToCart({
              productId,
              productImage,
              productName,
              productPrice,
              quantity,
              selectedColor,
              selectedSize,
            })}
            >
              Add to Cart
            </button>
            {isFavorite[productId] ? (
              <button onClick={() => handleRemoveFromFavorites({
                productId,
                productImage,
                productName,
                productPrice,
                quantity,
                selectedColor,
                selectedSize,
              })}
              >
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => onAddToFavorites({
                productId,
                productImage,
                productName,
                productPrice,
                quantity,
                selectedColor,
                selectedSize,
              })}
              >
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;