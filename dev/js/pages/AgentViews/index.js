import React from 'react';
import { useSelector } from 'react-redux';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { container, body } from './style.js';
import DashboardView from './DashboardView';

const UserDashboardView = ()=>{
    const state = useSelector(state=>state.COMMON);
    const { activeWidget } = state;

    
    return(
        <div className={container}>
            <LeftMenuBar/>
            <div className={body}>
            {
                activeWidget==='dashboard' && <DashboardView/>
            }
            {
                activeWidget==='tasks' && <DashboardView/>
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
            </div>
            <FloatingChatWidget/>
        </div>
    )
}

export default UserDashboardView;
