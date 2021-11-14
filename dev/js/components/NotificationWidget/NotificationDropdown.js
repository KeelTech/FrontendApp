import React from "react";
import { useSelector } from 'react-redux';
import { notification, header, content, content__list, message } from "./style";

const NotificationDropdown = () => {
  const taskInfo = useSelector(state=>state.TASK_INFO);
  const { notificationList=[] } = taskInfo;

  return (
    <div className={notification}>
      <div className={header}>
        <h2>NOTIFICATIONS</h2>
        {/* ============ static content dropdown  */}

        {/* <button>Mark as read</button> */}
      </div>
      <div>
        <div className="pushNotification">
          {
            notificationList.map((val)=>{
              const { id, seen, text } = val;
              return <div className={`pushCards ${seen?'':'clickedPush'}`} key={id}>
              <div className="icoContent">
                <div className="notifyIcon">
                  <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/video.svg"} alt="video" />
                </div>
                <div className="pushContent">
                  <h2>{text}</h2>
                  {/* <p>5 mins ago</p> */}
                </div>
              </div>
              {/* <button className="pushNotifyBtn">Join Meeting</button> */}
            </div>
            })
          }
        </div>
      </div>
      {/* ============ static content dropdown  */}
    </div>
  );
};

export default NotificationDropdown;
