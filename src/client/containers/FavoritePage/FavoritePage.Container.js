import './FavoritePage.styles.css';
import React, { useState, useEffect} from 'react';
import FavoriteList from '../../components/FavoriteList/FavoriteList.component';
import Loader from '../../components/Loader/Loader.component';

export const addProductToFavorites = (uid, productId) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product_id: productId,
      uid,
    }),
  };
  fetch(
    `/api/favorites/add?uid=${uid}&product_id=${productId}`,
    requestOptions,
  ).then((response) => response.json());
};

export default function FavoritePage(props) {
  const [favorites, setFavorites] = useState([]);
  // eslint-disable-next-line react/prop-types
  const{user,isLoading}=props;
  

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    const apiUrl = `/api/users/${user.uid}/favorites`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setFavorites(result);
      });
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="fav-heading">Favorites</h2>
      <div
        className="favorites"
        style={{
          display: favorites.length > 0 ? 'inline-block' : 'none',
        }}
      >
        <FavoriteList favorites={favorites} setFavorites={setFavorites} user={user}/>
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
