import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import axios from 'axios';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { username, setUsername } = useContext(UserContext); // Destructure setUsername
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

    const handleLogout = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/logout`,
              {},
              { withCredentials: true }
          );
          console.log('Logout post request successful', res.data);
          setUsername(null); // Reset the username in global context
          navigate("/");
          
          
      } catch (error) {
          console.log('Logout post request failed', error);
      }
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
            <Link to="/favorites" className="hamburger-menu-link" onClick={closeMenus}>
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/heart-32-px.png" alt='' /><p>Favorites</p>
            </Link>
            <Link to="/cart" className="hamburger-menu-link" onClick={closeMenus}>
            <img src="https://summit-styles.s3.us-east-2.amazonaws.com/cart-32-px.png" alt='' /><p>Cart</p>
            </Link>
            <Link to="/account" className="hamburger-menu-link" onClick={closeMenus} >
                    <img src="https://summit-styles.s3.us-east-2.amazonaws.com/user-32-px.png" alt='' />
                    { username ? (
                    <p>Account</p>
                    ) : (
                        <p>Sign In / Register</p>
                    )}
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