import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { usePersistedUser } from './usePersistedUser';

const Favorites = () => {
  usePersistedUser();

  const { favoriteItems, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      {Array.isArray(favoriteItems) && favoriteItems.length === 0 ? (
        <p className="no-favorites-message">Add favorites to see them here.</p>
      ) : (
        <div className="favorites-grid">
          {Array.isArray(favoriteItems) &&
            favoriteItems.map((item, index) => (
              <div key={index}>
                <div className="favorite-item">
                  <Link to={`/shop/product/${item.id}`}>
                    <div className="link-to-favorite-item">
                      <img src={item.image} alt={item.name} />

                      <div className="favorites-name">{item.name}</div>
                      <div className="favorites-price">{`$${item.price}`}</div>
                    </div>
                  </Link>
                </div>
                <a
                  href="#"
                  className="remove-from-favorites-text"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromFavorites(item.id);
                  }}
                >
                  Remove from favorites
                </a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
