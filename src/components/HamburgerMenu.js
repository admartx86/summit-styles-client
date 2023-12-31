import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { CartContext } from '../contexts/CartContext';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const { username } = useContext(UserContext);
  const { favoriteItems } = useContext(FavoritesContext);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsShopMenuOpen(false);
  };

  const toggleShopMenu = () => {
    setIsShopMenuOpen(true);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setIsShopMenuOpen(false);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const calculateTotalFavorites = () => {
    return favoriteItems.length;
  };

  return (
    <nav className="hamburger-menu">
      <button onClick={toggleMenu} className="hamburger-button">
        {isOpen || isShopMenuOpen ? '✕' : '☰'}
      </button>
      {isOpen && !isShopMenuOpen && (
        <div className="menu-content">
          <Link to="/" className="hamburger-menu-link" onClick={closeMenus}>
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/home-32-px.png" alt="" />
            <p>Home</p>
          </Link>

          <button onClick={toggleShopMenu} className="hamburger-menu-link shop-button">
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/shop-32-px.png" alt="" />
            <p>Shop</p>
          </button>
          <Link to="/favorites" className="hamburger-menu-link" onClick={closeMenus}>
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
          <Link to="/cart" className="hamburger-menu-link" onClick={closeMenus}>
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
          <Link to="/account" className="hamburger-menu-link" onClick={closeMenus}>
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/user-32-px.png" alt="" />
            {username ? <p>Account</p> : <p>Sign In / Register</p>}
          </Link>
        </div>
      )}
      {isShopMenuOpen && (
        <div className="menu-content submenu-content">
          <Link to="/shop/sale" className="hamburger-menu-sub-link" onClick={closeMenus}>
            Sale
          </Link>
          <Link to="/shop/new-featured" className="hamburger-menu-sub-link" onClick={closeMenus}>
            New & Featured
          </Link>
          <Link to="/shop/womens" className="hamburger-menu-sub-link" onClick={closeMenus}>
            Women's
          </Link>
          <Link to="/shop/mens" className="hamburger-menu-sub-link" onClick={closeMenus}>
            Men's
          </Link>
          <Link to="/shop/kids" className="hamburger-menu-sub-link" onClick={closeMenus}>
            Kids
          </Link>
          <Link to="/shop/bags-gear" className="hamburger-menu-sub-link" onClick={closeMenus}>
            Bags & Gear
          </Link>
        </div>
      )}
    </nav>
  );
};

export default HamburgerMenu;
