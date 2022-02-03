/* import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'; */
import React from 'react';

import FavouriteList from './FavouriteList';

import imageFile1 from '../../assets/images/image_4.png';
import imageFile2 from '../../assets/images/image_30.png';
import imageFile3 from '../../assets/images/image_31.png';
import imageFile4 from '../../assets/images/image_29.png';

const image1 = {
  src: imageFile1,
  alt: 'sample image',
};

const image2 = {
  src: imageFile2,
  alt: 'sample image',
};

const image3 = {
  src: imageFile3,
  alt: 'sample image',
};
const image4 = {
  src: imageFile4,
  alt: 'sample image',
};

const productList = [
  {
    image: image1,
    name: 'Verbena bonariens',
    currency: 'DKK',
    price: 78,
    discount: '',
  },
  {
    image: image2,
    name: 'Rosa pink',
    currency: 'DKK',
    price: 78,
    discount: '',
  },
  {
    image: image3,
    name: 'Anthurium pink',
    currency: 'DKK',
    price: 78,
    discount: '',
  },
  {
    image: image4,
    name: 'Anthurium pink',
    currency: 'DKK',
    price: 78,
    discount: 20,
  },
];

export default {
  title: 'Components / FavouriteList Component',
  component: FavouriteList,
};

export const Component = () => <FavouriteList productList={productList} />;
