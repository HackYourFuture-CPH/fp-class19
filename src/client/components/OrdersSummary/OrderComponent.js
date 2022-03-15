import React from 'react';
import './OrdersSummary.styles.css';
import moment from 'moment-timezone';
import OrderDetails from './OrderDetails';

export default function OrderComponent({ order }) {
  const [fullView, setFullView] = React.useState(false);
  const viewOrder = () => {
    setFullView(!fullView);
  };
  const [details, setDetails] = React.useState([]);
  React.useEffect(() => {
    
    fetch(`/api/orders/${order.order_number}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          throw new Error('Could not check if user present in Database:', 404);
        }
        setDetails(data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error('Unexpected error', 500);
      })
  }, [order]);

  return (
    <div>
      {order ? <li>
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
        {fullView && order.order_number ? <OrderDetails details={details}/> : ""}
      </li>: ''}
    </div>
  );
}
