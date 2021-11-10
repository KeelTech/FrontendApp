import React from "react";
import { notification, header, content, content__list, message } from "./style";

const NotificationDropdown = (props) => {
  return (
    <div className={notification}>
      <div className={header}>
        <h2>NOTIFICATIONS</h2>
        {/* ============ static content dropdown  */}

        <button>Mark as read</button>
      </div>
      <div>
        <div className="pushNotification">
          <div className="pushCards">
            <div className="icoContent">
              <div className="notifyIcon">
                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/video.svg"} alt="video" />
              </div>
              <div className="pushContent">
                <h2>New Meeting: Your meeting is starting in 5 minutes</h2>
                <p>5 mins ago</p>
              </div>
            </div>
            <button className="pushNotifyBtn">Join Meeting</button>
          </div>
          <div className="pushCards clickedPush">
            <div className="icoContent">
              <div className="notifyIcon">
                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/video.svg"} alt="video" />
              </div>
              <div className="pushContent">
                <h2>New Meeting: Your meeting is starting in 5 minutes</h2>
                <p>5 mins ago</p>
              </div>
            </div>
            <button className="pushNotifyBtn">Join Meeting</button>
          </div>
        </div>
      </div>
      {/* ============ static content dropdown  */}
      <div className={content}>
        <ul>
          {props.notifications.map((notification) => (
            <li key={notification.id} className={content__list}>
              <div className={message}>
                <img
                  src={
                    ASSETS_BASE_URL + "/images/common/callIconNotification.svg"
                  }
                  alt="callIcon"
                />
                <p>{notification.message}</p>
              </div>
              <div>
                <span>{notification.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationDropdown;
