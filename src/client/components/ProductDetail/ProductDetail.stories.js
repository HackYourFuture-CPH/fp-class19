import React, { useState } from 'react';
import ProductDetail from './ProductDetail.component';

export default {
  title: 'Components / ProductDetail',
  component: ProductDetail,
};

const Template = (args) => {
  const [quantityCount, setQuantity] = useState(1);
  return (
    <>
      <ProductDetail
        product={{
          name: 'Verbena bonariens',
          price: 78,
          picture: 'https://via.placeholder.com/500x500',
        }}
        quantityCount={quantityCount}
        setQuantityCount={setQuantity}
      />
    </>
  );
};

export const newProductPreview = Template.bind({});
