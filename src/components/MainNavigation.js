import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import UserContext from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';
import { FavoritesContext } from '../contexts/FavoritesContext';

const MainNavigation = () => {
  const { cartItems } = useContext(CartContext);
  const { username } = useContext(UserContext);
  const { favoriteItems } = useContext(FavoritesContext);

  const calculateTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const calculateTotalFavorites = () => {
    return favoriteItems.length;
  };

  return (
    <nav className="main-navigation">
      <div className="hello-user">
        {username ? (
          <div>
            <Link to="/account">
              Hello, <span>{username}</span>
            </Link>
          </div>
        ) : null}
      </div>
      <div className="main-navigation-links">
        <Link to="/" className="main-navigation-link">
          <img src="https://summit-styles.s3.us-east-2.amazonaws.com/home-32-px.png" alt="" />
          <p>Home</p>
        </Link>
        <Link to="/shop" className="main-navigation-link">
          <img src="https://summit-styles.s3.us-east-2.amazonaws.com/shop-32-px.png" alt="" />
          <p>Shop</p>
        </Link>
        <Link to="/favorites" className="main-navigation-link">
          <div className="favorites-icon-container">
            <img
              className="favorites-icon"
              src="https://summit-styles.s3.us-east-2.amazonaws.com/heart-32-px.png"
              alt=""
            />

            {calculateTotalFavorites() == 0 ? null : (
              <p className="total-favorite-items">{calculateTotalFavorites()}</p>
            )}
          </div>
          <p>Favorites</p>
        </Link>
        <Link to="/cart" className="main-navigation-link">
          <div className="cart-icon-container">
            <img
              className="cart-icon"
              src="https://summit-styles.s3.us-east-2.amazonaws.com/cart-32-px.png"
              alt=""
            />

            {calculateTotalItems() == 0 ? null : (
              <p className="total-cart-items">{calculateTotalItems()}</p>
            )}
          </div>
          <p>Cart</p>
        </Link>
        <Link to="/account" className="main-navigation-link">
          <img src="https://summit-styles.s3.us-east-2.amazonaws.com/user-32-px.png" alt="" />
          {username ? <p>Account</p> : <p>Sign In / Register</p>}
        </Link>
      </div>

      <HamburgerMenu />
    </nav>
  );
};

export default MainNavigation;
