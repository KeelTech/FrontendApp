import React, { useRef, useState } from "react";
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { container } from "./style.js";
import NotificationDropdown from "./NotificationDropdown.js";

const NotificationWidget = () => {
  const notificationsList = [
    {
      id: 1,
      message: "New call scheduled by Consultant",
      time: "5 min ago",
    },
    {
      id: 2,
      message: "New call scheduled by Consultant",
      time: "5 min ago",
    },
    {
      id: 3,
      message: "New call scheduled by Consultant",
      time: "5 min ago",
    },
    {
      id: 4,
      message: "New call scheduled by Consultant",
      time: "5 min ago",
    },
  ];

  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef();
// return null;
  return (
    <div className={container} ref={modalRef} onClick={() => {
      setIsClicked(!isClicked);
    }}>
      <img
        src={ASSETS_BASE_URL + "/images/common/notificationIcon.svg"}
        alt="notification"
      />
      {
      isClicked && 
      <DetectClickOutside targetRef={modalRef} clickOutside={()=>setIsClicked(false)}>
          <NotificationDropdown notifications={notificationsList} />
      </DetectClickOutside>
      }
    </div>
  );
};

export default NotificationWidget;
