import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = async (productDetails) => {
    if (!productDetails.productId || !productDetails.size) {
      alert('Invalid product details.');
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/remove-from-cart/${productDetails.productId}/${productDetails.size}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        alert("Item successfully removed from cart.");
        window.location.reload();
      }
    } catch (error) {
      console.error("There was an error removing the item from cart:", error);
    }
    
  }; 

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-cart` , { withCredentials: true })
      .then(response => {
        if (Array.isArray(response.data.cart)) {
            console.log("Response Data: ", response.data); 
            setCartItems(response.data.cart);
        }
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const calculateTotal = () => {
    console.log("Cart Items: ", cartItems);
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {Array.isArray(cartItems) && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {Array.isArray(cartItems) && cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <Link to={`/shop/product/${item.id}`}>
             
              <img src={item.image} alt={item.name} width="50" height="50" />
              <div>{item.name}</div>
              <div>{item.size}</div>
              <div>{` - $${item.price} x ${item.quantity}`}</div>
             
              </Link>
              <button onClick={() => removeFromCart({productId: item.id, size: item.size})}>Remove</button>

            
            </div>
          ))}
        </div>
      )}
      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
};

export default ShoppingCart;
