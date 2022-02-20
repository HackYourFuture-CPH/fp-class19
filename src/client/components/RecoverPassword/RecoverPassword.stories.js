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

export function Component() {
  return <BrowserRouter>
    <RecoverPasswordComponent />
  </BrowserRouter>
}
