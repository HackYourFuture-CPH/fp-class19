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
        <div>
          <p>
            Order No: {order.order_number} ({order.nr_of_items}items)
            <span>{order.updated_at.slice(0, 10)}</span>
            <span>Kr. {order.total_amount}</span>
            <button onClick={viewOrder}>
              {fullView ? <p>&#x25BC;</p> : <p>&#x25B2;</p>}
            </button>
            {console.log(details)}
          </p>
        </div>
        {fullView && <>
                <img src={details[0].picture} />
                <p>{details[0].name}</p>
                <p>Quantity: {details[0].quantity}</p>
              </>}
      </li>
    </div>
  );
}
