import React from 'react';
import TaskCard from '@components/TaskCard';
import ChatWidget from '@components/ChatWidget';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import { container, pendingTasks, scheduleCallCta, upcomingSchedules } from './style.js';
import { body } from '../style.js';

const DashboardView = ()=>{

    return(
        <div className={body}>
            <div className="mainView">
                <Header headerText="Welcome Shubh!">
                    <div className="headerView">
                        <div className={scheduleCallCta}>
                            <span>Schedule Call</span>
                            <img src={ASSETS_BASE_URL+"/images/common/callIcon.svg"} alt="home"/>
                        </div>
                        <NotificationWidget/>
                        <ProfileWidget/>
                    </div>
                    
                </Header>
                <div className={container}>
                    <div className={pendingTasks}>
                        <div className="taskHeading">PENDING TASKS</div>
                        <div className="taskList">
                            <TaskCard/>
                            <TaskCard/>
                            <TaskCard/>
                        </div>
                        <div className="allTasks">
                            <div className="moreTasks">Show All</div>
                        </div>
                    </div>
                    <div className="chat">
                        <ChatWidget/>
                    </div>
                </div>
            </div>
            <div className={upcomingSchedules}></div>
        </div>
    )
}

export default DashboardView;