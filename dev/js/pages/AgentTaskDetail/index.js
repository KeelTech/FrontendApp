import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTaskDetail } from '@actions';
import TaskInfo from './TaskInfo.js';

const TaskDetail = ({ activeTask })=>{
    const dispatch = useDispatch();
    const taskDetail = useSelector(state=>state.TASK_INFO.taskDetail, shallowEqual);

    useEffect(()=>{
        if(activeTask && !(taskDetail && taskDetail[activeTask])){
            refetchTaskDetail();
        }
    },[activeTask]);

    const refetchTaskDetail = ()=>{
        getTaskDetail({taskId: activeTask}, dispatch);
    }
    return(
        <Fragment>
            {
                taskDetail && taskDetail[activeTask]?<TaskInfo taskDetail={taskDetail[activeTask]} refetchTaskDetail={refetchTaskDetail}/>:null
            }
        </Fragment>
    )

}

export default TaskDetail;