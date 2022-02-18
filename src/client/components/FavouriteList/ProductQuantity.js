import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FavouriteList.styles.css';

const ProductQuantity = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter > 1) {
      setCounter(counter - 1);
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
            onClick={handleClick2}
            type="button"
          >
            -
          </button>
        </div>
        <div className="counter-box">{counter}</div>
        <div>
          <button
            className="counter-button"
            onClick={handleClick1}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

ProductQuantity.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
  }),
};

ProductQuantity.defaultProps = {
  product: null,
};

export default ProductQuantity;
