import React, { Fragment } from "react";
import ScheduleList from "./ScheduleList.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { upcoming } from "./style.js";

const UpcomingSchedule = ({ agentScheduleDetails }) => {
  return (
    <Fragment>
      <div className={upcoming}>Upcoming Schedule</div>
      <Calendar
        onChange={()=>{}}
        value={new Date()}
        tileContent={(date, view)=>{
          console.log(date);
          const customD = date && date.date && new Date(date.date).getDate();
          console.log(customD);
          return customD === 1?<p>new</p>:null
        }}
      />
      <ScheduleList schedules={agentScheduleDetails} />
    </Fragment>
  );
};

export default UpcomingSchedule;
