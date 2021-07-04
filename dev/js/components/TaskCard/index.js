import React from 'react';
import { card } from './style.js';

const TaskCard = ()=>{

    return(
        <div className={card}>
            <div className="text">This is a task and the title can be as long as you want, like it can be really really big!</div>
            <div className="optionList">
                <div className="timePeriod">
                    <img className="calendar" src={ASSETS_BASE_URL+"/images/common/calendar.svg"} alt="date"/>
                    <span className="date">March 20, 2021</span>
                </div>
                <div className="status">Overdue</div>
            </div>
        </div>
    )
}

export default TaskCard;