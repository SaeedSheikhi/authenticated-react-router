import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={`/${props.match.params.OSType}/auth/login?redirect=${
            props.location.pathname
          }`}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
