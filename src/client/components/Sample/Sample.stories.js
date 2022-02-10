import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import { Sample } from './Sample.component';

export default {
  title: 'Components / Sample',
  component: Sample,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const SampleComponent = () => (
  <Sample
    title={text('Title', 'Test title')}
    onClick={action('You have clicked the button')}
  />
);
