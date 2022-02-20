import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.component';

export default { title: 'Components / Header' };

export function HeaderBar() {
  return <MemoryRouter>
    <Header isAuthenticated={false} />
  </MemoryRouter>
}
export function HeaderBarAuthenticated() {
  return <MemoryRouter>
    <Header isAuthenticated={true} username="Jane" />
  </MemoryRouter>
}
