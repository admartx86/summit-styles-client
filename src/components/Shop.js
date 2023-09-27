import React from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import Sale from './Sale';
import NewFeatured from './NewFeatured';
import Womens from './Womens';
import Mens from './Mens';
import Kids from './Kids';
import BagsGear from './BagsGear';
import ProductPage from './ProductPage';
import { usePersistedUser } from './usePersistedUser';

const Redirect = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/shop/sale');
  }, [navigate]);
  return null;
};

const Shop = () => {
  usePersistedUser();

  return (
    <div>
      <nav className="shop-nav">
        <Link to="/shop/sale" className="shop-nav-link">
          Sale
        </Link>
        <Link to="/shop/new-featured" className="shop-nav-link">
          New & Featured
        </Link>
        <Link to="/shop/womens" className="shop-nav-link">
          Women's
        </Link>
        <Link to="/shop/mens" className="shop-nav-link">
          Men's
        </Link>
        <Link to="/shop/kids" className="shop-nav-link">
          Kids
        </Link>
        <Link to="/shop/bags-gear" className="shop-nav-link">
          Bags & Gear
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Redirect to="sale" />} />
        <Route path="sale" element={<Sale />} />
        <Route path="new-featured" element={<NewFeatured />} />
        <Route path="womens" element={<Womens />} />
        <Route path="mens" element={<Mens />} />
        <Route path="kids" element={<Kids />} />
        <Route path="bags-gear" element={<BagsGear />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Shop;
