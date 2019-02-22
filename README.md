# authenticated-react-router

an HOC for authenticated routes, manage your private and public routes easily.
just replace Main Router component with AuthenticatedRouter or UnauthenticatedRouter components, see below for installation and use cases.


## Installation

### Yarn
```sh
$ yarn add authenticated-react-router
```

## Usage

### AuthenticatedRouter
```javascript
import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  AuthenticatedRoute,
  UnauthenticatedRoute
} from "authenticated-react-router";
//
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <section>
        <UnauthenticatedRoute
          path={`/login`}
          isAuthenticated={this.props.isAuthenticated}
          redirect={`/profile`}
          component={Login}
        />
        <UnauthenticatedRoute
          path={`/register`}
          isAuthenticated={this.props.isAuthenticated}
          redirect={`/profile`}
          component={Register}
        />
        <AuthenticatedRoute
          path={`/profile`}
          isAuthenticated={this.props.isAuthenticated}
          component={Profile}
        />
        <Route exact path={`${path}/search`} component={Search} />
      </section>
    );
  }
}

export default App;

```

### UnuthenticatedRouter





