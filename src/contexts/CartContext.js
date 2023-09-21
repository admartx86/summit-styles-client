import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [hasAddedNewItem, setHasAddedNewItem] = useState(false);  // New state variable

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-cart`, { withCredentials: true })
      .then(response => {
        if (Array.isArray(response.data.cart)) {
          setCartItems(response.data.cart);
          if (hasAddedNewItem) {  // Only show the card if a new item has been added
            handleShowCard();
          }
        }
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
      });
  }, [hasAddedNewItem]);  // Dependency array now includes hasAddedNewItem

  const handleShowCard = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
      setHasAddedNewItem(false);  // Reset the flag after showing the card
    }, 1500);  // 1.5 seconds
  };

  // Expose an `addItemToCart` method that can be used to add items and set the `hasAddedNewItem` flag
  const addItemToCart = (item) => {
    // Your logic here to add an item to the cart, e.g., setCartItems([...cartItems, item]);
    setHasAddedNewItem(true);  // Set this flag whenever a new item is added
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, showCard, setShowCard, handleShowCard, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [showCard, setShowCard] = useState(false);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-cart`, { withCredentials: true })
//       .then(response => {
//         if (Array.isArray(response.data.cart)) {
//           setCartItems(response.data.cart);
//           handleShowCard();
//         }
//       })
//       .catch(error => {
//         console.error("Error fetching cart items:", error);
//       });
//   }, []);

//   const handleShowCard = () => {
//     setShowCard(true);
//     setTimeout(() => {
//       setShowCard(false);
//     }, 1500);  // 2 seconds
//   }; 

//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems, showCard, setShowCard, handleShowCard }}>
//       {children}
//     </CartContext.Provider>
//   );
// };