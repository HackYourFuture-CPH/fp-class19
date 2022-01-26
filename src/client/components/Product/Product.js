import React from 'react';
import PropTypes from 'prop-types';
import './Product.styles.css';

export default function Product({ image, name, price, onClick }) {
  return (
    <div className="product-component">
      <img className="product-image" src={image} />
      <br></br>
      <h2 className="product-name">{name}</h2>
      <br></br>
      <h2 className="product-price">{price}</h2>
      <br></br>
      <button className="product-add-button" type="button" onClick={onClick}>
        ADD
      </button>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Product.defaultProps = {
  onClick: null,
};
