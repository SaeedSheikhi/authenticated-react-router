import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={`${rest.redirect}?redirect=${location.pathname}`} />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
