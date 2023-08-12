import React, { Component } from "react";
import Shop from "./Shop";
import MyAccount from "./MyAccount";
import Wishlist from './Wishlist';
import ShoppingCart from "./ShoppingCart";
import About from "./About";
import Home  from "./Home";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import '../css/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <div>
          <h1>🏔 Summit Styles</h1>
        </div>
        <nav className="main-navigation">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        {/*<Link to="/account">My Account</Link>*/}
        {/*<Link to="/wishlist">Wishlist</Link>*/}
        <Link to="/cart">Shopping Cart</Link>
        {/*<Link to="/about">About</Link>*/}
        </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Outlet />
        <footer>
        <FooterLinks />
        <SocialMediaLinks />
        <Newsletter />
        </footer>
      </div>

    );
  }
}

export default App;