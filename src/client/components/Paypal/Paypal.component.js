import React, { useEffect, useRef } from 'react';

export default function Paypal() {
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          color: 'white',
          shape: 'rect',
          layout: 'horizontal',
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
