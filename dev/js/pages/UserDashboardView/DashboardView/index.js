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

    return (
        <div className={body + '    ' + 'p-relative pt-5'}>
            <div className="mainView">
                <div className="subHeaderTop">
                    {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} /> */}
                    {/* <NotificationWidget /> */}
                    <ProfileWidget />
                </div>
                <Header headerText="Welcome Shubh!">
                    <div className="headerView">
                        {/* <div className={scheduleCallCta}>
                            <span>Schedule Call</span>
                            <img src={ASSETS_BASE_URL + "/images/common/callIcon.svg"} alt="home" />
                        </div> */}
                    </div>
                </Header>
                {/* ======================= Payment Cart  ======================= */}
                <div className="planSelectionScreen">
                    <div className="dashMainHeading">
                        <h2>Welcome Maddy</h2>
                        <div className="breadCrumb">
                            <a>Dashboard</a>
                            <span>&#62;</span>
                            <a>Premium Plan </a>
                        </div>
                    </div>
                    <div className="billingMainSection">
                        <div className="row">
                            <div className="col-md-8 col-12">
                                <div className="planDetailsBill">
                                    <h4>Premiun Plan</h4>
                                    <p>This plan will give you access to all our premiun services, such as live chat, unlimilted calls, and other great   </p>
                                    <hr />
                                    <ul>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                    </ul>
                                </div>
                                <div className="subPlndDetals">
                                    <div className="row">
                                        <div className="col-md-4 col-12">
                                            <div className="clsCardDtls">
                                                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/first.svg"} />
                                                <p>Secure & Encryopted</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="clsCardDtls">
                                                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/second.svg"} />
                                                <p>Secure & Encryopted</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="clsCardDtls">
                                                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/third.svg"} />
                                                <p>Secure & Encryopted</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="orderCartCard">
                                    <h4>ORDER SUMMARY</h4>
                                    <table>
                                        <tr>
                                            <td><p className="tblHed">Amount:</p></td>
                                            <td><p className="tblData">₹ 1,99,999</p></td>
                                        </tr>
                                        <tr>
                                            <td><p className="tblHed">SGST (9%):</p></td>
                                            <td><p className="tblData">+ ₹ 17999</p></td>
                                        </tr>
                                    </table>
                                    <hr />
                                    <table>
                                        <tr>
                                            <td><p className="tblHed">CGST (9%):</p></td>
                                            <td><p className="tblData">+ ₹ 17999</p></td>
                                        </tr>
                                        <tr>
                                            <td><p className="tblHed">Valid Till::</p></td>
                                            <td><p className="tblData">05/01/2021</p></td>
                                        </tr>
                                    </table>
                                    <hr />
                                    <table>
                                        <tr>
                                            <td><p className="tblHed">Total:</p></td>
                                            <td><p className="tblData">₹ 2,35,997</p></td>
                                        </tr>
                                    </table>
                                    <button>Proceed to Payment</button>
                                </div>
                                <div className="policyData">
                                    <p>There’s no refund for this service. We request you to check our <strong>Refund Policy</strong> for further details.
                                    </p>
                                    <p>
                                        By proceeding to payment give us the permission to access your document uploaded in the our Document Vault to make the process easier. For more details, please check our <strong>Terms and Conditions</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======================= Payment Cart  ======================= */}
                {/* ======================= Billing Flow ======================= */}
                <div className="planSelectionScreen">
                    <div className="dashMainHeading">
                        <h2>Welcome Maddy</h2>
                        <div className="breadCrumb">
                            <a>Dashboard</a>
                        </div>
                    </div>
                    <div className="selectPlan">
                        <div className="plnImgTop">
                            <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/plan.svg"} />
                        </div>
                        <div className="plnTopHeading">
                            <h5>You are currently on FREE PLAN</h5>
                            <button>Express Entry</button>
                            <p>This can be some text related to this plan and some more details if needed.</p>
                        </div>
                    </div>
                    <div className="planCardSection">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="planPurchaseCard">
                                    <div className="planPrices">
                                        <h2>Free Plan</h2>
                                        {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/plan.svg"} /> */}
                                        <p><span>$199</span>$299</p>
                                    </div>
                                    <div className="planPurchaseCont">
                                        <ul>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                        </ul>
                                        <button>Upgrade Plan</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="planPurchaseCard">
                                    <span className="popularPlan">recommended</span>
                                    <div className="planPrices">
                                        <h2>Free Plan</h2>
                                        {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/plan.svg"} /> */}
                                        <p><span>$199</span>$299</p>
                                    </div>
                                    <div className="planPurchaseCont">
                                        <ul>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                        </ul>
                                        <button>Upgrade Plan</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="planPurchaseCard">
                                    <div className="planPrices">
                                        <h2>Free Plan</h2>
                                        {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/plan.svg"} /> */}
                                        <p><span>$199</span>$299</p>
                                    </div>
                                    <div className="planPurchaseCont">
                                        <ul>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                            <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                        </ul>
                                        <button>Upgrade Plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======================= Billing Flow ======================= */}
                {/* ======================= static code ======================= */}
                <div className="planSelectionScreen">
                    <div className="dashMainHeading">
                        <h2>Welcome Maddy</h2>
                        <div className="breadCrumb">
                            <a>Dashboard</a>
                        </div>
                    </div>
                    <div className="schCallSection">
                        <p>Schedule a free call and check how Keel can help you in your immigration journey.</p>
                        <button>Schedule Call</button>
                    </div>
                    <div className="planCardSection">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="planCards">
                                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step1.svg"} />
                                    <div className="plnCardCont">
                                        <h5>Schedule Calls  </h5>
                                        <p>Get on a video call with licensed immigration consultant.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="planCards">
                                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step2.svg"} />
                                    <div className="plnCardCont">
                                        <h5>Live Chat  </h5>
                                        <p>Uninterrupted chat with consultant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="planCards">
                                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step3.svg"} />
                                    <div className="plnCardCont">
                                        <h5>End to end support  </h5>
                                        <p>Get a dedicated customer success manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="planPurchase">
                            <p>Upgrade now for one on one video calls, unlimited chats and premium support.</p>
                            <button>Upgrade Now</button>
                        </div>
                    </div>
                </div>
                {/* ======== Remove d-none  */}
                <div className="commonPopUpOverlay d-none">
                    <div className="commonPopUpConten">
                        <img className="closePop" src={ASSETS_BASE_URL + "/images/common/x.svg"} alt="time" />
                        <p>Don't give up on your dream so fast Do you really want to cancel this meeting?</p>
                        <div className="popBtn">
                            <button className="outlineBtn">No</button>
                            <button className="fillBtn">Yes</button>
                        </div>
                    </div>
                </div>
                {/* ======================= static code ======================= */}

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