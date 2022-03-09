import React from 'react';
import PropTypes from 'prop-types';
import './ProductPreview.styles.css';
import Button from '../Button/Button.component';

export default function ProductPreview({
  product,
  quantityCount,
  setQuantityCount,
}) {
  const MIN_QUANTITY = 1;
  const MAX_QUANTITY = 99;

  function decreamentQuantityCount() {
    if (quantityCount <= MIN_QUANTITY) {
      return quantityCount;
    }
    setQuantityCount(quantityCount - 1);
  }

  function increamentQuantityCount() {
    if (quantityCount >= MAX_QUANTITY) {
      return quantityCount;
    }
    setQuantityCount(quantityCount + 1);
  }

  function handleQuantityCountChange(e) {
    e.preventDefault();
    if (e.target.value <= MIN_QUANTITY || e.target.value >= MAX_QUANTITY) {
      return quantityCount;
    }
    setQuantityCount(e.target.value);
  }

  const { name, price, picture } = product;
  return (
    <div className="product-preview">
      <div className="product-preview-container">
        <div className="image-container">
          <img src={picture} alt={name} />
        </div>
        <div className="info-container">
          <h3 className="product-preview-plant-name">{name}</h3>
          <div className="info-container-stripes">
            <div className="info-container-stripe">
              <p className="product-preview-texts">2lt pot</p>
              <p className="product-preview-texts"> DKK {+' ' + price}</p>
            </div>
            <div className="info-container-stripe">
              <p className="product-preview-texts">Quantity</p>
              <button
                type="button"
                className="quantity-button"
                onClick={decreamentQuantityCount}
              >
                -
              </button>
              <input
                className="product-preview-input"
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
            type="button"
            onClick={' '}
            primary={true}
            label="ADD"
            style={{
              width: ' 100%',
              textAlign: ' center',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '26px',
              padding: ' 0.4rem',
              marginTop: '1rem',
              fontWeight: '500',
            }}
          />
        </div>
      </div>
    </div>
  );
}

ProductPreview.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string,
  }).isRequired,
  quantityCount: PropTypes.number.isRequired,
  setQuantityCount: PropTypes.func.isRequired,
};
