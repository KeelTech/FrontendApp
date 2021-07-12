import React from "react";
import { notification, header, content, content__list, message } from "./style";

const NotificationDropdown = (props) => {
  return (
    <div className={notification}>
      <div className={header}>
        <h2>NOTIFICATIONS</h2>
        <button>Mark as read</button>
      </div>
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
