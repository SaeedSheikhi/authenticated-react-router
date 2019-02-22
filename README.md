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
import { AuthenticatedRoute } from "authenticated-react-router";
//
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <section>
        <AuthenticatedRoute
          path={`/profile`}
          redirect={`/login`}
          isAuthenticated={this.props.isAuthenticated}
          component={Profile}
        />
        <Route exact path={`$/search`} component={Search} />
      </section>
    );
  }
}

export default App;

```

### UnuthenticatedRouter

```javascript
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { UnauthenticatedRoute } from "authenticated-react-router";
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
        <Route exact path={`/search`} component={Search} />
      </section>
    );
  }
}

export default App;

```



