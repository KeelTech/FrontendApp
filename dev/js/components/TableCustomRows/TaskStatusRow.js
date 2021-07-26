import React from 'react';
import CustomButton from '@components/CustomButton';

const TaskStatusField = ({clickHandler, optionId})=>{

    return(
        <CustomButton text="Add" clickHandler={()=>clickHandler(optionId)} margin="0px 8px 0px 0px" padding="9px" borderRadius="5px" backgroundColor="#747BB4"/>
    )
}

export default TaskStatusField