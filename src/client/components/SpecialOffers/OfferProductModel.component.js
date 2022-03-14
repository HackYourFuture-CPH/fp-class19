import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './OfferProductModel.styles.css';
import cartBucketImage from '../../assets/images/cart_bucket.png';
import heartImage from '../../assets/images/heart.png';
import font from '../../assets/fonts/Inter-Regular.ttf';
import fillHeartImage from '../../assets/images/heartFill.png';
import { addProductToFavorites } from '../../containers/FavoritePage/FavoritePage.Container';
import { addToShoppingCart } from '../../containers/ShoppingCartPage/ShoppingCartPage.Container';
import { useAuthentication } from '../../hooks/useAuthentication';

const cartBucket = {
  src: cartBucketImage,
  alt: 'shopping cart image',
};

const heart = {
  src: heartImage,
  alt: 'heart image',
};
const filledHeart = {
  src: fillHeartImage,
  alt: ' filled heart image',
};

export default function OfferProduct({
  id,
  image,
  name,
  price,
  currency,
  discount,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuthentication();

  const addProductToShoppingCart = () => {
    addToShoppingCart(id, image, name, price, currency, discount, 1);
  };

  const discountPrice = price - (price * discount) / 100;

  const addToFavorites = () => {
    if (!user) {
      // eslint-disable-next-line no-alert
      alert('Please login to add to your Favorites');
    } else {
      addProductToFavorites(user.uid, id);
      setIsFavorite(true);
    }
  };
  return (
    <div
      className="offer-product-container"
      style={{
        fontFamily: { font },
      }}
    >
      <div className="image-and-discount">
        <Link to={`/products/${id}`}>
          <img
            className="offer-product-image"
            src={image}
            alt={name}
            width={257}
            height={226}
          />
        </Link>
        <div className="discount-box">
          <h3>{discount}% OFF</h3>
        </div>
      </div>
      <h2 className="offer-product-name">{name}</h2>
      <div className="offer-product-price-discountPrice">
        <h2>
          <span className="offer-product-price">
            {price} {currency}
          </span>{' '}
          {discountPrice.toFixed(2)} {currency}
        </h2>
      </div>

      <div className="offer-add-fav-buttons">
        <div>
          <button
            className="offer-product-add-button"
            type="button"
            onClick={addProductToShoppingCart}
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
            style={{ display: !isFavorite ? 'inline-block' : 'none' }}
          >
            <img
              src={heart.src}
              alt={heart.alt}
              className="offer-favorite-button"
            />
          </button>
          <button
            className="favorite-button"
            type="button"
            onClick={addToFavorites}
            style={{ display: isFavorite ? 'inline-block' : 'none' }}
          >
            <img
              src={filledHeart.src}
              alt={filledHeart.alt}
              className="favorite-button"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

OfferProduct.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
};

OfferProduct.defaultProps = {
  currency: 'DKK',
};
