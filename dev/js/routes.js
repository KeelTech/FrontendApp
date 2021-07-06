
import React, { Component } from 'react';
import CONFIG from './config'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
const queryString = require('query-string');
import UserLoginView from './pages/UserLoginView'
import UserDashboardView from './pages/UserDashboardView'
import TaskDetailMobileEntry from './pages/TaskDetail/TaskDetailMobileEntry.js'

let routes = [

    { path: '/', exact: true, component: UserLoginView },
    { path: '/dashboard', exact: true, component: UserDashboardView },
    { path: '/login', exact: true, component: UserLoginView },
    { path: '/task/detail/:id', exact: true, component: TaskDetailMobileEntry }
]

// routes.push({ path: '*', component: NotFound, NO_MATCH: true })

class RouterConfig extends Component {


    static ROUTES = routes


    render() {
        return (
            <Switch location={location}>
            {routes.map((route, i) => (
                <Route {...route} key={i} />
            ))}
            </Switch>
        )
    }

}


export default RouterConfig