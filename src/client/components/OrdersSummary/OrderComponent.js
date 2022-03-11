import React from 'react';
import './OrdersSummary.styles.css';
import moment from 'moment-timezone';
import OrderDetails from './OrderDetails';

export default function OrderComponent({ order, details }) {
  const [fullView, setFullView] = React.useState(false);
  const viewOrder = () => {
    setFullView(!fullView);
  };

  return (
    <div>
      <li>
        <div className="flex-container">
          <div>
            <h3>
              Order No: {order.order_number}
              <span> ({order.nr_of_items} items)</span>
            </h3>
          </div>
          <div>
            <p>{moment(order.updated_at).format('DD-MM-YYYY')}</p>
            <p>Kr. {order.total_amount}</p>
          </div>
          <div>
            {' '}
            <button type="button" onClick={viewOrder}>
              {fullView ? <p>&#x25BC;</p> : <p>&#x25B2;</p>}
            </button>
          </div>
        </div>
        {fullView && <OrderDetails details={details}/>}
      </li>
    </div>
  );
}
