import React, { useRef, useState } from "react";
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { container } from "./style.js";
import NotificationDropdown from "./NotificationDropdown.js";

const NotificationWidget = () => {

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
          <NotificationDropdown/>
      </DetectClickOutside>
      }
    </div>
  );
};

export default NotificationWidget;
