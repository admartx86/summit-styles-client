import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { usePersistedUser } from './usePersistedUser';

const Favorites = () => {
  usePersistedUser();

  const context = useContext(FavoritesContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { favoriteItems, removeFromFavorites } = context;

  return (
    <div>
      <h1 className="shop-title">Your Favorites</h1>
      <section className="favorites">
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
                  <button
                    className="remove-from-favorites-text"
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromFavorites(item.id);
                    }}
                  >
                    Remove from favorites
                  </button>
                </div>
              ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Favorites;
