import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    // useEffect(() => {
    //   const handleResize = () => {
    //     if (window.innerWidth > 975 && isOpen) {
    //       setIsOpen(false);
    //       setIsShopMenuOpen(false);
    //     }
    //     setWindowWidth(window.innerWidth);
    //   };
  
    //   window.addEventListener('resize', handleResize);
      
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, [ isOpen, isShopMenuOpen]);

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

    return (
      <div className="hamburger-menu">
        <button onClick={toggleMenu} className="hamburger-button">
          {isOpen || isShopMenuOpen ? '✕' : '☰'}
        </button>
        {isOpen && !isShopMenuOpen && (
          <div className="menu-content">
            <Link to="/" className="hamburger-menu-link" onClick={closeMenus}>
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/home-32-px.png" alt=''/><p>Home</p></Link>
            <button onClick={toggleShopMenu} className="hamburger-menu-link shop-button">
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/shop-32-px.png" alt=''/><p>Shop</p>
            </button>
            <Link to="/wishlist" className="hamburger-menu-link" onClick={closeMenus}>
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/heart-32-px.png" alt='' /><p>Favorites</p>
            </Link>
            <Link to="/cart" className="hamburger-menu-link" onClick={closeMenus}>
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/cart-32-px.png" alt='' /><p>Cart</p>
            </Link>
            <Link to="/account" className="hamburger-menu-link" onClick={closeMenus}>
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/user-32-px.png" alt='' /><p>My Account</p>
            </Link>
          </div>
        )}
        {isShopMenuOpen && (
          <div className="menu-content">
             <Link to="/shop/sale" className="hamburger-menu-link" onClick={closeMenus}>Sale</Link>
                <Link to="/shop/new-featured" className="hamburger-menu-link" onClick={closeMenus}>New & Featured</Link>
                <Link to="/shop/womens" className="hamburger-menu-link" onClick={closeMenus} >Women's</Link>
                <Link to="/shop/mens" className="hamburger-menu-link" onClick={closeMenus}>Men's</Link>
                <Link to="/shop/kids" className="hamburger-menu-link" onClick={closeMenus}>Kids</Link>
                <Link to="/shop/bags-gear" className="hamburger-menu-link" onClick={closeMenus}>Bags & Gear</Link>
          </div>
        )}
      </div>
    );
};

export default HamburgerMenu;