import React from 'react';
import './OrdersSummary.styles.css';

export default function OrderComponent({ order, details }) {
  const [fullView, setFullView] = React.useState(false);
  const viewOrder = () => {
    setFullView(!fullView);
  };

  return (
    <div>
      <li>
        <div className='flex-container'>
          <div><h3>
            Order No: {order.order_number}<span> ({order.nr_of_items} items)</span></h3></div>
            <div><p>{order.updated_at.slice(0, 10)}</p>
            <p>Kr. {order.total_amount}</p></div>
            <div> <button onClick={viewOrder}>
              {fullView ? <p>&#x25BC;</p> : <p>&#x25B2;</p>}
            </button>
            </div>
        </div>
        {fullView && <div className='flex-container'>
                <div><img src={details[0].picture} /></div>
                <div><p>{details[0].name}</p>
                <p>Quantity: {details[0].quantity}</p></div>
              </div>}
      </li>
    </div>
  );
}
