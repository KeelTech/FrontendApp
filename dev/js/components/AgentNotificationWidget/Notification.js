import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { readNotification, toggleNotificationChat } from '@actions';
import { renderNotificationIcons } from '@helpers/utils';
import { isMobileView } from '@constants'; 
import { notification, header, content, content__list, message } from "./style";

const Notification = () => {
const chatMessage = [
    {
        "user_name": "Pratik M",
        "new_message": "hello"
    },
    {
        "user_name": "Shivam A",
        "new_message": "hi"
    },
    {
        "user_name": "jayant arora",
        "new_message": "hi"
    }

]
  return (
    <div className={notification + " " + "testify"}>
      <div className={header}>
        <h2>NOTIFICATIONS</h2>
        {/* ============ static content dropdown  */}

        {/* <button>Mark as read</button> */}
      </div>
      <div className="dropNotification">
      {chatMessage.map(chat => (
          <div>
        <p>{chat.user_name}</p>
        <p>{chat.new_message}</p>
        </div>
      ))}
      </div>
      {/* ============ static content dropdown  */}
    </div>
  );
};

export default Notification;
