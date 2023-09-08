import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        // Fetch products
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`, { withCredentials: true });

  
        let productList = res.data;
  
        // Filter products by category if a category is specified
        if (category) {
          productList = productList.filter(product => product.category.includes(category));
        }
  
        setProducts(productList);
      };
  
      fetchData();
  
    }, [category]);
  
    // ... rest of the code ...
    
    const navigateToProduct = (productId) => {
      navigate(`/shop/product/${productId}`);
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="listed-product" onClick={() => navigateToProduct(product.id)}>
                    <Product
                        key={product.id}
                        productImage={product.image}
                        productName={product.name}
                        productDescription={product.description}
                        productPrice={product.price}
                        productColor={product.color}
                        productSize={product.size}
                        productCategory={product.category}
                        //onAddToCart={...}  // Add respective functions
                        //onAddToWishlist={...} // Add respective functions
                        renderAddToCart={false}
                        renderAddToWishlist={false}
                        renderColor={false}
                        renderSize={false}
                        renderQuantity={false}
                        renderDescription={false}
                    />

                    {/* <Link to={`/shop/product/${product.id}`}>View Details</Link> */}
                </div>
            ))}
        </div>
    );
};

export default ProductList;