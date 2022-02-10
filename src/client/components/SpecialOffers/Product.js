import React from 'react';
import PropTypes from 'prop-types';
import './Product.styles.css';
import cartBucketImage from '../../assets/images/cart_bucket.png';
import heartImage from '../../assets/images/heart.png';
import font from '../../assets/fonts/Inter-Regular.ttf';

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
  currency,
  onClick,
  addToFavorites,
}) {
  const discountPrice = price - (price * discount) / 100;
  return (
    <div
      className="offer-product-container"
      style={{
        fontFamily: { font },
      }}
    >
      <div className="image-and-discount">
        <img
          className="offer-product-image"
          src={image}
          alt={name}
          width={257}
          height={226}
        />
        <div className="discount-box">
          <h3>{discount}% OFF</h3>
        </div>
      </div>
      <h2 className="offer-product-name">{name}</h2>
      <div>
        <h2>
          <span className="offer-product-price">
            {price} {currency}
          </span>{' '}
          {discountPrice} {currency}
        </h2>
      </div>

      <div className="offer-add-fav-buttons">
        <div>
          <button
            className="offer-product-add-button"
            type="button"
            onClick={onClick}
          >
            ADD
            <img
              src={cartBucket.src}
              alt={cartBucket.alt}
              className="offer-vector-bucket"
            />
          </button>
        </div>

        <div className="offer-fav-button-div">
          <button
            className="offer-favorite-button"
            type="button"
            onClick={addToFavorites}
          >
            <img
              src={heart.src}
              alt={heart.alt}
              className="offer-favorite-button"
            />
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
  currency: PropTypes.string,
  onClick: PropTypes.func,
  addToFavorites: PropTypes.func,
};

Product.defaultProps = {
  onClick: null,
  addToFavorites: null,
  currency: 'DKK',
};
