import React from 'react';
import OfferProductsList from './OfferProductsList.component';

export default {
  title: 'Components / Offer Product List',
  component: OfferProductsList,
  argTypes: {
    products: { control: '' },
  },
};

const template = ({ products }) => <OfferProductsList products={products} />;

export const ProductsList = template.bind({});

ProductsList.args = {
  products: [
    {
      id: 17,
      name: 'Helianthemum',
      price: 78,
      color: 'purple',
      size: 'l',
      is_available: true,
      stock_amount: 100,
      is_on_discount: true,
      discount_percent: 20,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 18,
      name: 'Cistus purpureus',
      price: 70,
      color: 'white',
      size: 's',
      is_available: true,
      stock_amount: 100,
      is_on_discount: true,
      discount_percent: 30,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 19,
      name: 'Helenium “Waltraut”',
      price: 80,
      color: 'blue',
      size: 'sm',
      is_available: true,
      stock_amount: 100,
      is_on_discount: true,
      discount_percent: 20,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 20,
      name: 'Crocosmia “Mistral”',
      price: 85,
      color: 'orange',
      size: 'xxl',
      is_available: true,
      stock_amount: 100,
      is_on_discount: true,
      discount_percent: 20,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 21,
      name: 'Fuchsia',
      price: 90,
      color: 'white',
      size: 's',
      is_available: true,
      stock_amount: 100,
      is_on_discount: true,
      discount_percent: 35,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 22,
      name: 'Solanum crispum',
      price: 82,
      color: 'blue',
      size: 'sm',
      is_available: true,
      stock_amount: 100,
      is_on_discount: true,
      discount_percent: 45,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 23,
      name: 'Hydrangea',
      price: 60,
      color: 'green',
      size: 'xl',
      is_available: true,
      stock_amount: 100,
      is_on_discount: true,
      discount_percent: 50,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 24,
      name: 'Apple Blossom',
      price: 79,
      color: 'yellow',
      size: 'xxl',
      is_available: true,
      stock_amount: 100,
      is_on_discount: true,
      discount_percent: 25,
      picture: 'https://via.placeholder.com/500x500',
    },
  ],
};
