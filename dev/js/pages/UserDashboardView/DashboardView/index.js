import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MENUBAR_STATE, SET_ACTIVE_TASK } from '@constants/types';
import { getTaskList, listCaseComments } from '@actions';
import TaskCard from '@components/TaskCard';
import ChatWidget from '@components/ChatWidget';
//import NotificationWidget from '@components/NotificationWidget';
import BlankScreen from '@components/BlankScreen';
import { isMobileView } from '@constants';
import { getFormattedDate, getFormattedTime } from '@helpers/utils.js';
import ComponentLoader from '@components/ComponentLoader';
import StageView from '@pages/AgentViews/CustomerView/CustomerInfoView/StageView.js';
import { container, pendingTasks, scheduleCallCta, upcomingSchedules } from './style.js';
import { body } from '../style.js';

const DashboardView = ({ scheduleList, calendlyURL, showCalendly = false, showChat = false, showTasks = false, planLoaded = false }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { taskList = [], taskListLoading, userInfoLoading, userInfo = {} } = taskInfo || {};
    let { case: caseDetails = {}, cases = {}, profile = {}, agent = {} } = userInfo;
    if (cases) {
        caseDetails = cases
    }
    const { full_name: agentName = '' } = agent;
    const { first_name = '' } = profile;
    const caseId = caseDetails && caseDetails.case_id;
    const userId = caseDetails && caseDetails.user;
    const [activeTask, setActiveTask] = useState('');
    const [listComments, setListComments] = useState([]);

    const fetchCommentList = () => {
        if (caseId) {
            listCaseComments({ caseId }, '', (resp, error) => {
                if (resp) {
                    setListComments(resp);
                }
            })
        }
    }

    useEffect(() => {
        dispatch(
            {
                type: SET_MENUBAR_STATE,
                payload: {
                    activeWidget: 'dashboard'
                }
            }
        )
        fetchCommentList();
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

    const scheduleCall = (url) => {
        console.log({ url });
        Calendly.initPopupWidget({ url });
    }

    return (
        <div className={body + '    ' + 'p-relative pt-5 dashTaskSchSection'}>
            <div className="mainView mainSectionTopSpace">
                {/* <Header headerText={`Welcome ${first_name}`}>
                </Header> */}
                <div className={container}>
                    {
                        (!(userInfoLoading || taskListLoading) && !showTasks && !showChat) ?
                            <div className="row onboardingView">
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="planCards">
                                        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step1.svg"} />
                                        <div className="plnCardCont">
                                            <h5>Schedule Calls  </h5>
                                            <p>Get on a video call with licensed immigration consultant.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="planCards">
                                        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step2.svg"} />
                                        <div className="plnCardCont">
                                            <h5>Live Chat  </h5>
                                            <p>Uninterrupted chat with Licensed consultant</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="planCards">
                                        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step3.svg"} />
                                        <div className="plnCardCont">
                                            <h5>End to end support  </h5>
                                            <p>We handhold you throughout the process</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : <Fragment>
                                <div className={pendingTasks + ' ' + 'pandingLeftTask'}>
                                    {taskListLoading ? <ComponentLoader /> : null}
                                    {
                                        (!(userInfoLoading || taskListLoading) && showTasks) ?
                                            <Fragment>
                                                <div className="taskHeading">Pending Tasks</div>
                                                <div className="taskList">
                                                    {
                                                        taskList.length ?
                                                            taskList.slice(0, 3).map((val) => {
                                                                const { task_id } = val;
                                                                return (<TaskCard key={task_id} isView clickHandler={() => handleTaskClick(task_id)} data={val} />)
                                                            })
                                                            : <BlankScreen message="You have no pending tasks" />
                                                    }
                                                </div>
                                                {
                                                    taskList.length > 0 ?
                                                        <div className="allTasks">
                                                            <div className="moreTasks" onClick={redirectToTaskList}>Show All</div>
                                                        </div>
                                                        : null
                                                }
                                            </Fragment>
                                            : null
                                    }
                                    {
                                        caseId && listComments && listComments.length?
                                            <Fragment>
                                                <p style={{marginTop:'50px'}} className='taskHeading'>Status</p>
                                                <div className='statusUpdateSec'>
                                                    <StageView hideInput listComments={listComments} caseId={caseId} fetchCommentList={fetchCommentList} />
                                                </div>
                                            </Fragment>
                                            : null
                                    }
                                </div>
                                <div className="chat">
                                    {
                                        !planLoaded ? <ComponentLoader /> : null
                                    }
                                    {planLoaded && caseId && userId && showChat ? <ChatWidget caseId={caseId} currentUserId={userId} chatHeaderName={agentName} /> : ""}
                                </div>
                            </Fragment>
                    }

                </div>
            </div>
            {
                !planLoaded ? <div className={upcomingSchedules + " " + "sideScheduleCard"}  >
                    <ComponentLoader />
                </div>
                    : null
            }
            {
                planLoaded ?
                    <div className={upcomingSchedules + " " + "sideScheduleCard d-none"}  >
                        <div className="headerView">
                            {/* <NotificationWidget /> */}
                            {/* <ProfileWidget /> */}
                        </div>
                        {
                            scheduleList.length && showCalendly ?
                                <div className="upcoming mt-3" onClick={() => scheduleCall(calendlyURL)}><button><i class="fa fa-phone" aria-hidden="true"></i> Schedule Call</button></div>
                                : null
                        }
                        <div className="upcoming mt-0"><span><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Upcoming Schedule</span></div>
                        {
                            scheduleList.length ?
                                scheduleList.map((val, key) => {
                                    const { start_time, name = '', end_time, cancel_url = '', reschedule_url = '', customer_name = '' } = val;
                                    return <div className="info" key={key}>
                                        <h2 className="infoHeadingName">{customer_name}</h2>
                                        <span className="upcomingTitle">{name} </span>
                                        <div className="taskSch">
                                            <div className="taskName customTimeTask">
                                                <img className="icon" src={ASSETS_BASE_URL + "/images/common/calendar.svg"} alt="time" />
                                                <span>{getFormattedDate(start_time).formattedDate}</span>
                                            </div>
                                            <div className="taskName customTimeTask">
                                                <img className="icon" src={ASSETS_BASE_URL + "/images/common/clock.svg"} alt="clock" />
                                                <span>{`${getFormattedTime(start_time)} - ${getFormattedTime(end_time)}`}</span>
                                            </div>
                                        </div>
                                        <div className="tstResh">
                                            {
                                                cancel_url ? <button className="cncTsk" onClick={() => scheduleCall(cancel_url)}>Cancel</button> : null
                                            }
                                            {
                                                reschedule_url ? <button onClick={() => scheduleCall(reschedule_url)}>Reschedule</button> : null
                                            }
                                        </div>
                                    </div>
                                })
                                : <div className="noMeeting">
                                    <h5>No meetings scheduled</h5>
                                    <img className="icon" src={ASSETS_BASE_URL + "/images/common/sch.svg"} alt="time" />
                                    {
                                        showCalendly ? <div className="upcoming" onClick={() => scheduleCall(calendlyURL)}><button><i class="fa fa-phone" aria-hidden="true"></i> Schedule Call</button></div> : null
                                    }
                                </div>
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default DashboardView;