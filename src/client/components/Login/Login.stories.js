import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Login } from './Login.component';

export default {
  title: 'Components / Login Component',
  component: Login,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);
