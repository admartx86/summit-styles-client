import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-cart`, { withCredentials: true })
      .then(response => {
        if (Array.isArray(response.data.cart)) {
          setCartItems(response.data.cart);
          handleShowCard();
        }
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const handleShowCard = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 1500);  // 2 seconds
  }; 

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, showCard, setShowCard, handleShowCard }}>
      {children}
    </CartContext.Provider>
  );
};