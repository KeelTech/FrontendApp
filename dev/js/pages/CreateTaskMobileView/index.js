import React from 'react';
import { useHistory } from 'react-router-dom';
import MobileHeaderWrapper from '@components/MobileHeaderWrapper'
import TaskDetail from '@components/CreateTask';

const CreateTaskMobileView = (props)=>{
    let caseId = '';
    if(props && props.match && props.match.params){
        caseId = props.match.params.caseId;
    }
    const history = useHistory();

    const toggleAddTaskView = ()=>{
        history.push(`/agent/tasks/${caseId}`);

    }
    return(
        <MobileHeaderWrapper isAgent>
            <TaskDetail caseId={caseId} toggleAddTaskView={toggleAddTaskView}/>
        </MobileHeaderWrapper>
    )
}

export default CreateTaskMobileView;