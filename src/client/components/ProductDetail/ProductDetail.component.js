import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';
import './ProductDetail.styles.css';

export default function ProductDetail({
  product,
  quantityCount,
  setQuantityCount,
}) {
  const MIN_COUNT = 1;
  const MAX_COUNT = 99;

  function decreamentQuantityCount() {
    if (quantityCount <= MIN_COUNT) {
      return quantityCount;
    }
    setQuantityCount(quantityCount - 1);
  }

  function increamentQuantityCount() {
    if (quantityCount >= MAX_COUNT) {
      return quantityCount;
    }
    setQuantityCount(quantityCount + 1);
  }

  function handleQuantityCountChange(e) {
    e.preventDefault();
    setQuantityCount(e.target.value);
  }

  const { name, price, picture } = product;
  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <section className="image-container">
          <img src={picture} alt={name} />
        </section>
        <section className="info-container">
          <h3>{name}</h3>
          <div className="info-container-stripes">
            <div className="info-container-stripe">
              <p>2lt pot</p>
              <p>DKK&nbsp;{price}</p>
            </div>
            <div className="info-container-stripe">
              <p>Quantity:</p>
              <button
                type="button"
                className="quantity-button"
                onClick={decreamentQuantityCount}
              >
                -
              </button>
              <input
                type="text"
                value={quantityCount}
                onChange={handleQuantityCountChange}
              />
              <button
                type="button"
                className="quantity-button"
                onClick={increamentQuantityCount}
              >
                +
              </button>
            </div>
          </div>
          <Button
            className="product-detail-button"
            type="button"
            onClick={' '}
            primary={true}
            label="ADD"
          />
        </section>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string,
  }).isRequired,
  quantityCount: PropTypes.number.isRequired,
  setQuantityCount: PropTypes.func.isRequired,
};
