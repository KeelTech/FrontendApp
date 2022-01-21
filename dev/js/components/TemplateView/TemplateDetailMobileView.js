import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getTemplateList } from '@actions';
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import MobileHeaderWrapper from '@components/MobileHeaderWrapper'
import TemplateDetail from './TemplateDetail.js';

const TaskDetailMobileView = (props)=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const agentInfo = useSelector(state => state.AGENT_STORE);
    const { templateList, templateListLoading} = agentInfo;
    let taskId = '';
    if(props && props.match && props.match.params.taskId){
        taskId = props.match.params.taskId;
    }

    const selectedTask = templateList.filter(x=>x.task_id==taskId);
    let activeTask = {};
    let addNewTask = false;
    if(selectedTask && selectedTask.length){
        activeTask = selectedTask[0];
    }

    if(taskId=="task"){
        addNewTask = true
    }

    useEffect(()=>{
        if(templateList.length===0){
            getTemplateList({}, dispatch)
        }
    },[])
    const handleBackBtnClick = ()=>{
        history.push('/agent/templates');
    }

    return(
        <MobileHeaderWrapper isAgent>
            {
                templateListLoading?<div className={loaderView + '    ' + "CstmLoaderView"}><LoadingWidget /></div>:null
            }
            {
                (activeTask.task_id || addNewTask) ?<TemplateDetail activeTask={activeTask} addNewTask={addNewTask} handleBackBtnClick={handleBackBtnClick} />:null
            }            
        </MobileHeaderWrapper>
    )
}

export default TaskDetailMobileView;