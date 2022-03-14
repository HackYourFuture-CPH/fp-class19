import React from 'react';
import './OrdersSummary.styles.css';

export default function OrderDetails({ details }) {
  return (
    <div className="flex-container flex-container2">
      <div>
        <img src={details[0].picture} alt="orderedItem" />
      </div>
      <div>
        <p>{details[0].name}</p>
        <p>Quantity: {details[0].quantity}</p>
      </div>
    </div>
  );
}
