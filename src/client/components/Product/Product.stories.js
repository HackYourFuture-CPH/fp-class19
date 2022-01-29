import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Product from './Product';

import imageFile from './../../assets/images/image 4.png';

const image = {
  src: imageFile,
  alt: 'sample image',
};

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
    image={image}
    name={text('Name', 'Test Image')}
    price={text('Price', '20 DKK')}
    onClick={action('You have clicked the add to cart button')}
    addToFavorites={action('You have clicked the add to favorites button')}
  />
);
