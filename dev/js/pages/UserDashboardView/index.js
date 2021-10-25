import React, { useEffect, Fragment, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import { getUserProfile, getCalendlyLink, scheduleCall, getScheduleDetail, getPlansComponents } from '@actions';
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

let isCalendlyClosed= 0;
const UserDashboardView = (props)=>{
    const url  = props.match.path;
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={}, userInfoLoading, calendlyURL, scheduleList, planComponents=[], planLoaded=false } = taskInfo;
    const { cases={}, profile_exists, agent={}, profile={} } = userInfo;
    const { id } = profile;
    const { case_id, user } = cases;
    const isPlanPurchased = cases && cases.plan;
    const { full_name:agentName='' } = agent;
    useEffect(()=>{
        getUserProfile({}, dispatch);
        getCalendlyLink({}, dispatch);
        fetchScheduleList();
        if(!planLoaded){
            getPlansComponents({}, dispatch);
        }
        function isCalendlyEvent(e) {
            return e.data.event &&
                    e.data.event.indexOf('calendly') === 0;
        };

        var observer = new MutationObserver(function(mutations) {
            const elem = document.getElementsByClassName('calendly-overlay');
            if (elem && elem[0] && document.contains(elem[0])) {
                 isCalendlyClosed=1;
             }else if(isCalendlyClosed==1){
                console.log('CALENDLY CLOSED');
                fetchScheduleList();
                isCalendlyClosed=0;
             }
         });
         
         observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
         
        function listenCalendlyEvents(e) {
            if (isCalendlyEvent(e)) {
                if(e.data.event=='calendly.event_scheduled'){
                    const url = e.data.payload && e.data.payload.invitee && e.data.payload.invitee.uri
                    let postDataParams = {
                        calendly_invitee_url: url
                    }
                    scheduleCall(postDataParams, dispatch, (resp, req)=>{
                        getPlansComponents({}, dispatch);
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

    const showOptions = useMemo(()=>{
        let showTasks = false;
        let showDocuments = false;
        let showChat = false;
        let showCalendly = false;
        let showBilling = false;
        planComponents.map((val)=>{
            const { name='' } = val;
            if(name=="TASKS"){
                showTasks = true;
            }else if(name=='DOCUMENTS'){
                showDocuments = true;
            }else if(name=='CHAT'){
                showChat = true;
            }else if(name=='CALENDLY'){
                showCalendly = true;
            }else if(name=='BILLING'){
                showBilling = true;
            }
        })
        return { showTasks, showDocuments, showChat, showCalendly, showBilling, planLoaded: planLoaded };
    },[planComponents])

    const { showTasks, showDocuments, showChat, showBilling, showCalendly } = showOptions;

    const renderRoutes = ()=>{
        
        if(!profile_exists){
            return <CustomerView {...props}/>;
        }else if(url.includes('dashboard') || url==='/'){
            if(isPlanPurchased){
                return <DashboardView scheduleList={scheduleList} calendlyURL={calendlyURL} showCalendly={showCalendly} showChat={showChat} showTasks={showTasks} planLoaded={planLoaded}/>
            }else{
                return <UserOnboardingView calendlyURL={calendlyURL} showCalendly={showCalendly} planLoaded={planLoaded}/>
            }
        }else {
            return <Fragment>
                {
                    url.includes('tasks') && showTasks && <TaskView/>
                }
                {
                    url.includes('vault') && showDocuments && <DocumentValutView/>
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
                    url.includes('billing') && showBilling && <BillingView/>
                }
                {
                    url.includes('plan') && showBilling && <SelectedPlanView {...props}/>
                }
            </Fragment>
        }

    }

    return(
        <div className={container + " " + 'mainContainer' }>
            <LeftMenuBar/>
            {
                userInfoLoading && !id?<div className={loaderView}><LoadingWidget/></div>:renderRoutes()
            }
            {isPlanPurchased && user && case_id && showChat && <FloatingChatWidget caseId={case_id} currentUserId={user} chatHeaderName={agentName}/>}
        </div>
    )
}

export default UserDashboardView;