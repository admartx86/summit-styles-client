import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useProductState from './useProductState';
import { FavoritesContext } from '../contexts/FavoritesContext';

const ProductList = ({ category }) => {
  const { products, setProducts } = useProductState();
  const navigate = useNavigate();
  const { isFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`, { withCredentials: true });
      let productList = res.data;

      if (category) {
        productList = productList.filter(product => product.category.includes(category));
      }

      setProducts(productList);
    };

    fetchData();
  }, [category, setProducts]);

  const navigateToProduct = (productId) => {
    navigate(`/shop/product/${productId}`);
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div 
          key={product.id} 
          className="listed-product" 
          onClick={() => navigateToProduct(product.id)}
        >
          <div className="product" style={{ 
    backgroundColor: isFavorite[product.id] ? "#A74C4F" : "initial",
    padding: "5px"
  }}>
            <img src={product.image} alt={product.name} />
            <h2 className='product-name' style={{ color: isFavorite[product.id] ? "white" : "initial" }}>{product.name}</h2>
            <p className='product-price' style={{ color: isFavorite[product.id] ? "white" : "initial" }}>{`$${product.price.toFixed(2)}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;