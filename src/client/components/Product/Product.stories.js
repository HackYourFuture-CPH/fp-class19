import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Product from './Product';

import imageFile from '../../assets/images/image_4.png';

export default {
  title: 'Components / Product Component',
  component: Product,
  argTypes: {
    onClick: { action: 'clicked' },
    addToFavorites: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <Product
    image={imageFile}
    name={text('Name', 'Test Image')}
    price={number('Price', 20)}
    currency={text('Currency', 'DKK')}
    onClick={action('You have clicked the add to cart button')}
    addToFavorites={action('You have clicked the add to favorites button')}
  />
);
