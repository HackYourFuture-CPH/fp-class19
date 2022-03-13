import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.styles.css';

function FavoriteProductImage({ product }) {
  return (
    <div className="image-discount-box">
      <div>
        <img
          className="product_image"
          src={product.picture}
          alt={product.name}
        />
      </div>
      <div
        style={{
          display: product.discount_percent !== 0 ? 'inline-block' : 'none',
        }}
        className="discount"
      >
        {product.discount_percent}%
      </div>
    </div>
  );
}

FavoriteProductImage.propTypes = {
  product: PropTypes.shape({
    discount_percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    picture: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default FavoriteProductImage;
