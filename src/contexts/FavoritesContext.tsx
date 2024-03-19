import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

export const FavoritesContext = createContext([]);

type FavoritesProviderType = {
  children: ReactNode;
};

export const FavoritesProvider: React.FC<FavoritesProviderType> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isFavorite, setIsFavorite] = useState({});

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-favorites`, {
        withCredentials: true
      });
      if (response.status === 200) {
        setFavoriteItems(response.data.favorites);
        const favoriteIds = response.data.favorites.map((item) => item.id);
        let favoriteStatus = {};
        favoriteIds.forEach((id) => {
          favoriteStatus[id] = true;
        });
        setIsFavorite(favoriteStatus);
      }
    } catch (error) {
      console.error('There was an error fetching the favorites:', error);
    }
  };

  const addToFavorites = async (item) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/add-to-favorites`,
        {
          item: {
            productId: item.productId,
            productImage: item.productImage,
            productName: item.productName,
            productPrice: item.productPrice
          }
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        const newItem = {
          id: Number(item.productId),
          image: item.productImage,
          name: item.productName,
          price: item.productPrice
        };

        setFavoriteItems((prevItems) => [...prevItems, newItem]);
        setIsFavorite({ ...isFavorite, [newItem.id]: true });
      }
    } catch (error) {
      console.error('There was an error adding the item to favorites:', error);
    }
  };

  const removeFromFavorites = async (itemId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/remove-from-favorites/${itemId}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const updatedItems = favoriteItems.filter((item) => {
          return Number(item.id) !== Number(itemId);
        });
        setFavoriteItems(updatedItems);
        setIsFavorite({ ...isFavorite, [itemId]: false });
      }
    } catch (error) {
      console.error('There was an error removing the item from favorites:', error);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteItems,
        setFavoriteItems,
        isFavorite,
        setIsFavorite,
        addToFavorites,
        removeFromFavorites,
        fetchFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
