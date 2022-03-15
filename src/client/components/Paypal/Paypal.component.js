/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';

export default function Paypal({
  orderId,
  totalPayment,
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
                  value: totalPayment,
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
  }, [orderId, totalPayment, userName, onSuccess, onError]);
  return <div ref={paypalRef} />;
}

Paypal.PropType = {
  orderId: PropTypes.string.isRequired,
  totalPayment: PropTypes.number.isRequired,
  userName: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

Paypal.defaultProps = {
  userName: 'John Doe',
  // eslint-disable-next-line no-return-assign
  onSuccess: (response) =>
    // eslint-disable-next-line no-alert
    setTimeout(
      () => window.alert(JSON.stringify(response)),
      (location.href = '/order-confirmation'),
    ),
  onError: () => {
    window.location.href = '*';
  },
};
