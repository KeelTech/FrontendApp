import React, { Fragment } from 'react';
import TaskStatusRow from './TaskStatusRow.js';

const TableCustomRows = ({id})=>{
    return(
        <Fragment>
            {
                id==='TaskStatusRow' && <TaskStatusRow/>
            }
        </Fragment>
    )
}

export default TableCustomRows;