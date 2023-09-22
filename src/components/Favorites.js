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
        <div className="favorites-grid">
          {Array.isArray(favoriteItems) && favoriteItems.map((item, index) => (
            <div>
            <div className="favorite-item"  key={index}>
              <Link to={`/shop/product/${item.id}`}>
                <div className="link-to-favorite-item">
                  <img src={item.image} alt={item.name} />
                  
                  <div className="favorites-name">{item.name}</div>
                  <div className="favorites-price">{`$${item.price}`}</div>
                  
                </div>
                
              </Link>
                         
            </div>
            <a href="#" className="remove-from-favorites-text" onClick={(e) => {
               e.preventDefault();
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

