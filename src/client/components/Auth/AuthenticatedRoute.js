import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthentication } from '../../hooks/useAuthentication';
import Loader from '../Loader/Loader.component';

function AuthenticatedRoute({ children, ...rest }) {
  const { isAuthenticated, isLoading } = useAuthentication();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Route
      // (we need to spread)
      {...rest} // eslint-disable-line
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default AuthenticatedRoute;

AuthenticatedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
