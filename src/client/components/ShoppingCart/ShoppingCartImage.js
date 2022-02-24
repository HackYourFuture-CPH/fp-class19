import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';

const ShoppingCartImage = (props) => {
  const { product } = props;
  return (
    <div className="image-discount-box">
      <div>
        <img
          className="product_image"
          src={product.image}
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

ShoppingCartImage.propTypes = {
  product: PropTypes.shape({
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
  }),
};

export default ShoppingCartImage;
