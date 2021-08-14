import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { getUserProfile } from '@actions';
import { container } from './style.js';
import DashboardView from './DashboardView';
import TaskView from './TaskView';
import DocumentValutView from './DocumentValutView';
import CustomerView from './CustomerView';

const UserDashboardView = (props)=>{
    const url  = props.match.path;
    const dispatch = useDispatch();

    useEffect(()=>{
        getUserProfile({}, dispatch);
    },[])

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
                url.includes('profile') && <CustomerView {...props}/>
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