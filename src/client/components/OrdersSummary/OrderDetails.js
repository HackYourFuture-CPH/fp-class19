import React from 'react';
import './OrdersSummary.styles.css';

export default function OrderDetails({ details }) {
  
  return (
    <div className="flex-container flex-container2">
      {details ? details.map((eachProduct) => (
            <li className="order-item">
             <div>
        <img src={eachProduct.picture} alt="orderedItem" />
      </div>
      <div>
        <p>{eachProduct.name}</p>
        <p>Quantity: {eachProduct.quantity}</p>
      </div>
            </li>
          ))
      : ''}
    </div>
  );
}
