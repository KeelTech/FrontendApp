import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MENUBAR_STATE, SET_ACTIVE_TASK } from '@constants/types';
import { getTaskList } from '@actions';
import TaskCard from '@components/TaskCard';
import ChatWidget from '@components/ChatWidget';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import BlankScreen from '@components/BlankScreen';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView, isMobileView } from '@constants';
import { getFormattedDate, getFormattedTime } from '@helpers/utils.js';
import { container, pendingTasks, scheduleCallCta, upcomingSchedules } from './style.js';
import { body } from '../style.js';

const DashboardView = ({ scheduleList, calendlyURL }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { taskList = [], taskListLoading, userInfoLoading, userInfo = {} } = taskInfo || {};
    let { case: caseDetails = {}, cases = {}, profile={}, agent={} } = userInfo;
    if (cases) {
        caseDetails = cases
    }
    const { full_name:agentName='' } = agent;
    const { first_name='' } = profile;
    const caseId = caseDetails && caseDetails.case_id;
    const userId = caseDetails && caseDetails.user;
    const [activeTask, setActiveTask] = useState('');

    useEffect(() => {
        dispatch(
            {
                type: SET_MENUBAR_STATE,
                payload: {
                    activeWidget: 'dashboard'
                }
            }
        )
    }, [])

    useEffect(() => {
        if (caseId) {
            getTaskList({ status: 0, case: caseId }, dispatch, (resp, error) => {
                if (resp && resp.length) {
                    setActiveTask(resp[0].task_id);
                }
            });
        }
    }, [caseId])

    const redirectToTaskList = () => {
        history.push('/tasks');
    }

    const handleTaskClick = (taskId) => {
        if (isMobileView()) {
            history.push(`/task/detail/${taskId}`);
        } else {
            history.push(`/tasks`);
            dispatch(
                {
                    type: SET_ACTIVE_TASK,
                    payload: taskId
                }
            )
        }
    }

    const scheduleCall = ()=>{
        Calendly.initPopupWidget({url: calendlyURL});
    }

    return (
        <div className={body + '    ' + 'p-relative pt-5'}>
            <div className="mainView mainSectionTopSpace">
                <div className="subHeaderTop">
                <div className="headerContent">
                <img className="img-fluid keelTopLogo" src={ASSETS_BASE_URL + "/images/common/keelIcon.svg"} alt="home" onClick={()=>history.push('/')} />

                    {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} /> */}
                    {/* <NotificationWidget /> */}
                    <ProfileWidget />
                    </div>
                </div>
                <Header headerText={`Welcome ${first_name}`}>
                    <div className="headerView">
                        {/* <div className={scheduleCallCta}>
                            <span>Schedule Call</span>
                            <img src={ASSETS_BASE_URL + "/images/common/callIcon.svg"} alt="home" />
                        </div> */}
                    </div>
                </Header>
                <div className={container}>
                    <div className={pendingTasks + ' ' + 'pandingLeftTask'}>
                        <div className="taskHeading">Pending Tasks</div>
                        {
                            userInfoLoading || taskListLoading ? <div className={loaderView}><LoadingWidget /></div>
                                : <Fragment>
                                    <div className="taskList">
                                        {
                                            taskList.length ?
                                                taskList.slice(0, 3).map((val) => {
                                                    const { task_id } = val;
                                                    return (<TaskCard key={task_id} isView clickHandler={() => handleTaskClick(task_id)} data={val} />)
                                                })
                                                : <BlankScreen message="You have no pending tasks" />
                                        }
                                        {
                                            //  taskList.length > 3 ?

                                            //  : null  
                                        }
                                    </div>
                                    <div className="allTasks">
                                        <div className="moreTasks" onClick={redirectToTaskList}>Show All</div>
                                    </div>
                                </Fragment>
                        }

                    </div>
                    <div className="chat">
                        {caseId && userId ? <ChatWidget caseId={caseId} currentUserId={userId} chatHeaderName={agentName}/> : ""}
                    </div>
                </div>
            </div>
            <div className={upcomingSchedules}>
                <div className="headerView">
                    <NotificationWidget />
                    {/* <ProfileWidget /> */}
                </div>
                {
                    scheduleList.length?<div className="upcoming"><span>Upcoming Schedule</span></div>
                    :<div className="upcoming" onClick={scheduleCall}><span>Schedule Call</span></div>
                }
                {
                    scheduleList.map((val, key)=>{
                        const { start_time, name='', end_time } = val;
                        return <div className="info">
                            <span className="upcomingTitle">{name} </span>
                            <div className="taskSch">
                                <div className="taskName">
                                    <img className="icon" src={ASSETS_BASE_URL + "/images/common/calendar.svg"} alt="time" />
                                    <span>{getFormattedDate(start_time).formattedDate}</span>
                                </div>
                                <div className="taskName">
                                    <img className="icon" src={ASSETS_BASE_URL + "/images/common/clock.svg"} alt="clock" />
                                    <span>{`${getFormattedTime(start_time)} - ${getFormattedTime(end_time)}`}</span>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default DashboardView;