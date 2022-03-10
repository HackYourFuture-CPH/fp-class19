import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';

function ModifyProductQuantity(props) {
  const [counter, setCounter] = useState(props.product.quantity);

  const incrementCounter = () => {
    setCounter(counter + 1);

    const result = props.shoppingCart.find(({ id }) => id === props.product.id);
    result.quantity += 1;

    const totalPriceOfProducts = props.shoppingCart.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0,
    );
    props.setTotalPrice(totalPriceOfProducts);

    const totalDiscountOfProducts = props.shoppingCart.reduce(
      (sum, item) =>
        sum + Math.round((item.discount * (item.quantity * item.price)) / 100),
      0,
    );
    props.setTotalDiscount(totalDiscountOfProducts);

    const totalAmountToBePayed = totalPriceOfProducts - totalDiscountOfProducts;
    props.setTotalPayment(totalAmountToBePayed);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);

      const result = props.shoppingCart.find(
        ({ id }) => id === props.product.id,
      );
      result.quantity -= 1;

      const totalPriceOfProducts = props.shoppingCart.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      );
      props.setTotalPrice(totalPriceOfProducts);

      const totalDiscountOfProducts = props.shoppingCart.reduce(
        (sum, item) =>
          sum +
          Math.round((item.discount * (item.quantity * item.price)) / 100),
        0,
      );
      props.setTotalDiscount(totalDiscountOfProducts);

      const totalAmountToBePayed =
        totalPriceOfProducts - totalDiscountOfProducts;
      props.setTotalPayment(totalAmountToBePayed);
    } else {
      setCounter(1);
    }
  };

  return (
    <div className="name-counter-container">
      <div className="product_name">{props.product.name}</div>
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
  setTotalPrice: PropTypes.func.isRequired,
  setTotalDiscount: PropTypes.func.isRequired,
  setTotalPayment: PropTypes.func.isRequired,
};

export default ModifyProductQuantity;
