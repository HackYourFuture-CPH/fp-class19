import React from 'react';
import OrdersSummary from './OrdersSummary.component';

export default {
  title: 'Components / OrdersSummary',
  component: OrdersSummary,
  argTypes: {
    orders: { control: '' },
  },
};

const template = ({ orders }) => (
    <OrdersSummary orders={orders} />
  );

export const OrdersDisplay = template.bind({});

OrdersDisplay.args = {
  orders: [
    {
      id: 1,
      user_id: 1,
      status: 'NEW',
      created_at: "2022-02-28 21:28:04",
      updated_at: "2022-02-28 21:28:04",
    },
    {
      id: 2,
      user_id: 1,
      status: 'NEW',
      created_at: "2022-02-28 21:28:04",
      updated_at: "2022-02-28 21:28:04",
    },
    {
      id: 3,
      user_id: 1,
      status: 'NEW',
      created_at: "2022-02-28 21:28:04",
      updated_at: "2022-02-28 21:28:04",
    },
    {
      id: 4,
      user_id: 1,
      status: 'NEW',
      created_at: "2022-02-28 21:28:04",
      updated_at: "2022-02-28 21:28:04",
    },
    {
      id: 5,
      user_id: 1,
      status: 'NEW',
      created_at: "2022-02-28 21:28:04",
      updated_at: "2022-02-28 21:28:04",
    }
  ],
};
