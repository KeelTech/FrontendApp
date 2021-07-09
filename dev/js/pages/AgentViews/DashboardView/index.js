import React, { Fragment } from 'react';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
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

                            </div>
                            <div className="widget" style={{backgroundImage: `url(${CompletedImg})`}}>

                            </div>
                            <div className="widget" style={{backgroundImage: `url(${RevenueImg})`}}>

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
            </div>
        </Fragment>
    )
}

export default AgentDashboardView;