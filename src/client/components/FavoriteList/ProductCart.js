import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.styles.css';
import { action } from '@storybook/addon-actions'; 

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
            display: product.discount_percent !== 0 ? 'inline-block' : 'none',
            'text-decoration': 'line-through',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount_percent === 0 ? 'inline-block' : 'none',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount_percent !== 0 ? 'inline-block' : 'none',
          }}
        >
          &nbsp;&nbsp;{product.currency}{' '}
          {Math.round(product.price * (1 - product.discount_percent / 100))}
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
    discount_percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
  }),
  
};

ProductCart.defaultProps = {
  product: null,
  

};


export default ProductCart;
