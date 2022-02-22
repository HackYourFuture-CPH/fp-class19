import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';
import './ProductPreview.css';

export default function ProductPreview({
  image,
  name,
  price,
  size,
  currency,
  onClick,
}) {
  const [count, setCount] = useState(0);

  function decreamentCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function increamentCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <div className="product-detail-container">
        <div className="product-preview-content">
          <img src={image} alt={name} />
          <div className="product-preview-details">
            <h3 className="product-name">{name}</h3>
            <div className="gray-container">
              <span>
                {' '}
                <p>{size}</p>
              </span>

              <span>
                <p>{price}</p>
              </span>
              <p>Quantity</p>
              <button onClick={decreamentCount}>-</button>
              <span>{count}</span>
              <button onClick={increamentCount}>+</button>
              <Button primary="true" label="ADD"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ProductPreview.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  currency: PropTypes.string,
  onClick: PropTypes.func,
};
ProductPreview.defaultProps = {
  onClick: null,
  currency: 'DKK',
};
