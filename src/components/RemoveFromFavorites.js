import axios from 'axios';

export const onRemoveFromFavorites = async ({ productId }) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/remove-from-favorites/${productId}`,
      { withCredentials: true }
    );
    if (response.status === 200) {
      console.log('Successfully removed item from favorites.');
    }
  } catch (error) {
    console.error('There was an error removing the item from favorites:', error);
  }
};
