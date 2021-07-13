import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TaskCard from '@components/TaskCard';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import TaskDetail from '@pages/TaskDetail';
import { isMobileView } from '@constants';
import { container, tasksView } from './style.js';
import { body } from '../style.js';

const TaskView = ()=>{
    const history = useHistory();
    const [activeWidget, setActiveWidget] = useState('pending');
    const [activeTask, setActiveTask] = useState(()=>{
        if(isMobileView()){
            return ''
        }
        return 1
    });

    const handleCtaClick = (val)=>{
        setActiveWidget(val);
    }

    const taskClickHandler = (val)=>{
        if(isMobileView()){
            history.push('/task/detail/123');
        }else{
            setActiveTask(val);
        }
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
                        <TaskDetail/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskView;