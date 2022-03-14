import React from 'react';
import OrderComponent from './OrderComponent';
import './OrdersSummary.styles.css';

export default function OrdersSummary({ orders }) {
  
  const orderDetails = (orderId) => fetch(`api/orders/${orderId}`);
  
  return (
    <div className="orders-view">
      <div>
        <ul className="order-list">
          {orders.map((each) => (
            <li className="order-item">
              <OrderComponent order={each} details={orderDetails(each.order_number)}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
