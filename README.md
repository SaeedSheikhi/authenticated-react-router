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
only allow authenticated (logged in) users to pass the route, particulary use for private routes such as profile section that need user to be logged in.


#### Props


| Prop | Description |
| ------ | ------ |
| isAuthenticated | a boolean flag that show user is logged in or not |
| redirect | if user was not logged in redirect user to this location, often is /login page |
| path | Same as React-Router |
| component | Same as React-Router |




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
force logged in users redirect to pass this route, particulary use for login or register routes that logged in user doesn't need to see.


#### Props


| Prop | Description |
| ------ | ------ |
| isAuthenticated | a boolean flag that show user is logged in or not |
| redirect | if user was logged in redirect user to this location, modules will automatically redirect user where he is came but for general purporse you must pass an generic url for example /profile page |
| path | Same as React-Router |
| component | Same as React-Router |

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



