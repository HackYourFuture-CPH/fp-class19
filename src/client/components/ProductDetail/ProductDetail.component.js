import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';
import Modal from '../Modal/Modal.component';
import addedToCartImg from '../../assets/images/added_to_cart.png';

import './ProductDetail.styles.css';

export default function ProductDetail({
  product,
  quantityCount,
  setQuantityCount,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const addedToCart = {
    message: 'ADDED TO THE CART',
    primaryButtonLabel: 'VIEW CART',
    modalIsCloseable: false,
    showIcon: addedToCartImg,
    secondaryButtonLabel: 'CONTINUE SHOPPING',
    buttonFunction: 'testFunction',
    secondButtonFunction: 'testFunction',
  };

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
            onClick={openModal}
            primary={true}
            label="ADD"
          />
        </section>
      </div>
      {modalIsOpen && (
        <Modal
          modalIsOpen={setModalIsOpen}
          message="ADDED TO CART"
          primaryButtonLabel="VIEW CART"
          modalIsCloseable={true}
          showIcon={addedToCartImg}
          secondaryButtonLabel="Continue shopping"
          buttonFunction={' '}
          secondButtonFunction={' '}
        />
      )}
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
