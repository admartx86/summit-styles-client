import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 975 && isOpen) {
          setIsOpen(false);
        }
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu} className="hamburger-button">
      
      {isOpen ? '✕' : '☰'}
      </button>
      {isOpen && (
        <div className="menu-content">
        <Link to="/" className="hamburger-menu-link" onClick={handleLinkClick} ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/home-32-px.png" /><p>Home</p></Link>
        <Link to="/shop" className="hamburger-menu-link" onClick={handleLinkClick} ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/shop-32-px.png" /><p>Shop</p></Link>
        <Link to="/wishlist" className="hamburger-menu-link" onClick={handleLinkClick} ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/heart-32-px.png" /><p>Favorites</p></Link>
        <Link to="/cart" className="hamburger-menu-link" onClick={handleLinkClick} ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/cart-32-px.png" /><p>Cart</p></Link>
        <Link to="/account" className="hamburger-menu-link" onClick={handleLinkClick} ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/user-32-px.png" /><p>My Account</p></Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;