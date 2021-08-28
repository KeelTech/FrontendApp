import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { getUserProfile } from '@actions';
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import { container } from './style.js';
import DashboardView from './DashboardView';
import TaskView from './TaskView';
import DocumentValutView from './DocumentValutView';
import CustomerView from './CustomerView';
import UserOnboardingView from './UserOnboardingView';
import BillingView from './BillingView';
import SelectedPlanView from './SelectedPlanView';

const UserDashboardView = (props)=>{
    const url  = props.match.path;
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={}, userInfoLoading } = taskInfo;
    const { cases, profile_exists } = userInfo;
    const isPlanPurchased = cases && cases.plan;

    useEffect(()=>{
        getUserProfile({}, dispatch);
    },[])

    const renderRoutes = ()=>{
        
        if(userInfoLoading){
            return null;
        }else if(!profile_exists){
            return <CustomerView {...props}/>;
        }else if(url.includes('dashboard') || url==='/'){
            if(isPlanPurchased){
                return <DashboardView/>
            }else{
                return <UserOnboardingView />
            }
        }else {
            return <Fragment>
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
                    url.includes('billing') && <BillingView/>
                }
                {
                    url.includes('plan') && <SelectedPlanView {...props}/>
                }
            </Fragment>
        }

    }

    return(
        <div className={container + " " + 'mainContainer' }>
            <LeftMenuBar/>
            {
                userInfoLoading?<div className={loaderView}><LoadingWidget/></div>:renderRoutes()
            }
            {isPlanPurchased && <FloatingChatWidget/>}
        </div>
    )
}

export default UserDashboardView;