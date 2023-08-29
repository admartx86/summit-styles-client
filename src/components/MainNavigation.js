import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
    return(
        <nav className="main-navigation">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/account">My Account</Link>
        {/*<Link to="/wishlist">Wishlist</Link>*/}
        <Link to="/cart">Shopping Cart</Link>
        {/*<Link to="/about">About</Link>*/}
        </nav>
    )
}

export default MainNavigation;