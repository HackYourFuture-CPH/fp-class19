import './FavoritePage.styles.css';
import React, { useState, useEffect, useCallback } from 'react';
import FavoriteList from '../../components/FavoriteList/FavoriteList.component';

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
          const items = result.map((item) => item);
          setFavorites((prev) => prev.concat(items));
        }
      });
  }, []);

  useEffect(() => {
    GetFavorites();
  }, [GetFavorites]);

  return (
    <div className="favorite-list">
      <h2 className="fav-heading">Favorites</h2>
      <FavoriteList favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}
