import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { getUserProfile, getCalendlyLink, scheduleCall, getScheduleDetail } from '@actions';
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
import ProfileView from './ProfileView';

const UserDashboardView = (props)=>{
    const url  = props.match.path;
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={}, userInfoLoading, calendlyURL, scheduleList } = taskInfo;
    const { cases={}, profile_exists, agent={} } = userInfo;
    const { case_id, user } = cases;
    const isPlanPurchased = cases && cases.plan;
    const { full_name:agentName='' } = agent;

    useEffect(()=>{
        getUserProfile({}, dispatch);
        if(!calendlyURL){
            getCalendlyLink({}, dispatch);
        }
        if(!scheduleList.length){
            fetchScheduleList();
        }
        function isCalendlyEvent(e) {
            return e.data.event &&
                    e.data.event.indexOf('calendly') === 0;
        };

        function listenCalendlyEvents(e) {
            if (isCalendlyEvent(e)) {
                if(e.data.event=='calendly.event_scheduled'){
                    const url = e.data.payload && e.data.payload.invitee && e.data.payload.invitee.uri
                    let postDataParams = {
                        calendly_invitee_url: url
                    }
                    scheduleCall(postDataParams, dispatch, (resp, req)=>{
                        getCalendlyLink({}, dispatch);
                        fetchScheduleList();  
                    })
                }
            }
        }

        window.addEventListener('message',listenCalendlyEvents);
        return ()=>{
            window.removeEventListener('message', listenCalendlyEvents);
        }
    },[])

    const fetchScheduleList = ()=>{
        getScheduleDetail({}, dispatch);
    }

    const renderRoutes = ()=>{
        
        if(userInfoLoading){
            return null;
        }else if(!profile_exists){
            return <CustomerView {...props}/>;
        }else if(url.includes('dashboard') || url==='/'){
            if(isPlanPurchased){
                return <DashboardView scheduleList={scheduleList} calendlyURL={calendlyURL}/>
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
                    url.includes('profile') && <ProfileView {...props}/>
                }
                {
                    url.includes('edit') && <CustomerView {...props}/>
                }
                {
                    url.includes('create') && <CustomerView {...props}/>
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
            {isPlanPurchased && user && case_id && <FloatingChatWidget caseId={case_id} currentUserId={user} chatHeaderName={agentName}/>}
        </div>
    )
}

export default UserDashboardView;