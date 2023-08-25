import React from 'react';
import Shop from "./Shop";
import MyAccount from "./MyAccount";
import Wishlist from './Wishlist';
import ShoppingCart from "./ShoppingCart";
import About from "./About";
import Home from "./Home";
import { Routes, Route, Outlet } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import '../css/styles.css';
import MainNavigation from "./MainNavigation";
import SiteLogo from "./SiteLogo";

const App = () => {
  
  return (
    <div>
      <header>
        <SiteLogo />
        <MainNavigation />
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

export default App;