import React, { useState } from 'react';
import ProductPreview from './ProductPreview.component';

export default {
  title: 'Components / ProductPreview',
  component: ProductPreview,
};

// eslint-disable-next-line no-unused-vars
function Template(args) {
  const [quantityCount, setQuantity] = useState(1);
  return (
    <ProductPreview
      product={{
        name: 'Verbena bonariens',
        price: 78,
        picture: 'https://via.placeholder.com/500x500',
      }}
      quantityCount={quantityCount}
      setQuantityCount={setQuantity}
    />
  );
}

export const newProductPreview = Template.bind({});
