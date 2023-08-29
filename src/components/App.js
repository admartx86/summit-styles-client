import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import '../css/styles.css';

//<header>
import SiteLogo from './SiteLogo';
import MainNavigation from './MainNavigation';

//<Routes>
import Home from './Home';
import Shop from './Shop';
import Wishlist from './Wishlist';
import ShoppingCart from './ShoppingCart';
import About from './About';
import MyAccount from './MyAccount';

//<footer>
import FooterLinks from './FooterLinks';
import SocialMediaLinks from './SocialMediaLinks';
import Newsletter from './Newsletter';

const App = () => {
  return (
    <div>
      <header>
        <SiteLogo />
        <MainNavigation />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/account' element={<MyAccount />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <footer>
        <FooterLinks />
        <SocialMediaLinks />
        <Newsletter />
      </footer>
    </div>
  );
}

export default App;