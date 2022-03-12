import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.styles.css';
import FavoriteProductImage from './FavoriteProductImage.js';
import FavoriteProductQuantitySelector from './FavoriteProductQuantitySelector';
import RemoveFromFavorites from './RemoveFromFavorites';

export default function FavoriteList(props) {
  const { favorites, setFavorites, user } = props;

  return (
    <div>
      <ul className="favorite-container">
        {favorites.map((product) => (
          <div>
            <li>
              <div className="product_container">
                <FavoriteProductImage product={product} />
                <FavoriteProductQuantitySelector product={product} />
                <RemoveFromFavorites
                  product={product}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  user={user}
                />
              </div>
            </li>

            <div className="line" />
          </div>
        ))}
      </ul>
    </div>
  );
}

FavoriteList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object),
  setFavorites: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FavoriteList.defaultProps = {
  favorites: [],
  setFavorites: [],
};
