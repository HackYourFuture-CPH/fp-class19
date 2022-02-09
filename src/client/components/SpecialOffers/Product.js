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
  discount,
  name,
  price,
  discountPrice,
  currency,
  onClick,
  addToFavorites,
}) {
  return (
    <div className="product-container">
      <div className="image-and-discount">
        <img className="product-image" src={image} alt={name} />
        <div className="discount-box">
          <h3>{discount}% OFF</h3>
        </div>
      </div>
      <h2 className="product-name">{name}</h2>
      <div>
        <h2>
          <span className="product-price">
            {price} {currency}
          </span>{' '}
          {discountPrice} {currency}
        </h2>
      </div>

      <div className="add-fav-buttons">
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
  image: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPrice: PropTypes.number.isRequired,
  currency: PropTypes.string,
  onClick: PropTypes.func,
  addToFavorites: PropTypes.func,
};

Product.defaultProps = {
  onClick: null,
  addToFavorites: null,
  currency: 'DKK',
};
