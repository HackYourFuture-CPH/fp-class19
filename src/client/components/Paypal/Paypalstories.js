import Paypal from './Paypal.component';
import React from 'react';

export default {
  title: 'Components|Paypal',
  component: 'Paypal',
};

export function PayPalStory(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Paypal {...args} />;
}

PayPalStory.args = {
  orderId: 'orderId',
  totalAmount: 100,
  userName: 'userName',
};
