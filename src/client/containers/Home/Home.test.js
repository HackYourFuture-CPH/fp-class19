import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

test('Home section has correct classname', () => {
  const title = 'home';

  expect(
    render(
      <Router>
        <Home />
      </Router>,
    ).container.firstChild,
  ).toHaveClass(title);
});
