import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.styles.css';
import ProductImage from './ProductImage.js';
import ProductQuantity from './ProductQuantity';
import ProductCart from './ProductCart';

export default function FavoriteList( props ) {
  const {favorites, setFavorites} = props;
  
  return (
    <div>
      
      <ul className="favorite-container">
        {favorites.map((product) => (
            <div>
              <li>
                <div className="product_container">
                  <ProductImage product={product} />

                  <ProductQuantity product={product} />

                  <ProductCart product={product} favorites={favorites} setFavorites={setFavorites} />
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
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites:PropTypes.arrayOf(PropTypes.object).isRequired
};
