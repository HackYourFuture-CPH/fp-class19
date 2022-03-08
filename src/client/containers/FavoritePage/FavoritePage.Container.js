import './FavoritePage.styles.css';
import React, { useState, useEffect, useCallback } from 'react';
import FavoriteList from '../../components/FavoriteList/FavoriteList.component';

export const addProductToFavorites = (userId, productId) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product_id: productId,
      user_id: userId,
    }),
  };
  fetch('/api/favorites/add', requestOptions).then((response) =>
    response.json(),
  );
};

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  const GetFavorites = useCallback(() => {
    const apiUrl = '/api/users/10/favorites';
    // TODO : integrate with userId when user logs in

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setFavorites(result);
      });
  }, []);

  useEffect(() => {
    GetFavorites();
  }, [GetFavorites]);

  return (
    <div>
      <h2 className="fav-heading">Favorites</h2>
      <div
        className="favorites"
        style={{
          display: favorites.length > 0 ? 'inline-block' : 'none',
        }}
      >
        <FavoriteList favorites={favorites} setFavorites={setFavorites} />
      </div>
      <div
        className="empty-fav-list"
        style={{
          display: favorites.length === 0 ? 'inline-block' : 'none',
        }}
      >
        There are no items in favorites
      </div>
    </div>
  );
}
