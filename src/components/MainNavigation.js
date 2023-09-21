import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';
import UserContext from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';
import { FavoritesContext } from '../contexts/FavoritesContext';

const MainNavigation = () => {
    
   
    const { cartItems, setCartItems } = useContext(CartContext);

    const [totalCartItems, setTotalCartItems] = useState(0);
    const navigate = useNavigate();
    const [totalFavoriteItems, setTotalFavoriteItems] = useState(0);

    const { username, setUsername } = useContext(UserContext); 
    const {
        favoriteItems,
        setFavoriteItems,
        isFavorite,
        setIsFavorite,
        removeFromFavorites,
        addToFavorites,
      } = useContext(FavoritesContext);

   

      useEffect(() => {
        const total = calculateTotalItems();
        setTotalCartItems(total);
      }, [cartItems]);
      
      useEffect(() => {
        const totalFavorites = calculateTotalFavorites();
        setTotalFavoriteItems(totalFavorites);
      }, [favoriteItems]);
      
  const calculateTotalItems = () => {
    console.log("Cart Items: ", cartItems);
    return cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  };

  const calculateTotalFavorites = () => {
    console.log("Favorite Items: ", favoriteItems);
    return favoriteItems.length; 
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
            setUsername(null); 
            navigate("/");
        } catch (error) {
            console.log('Logout post request failed', error);
        }
    };

    

    return (
        
            
            <nav className="main-navigation">
            <div className="hello-user">
                {username ? (
                    <div>
                        <Link to="/account">Hello, <span>{username}</span></Link>
                    </div>
                ) : null }
            </div>
            <div className="main-navigation-links">
                <Link to="/" className="main-navigation-link" >
                    <img src="https://summit-styles.s3.us-east-2.amazonaws.com/home-32-px.png" alt='' />
                    <p>Home</p>
                </Link>
                <Link to="/shop" className="main-navigation-link" >
                    <img src="https://summit-styles.s3.us-east-2.amazonaws.com/shop-32-px.png" alt='' />
                    <p>Shop</p>
                </Link>
                <Link to="/favorites" className="main-navigation-link" >
                    <div className="favorites-icon-container">
                    <img className="favorites-icon" src="https://summit-styles.s3.us-east-2.amazonaws.com/heart-32-px.png" alt='' />
                    
                        
                        
                     { calculateTotalFavorites() == 0 ? null : <p className="total-favorite-items">{calculateTotalFavorites()}</p>}   
                     
                    </div>
                    <p>Favorites</p>
                </Link>
                <Link to="/cart" className="main-navigation-link" >
                    <div className="cart-icon-container">
                    <img className= "cart-icon" src="https://summit-styles.s3.us-east-2.amazonaws.com/cart-32-px.png" alt='' />

                        { calculateTotalItems() == 0 ? null : <p className="total-cart-items">{calculateTotalItems()}</p>}
                   
                    </div>
                    <p>Cart</p>
                    
                </Link>
                <Link to="/account" className="main-navigation-link" >
                    <img src="https://summit-styles.s3.us-east-2.amazonaws.com/user-32-px.png" alt='' />
                    { username ? (
                    <p>Account</p>
                    ) : (
                        <p>Sign In / Register</p>
                    )}
                </Link>
            </div>

                <HamburgerMenu />
            </nav>
        
    );
}

export default MainNavigation;
