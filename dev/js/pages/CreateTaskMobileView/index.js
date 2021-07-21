import React from 'react';
import MobileHeaderWrapper from '@components/MobileHeaderWrapper'
import TaskDetail from '@components/CreateTask';

const CreateTaskMobileView = (props)=>{
    let caseId = '';
    if(props && props.match && props.match.params){
        caseId = props.match.params.caseId;
    }
    return(
        <MobileHeaderWrapper isAgent>
            <TaskDetail caseId={caseId}/>
        </MobileHeaderWrapper>
    )
}

export default CreateTaskMobileView;