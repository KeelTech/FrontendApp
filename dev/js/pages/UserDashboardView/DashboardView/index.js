import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MENUBAR_STATE } from '@constants/types';
import { getTaskList } from '@actions';
import TaskCard from '@components/TaskCard';
import ChatWidget from '@components/ChatWidget';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import BlankScreen from '@components/BlankScreen';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import { container, pendingTasks, scheduleCallCta, upcomingSchedules } from './style.js';
import { body } from '../style.js';

const DashboardView = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { taskList = [], taskListLoading, userInfoLoading, userInfo = {} } = taskInfo || {};
    let { case: caseDetails = {}, cases = {} } = userInfo;
    if (cases) {
        caseDetails = cases
    }
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

    return (
        <div className={body + '    ' + 'p-relative pt-5'}>
            <div className="mainView">
                <div className="subHeaderTop">
                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} />
                    <NotificationWidget />
                    <ProfileWidget />
                </div>
                <Header headerText="Welcome Shubh!">
                    <div className="headerView">
                        <div className={scheduleCallCta}>
                            <span>Schedule Call</span>
                            <img src={ASSETS_BASE_URL + "/images/common/callIcon.svg"} alt="home" />
                        </div>
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
                                                    return (<TaskCard key={task_id} clickHandler={() => { }} data={val} />)
                                                })
                                                : <BlankScreen message="You have no pending tasks" />
                                        }
                                    </div>
                                    {
                                        taskList.length > 3 ?
                                            <div className="allTasks">
                                                <div className="moreTasks" onClick={redirectToTaskList}>Show All</div>
                                            </div>
                                            : null
                                    }
                                </Fragment>
                        }

                    </div>
                    <div className="chat">
                        {caseId ? <ChatWidget caseId={caseId} currentUserId={userId} /> : ""}
                    </div>
                </div>
            </div>
            <div className={upcomingSchedules}>
                <div className="headerView">
                    <NotificationWidget />
                    {/* <ProfileWidget /> */}
                </div>
                <div className="upcoming"><span>Upcoming Schedule</span></div>
                <div className="info">
                    <span className="upcomingTitle">This is the title of meeting </span>
                    <div className="taskSch">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/calendar.svg"} alt="time" />
                            <span>March 20, 2021</span>
                        </div>
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/clock.svg"} alt="clock" />
                            <span>09.00 - 10.00 AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardView;