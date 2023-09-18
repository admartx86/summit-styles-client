import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';  // Don't forget to import axios
import HamburgerMenu from './HamburgerMenu';
import UserContext from '../contexts/UserContext';


const MainNavigation = () => {
    
    const navigate = useNavigate(); // Define navigate function

    const { username, setUsername } = useContext(UserContext); // Destructure setUsername

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
                    <img src="https://summit-styles.s3.us-east-2.amazonaws.com/heart-32-px.png" alt='' />
                    <p>Favorites</p>
                </Link>
                <Link to="/cart" className="main-navigation-link" >
                    <img src="https://summit-styles.s3.us-east-2.amazonaws.com/cart-32-px.png" alt='' />
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
