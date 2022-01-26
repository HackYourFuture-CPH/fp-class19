import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Product from './Product';

export default {
  title: 'Components / Product Component',
  component: Product,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <Product
    image={text('Image', '../../assets/images/hyf.png')}
    name={text('Name', 'Test Image')}
    price={text('Price', '20 DKK')}
    onClick={action('You have clicked the button')}
  />
);
