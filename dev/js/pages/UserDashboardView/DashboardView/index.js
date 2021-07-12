import React from 'react';
import TaskCard from '@components/TaskCard';
import ChatWidget from '@components/ChatWidget';
import FloatingChatWidget from '@components/FloatingChatWidget';
import Header from '@components/Header';
import { container, pendingTasks, scheduleCallCta, body, upcomingSchedules } from './style.js';

const DashboardView = () => {

    return (
        <div className={body}>
            <div className="mainView">
                <Header headerText="Welcome Shubh!">
                    <div className={scheduleCallCta}>
                        <span>Schedule Call</span>
                        <img src={ASSETS_BASE_URL + "/images/common/callIcon.svg"} alt="home" />
                    </div>
                </Header>
                <div className={container}>
                    <div className={pendingTasks}>
                        <div className="taskHeading">PENDING TASKS</div>
                        <div className="taskList">
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                        </div>
                        <div className="allTasks">
                            <div className="moreTasks">Show All</div>
                        </div>
                    </div>
                    <div className="chat">
                        <ChatWidget />
                    </div>
                    <FloatingChatWidget />
                </div>
            </div>
            <div className={upcomingSchedules}></div>
        </div>
    )
}

export default DashboardView;