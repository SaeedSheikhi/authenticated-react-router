import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={`${rest.redirect}?redirect=${props.location.pathname}`} />
      )
    }
  />
);

export default withRouter(AuthenticatedRoute);
