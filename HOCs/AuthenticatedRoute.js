import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={rest.redirect} />
      )
    }
  />
);

export default AuthenticatedRoute;
