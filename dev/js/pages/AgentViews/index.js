import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { container, body } from './style.js';
import DashboardView from './DashboardView';
import TaskView from './TaskView';
import CustomerView from './CustomerView';
import TaskCreate from '@pages/AgentTaskDetail';

const UserDashboardView = ({ match })=>{

    return(
        <div className={container}>
            <LeftMenuBar/>
            <div className={body}>
            <Switch>
                <Route exact path={`${match.path}/dashboard`} component={DashboardView}/>
                <Route exact path={`${match.path}/tasks`} component={TaskView}/>
                <Route exact path={`${match.path}/task/create`} component={TaskCreate}/>
                <Route exact path={`${match.path}/customer`} component={CustomerView}/>
            </Switch>
            </div>
            <FloatingChatWidget/>
        </div>
    )
}

export default UserDashboardView;
