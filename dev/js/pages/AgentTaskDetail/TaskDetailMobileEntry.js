import React from 'react';
import FloatingChatWidget from '@components/FloatingChatWidget';
import LeftMenuBar from '@components/LeftMenuBar';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import TaskDetail from './index.js';
import { container, body, mobileScrollView } from '@pages/UserDashboardView/style.js';
import { taskMobileCont } from './style.js';

const TaskDetailMobileView = (props)=>{
    let taskId = '';
    if(props && props.match && props.match && props.match.params.id){
        taskId = props.match.params.id;
    }
    return(
        <div className={container}>
            <LeftMenuBar/>
            <div className={`${body} ${mobileScrollView}`}>
                <div className="mainView">
                    <Header headerText="">
                        <div className="headerView">
                            <NotificationWidget/>
                            <ProfileWidget/>
                        </div>
                    </Header>
                    <div className={taskMobileCont}>
                        <TaskDetail activeTask={taskId}/>
                    </div>
                </div>
            </div>
            <FloatingChatWidget/>
        </div>
    )
}

export default TaskDetailMobileView;