import React, { Fragment, useState } from "react";
import ScheduleList from "./ScheduleList.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { upcoming, calendarSelected } from "./style.js";

const UpcomingSchedule = ({ agentScheduleDetails }) => {
  const [currentDate, setCurrentDate]= useState(new Date());
  const handleDateSelection = (date)=>{
    let isSelected = false;
    try{
      agentScheduleDetails.map((appointmentDate)=>{
        const { start_time } = appointmentDate;
        const appointMentTime = new Date(start_time);
        const appointmentMonth = appointMentTime.getMonth();
        const appointmentDay = appointMentTime.getDate();
        const appointmentYear = appointMentTime.getFullYear();
  
        const currentSelectedTime = new Date(date && date.date);
        const currentMonth = currentSelectedTime.getMonth();
        const currentDay = currentSelectedTime.getDate();
        const currentYear = currentSelectedTime.getFullYear();
  
        if(appointmentMonth==currentMonth && appointmentDay==currentDay && appointmentYear==currentYear){
          isSelected = true;
        }
      })
    }catch(e){
      isSelected=false;
    }
    return isSelected?<p className={calendarSelected}></p>:null
  }
  return (
    <Fragment>
      <div className={upcoming}>Upcoming Schedule</div>
      <Calendar
        onChange={(date)=>{setCurrentDate(new Date(date))}}
        value={currentDate}
        tileContent={handleDateSelection}
      />
      <ScheduleList schedules={agentScheduleDetails} />
    </Fragment>
  );
};

export default UpcomingSchedule;
