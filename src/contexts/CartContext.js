import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-cart`, { withCredentials: true })
      .then(response => {
        if (Array.isArray(response.data.cart)) {
          setCartItems(response.data.cart);
        }
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};