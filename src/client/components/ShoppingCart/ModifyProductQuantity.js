import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';
import totalPriceOfProducts from '../ShoppingCart/ShoppingCart.component';

function ModifyProductQuantity(props) {
  const { product, shoppingCart } = props;

  const [counter, setCounter] = useState(product.quantity);

  const incrementCounter = () => {
    setCounter(counter + 1);

    const result = shoppingCart.find(({ id }) => id === product.id);
    result.quantity += 1;
    // props.totalPrice+=product.price*product.quantity;

    props.setTotalPrice(props.totalPrice + 9);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);

      const result = shoppingCart.find(({ id }) => id === product.id);
      result.quantity -= 1;
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
}

ModifyProductQuantity.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ModifyProductQuantity;
