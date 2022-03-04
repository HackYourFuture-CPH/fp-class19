import React from 'react';
import PropTypes from 'prop-types';
import './Product.styles.css';
import cartBucketImage from '../../assets/images/cart_bucket.png';
import heartImage from '../../assets/images/heart.png';

import {addProductToFavorites} from '../../containers/FavoritePage/FavoritePage.Container';

const cartBucket = {
  src: cartBucketImage,
  alt: 'shopping cart image',
};

const heart = {
  src: heartImage,
  alt: 'heart image',
};

export default function Product({
  id,
  image,
  name,
  price,
  currency,
  onClick,
  
}) {

  
  const addToFavorites=()=>{
    console.log('in add to favorites');
    addProductToFavorites(10,id);
    }

    


  return (
    <div className="product-container">
      <img className="product-image" src={image} alt={name} />

      <h2 className="product-name">{name}</h2>

      <h2 className="product-price">
        {price} {currency}
      </h2>

      <div className="add-fav-button">
        <div>
          <button
            className="product-add-button"
            type="button"
            onClick={onClick}
          >
            ADD
            <img
              src={cartBucket.src}
              alt={cartBucket.alt}
              className="vector-bucket"
            />
          </button>
        </div>

        <div className="fav-button-div">
          <button
            className="favorite-button"
            type="button"
            onClick={addToFavorites}
          >
            <img src={heart.src} alt={heart.alt} className="favorite-button" />
          </button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  id:PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  onClick: PropTypes.func,
  // addToFavorites: PropTypes.func.isRequired,
  // discount:PropTypes.number.isRequired
};

Product.defaultProps = {
  onClick: null,
  currency: 'DKK',
};
