import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LoginComponent from './Login';

export default {
  title: 'Components / Login Component',
  component: LoginComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <BrowserRouter>
    <LoginComponent />
  </BrowserRouter>
);
