import React from 'react';
import Paypal from './Paypal.component';

export default {
  title: 'Components / Paypal',
  component: Paypal,
};

export function PaypalButton(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Paypal {...args} />;
}

PaypalButton.args = {
  orderId: 'orderId',
  totalAmount: 'totalAmount',
  userName: 'john doe',
  onSuccess: (response) =>
    // eslint-disable-next-line no-alert
    setTimeout(() => window.alert(JSON.stringify(response))),
};
