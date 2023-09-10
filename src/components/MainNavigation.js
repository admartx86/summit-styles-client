import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';

const MainNavigation = () => {
    return(
        <nav className="main-navigation">
            <HamburgerMenu />
        <Link to="/" className="main-navigation-link" ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/home-32-px.png" alt=''/><p>Home</p></Link>
        <Link to="/shop" className="main-navigation-link" ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/shop-32-px.png" alt=''/><p>Shop</p></Link>
        <Link to="/wishlist" className="main-navigation-link" ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/heart-32-px.png" alt='' /><p>Favorites</p></Link>
        <Link to="/cart" className="main-navigation-link" ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/cart-32-px.png" alt='' /><p>Cart</p></Link>
        <Link to="/account" className="main-navigation-link" ><img src="https://summit-styles.s3.us-east-2.amazonaws.com/user-32-px.png" alt='' /><p>My Account</p></Link>
        {/*<Link to="/about">About</Link>*/}
        </nav>
    )
}

export default MainNavigation;