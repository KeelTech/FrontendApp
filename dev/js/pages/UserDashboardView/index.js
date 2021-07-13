import React from 'react';
import { useSelector } from 'react-redux';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { container } from './style.js';
import DashboardView from './DashboardView';
import TaskView from './TaskView';

const UserDashboardView = ()=>{
    const state = useSelector(state=>state.COMMON);
    const { activeWidget } = state;

    
    return(
        <div className={container}>
            <LeftMenuBar/>
            {
                activeWidget==='dashboard' && <DashboardView/>
            }
            {
                activeWidget==='tasks' && <TaskView/>
            }
            {
                activeWidget==='vault' && <DashboardView/>
            }
            {
                activeWidget==='billing' && <DashboardView/>
            }
            {
                activeWidget==='logout' && <DashboardView/>
            }
            <FloatingChatWidget/>
        </div>
    )
}

export default UserDashboardView;
