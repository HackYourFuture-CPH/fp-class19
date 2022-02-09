import React from 'react';

import ProductsPageComponent from './ProductsPageView';

export default {
  title: 'Components / ProductsPage Component',
  component: ProductsPageComponent,
  argTypes: {
    products: { control: '' },
  },
};

const template = ({ products, productsPerPage }) => {
  return (
    <ProductsPageComponent
      products={products}
      productsPerPage={productsPerPage}
    />
  );
};

export const showProducts = template.bind({});

showProducts.args = {
  products: [
    {
      id: 1,
      name: 'Verbena bonariens',
      price: 78,
      color: 'white',
      size: 's',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 2,
      name: 'Lilium “Pearl White”',
      price: 88,
      color: 'purple',
      size: 'sm',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 3,
      name: 'Hesperantha c.',
      price: 60,
      color: 'yellow',
      size: 'm',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 4,
      name: 'Verbena bonariens',
      price: 52,
      color: 'red',
      size: 'l',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 5,
      name: 'Ming Tree',
      price: 255,
      color: 'blue',
      size: 'xl',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 6,
      name: 'Anthurium “Red”',
      price: 62,
      color: 'white',
      size: 'xxl',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 7,
      name: 'Aeschynanthus',
      price: '125',
      color: 'white',
      size: 's',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 8,
      name: 'Miltonia “Sunset”',
      price: 78,
      color: 'blue',
      size: 'm',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 9,
      name: 'Geranium palustre',
      price: '78',
      color: 'green',
      size: 'xl',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 10,
      name: 'Howea forsteriana',
      price: 300,
      color: 'green',
      size: 'xl',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 11,
      name: 'Rosa “Pink”',
      price: 99,
      color: 'pink',
      size: 'xxl',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 12,
      name: 'Dahlia “Pink”',
      price: 115,
      color: 'pink',
      size: 's',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 13,
      name: 'Rosa “Sweer honey”',
      price: 99,
      color: 'red',
      size: 'sm',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 14,
      name: 'Hesperantha c.',
      price: 78,
      color: 'green',
      size: 'm',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 15,
      name: 'Daphne',
      price: 69,
      color: 'orange',
      size: 'l',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
    {
      id: 16,
      name: 'Anthurium “Pink”',
      price: 58,
      color: 'yellow',
      size: 'sm',
      is_available: true,
      stock_amount: 100,
      is_on_discount: false,
      discount_percent: 0,
      picture: 'https://via.placeholder.com/500x500',
    },
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
  productsPerPage: 3,
};
