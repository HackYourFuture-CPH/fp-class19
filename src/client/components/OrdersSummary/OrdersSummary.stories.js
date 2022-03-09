import React from 'react';
import OrdersSummary from './OrdersSummary.component';

export default {
  title: 'Components / OrdersSummary',
  component: OrdersSummary,
  argTypes: {
    orders: { control: '' },
  },
};

const template = ({ orders }) => <OrdersSummary orders={orders} />;

export const OrdersDisplay = template.bind({});

OrdersDisplay.args = {
  orders: [
    {
      order_number: 1,
      user_id: 1,
      status: 'NEW',
      total_amount: 782,
      updated_at: '2022-02-28 21:28:04',
      nr_of_items: 2,
    },
    {
      order_number: 2,
      user_id: 1,
      status: 'NEW',
      total_amount: 782,
      updated_at: '2022-02-28 21:28:04',
      nr_of_items: 2,
    },
    {
      order_number: 3,
      user_id: 1,
      status: 'NEW',
      total_amount: 782,
      updated_at: '2022-02-28 21:28:04',
      nr_of_items: 2,
    },
    {
      order_number: 4,
      user_id: 1,
      status: 'NEW',
      total_amount: 782,
      updated_at: '2022-02-28 21:28:04',
      nr_of_items: 2,
    },
    {
      order_number: 5,
      user_id: 1,
      status: 'NEW',
      total_amount: 782,
      updated_at: '2022-02-28 21:28:04',
      nr_of_items: 2,
    },
  ],
  orderDetails: [
    {
      id: 1,
      status: 'NEW',
      price: 782,
      created_at: '2022-02-28 21:28:04',
      user_id: 1,
      quantity: 2,
      name: 'Lilim Pearl White',
      picture: 'static/images/image_6.png',
      stock_amount: 25,
    },
    {
      id: 2,
      status: 'NEW',
      price: 782,
      created_at: '2022-02-28 21:28:04',
      user_id: 1,
      quantity: 2,
      name: 'Lilim Pearl White',
      picture: 'static/images/image_6.png',
      stock_amount: 25,
    },
    {
      id: 3,
      status: 'NEW',
      price: 782,
      created_at: '2022-02-28 21:28:04',
      user_id: 1,
      quantity: 2,
      name: 'Lilim Pearl White',
      picture: 'static/images/image_6.png',
      stock_amount: 25,
    },
    {
      id: 4,
      status: 'NEW',
      price: 782,
      created_at: '2022-02-28 21:28:04',
      user_id: 1,
      quantity: 2,
      name: 'Lilim Pearl White',
      picture: 'static/images/image_6.png',
      stock_amount: 25,
    },
    {
      id: 5,
      status: 'NEW',
      price: 782,
      created_at: '2022-02-28 21:28:04',
      user_id: 1,
      quantity: 2,
      name: 'Lilim Pearl White',
      picture: 'static/images/image_6.png',
      stock_amount: 25,
    },
  ],
};
