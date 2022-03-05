import React from 'react';
import OrderComponent from './OrderComponent';
import './OrdersSummary.styles.css';


export default function OrdersSummary({ orders }) {
  const [fullView, setFullView] = React.useState(false);
  const viewOrder = () => {
    setFullView(!fullView);
  };
  return (
    <div className="orders-view">
      <div>
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <OrderComponent order={order}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
