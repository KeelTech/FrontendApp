import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTaskDetail } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import TaskInfo from './TaskInfo.js';

const TaskDetail = ({ activeTask, refetchTaskList=()=>{} })=>{
    const dispatch = useDispatch();
    const taskDetail = useSelector(state=>state.TASK_INFO.taskDetail, shallowEqual);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        refetchTaskDetail();
    },[activeTask]);

    const refetchTaskDetail = ()=>{
        setLoading(true);
        getTaskDetail({taskId: activeTask}, dispatch, ()=>{
            setLoading(false);
        });
    }
    if(loading){
        return <div className={loaderView}><LoadingWidget/></div>
    }
    return(
        <Fragment>
            {
                taskDetail && taskDetail[activeTask]?<TaskInfo taskDetail={taskDetail[activeTask]} refetchTaskDetail={refetchTaskDetail} refetchTaskList={refetchTaskList}/>:null
            }
        </Fragment>
    )

}

export default TaskDetail;