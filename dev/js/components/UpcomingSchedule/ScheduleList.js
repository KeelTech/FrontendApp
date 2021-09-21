import React from "react";
import { useHistory } from 'react-router-dom';
import { getFormattedDate, getFormattedTime } from '@helpers/utils.js';
import {schedule} from  './style.js'

const ScheduleList = ({schedules}) => {
  const history = useHistory();

  const handleCardClick = (id)=>{
    if(id){
      history.push(`agent/customer/${id}`);
    }
  }

  return (
    <div className={schedule}>
        {schedules.map((val, key) => {
          const { start_time, name = '', end_time, case_id } = val;
          return <div className="info" key={key} onClick={()=>handleCardClick(case_id)}>
              <span className="upcomingTitle">{name} </span>
              <div className="taskSch">
                  <div className="taskName">
                      <img className="icon" src={ASSETS_BASE_URL + "/images/common/calendar.svg"} alt="time" />
                      <span>{getFormattedDate(start_time).formattedDate}</span>
                  </div>
                  <div className="taskName">
                      <img className="icon" src={ASSETS_BASE_URL + "/images/common/clock.svg"} alt="clock" />
                      <span>{`${getFormattedTime(start_time)} - ${getFormattedTime(end_time)}`}</span>
                  </div>
              </div>
          </div>
        })}
    </div>
  );
};

export default ScheduleList;
