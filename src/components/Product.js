import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { onRemoveFromFavorites } from './RemoveFromFavorites';

const Product = (
  {
  productId, productImage, productName, productDescription, productPrice, productColor, productSize,
  renderDescription, renderColor, renderSize, renderQuantity,
  renderAddToCart
  }
  // renderAddToFavorites, renderRemoveFromFavorites
) => {
  
  const [selectedColor, setSelectedColor] = useState(productColor && productColor.length > 0 ? productColor[0] : null);
  const [selectedSize, setSelectedSize] = useState(productSize && productSize.length > 0 ? productSize[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState([]);
  // const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-products`, { withCredentials: true });
      if (res.status === 200) {
        setProducts(res.data.products);
      }
    };
    fetchProducts();
  }, []);
  
  useEffect(() => { //debug
    console.log('Updated favoriteItems:', favoriteItems); //debug
  }, [favoriteItems]); //debug

  // useEffect(() => { //debug
  //   console.log('renderAddToFavorites:', renderAddToFavorites); //debug
  //   console.log('renderRemoveFromFavorites:', renderRemoveFromFavorites); //debug
  // }, [renderAddToFavorites, renderRemoveFromFavorites]); //debug

  // const onAddToCart = async (productDetails) => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_BACKEND_URL}/add-to-cart`,
  //       { item: productDetails },
  //       { withCredentials: true }
  //     );
  //     if (response.status === 200) {
  //       alert("Item successfully added to cart.");
  //     }
  //   }
  //   catch (error) {
  //     console.error("There was an error adding the item to the cart:", error);
  //   }
  // };
  
  // const onAddToFavorites = async (productDetails) => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_BACKEND_URL}/add-to-favorites`,
  //       { item: productDetails },
  //       { withCredentials: true }
  //     );  
  //     if (response.status === 200) {
  //       localStorage.setItem('scrollPosition', window.scrollY);
  //       window.location.reload();
  //     }
  //   }
  //   catch (error) {
  //     console.error("There was an error adding the item to favorites:", error);
  //   }
  // };

  // const handleRemoveFromFavorites = async () => {
  //   await onRemoveFromFavorites(
  //     {
  //     productId, productImage, productName, productPrice, quantity, selectedColor, selectedSize
  //     },
  //     setFavoriteItems
  //   );
  //   setIsFavorite(false);
  // };

  return (
    
  );
};

export default Product;

Product.defaultProps = {
  productImage: "https://via.placeholder.com/150",
  productName: "Default Product Name",
  productDescription: "Default Product Description",
  productColor: ["Black", "Blue", "Gray", "Green", "Red", "White"],
  productSize: ["XS", "S", "M", "L", "XL", "XXL"],
  productQuantity: 1,
  productPrice: 36.12
};