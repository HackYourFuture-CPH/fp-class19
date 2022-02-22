import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.styles.css';


export default function ProductDetail({ product }) {
  const [quantityCount, setQuantityCount] = useState(1);

  function decreamentQuantityCount() {
    setQuantityCount((prevCount) => prevCount - 1);
  }

  function increamentQuantityCount() {
    setQuantityCount((prevCount) => prevCount + 1);
  }

  function handleQuantityCount(e) {
    e.preventDefault();
  }

  const { name, price, picture } = product;
  return (
    <div className="productDetail">
      <article className="productDetail-container">
        <section className="image-container">
          <img src={picture} alt={name} />
        </section>
        <section className="info-container">
          <header>
            <h3>{name}</h3>
          </header>
          <table>
            <tr>
              <td>2 L pot</td>
              <td>DKK {price}</td>
            </tr>
            <tr>
              <td>Quantity: </td>
              <td id="counter">
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
                  onChange={handleQuantityCount}
                />
                <button
                  type="button"
                  className="quantityButton"
                  onClick={increamentQuantityCount}
                >
                  +
                </button>
              </td>
            </tr>
          </table>
          <button className="productDetail-button" type="button">
            Add
          </button>
        </section>
      </article>
    </div>
  );
}

/*
const { name, price, color, picture } = product;
  return (
    <div className="productDetail">
      <article className="productDetail-container">
        <img src={picture} alt={name} />
        <div className="info">
          <h3>{name}</h3>
          <div>
            <span>2Lt Pot           DKK {price}</span>
          </div>
          <span>Quantity:</span>
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
            onChange={handleQuantityCount}
          />
          <button
            type="button"
            className="quantityButton"
            onClick={increamentQuantityCount}
          >
            +
          </button>
          <button className="productDetail-button" type="button">
            Add
          </button>
        </div>
      </article>
    </div>
  );
 */
