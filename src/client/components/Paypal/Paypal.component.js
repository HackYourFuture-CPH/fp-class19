/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';

export default function Paypal({
  orderId,
  toalAmount,
  userName,
  onSuccess,
  onError,
}) {
  const paypalRef = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          color: 'white',
          shape: 'rect',
        },
        createOrder: (data, actions) =>
          actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: orderId,
                amount: {
                  value: '100',
                },
              },
            ],
          }),
        onApprove: async (data, actions) => {
          await actions.order.capture().then((details) => {
            onSuccess(details);
          });
        },
        onError: (error) => {
          onError(error);
        },
      })
      .render(paypalRef.current);
  }, [orderId, toalAmount, userName, onSuccess, onError]);
  return <div ref={paypalRef} />;
}

Paypal.PropType = {
  orderId: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired,
  userName: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

Paypal.defaultProps = {
  userName: 'John Doe',
  onSuccess: (data) => {
    console.log(data);
  },
  onError: (data) => {
    console.log(data);
  },
};
