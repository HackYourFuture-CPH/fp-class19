import React from 'react';
import './ProductDetail.styles.css';

export default function ProductDetail({ product }) {
  const { name, price, color, picture } = product;
  return (
    <div className="productDetail">
      <div className="productDetail-container">
        <img src={picture} alt={name} />
        <div className="info">
          <h3>{name}</h3>
          <div>DKK 78</div>
          <div>Quantity: 1</div>
          <button className="productDetail-button" type="button">Add</button>
        </div>
      </div>
    </div>
  );
}
