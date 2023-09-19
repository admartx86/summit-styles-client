import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { onRemoveFromFavorites } from './RemoveFromFavorites';

const Product = (
  {
  productId, productImage, productName, productDescription, productPrice, productColor, productSize,
  renderDescription, renderColor, renderSize, renderQuantity,
  renderAddToCart, renderAddToFavorites, renderRemoveFromFavorites
  }
) => {
  
  const [selectedColor, setSelectedColor] = useState(productColor && productColor.length > 0 ? productColor[0] : null);
  const [selectedSize, setSelectedSize] = useState(productSize && productSize.length > 0 ? productSize[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => { //debug
    console.log('Updated favoriteItems:', favoriteItems); //debug
  }, [favoriteItems]); //debug

  useEffect(() => { //debug
    console.log('renderAddToFavorites:', renderAddToFavorites); //debug
    console.log('renderRemoveFromFavorites:', renderRemoveFromFavorites); //debug
  }, [renderAddToFavorites, renderRemoveFromFavorites]); //debug

  const onAddToCart = async (productDetails) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/add-to-cart`,
        { item: productDetails },
        { withCredentials: true }
      );
      if (response.status === 200) {
        alert("Item successfully added to cart.");
      }
    }
    catch (error) {
      console.error("There was an error adding the item to the cart:", error);
    }
  };
  
  const onAddToFavorites = async (productDetails) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/add-to-favorites`,
        { item: productDetails },
        { withCredentials: true }
      );  
      if (response.status === 200) {
        localStorage.setItem('scrollPosition', window.scrollY);
        window.location.reload();
      }
    }
    catch (error) {
      console.error("There was an error adding the item to favorites:", error);
    }
  };

  const handleRemoveFromFavorites = async () => {
    await onRemoveFromFavorites(
      {
      productId, productImage, productName, productPrice, quantity, selectedColor, selectedSize
      },
      setFavoriteItems
    );
    setIsFavorite(false);
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="product-details">
        <h2 className='product-name'>{productName}</h2>
        {renderDescription ? (
          <p className='product-description'>{productDescription}</p>
          ) : 
          null
        }
        {productPrice ? (
          <p className='product-price'>{`$${productPrice.toFixed(2)}`}</p>
        ) : 'N/A'}
        {renderColor ? (
          <div className='product-color'>
            {productColor ? 
              <label>Color: </label> : null}
            {productColor ? (
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                {productColor.map((color) => (
                  <option key={color} value={color}>
                  {color}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        ) : null}
        <div className='product-size'>
          {renderSize ? (
            <div>
              <label>Size: </label>
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                {productSize.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
        {renderQuantity ? (
          <div className='product-quantity'>
            <label>Quantity: </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        ) : null}
        <div className='product-buttons'>
          {renderAddToCart ? (
            <button onClick={() => onAddToCart({productId, productImage, productName, productPrice, quantity, selectedColor, selectedSize})}>
              Add to Cart
            </button>          
          ) : null}
          {renderAddToFavorites ? (
            <button onClick={() => onAddToFavorites({productId, productImage, productName, productPrice, quantity, selectedColor, selectedSize})}>
              Add to Favorites
            </button>
          ) : null}
          {renderRemoveFromFavorites ? (
            <button onClick={handleRemoveFromFavorites}>
              Remove from Favorites
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.defaultProps = {
  productImage: "https://via.placeholder.com/150",
  productName: "Default Product Name",
  productDescription: "Default Product Description",
  productColor: ["Black", "Blue", "Gray", "Green", "Red", "White"],
  productSize: ["XS", "S", "M", "L", "XL", "XXL"],
  productQuantity: 1,
  productPrice: 36.12
};