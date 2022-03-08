import React, { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';

export default function Paypal({
  orderId,
  toalAmount,
  userName,
  onSuccess,
  onError,
  onCancel,
}) {
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          color: 'white',
          shape: 'rect',
          layout: 'horizontal',
          tagline: 'false',
          label: 'paypal',
        },
        createOrder: (data, actions) =>
          actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'OrderID: 12345',
                amount: {
                  value: '0.1',
                },
              },
            ],
          }),
        onApprove: async (data, actions) => {
          await actions.order.capture().then((details) => {
            console.log(details);
          });
        },
        onError: (error) => {
          console.log(error);
        },
        onCancel: (data) => {
          console.log(data);
        },
      })
      .render(paypalRef.current);
  }, []);
  return <div ref={paypalRef} />;
}

Paypal.PropType = {
  orderId: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  onCancel: PropTypes.func,
};

Paypal.defaultProps = {
  onSuccess: (data) => {
    console.log(data);
  },
  onError: (data) => {
    console.log(data);
  },
  onCancel: (data) => {
    console.log(data);
  },
};
