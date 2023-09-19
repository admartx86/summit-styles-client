const removeFromCart = async (productDetails) => {
    if (!productDetails.productId || !productDetails.size) {
      alert('Invalid product details.');
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/remove-from-cart/${productDetails.productId}/${productDetails.size}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        let found = false;
        const newCartItems = cartItems.filter(item => {
          if (item.id === Number(productDetails.productId) && item.size === productDetails.size && !found) {
            found = true;
            return false;
          }
          return true;
        });
        
        console.log("New Cart Items: ", newCartItems);
        setCartItems(newCartItems);
        console.log("Cart Items: ", cartItems);
      }
    } catch (error) {
      console.error("There was an error removing the item from cart:", error);
    }
  };


  const handleRemoveFromFavorites = async (productDetails) => {
    try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/remove-from-favorites/${productDetails.productId}`,
          { withCredentials: true }
        );
        if (response.status === 200) {
          const oldFavoriteItems = favoriteItems.filter(item => item.id !== Number(productId));
            setFavoriteItems(oldFavoriteItems);
            console.log('Successfully removed item from favorites.'); //debug
          console.log('response.data:', response.data); //debug
        }
      }
      catch (error) {
        console.error("There was an error removing the item from favorites:", error);
      }
    setIsFavorite(false);
  };

  export const onRemoveFromFavorites = async (productDetails) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/remove-from-favorites/${productDetails.productId}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        console.log('Successfully removed item from favorites.'); //debug
        console.log('response.data:', response.data); //debug
      }
    }
    catch (error) {
      console.error("There was an error removing the item from favorites:", error);
    }
  };