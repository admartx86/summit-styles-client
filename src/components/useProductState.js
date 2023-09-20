import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductState = (initialProduct) => {
  const [products, setProducts] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isFavorite, setIsFavorite] = useState({});
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

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

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-favorites`, { withCredentials: true });
      if (response.status === 200) {
        setFavoriteItems(response.data.favorites);
        const favoriteIds = response.data.favorites.map(item => item.id);
        let favoriteStatus = {};
        products.forEach(product => {
          favoriteStatus[product.id] = favoriteIds.includes(Number(product.id));
        });
        setIsFavorite(favoriteStatus);
      }
    };
    fetchFavorites();
  }, [products, favoriteItems]);

  const onAddToCart = async ({ productId, productImage, productName, productPrice, quantity, selectedColor, selectedSize }) => {
    try {
      console.log(productId, productImage, productName, productPrice, quantity, selectedColor, selectedSize);
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
        alert("Item successfully added to cart.");
      }
    } catch (error) {
      console.error("There was an error adding the item to the cart:", error);
      alert("Unable to add to cart. Please try again.");
    }
  };

  const handleRemoveFromFavorites = async ({ productId, productImage, productName, productPrice, quantity, selectedColor, selectedSize }) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/remove-from-favorites/${productId}`,
        { withCredentials: true }
      );
  
      if (response.status === 200) {
        console.log('Successfully removed item from favorites.'); // debug
        console.log('response.data:', response.data); // debug
        
        // Do whatever you need to update the state, like setting favorite items
        setIsFavorite({ ...isFavorite, [productId]: false });
      }
    }
    catch (error) {
      console.error("There was an error removing the item from favorites:", error);
    }
  };
  

    const onAddToFavorites = async ({ productId, productImage, productName, productPrice, quantity, selectedColor, selectedSize }) => {
    // No need to destructure from `product`
        const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/add-to-favorites`,
        { 
            item: { 
            productId, 
            productImage, 
            productName, 
            productPrice 
            } 
        },
        { withCredentials: true }
        );
        if (response.status === 200) {
        setIsFavorite({ ...isFavorite, [productId]: true });
        }
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
    handleRemoveFromFavorites,
    onAddToFavorites,
    initializeProductState
  };
};

export default useProductState;