import React, { useState } from 'react';
import './FavouriteList.styles.css';

const ProductQuantity = ({ product }) => {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
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

export default ProductQuantity;
