import React, { Fragment } from 'react';
import TaskStatusRow from './TaskStatusRow.js';

const TableCustomRows = ({id, clickHandler, optionId })=>{
    return(
        <Fragment>
            {
                id==='TaskStatusRow' && <TaskStatusRow clickHandler={clickHandler} optionId={optionId} />
            }
        </Fragment>
    )
}

export default TableCustomRows;