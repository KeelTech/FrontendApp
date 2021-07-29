import React from 'react';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { container } from './style.js';
import DashboardView from './DashboardView';
import TaskView from './TaskView';
import DocumentValutView from './DocumentValutView';
import CustomerView from './CustomerView';

const UserDashboardView = (props)=>{
    const url  = props.match.path;
    return(
        <div className={container}>
            <LeftMenuBar/>
            {
                (url.includes('dashboard') || url==='/') && <DashboardView/>
            }
            {
                url.includes('tasks') && <TaskView/>
            }
            {
                url.includes('vault') && <DocumentValutView/>
            }
            {
                url.includes('profile') && <CustomerView/>
            }
            {
                url.includes('billing') && <DashboardView/>
            }
            {
                url.includes('logout') && <DashboardView/>
            }
            <FloatingChatWidget/>
        </div>
    )
}

export default UserDashboardView;