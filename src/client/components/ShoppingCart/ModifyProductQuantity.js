import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';
import {
  decrementFromShoppingCart,
  incrementFromShoppingCart,
} from '../../containers/ShoppingCartPage/ShoppingCartPage.Container';

const ModifyProductQuantity = (props) => {
  const { product, shoppingCart } = props;

  const [counter, setCounter] = useState(product.quantity);

  const incrementCounter = () => {
    setCounter(counter + 1);
    incrementFromShoppingCart(product, shoppingCart);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      decrementFromShoppingCart(product, shoppingCart);
    } else {
      setCounter(1);
    }
  };

  return (
    <div className="name-counter-container">
      <div className="product_name">{product.name}</div>
      <br />
      <br />

      <div className="counter-section">
        <div className="qty-text">QTY</div>
        <div>
          <button
            className="counter-button"
            onClick={decrementCounter}
            type="button"
          >
            -
          </button>
        </div>
        <div className="counter-box">{counter}</div>
        <div>
          <button
            className="counter-button"
            onClick={incrementCounter}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

ModifyProductQuantity.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default ModifyProductQuantity;
