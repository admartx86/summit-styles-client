import axios from 'axios';

export const onRemoveFromFavorites = async (productDetails) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/remove-from-favorites/${productDetails.productId}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error("There was an error removing the item from favorites:", error);
    }
    
  };  