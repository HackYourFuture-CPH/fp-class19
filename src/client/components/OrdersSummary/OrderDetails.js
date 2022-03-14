import React from 'react';
import './OrdersSummary.styles.css';

export default function OrderDetails({ details }) {
  
  return (
    <div className="flex-container flex-container2">
      {details.map((eachProduct) => (
            <li className="order-item">
             <div>
        <img src={eachProduct[0].picture} alt="orderedItem" />
      </div>
      <div>
        <p>{eachProduct[0].name}</p>
        <p>Quantity: {eachProduct[0].quantity}</p>
      </div>
            </li>
          ))
      }
    </div>
  );
}
