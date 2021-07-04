import React from 'react';
import { container } from './style.js';
import DashboardView from './DashboardView';
import LeftMenuBar from '@components/LeftMenuBar';

const UserDashboardView = ()=>{
    
    return(
        <div className={container}>
            <LeftMenuBar/>
            <DashboardView/>
        </div>
    )
}

export default UserDashboardView;