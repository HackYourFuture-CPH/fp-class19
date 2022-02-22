import React from 'react';
import ProductDetail from './ProductDetail.component';

export default {
  title: 'Components / ProductDetail',
  component: ProductDetail,
};

const Template = (args) => <ProductDetail {...args} />;

export const newProductPreview = Template.bind({});
newProductPreview.args = {
  product,
  quantityCount,
  setQuantityCount,
};
