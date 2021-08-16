import React from "react";
import {schedule} from  './style.js'

const ScheduleList = ({schedules}) => {
  return (
    <div className={schedule}>
      <ul>
        {schedules.map((schedule, key) => (
          <li key={key}>
            <div>
              <span className="message">{schedule.message}</span>
            </div>
            <div className="time">
              <img src={ASSETS_BASE_URL + "/images/common/clockIcon.svg"} />
              <span>{schedule.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
