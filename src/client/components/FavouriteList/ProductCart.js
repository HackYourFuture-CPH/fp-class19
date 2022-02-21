import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { action } from '@storybook/addon-actions';
import './FavouriteList.styles.css';

function ProductCart({ product }) {
  return (
    <div className="add_cart_button">
      <div>
        <button
          className="close-button"
          onClick={action('You have clicked the close button')}
          type="button"
        >
          X
        </button>
      </div>
      <div className="discounted_price">
        <div
          style={{
            display: product.discount !== 0 ? 'inline-block' : 'none',
            'text-decoration': 'line-through',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount === 0 ? 'inline-block' : 'none',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount !== 0 ? 'inline-block' : 'none',
          }}
        >
          &nbsp;&nbsp;{product.currency}{' '}
          {Math.round(product.price * (1 - product.discount / 100))}
        </div>
      </div>
      <div>
        <button
          className="add_button"
          onClick={action('You have clicked the add to cart button')}
          type="button"
        >
          {' '}
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

ProductCart.defaultProps = {
  product: null,
};

export default ProductCart;
