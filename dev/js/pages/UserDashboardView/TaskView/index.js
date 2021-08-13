import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SET_MENUBAR_STATE } from '@constants/types';
import TaskCard from '@components/TaskCard';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import TaskDetail from '@pages/TaskDetail';
import { isMobileView, loaderView } from '@constants';
import BlankScreen from '@components/BlankScreen';
import LoadingWidget from '@components/LoadingWidget';
import { getTaskList } from '@actions';
import { container, tasksView } from './style.js';
import { body } from '../style.js';

const TaskView = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { taskList=[], taskListLoading, userInfoLoading, userInfo } = taskInfo||{};
    const { case:caseDetails={} } = userInfo;
    const caseId = caseDetails && caseDetails.case_id;
    const [activeWidget, setActiveWidget] = useState(0);
    const [activeTask, setActiveTask] = useState('');

    const handleCtaClick = (val)=>{
        setActiveWidget(val);
        setActiveTask('');
    }

    const taskClickHandler = (taskId)=>{
        if(isMobileView()){
            history.push(`/task/detail/${taskId}`);
        }else{
            setActiveTask(taskId);
        }
    }

    useEffect(()=>{
        dispatch(
            {
                type: SET_MENUBAR_STATE,
                payload: {
                    activeWidget: 'tasks'
                }
            }
        )
    },[])

    useEffect(()=>{
        if(caseId){
            getTaskList({status: activeWidget, case: caseId}, dispatch, (resp, error)=>{
                if(resp && resp.length && !isMobileView()){
                    setActiveTask(resp[0].task_id);
                }
            });
        }
    },[dispatch, activeWidget, caseId])

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
                            <div className={`cta ${activeWidget===0?'ctaActive':''}`} onClick={()=>handleCtaClick(0)}>
                                <span>Pending</span>
                            </div>
                            <div className={`cta ${activeWidget===1?'ctaActive':''}`} onClick={()=>handleCtaClick(1)}>
                                <span>In Review</span>
                            </div>
                            <div className={`cta ${activeWidget===2?'ctaActive':''}`} onClick={()=>handleCtaClick(2)}>
                                <span>Completed</span>
                            </div>
                        </div>
                        <div className="taskList">
                            {
                                userInfoLoading || taskListLoading?<div className={loaderView}><LoadingWidget/></div>
                                :<Fragment>
                                    {
                                        taskList.length?
                                        taskList.map((val)=>{
                                            const { task_id } = val;
                                            return(<TaskCard key={task_id} isView active={activeTask===task_id} clickHandler={()=>taskClickHandler(task_id)} data={val}/>)
                                        })
                                        :<BlankScreen message="You have no pending tasks"/>
                                    }
                                </Fragment>
                            }
                        </div>
                    </div>
                    <div className="taskInfo">
                        {
                            activeTask?<TaskDetail activeTask={activeTask}/>:null
                        }                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskView;