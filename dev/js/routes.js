import React, { Component } from 'react';
import CONFIG from './config';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const queryString = require('query-string');
import UserLoginView from './pages/UserLoginView';
import UserDashboardView from './pages/UserDashboardView';
import UserSignUpView from './pages/UserSignUpView';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

let routes = [
  { path: '/', exact: true, component: UserLoginView },
  { path: '/dashboard', exact: true, component: UserDashboardView },
  { path: '/login', exact: true, component: UserLoginView },
  { path: '/signup', exact: true, component: UserSignUpView },
  { path: '/linkedin', exact: true, component: LinkedInPopUp},
];

// routes.push({ path: '*', component: NotFound, NO_MATCH: true })

class RouterConfig extends Component {
  static ROUTES = routes;

  render() {
    return (
      <Switch location={location}>
        {routes.map((route, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    );
  }
}

export default RouterConfig;
