
import React, { Component } from 'react';
import CONFIG from './config'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
const queryString = require('query-string');
import UserLoginView from './components/Login/UserLoginView.js'
import UserDashboardView from './components/UserDashboardView.js'
import HealthCardView from './components/HealthCardView.js'
import HealthDocCreate from './components/healthDocs/HealthDocCreate.js'

let routes = [

    { path: '/', exact: true, component: UserLoginView },
    { path: '/dashboard', exact: true, component: UserDashboardView }, 
    { path: '/healthid/details/:id', exact: true, component: HealthCardView }, 
    { path: '/healthdoc/create', exact: true, component: HealthDocCreate }, 
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