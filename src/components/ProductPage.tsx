import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useProductState from './useProductState';
import { CartContext } from '../contexts/CartContext';
import { FavoritesContext } from '../contexts/FavoritesContext';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { showCard, handleShowCard } = useContext(CartContext);

  const {
    products,
    setProducts,
    productImage,
    productName,
    productPrice,
    quantity,
    setQuantity,
    selectedColor,
    selectedSize,
    setSelectedSize,
    onAddToCart,
    initializeProductState
  } = useProductState(product);

  const { favoriteItems, isFavorite, setIsFavorite, removeFromFavorites, addToFavorites } =
    useContext(FavoritesContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`, {
        withCredentials: true
      });
      setProduct(res.data);
      initializeProductState(res.data);
    };
    fetchData();
  }, [productId]);

  useEffect(() => {
    if (favoriteItems.length > 0 && products.length > 0) {
      const favoriteIds = favoriteItems.map((item) => item.id);
      setIsFavorite({ [productId]: favoriteIds.includes(Number(productId)) });
    }
  }, [favoriteItems, products, productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-page">
      <article className="product">
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
            <button
              onClick={() => {
                onAddToCart({
                  productId,
                  productImage,
                  productName,
                  productPrice,
                  quantity,
                  selectedColor,
                  selectedSize
                });
                handleShowCard();
              }}
            >
              Add to Cart
            </button>
            {isFavorite[productId] ? (
              <button
                className="remove-from-favorites-button"
                onClick={() => removeFromFavorites(productId)}
              >
                ❤️ Favorite
              </button>
            ) : (
              <button
                className="add-to-favorites-button"
                onClick={() =>
                  addToFavorites({
                    productId,
                    productImage,
                    productName,
                    productPrice,
                    quantity,
                    selectedColor,
                    selectedSize
                  })
                }
              >
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      </article>

      <div className={`card ${showCard ? 'show' : ''}`}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <img src={productImage} width="80" />
          <span style={{ fontWeight: 'Bold' }}>Added to cart!</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
