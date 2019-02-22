import React from "react";
import queryString from "querystring";
import { Route, Redirect } from "react-router-dom";

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  const query = queryString.parse(rest.location.search.substring(1));

  return (
    <Route
      {...rest}
      render={props =>
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
