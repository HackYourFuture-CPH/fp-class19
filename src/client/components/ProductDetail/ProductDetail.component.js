import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.styles.css';
import Button from '../Button/Button.component';

export default function ProductDetail({
  product,
  quantityCount,
  setQuantityCount,
}) {
  function decreamentQuantityCount() {
    setQuantityCount((prevCount) => prevCount - 1);
  }

  function increamentQuantityCount() {
    setQuantityCount((prevCount) => prevCount + 1);
  }

  function handleQuantityCountChange(e) {
    e.preventDefault();
    setQuantityCount(e.target.value);
  }

  const { name, price, picture } = product;
  return (
    <div className="productDetail">
      <article className="productDetail-container">
        <section className="image-container">
          <img src={picture} alt={name} />
        </section>
        <section className="info-container">
          <h3>{name}</h3>
          <div className="info-container-stripes">
            <div className="info-container-stripe">
              <p>2lt pot </p>
              <p>DKK &nbsp;{price}</p>
            </div>
            <div className="info-container-stripe">
              <p>Quantity: &nbsp;</p>
              <button
                type="button"
                className="quantityButton"
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
                className="quantityButton"
                onClick={increamentQuantityCount}
              >
                +
              </button>
            </div>
          </div>
          <Button
            className="productDetail-button"
            type="button"
            onClick={' '}
            primary={true}
            label="ADD"
          />
        </section>
      </article>
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
