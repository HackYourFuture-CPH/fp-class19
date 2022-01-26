import React from 'react';

import LoginComponent from './LoginComponent';

export default {
  title: 'Components / Login Component',
  component: LoginComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => <LoginComponent />;
