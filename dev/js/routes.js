import React, { Component } from 'react';
import CONFIG from './config';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const queryString = require('query-string');
import UserLoginView from './pages/UserLoginView';
import UserDashboardView from './pages/UserDashboardView';
import UserSignUpView from './pages/UserSignUpView';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import TaskDetailMobileEntry from './pages/TaskDetail/TaskDetailMobileEntry.js';
import PasswordReset from './pages/PasswordReset';
import EmailVerification from './pages/UserLoginView/EmailConfirmation';

let routes = [
  { path: '/', exact: true, component: UserLoginView },
  { path: '/dashboard', exact: true, component: UserDashboardView },
  { path: '/login', exact: true, component: UserLoginView },
  { path: '/signup', exact: true, component: UserSignUpView },
  { path: '/linkedin', exact: true, component: LinkedInPopUp },
  { path: '/task/detail/:id', exact: true, component: TaskDetailMobileEntry },
  { path: '/reset-password', exact: true, component: PasswordReset },
  { path: '/confirm-email', exact: true, component: EmailVerification },
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
