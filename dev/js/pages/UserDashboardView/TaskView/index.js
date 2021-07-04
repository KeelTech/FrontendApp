import React, { useState } from 'react';
import TaskCard from '@components/TaskCard';
import ChatWidget from '@components/ChatWidget';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import { container, tasksView } from './style.js';
import { body } from '../style.js';

const TaskView = ()=>{
    const [activeWidget, setActiveWidget] = useState('pending');
    const [activeTask, setActiveTask] = useState(1);

    const handleCtaClick = (val)=>{
        setActiveWidget(val);
    }

    const taskClickHandler = (val)=>{
        setActiveTask(val);
    }

    return(
        <div className={body}>
            <div className="mainView">
                <Header headerText="Task">
                    <div className="headerView">
                        <NotificationWidget/>
                        <ProfileWidget/>
                    </div>
                </Header>
                <div className={container}>
                    <div className={tasksView}>
                        <div className="tasksCta">
                            <div className={`cta ${activeWidget==='pending'?'ctaActive':''}`} onClick={()=>handleCtaClick('pending')}>
                                <span>Pending</span>
                            </div>
                            <div className={`cta ${activeWidget==='review'?'ctaActive':''}`} onClick={()=>handleCtaClick('review')}>
                                <span>In Review</span>
                            </div>
                            <div className={`cta ${activeWidget==='completed'?'ctaActive':''}`} onClick={()=>handleCtaClick('completed')}>
                                <span>Completed</span>
                            </div>
                        </div>
                        <div className="taskList">
                            <TaskCard isView active={activeTask===1} clickHandler={()=>taskClickHandler(1)}/>
                            <TaskCard isView active={activeTask===2} clickHandler={()=>taskClickHandler(2)}/>
                            <TaskCard isView active={activeTask===3} clickHandler={()=>taskClickHandler(3)}/>
                        </div>
                    </div>
                    <div className="taskInfo">
                        <ChatWidget/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskView;