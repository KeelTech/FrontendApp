import React from 'react';
import MobileHeaderWrapper from '@components/MobileHeaderWrapper'
import TaskDetail from './index.js';

const TaskDetailMobileView = (props)=>{
    let taskId = '';
    if(props && props.match && props.match && props.match.params.id){
        taskId = props.match.params.id;
    }
    return(
        <MobileHeaderWrapper isAgent>
            <TaskDetail activeTask={taskId}/>
        </MobileHeaderWrapper>
    )
}

export default TaskDetailMobileView;