import React, { useEffect, Fragment } from 'react';
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
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={}, fullProfileLoading } = taskInfo;
    const isProfileExist = userInfo && userInfo.profile_exists;

    useEffect(()=>{
        getUserProfile({}, dispatch);
    },[])

    const renderRoutes = ()=>{
        
        if(fullProfileLoading){
            return null;
        }else if(!isProfileExist){
            return <CustomerView {...props}/>;
        }else {
            return <Fragment>
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
            </Fragment>
        }

    }

    return(
        <div className={container}>
            <LeftMenuBar/>
            {
                fullProfileLoading?<div className={loaderView}><LoadingWidget/></div>:renderRoutes()
            }
            <FloatingChatWidget/>
        </div>
    )
}

export default UserDashboardView;