import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useProductState from './useProductState';

const ProductList = ({ category }) => {
  const { products, setProducts } = useProductState();
  const navigate = useNavigate();

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
          <div className="product">
            <img src={product.image} alt={product.name} />
            <h2 className='product-name'>{product.name}</h2>
            <p className='product-price'>{`$${product.price.toFixed(2)}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;