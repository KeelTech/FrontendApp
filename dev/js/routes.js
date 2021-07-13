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
import AgentDashBoardView from './pages/AgentViews';
import HomePageView from './HomePageView.js';

let routes = [
  { path: '/', exact: true, component: HomePageView },
  { path: '/dashboard', exact: true, component: UserDashboardView, isPrivate: true },
  { path: '/login', exact: true, component: UserLoginView, isSignin: true },
  { path: '/signup', exact: true, component: UserSignUpView, isSignin: true },
  { path: '/linkedin', exact: true, component: LinkedInPopUp, isSignin: true },
  { path: '/task/detail/:id', exact: true, component: TaskDetailMobileEntry, isPrivate: true },
  { path: '/tasks', exact: true, component: UserDashboardView, isPrivate: true },
  { path: '/vault', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/billing', exact: true, component: UserDashboardView, isPrivate: true  },
  { path: '/agent/dashboard', exact: true, component: AgentDashBoardView, isPrivate: true  },
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
