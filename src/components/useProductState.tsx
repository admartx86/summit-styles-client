import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext';
import { FavoritesContext } from '../contexts/FavoritesContext';

const useProductState = (initialProduct) => {
  const [products, setProducts] = useState([]);
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { setCartItems } = useContext(CartContext);

  const {
    favoriteItems,
    setFavoriteItems,
    isFavorite,
    setIsFavorite,
    addToFavorites,
    removeFromFavorites
  } = useContext(FavoritesContext);

  useEffect(() => {
    if (initialProduct) {
      setProductImage(initialProduct.image);
      setProductName(initialProduct.name);
      setProductPrice(initialProduct.price);
      setSelectedColor(initialProduct.color ? initialProduct.color[0] : null);
      setSelectedSize(initialProduct.size ? initialProduct.size[0] : null);
    }
  }, [initialProduct]);

  const initializeProductState = (product) => {
    if (product) {
      setProductImage(product.image);
      setProductName(product.name);
      setProductPrice(product.price);
      setSelectedColor(product.color ? product.color[0] : null);
      setSelectedSize(product.size ? product.size[0] : null);
    }
  };

  const onAddToCart = async ({
    productId,
    productImage,
    productName,
    productPrice,
    quantity,
    selectedColor,
    selectedSize
  }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/add-to-cart`,
        {
          item: {
            productId,
            productImage,
            productName,
            productPrice,
            quantity,
            selectedColor,
            selectedSize
          }
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        const newItem = {
          id: Number(productId),
          image: productImage,
          name: productName,
          price: productPrice,
          quantity: quantity,
          color: selectedColor,
          size: selectedSize
        };
        setCartItems((prevCartItems) => [...prevCartItems, newItem]);
      }
    } catch (error) {
      console.error('There was an error adding the item to the cart:', error);
      alert('Unable to add to cart. Please try again.');
    }
  };

  const calculateTotalFavorites = () => {
    return favoriteItems.length;
  };

  return {
    products,
    setProducts,
    favoriteItems,
    setFavoriteItems,
    isFavorite,
    setIsFavorite,
    productImage,
    setProductImage,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    quantity,
    setQuantity,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    onAddToCart,
    removeFromFavorites,
    addToFavorites,
    initializeProductState,
    calculateTotalFavorites
  };
};

export default useProductState;
