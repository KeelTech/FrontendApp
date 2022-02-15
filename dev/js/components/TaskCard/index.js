import React from 'react';
import { getFormattedDate } from '@helpers/utils.js';
import { card } from './style.js';

const TaskCard = ({ data={}, active=false, isView=false, clickHandler=()=>{}, showStatus=true})=>{

    const { title='', status_name='',  created_at='', due_date='' } = data;
    return(
        <div className={card({active, isView})} onClick={clickHandler}>
            <div className="text">{title}</div>
            <div className="optionList">
                <div className="timePeriod">
                    <img className="calendar img-fluid" src={ASSETS_BASE_URL+"/images/common/calendar.svg"} alt="date"/>
                    <span className="date">{getFormattedDate(due_date?due_date:created_at).formattedDate}</span>
                </div>
                {
                    status_name && showStatus?<div className="status">{status_name}</div>:null
                }
            </div>
        </div>
    )
}

export default TaskCard;