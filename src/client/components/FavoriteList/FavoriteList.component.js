import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.styles.css';
import ProductImage from './ProductImage.js';
import ProductQuantity from './ProductQuantity';
import ProductCart from './ProductCart';

export default function FavoriteList( props ) {
  const {favorites}=props;
  console.log(favorites)
  return (
    <div>
      
      <ul className="favorite-container">
        {favorites.map((product) => (
            <div>
              <li>
                <div className="product_container">
                  <ProductImage product={product} />

                  <ProductQuantity product={product} />

                  <ProductCart product={product} />
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
};
