import { action } from '@storybook/addon-actions';
import React from 'react';
import ButtonComponent from './ButtonComponent';

export default {
  title: 'Components / Button Component',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

// storybook-controls works with spread, but `Prop spreading is forbidden eslint(react/jsx-props-no-spreading)`
// eslint-disable-next-line
export const AddBtnComponent = (args) => <ButtonComponent {...args} />;
AddBtnComponent.args = {
  title: 'ADD',
  onClick: action('You have clicked the button'),
};

// storybook-controls works with spread, but `Prop spreading is forbidden eslint(react/jsx-props-no-spreading)`
// eslint-disable-next-line
export const ViewCartBtnComponent = (args) => <ButtonComponent {...args} />;
ViewCartBtnComponent.args = {
  title: 'VIEW CART',
  onClick: action('You have clicked the button'),
};

// storybook-controls works with spread, but `Prop spreading is forbidden eslint(react/jsx-props-no-spreading)`
// eslint-disable-next-line
export const ContinueShoppingComponent = (args) => (
  <ButtonComponent {...args} />
);
ContinueShoppingComponent.args = {
  title: 'CONTINUE SHOPPING',
  onClick: action('You have clicked the button'),
  backgroundColor: 'white',
  color: '#687808',
  border: 'solid 1px',
};
