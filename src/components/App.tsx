import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import { CartProvider } from '../contexts/CartContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';

import '../css/styles.css';

import SiteLogo from './SiteLogo';
import MainNavigation from './MainNavigation';

import Home from './Home';
import Shop from './Shop';
import Favorites from './Favorites';
import ShoppingCart from './ShoppingCart';
import MyAccount from './MyAccount';

import FooterLinks from './FooterLinks';
import SocialMediaLinks from './SocialMediaLinks';
import Newsletter from './Newsletter';

import ScrollToTop from './ScrollToTop';

const App = () => {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <div>
      <CartProvider>
        <FavoritesProvider>
          <UserContext.Provider value={{ username, setUsername }}>
            <ScrollToTop />
            <header>
              <SiteLogo />
              <MainNavigation />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop/*" element={<Shop />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/account" element={<MyAccount />} />
              </Routes>
            </main>
            <footer>
              <FooterLinks />
              <SocialMediaLinks />
              <Newsletter />
            </footer>
          </UserContext.Provider>
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
};

export default App;
