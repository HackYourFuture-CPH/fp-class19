import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RecoverPasswordComponent from './RecoverPassword.component';

export default {
  title: 'Components / RecoverPassword Component',
  component: RecoverPasswordComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const template = () => (
  <BrowserRouter>
    <RecoverPasswordComponent />
  </BrowserRouter>
);

export const defaultView = template.bind({});
