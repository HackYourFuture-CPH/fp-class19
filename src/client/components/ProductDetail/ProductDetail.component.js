import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';
import './ProductDetail.styles.css';
import { addToShoppingCart } from '../../containers/ShoppingCartPage/ShoppingCartPage.Container';

export default function ProductDetail({
  product,
  quantityCount,
  setQuantityCount,
}) {
  console.log(product);
  const MIN_QUANTITY = 1;
  const MAX_QUANTITY = 99;
  // eslint-disable-next-line camelcase
  const { id, name, price, picture, discount_percent, currency } = product;

  const addProductToShoppingCart = () => {
    addToShoppingCart(id, picture, name, price, currency, discount_percent, 1);
  };

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

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <section className="image-container">
          <div>
            <img src={picture} alt={name} />
          </div>
          <div
            style={{
              display: discount_percent !== 0 ? 'inline-block' : 'none',
            }}
            className="discount"
          >
            {discount_percent}%
          </div>
        </section>
        <section className="info-container">
          <h3>{name}</h3>
          <div className="info-container-stripes">
            <div className="info-container-stripe">
              <p>2lt pot</p>
              {/* <p>DKK&nbsp;{price}</p> */}

              <div className="discounted_price">
                <div
                  style={{
                    display: discount_percent !== 0 ? 'inline-block' : 'none',
                    textDecoration: 'line-through',
                    color: 'black',
                  }}
                >
                  DKK<span className="price-field">{price}</span>
                </div>
                <div
                  style={{
                    display: discount_percent === 0 ? 'inline-block' : 'none',
                    color: 'black',
                  }}
                >
                  DKK<span className="currency-field">{price}</span>
                </div>
                <div
                  style={{
                    display: discount_percent !== 0 ? 'inline-block' : 'none',
                    color: 'black',
                  }}
                >
                  <span className="currency-field">DKK</span>

                  {Math.round(price * (1 - discount_percent / 100))}
                </div>
              </div>
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
            onClick={addProductToShoppingCart}
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
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    currency:PropTypes.string,
  }),

  quantityCount: PropTypes.number.isRequired,
  setQuantityCount: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
  product: PropTypes.shape({ currency: 'DKK' }),
};
