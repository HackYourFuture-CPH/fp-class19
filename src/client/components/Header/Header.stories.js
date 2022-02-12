import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

export default { title: 'Components / Header' };

export const HeaderBar = () => (
  <MemoryRouter>
    <Header isAuthenticated={false} />
  </MemoryRouter>
);
export const HeaderBarAuthenticated = () => (
  <MemoryRouter>
    <Header isAuthenticated={true} username="Jane" />
  </MemoryRouter>
);
