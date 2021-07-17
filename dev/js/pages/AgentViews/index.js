import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { container, body } from './style.js';
import DashboardView from './DashboardView';
import TaskView from './TaskView';
import AgentTaskDetail from '@pages/AgentTaskDetail/TaskDetailMobileEntry.js';
import CreateTaskMobileView from '@pages/CreateTaskMobileView';
import CustomerView from './CustomerView';

const UserDashboardView = ({ match })=>{

    return(
        <div className={container}>
            <LeftMenuBar isAgent/>
            <div className={body}>
                <Switch>
                    <Route exact path={`${match.path}/dashboard`} component={DashboardView}/>
                    <Route exact path={`${match.path}/tasks/:caseId`} component={TaskView}/>
                    <Route exact path={`${match.path}/task/create/:caseId`} component={CreateTaskMobileView}/>
                    <Route exact path={`${match.path}/task/detail/:taskId`} component={AgentTaskDetail}/>
                    <Route exact path={`${match.path}/customer`} component={CustomerView}/>
                </Switch>
            </div>
            <FloatingChatWidget/>
        </div>
    )
}

export default UserDashboardView;