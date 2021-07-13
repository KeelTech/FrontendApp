import React, { Fragment } from 'react';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import DatePicker from '@components/DatePicker';
import { container, rightBar, widgets } from './style.js';
const CompletedImg = `${ASSETS_BASE_URL}/images/AgentDashboard/completed.svg`;
const PendingImg = `${ASSETS_BASE_URL}/images/AgentDashboard/pending.svg`;
const RevenueImg = `${ASSETS_BASE_URL}/images/AgentDashboard/revenue.svg`;
const ReviewImg = `${ASSETS_BASE_URL}/images/AgentDashboard/review.svg`;

const AgentDashboardView = ()=>{

    return(
        <Fragment>
            <div className="mainView">
                <Header headerText="Dashboard"></Header>
                <div className={container}>
                    <div className="performance">
                        <div className="intro">
                            <span className="profileName">Hi Shubh!</span>
                            <span className="meetingTxt">You have 9 meetings to attend in this week & you have 15 tasks to review. </span>
                            <span className="showTasks">Show Tasks</span>
                        </div>
                        <div className={widgets}>
                            <div className="widget" style={{backgroundImage: `url(${PendingImg})`}}>
                                <div className="cover">
                                    <span className="no">30</span>
                                    <span className="value">New</span>
                                    <span className="value">Applications</span>
                                </div>
                            </div>
                            <div className="widget" style={{backgroundImage: `url(${ReviewImg})`}}>
                                <div className="cover progress">
                                    <span className="no">12</span>
                                    <span className="value">In Progress</span>
                                    <span className="value">Applications</span>
                                </div>
                            </div>
                            <div className="widget" style={{backgroundImage: `url(${CompletedImg})`}}>
                                <div className="cover completed">
                                    <span className="no">20</span>
                                    <span className="value">Completed</span>
                                    <span className="value">Applications</span>
                                </div>
                            </div>
                            <div className="widget" style={{backgroundImage: `url(${RevenueImg})`}}>
                                <div className="cover revenue">
                                    <span className="no">$20,000</span>
                                    <span className="value">Total</span>
                                    <span className="value">Applications</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="graph">
                    </div>
                </div>
            </div>
            <div className={rightBar}>
                <div className="headerView">
                    <NotificationWidget/>
                    <ProfileWidget/>
                </div>
                <div className="mainCont">
                    <div className="upcoming">Upcoming Schedule</div>
                    <div className="calendar">
                        <DatePicker/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AgentDashboardView;