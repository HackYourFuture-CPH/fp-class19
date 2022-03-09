import React from 'react';
import OrderComponent from './OrderComponent';
import './OrdersSummary.styles.css';

export default function OrdersSummary({ orders, orderDetails }) {
  
  const filteredDetails = (id) => orderDetails.filter((odr) => odr.id == id);
  return (
    <div className="orders-view">
      <div>
        <ul className="order-list">
          {orders.map((each,i) => (
            <li key={i} className="order-item">
              <OrderComponent order={each} details={filteredDetails(each.order_number)}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
