import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { HomePage } from './HomePage.container';

test('Home section has correct classname', () => {
  const title = 'home';

  expect(render(<HomePage />).container.firstChild).toHaveClass(title);
});
