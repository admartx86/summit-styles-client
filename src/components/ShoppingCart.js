import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShoppingCart = ({ removeFromCart }) => {
  const [cartItems, setCartItems] = useState([]);

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
    return cartItems.reduce(
      (acc, item) => acc + item.productPrice * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {Array.isArray(cartItems) && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Array.isArray(cartItems) && cartItems.map((item, index) => (
            <div className="cart-item">
            <li key={index}>
            <img src={item.image} alt={item.name} width="50" height="50" />
              <span>{item.name}</span>
              <span>{` - $${item.price} x ${item.quantity}`}</span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
            </div>
          ))}
        </ul>
      )}
      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
};

export default ShoppingCart;
