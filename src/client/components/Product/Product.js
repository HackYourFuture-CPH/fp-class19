import React from 'react';
import PropTypes from 'prop-types';
import './Product.styles.css';
import cartBucketImage from '../../assets/images/cart_bucket.png';
import heartImage from '../../assets/images/heart.png';

const cartBucket = {
  src: cartBucketImage,
  alt: 'shopping cart image',
};

const heart = {
  src: heartImage,
  alt: 'heart image',
};

export default function Product({
  image,
  name,
  price,
  onClick,
  addToFavorites,
}) {
  return (
    <div className="product-container">
      <img className="product-image" src={image.src} alt={image.alt} />

      <h2 className="product-name">{name}</h2>

      <h2 className="product-price">{price}</h2>

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
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  addToFavorites: PropTypes.func,
};

Product.defaultProps = {
  onClick: null,
  addToFavorites: null,
};
