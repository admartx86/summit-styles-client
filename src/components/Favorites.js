import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';  // Import the context

const Favorites = () => {
  const { 
    favoriteItems,           // Fetch favorite items from the context
    removeFromFavorites      // Use the function to remove items from favorites
  } = useContext(FavoritesContext);  // Use context to get the values and functions

  useEffect(() => {
    // Additional setup logic if any.
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
              <a href="#" onClick={() => {
                removeFromFavorites(item.id);  // Use the function from the context
              }}>Remove from favorites</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

