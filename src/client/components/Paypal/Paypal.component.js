import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Paypal({ orderId, totalAmount, onSuccess, onError, onCancel }) {
  const paypalRef = useRef();

  useEffect(() => {
    if (
      window.paypal.Buttons({
        style: {
          color: 'white',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (data, actions) =>
          actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: orderId,
                amount: {
                  currency_code: 'DKK',
                  value: totalAmount,
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
        onCancel: (data) => {
          onCancel(data);
        },
      })
    );
  }, [orderId, totalAmount, onSuccess, onError, onCancel]);
  return <div ref={paypalRef} />;
}

Paypal.prototype = {
  orderId: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  onCancel: PropTypes.func,
};

Paypal.defaultProps = {
  orderId: '',
  totalAmount: 0,
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

export default Paypal;
