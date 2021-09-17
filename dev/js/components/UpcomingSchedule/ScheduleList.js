import React from "react";
import { getFormattedDate, getFormattedTime } from '@helpers/utils.js';
import {schedule} from  './style.js'

const ScheduleList = ({schedules}) => {
  return (
    <div className={schedule}>
        {schedules.map((val, key) => {
          const { start_time, name = '', end_time } = val;
          return <div className="info" key={key}>
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
