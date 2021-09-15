import React, { Fragment } from "react";
import ScheduleList from "./ScheduleList.js";
import DatePicker from "@components/DatePicker";
import { upcoming } from "./style.js";

const UpcomingSchedule = ({ agentScheduleDetails }) => {
  return (
    <Fragment>
      <div className={upcoming}>Upcoming Schedule</div>
      <ScheduleList schedules={agentScheduleDetails} />
    </Fragment>
  );
};

export default UpcomingSchedule;
