import React, { useState } from "react";
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

  return (
    <div className={container}>
      <img
        src={ASSETS_BASE_URL + "/images/common/notificationIcon.svg"}
        alt="notification"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      />
      {isClicked && <NotificationDropdown notifications={notificationsList} />}
    </div>
  );
};

export default NotificationWidget;
