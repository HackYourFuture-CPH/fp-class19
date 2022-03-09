import React from 'react';
import './OrdersSummary.styles.css';

export default function OrderComponent({ order, orderDetails}) {
  const [fullView, setFullView] = React.useState(false);
  const viewOrder = () => {
    setFullView(!fullView);
  };
  React.useEffect(() => {
    setCurrentRange(propProducts.slice(0, args.productsPerPage));
  }, [propProducts, args.productsPerPage]);
  return (
      <div>
            <li key={order.id}>
              <div>
                <p>Order No: {order.id} ({order.nr_of_items})
                <span>Status: {order.status}</span>
                <span>Created on: {order.updated_at}</span>
                <span>Kr. {order.total_amount}</span>
                <button onClick={viewOrder}>{fullView ? <p>&#x25BC;</p>:<p>&#x25B2;</p>}</button></p> 
              </div>
              {fullView && <>
                {orderDetails.filter(odr=>odr.id==order.id)}
                <img src={orderDetails.filter(odr=>odr.id==order.id).picture}/>
                <p>{orderDetails.filter(odr=>odr.id==order.id).name}</p>
                <p>Quantity: {orderDetails.filter(odr=>odr.id==order.id).quantity}</p>
              </>}
            </li>
      </div>
  );
}