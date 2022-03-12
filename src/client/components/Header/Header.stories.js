/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.component';

export default { title: 'Components / Header' };

function Template(args) {
  return (
    <MemoryRouter>
      <Header {...args} />
    </MemoryRouter>
  );
}

export const HeaderBarAuthenticated = Template.bind({});
HeaderBarAuthenticated.args = {
  isAuthenticated: true,
  numberOfItemsInCart: 10,
  numberOfItemsInFavorite: 20,
};

export const HeaderBar = Template.bind({});
HeaderBar.args = {
  isAuthenticated: false,
  numberOfItemsInCart: 0,
  numberOfItemsInFavorite: 0,
};
