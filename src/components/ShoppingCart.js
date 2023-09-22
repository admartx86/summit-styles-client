import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FavoritesContext } from '../contexts/FavoritesContext';

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { isFavorite, favoriteItems, setFavoriteItems, fetchFavorites } = useContext(FavoritesContext);

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-cart` , { withCredentials: true })
  //     .then(response => {
  //       if (Array.isArray(response.data.cart)) {
  //           console.log("Response Data: ", response.data); 
  //           setCartItems(response.data.cart);
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error fetching cart items:", error);
  //     });
     
  // }, []);

  useEffect(() => {
    // Uncomment if you wish to fetch cart items as well
    // fetchCartItems();
    fetchFavorites();
  }, []);



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
        let found = false;
        const newCartItems = cartItems.filter(item => {
          if (item.id === Number(productDetails.productId) && item.size === productDetails.size && !found) {
            found = true;
            return false;
          }
          return true;
        });
        
        console.log("New Cart Items: ", newCartItems);
        setCartItems(newCartItems);
        console.log("Cart Items: ", cartItems);
      }
    } catch (error) {
      console.error("There was an error removing the item from cart:", error);
    }
  }; 
  
  const calculateTotal = () => {
    console.log("Cart Items: ", cartItems);
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const calculateTotalItems = () => {
    console.log("Cart Items: ", cartItems);
    return cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {Array.isArray(cartItems) && cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          {Array.isArray(cartItems) && cartItems.map((item, index) => (
            <div className="cart-item" key={index} >
              
              <Link to={`/shop/product/${item.id}`} style={{ 
    backgroundColor: isFavorite[item.id] ? "#A74C4F" : "initial",
    padding: "10px"
  }}>
             <div>
              <img className="cart-image" src={item.image} alt={item.name}/>
              <div className="cart-item-name" style={{ color: isFavorite[item.id] ? "white" : "initial" }}>{item.name }</div>
             

              <div className="cart-item-size" style={{ color: isFavorite[item.id] ? "white" : "initial" }}>{item.size}</div>
              <div style={{ color: isFavorite[item.id] ? "white" : "initial" }}>{`$${item.price} x ${item.quantity}`}</div>
            
              </div>
              
              </Link>
             
              <div className="remove-from-cart-text">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                removeFromCart({productId: item.id, size: item.size});
              }}>Remove from cart</a>
              </div>
              {/* <button onClick={() => removeFromCart({productId: item.id, size: item.size})}>Remove</button> */}
             

            </div>
          ))}
        </div>
      )}
      {calculateTotalItems() > 0 ? (
      <div className="subtotal">
      <h2>Subtotal ({calculateTotalItems()} Item{calculateTotalItems() !== 1 ? 's' : null}) ${calculateTotal()}</h2>
            <button>Proceed to checkout</button>
      </div>
      ) : null}
    </div>
  );
  
};

export default ShoppingCart;