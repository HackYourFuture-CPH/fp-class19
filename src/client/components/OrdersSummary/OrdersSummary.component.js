import React from 'react';
import OrderComponent from './OrderComponent';
import './OrdersSummary.styles.css';


export default function OrdersSummary({ orders, orderDetails }) {
  
  return (
    <div className="orders-view">
      <div>
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <OrderComponent order={order} details={orderDetails.filter((odr) => odr.id == order.id)}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
