import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { onRemoveFromFavorites } from './RemoveFromFavorites';
import { Link, useNavigate } from 'react-router-dom';

const Favorites = () => {
  // Define state to hold favorite items
  const [favoriteItems, setFavoriteItems] = useState([]);


  

  
  // Fetch favorite items from the backend when the component mounts
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-favorites`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          setFavoriteItems(response.data.favorites);
        }
      } catch (error) {
        console.error('Failed to fetch favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      {Array.isArray(favoriteItems) && favoriteItems.length === 0 ? (
        <p>Add favorites to see them here.</p>
      ) : (
        <div>
          {Array.isArray(favoriteItems) && favoriteItems.map((item, index) => (
            console.log('Current Item:', item),
            <div className="favorite-item" key={index}>
              <Link to={`/shop/product/${item.id}`}>
              <div className="link-to-favorite-item">
              
              <img src={item.image} alt={item.name} width="50" height="50" />
              <div>{item.name}</div>
              <div>{`$${item.price}`}</div>
              </div>
              </Link>
              <button onClick={() => {
                onRemoveFromFavorites({productId: item.id});
                }}>Remove
                </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;