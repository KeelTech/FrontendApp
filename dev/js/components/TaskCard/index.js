import React from 'react';
import { getFormattedDate } from '@helpers/utils.js';
import { card } from './style.js';

const TaskCard = ({ data={}, active=false, isView=false, clickHandler=()=>{}})=>{

    const { title='', status_name='',  created_at=''} = data;
    return(
        <div className={card({active, isView})} onClick={clickHandler}>
            <div className="text">{title}</div>
            <div className="optionList">
                <div className="timePeriod">
                    <img className="calendar img-fluid" src={ASSETS_BASE_URL+"/images/common/calendar.svg"} alt="date"/>
                    <span className="date">{getFormattedDate(created_at).formattedDate}</span>
                </div>
                <div className="status">{status_name}</div>
            </div>
        </div>
    )
}

export default TaskCard;