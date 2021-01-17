import React from 'react';
import queryString from 'querystring';
import { Route, Redirect, useLocation } from 'react-router-dom';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const query = queryString.parse(location.search.substring(1));

  return (
    <Route
      {...rest}
      render={(props) =>
        !rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={query.redirect || rest.redirect} />
        )
      }
    />
  );
};

export default UnauthenticatedRoute;
