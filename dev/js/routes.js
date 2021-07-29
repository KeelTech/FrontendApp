import React, { Component } from 'react';
import CONFIG from './config';
import CustomRoute from './CustomRoute.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const queryString = require('query-string');
import UserLoginView from './pages/UserLoginView';
import UserDashboardView from './pages/UserDashboardView';
import UserSignUpView from './pages/UserSignUpView';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import TaskDetailMobileEntry from './pages/TaskDetail/TaskDetailMobileEntry.js';
import PasswordReset from './pages/PasswordReset';
import EmailVerification from './pages/UserLoginView/EmailConfirmation';
import AgentDashBoardView from './pages/AgentViews';
import HomePageView from './HomePageView.js';
import NotFoundPage from './pages/NotFoundPage';

let routes = [
  { path: '/', exact: true, component: HomePageView },
  { path: '/dashboard', exact: true, component: UserDashboardView, isPrivate: true },
  { path: '/login', exact: true, component: UserLoginView, isSignin: true },
  { path: '/signup', exact: true, component: UserSignUpView, isSignin: true },
  { path: '/reset-password', exact: true, component: PasswordReset, isSignin: true },
  { path: '/confirm-email', exact: true, component: EmailVerification, isSignin: true },
  { path: '/linkedin', exact: true, component: LinkedInPopUp, isSignin: true },
  { path: '/task/detail/:id', exact: true, component: TaskDetailMobileEntry, isPrivate: true },
  { path: '/tasks', exact: true, component: UserDashboardView, isPrivate: true },
  { path: '/vault', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/billing', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/agent', component: AgentDashBoardView, isPrivate: true  },
  { path: '/profile', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '*', component: NotFoundPage, isPrivate: false  },
];

// routes.push({ path: '*', component: NotFound, NO_MATCH: true })

class RouterConfig extends Component {
  static ROUTES = routes;

  render() {
    return (
      <Switch location={location}>
        {routes.map((route, i) => (
          <CustomRoute {...route} key={i} />
        ))}
      </Switch>
    );
  }
}

export default RouterConfig;
