import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Pagination from './Pagination';

export default {
  title: 'Components / Pagination Component',
  component: Pagination,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <Pagination
    postsPerPage={10}
    totalPosts={500}
    paginate={(page) => console.log(page)}
  />
);
