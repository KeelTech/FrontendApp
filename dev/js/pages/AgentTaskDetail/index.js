import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskDetail } from '@actions';
import TaskInfo from './TaskInfo.js';

const TaskDetail = ({ activeTask })=>{
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { taskDetail={} } = taskInfo||{};


    useEffect(()=>{
        if(activeTask){
            if(!(taskDetail && taskDetail[activeTask])){
                getTaskDetail({taskId: activeTask}, dispatch);
            }
        }

    },[activeTask, dispatch]);

    return(
        <Fragment>
            {
                taskDetail && taskDetail[activeTask]?<TaskInfo taskDetail={taskDetail[activeTask]}/>:null
            }
        </Fragment>
    )

}

export default TaskDetail;