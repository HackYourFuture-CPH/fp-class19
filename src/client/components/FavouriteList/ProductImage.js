import React from 'react';
import PropTypes from 'prop-types';
import './FavouriteList.styles.css';

const ProductImage = ({ product }) => {
  return (
    <div className="image-discount-box">
      <div>
        <img
          className="product_image"
          src={product.image.src}
          alt={product.image.alt}
        />
      </div>
      <div
        style={{
          display: product.discount !== 0 ? 'inline-block' : 'none',
        }}
        className="discount"
      >
        {product.discount}%
      </div>
    </div>
  );
};

ProductImage.propTypes = {
  product: PropTypes.shape({
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
  }),
};

ProductImage.defaultProps = {
  product: null,
};

export default ProductImage;
