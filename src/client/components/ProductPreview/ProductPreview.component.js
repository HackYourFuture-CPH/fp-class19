import React from 'react';
import PropTypes from 'prop-types';
import './ProductPreview.styles.css';
import Button from '../Button/Button.component';

export default function ProductPreview({
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
    <div className="productPreview">
      <article className="productPreview-container">
        <section className="image-container">
          <img src={picture} alt={name} />
        </section>
        <section className="info-container">
          <h3 className="productpreview-plant-name">{name}</h3>
          <div className="info-container-stripes">
            <div className="info-container-stripe">
              <p className="details-text">2lt pot </p>
              <p className="details-text"> DKK {+' ' + price}</p>
            </div>
            <div className="info-container-stripe">
              <p className="details-text">Quantity</p>
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
              fontSize: '1.2rem',
              padding: ' 0.4rem',
              marginTop: '1rem',
            }}
          />
        </section>
      </article>
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
