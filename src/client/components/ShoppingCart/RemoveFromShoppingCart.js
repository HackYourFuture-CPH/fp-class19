import React from 'react';
import PropTypes from 'prop-types';
import { removeFromShoppingCart } from '../../containers/ShoppingCartPage/ShoppingCartPage.Container';
import './ShoppingCart.styles.css';

const RemoveFromShoppingCart = (props) => {
  const { product, shoppingCart, setShoppingCart } = props;

  const removeProductFromShoppingcart = () => {
    removeFromShoppingCart(product, shoppingCart, setShoppingCart);
  };

  return (
    <div>
      <div>
        <button
          className="close-button"
          onClick={removeProductFromShoppingcart}
          type="button"
        >
          X
        </button>
      </div>
      <div className="discounted_price">
        <div
          style={{
            display: props.product.discount !== 0 ? 'inline-block' : 'none',
            'text-decoration': 'line-through',
          }}
        >
          {props.product.currency} {props.product.price}
        </div>
        <div
          style={{
            display: props.product.discount === 0 ? 'inline-block' : 'none',
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
    </div>
  );
};

RemoveFromShoppingCart.propTypes = {
  product: PropTypes.shape({
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
  }),
};

export default RemoveFromShoppingCart;
