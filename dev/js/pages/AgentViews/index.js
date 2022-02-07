import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAgentProfile } from '@actions';
import LeftMenuBar from '@components/LeftMenuBar';
import { container, body } from './style.js';
import DashboardView from './DashboardView';
import TaskView from './TaskView';
import AgentTaskDetail from '@pages/AgentTaskDetail/TaskDetailMobileEntry.js';
import CreateTaskMobileView from '@pages/CreateTaskMobileView';
import CustomerView from './CustomerView';
import CustomerInfoView from './CustomerView/CustomerInfoView';
import DocumentView from '@pages/UserDashboardView/DocumentValutView';
import Header from '@components/Header';
import TemplateView from '@components/TemplateView'
import TemplateDetailMobileView from '@components/TemplateView/TemplateDetailMobileView.js';

const UserDashboardView = ({ match }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        const pathName = window.location.pathname;
        if(pathName!= '/agent/customer'){
            getAgentProfile({}, dispatch);
        }
    }, [])

    return (
        <div className={container + " " + "agentMainContainer"}>
            <Header isAgent></Header>
            <LeftMenuBar isAgent />
            <div className={body + ' ' + "mainContainerADD agentDashboardMain"}>
                <Switch>
                    <Route exact path={`${match.path}/`} component={DashboardView} />
                    <Route exact path={`${match.path}/dashboard`} component={DashboardView} />
                    <Route exact path={`${match.path}/tasks/:caseId`} component={TaskView} />
                    <Route exact path={`${match.path}/task/create/:caseId`} component={CreateTaskMobileView} />
                    <Route exact path={`${match.path}/task/detail/:taskId`} component={AgentTaskDetail} />
                    <Route exact path={`${match.path}/customer`} component={CustomerView} />
                    <Route exact path={`${match.path}/customer/:caseId`} component={CustomerInfoView} />
                    <Route exact path={`${match.path}/documents/:caseId`} component={DocumentView} />
                    <Route exact path={`${match.path}/templates`} component={TemplateView} />
                    <Route exact path={`${match.path}/template/:taskId`} component={TemplateDetailMobileView} />
                </Switch>
            </div>
        </div>
    )
}

export default UserDashboardView;
