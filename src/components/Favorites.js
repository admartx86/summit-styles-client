import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useProductState from './useProductState'; // Import the custom hook

const Favorites = () => {
  const { 
    favoriteItems, // Fetch favorite items from the hook
    handleRemoveFromFavorites // Use the function to remove items from favorites
  } = useProductState(null);

  // Fetch favorite items from the backend when the component mounts
  // This logic is already in the custom hook, so you can remove it from here
  useEffect(() => {
    // You can use your custom hook here for additional setup if necessary.
  }, []);

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      {Array.isArray(favoriteItems) && favoriteItems.length === 0 ? (
        <p>Add favorites to see them here.</p>
      ) : (
        <div>
          {Array.isArray(favoriteItems) && favoriteItems.map((item, index) => (
            <div className="favorite-item" key={index}>
              <Link to={`/shop/product/${item.id}`}>
                <div className="link-to-favorite-item">
                  <img src={item.image} alt={item.name} width="50" height="50" />
                  <div>{item.name}</div>
                  <div>{`$${item.price}`}</div>
                </div>
              </Link>
              <button onClick={() => {
                handleRemoveFromFavorites({productId: item.id}); // Use the function from the custom hook
              }}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

