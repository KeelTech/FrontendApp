import React, { Fragment } from "react";
import ScheduleList from "./ScheduleList.js";
import DatePicker from "@components/DatePicker";
import { upcoming } from "./style.js";

const UpcomingSchedule = () => {
  const scheduleList = [
    {
      message: "This is the title of meeting, you can keep it as big as you want, like it can be really big!",
      time: "03:50pm",
    },
    {
      message: "This is the title of meeting, you can keep it as big as you want, like it can be really big!",
      time: "04:50pm",
    },
    {
      message: "This is the title of meeting, you can keep it as big as you want.",
      time: "05:50pm",
    },
    {
      message:  "This is the title of meeting, you can keep it as big as you want.",
      time: "06:50pm",
    },
  ];
  return (
    <Fragment>
      <div className={upcoming}>Upcoming Schedule</div>
      {/* <div className="calendar">
                <DatePicker />
              </div> */}
      <ScheduleList schedules={scheduleList} />
    </Fragment>
  );
};

export default UpcomingSchedule;
