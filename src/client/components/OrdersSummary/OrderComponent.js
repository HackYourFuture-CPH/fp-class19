import React from 'react';
import './OrdersSummary.styles.css';

export default function OrderComponent({ order }) {
  const [fullView, setFullView] = React.useState(false);
  const viewOrder = () => {
    setFullView(!fullView);
  };
  return (
      <div>
            <li key={order.id}>
              <div>
                <p>Order No: {order.id}
                <span>Status: {order.status}</span>
                <span>Created on: {order.created_at}</span>
                <button onClick={viewOrder}>{fullView ? <p>&#x25BC;</p>:<p>&#x25B2;</p>}</button></p> 
              </div>
              {fullView && <>
                {order.updated_at}
              </>}
            </li>
      </div>
  );
}