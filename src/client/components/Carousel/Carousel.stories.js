import React from 'react';
import Carousel from './Carousel';
import { PRODUCTS_FIXTURE } from '../../fixtures/products.fixture';

export default {
  title: 'Components / Carousel',
  component: Carousel,
};

/*eslint-disable */
const Template = (args) => <Carousel {...args} />;
/* eslint-enable */
export const Default = Template.bind({});
Default.args = {
  products: PRODUCTS_FIXTURE,
  show: 4,
};
