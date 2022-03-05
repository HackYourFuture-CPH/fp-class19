import './FavoritePage.styles.css';

import React, { useState, useEffect, useCallback } from 'react';
import FavouriteList from '../../components/FavouriteList/FavouriteList.component';

export const addProductToFavorites = (userId, productId) => {
  console.log('in add favorites container');
  console.log(userId, productId);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product_id: productId,
      user_id: userId,
    }),
  };
  fetch('/api/favorites/add', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  const GetFavorites = useCallback(() => {
    const apiUrl = '/api/users/2/favorites';
    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result) {
          for (let i = 0; i < result.length; i++) {
            result[i].discount = result[i].discount_percent;
            result[i].image = result[i].picture;
            result[i].currency = 'DKK';
          }
          const items = result.map((item) => item);
          setFavorites((prev) => 
            prev.concat(items)
          );
          console.log(favorites);
        }
      });
  }, [favorites]);

  useEffect(() => {
    GetFavorites();
  }, [GetFavorites]);

  return (
    <div className="favoritelist">
      <h2 className="fav-heading">Favorites</h2>
      <FavouriteList favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}
