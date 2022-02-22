import React, { useRef, useState } from "react";  
import { useHistory } from 'react-router-dom';
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { isMobileView } from '@constants';
import Notification from "./Notification.js";
import { container } from "./style.js";

const AgentNotificationWidget = () => {
  const history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef();
// return null;
  return (
    <div className={container} ref={modalRef} onClick={() => {
      if(isMobileView()){
        history.push('/notification')
      }else{
        setIsClicked(!isClicked);
      }
      
    }}>
      <img
        src={ASSETS_BASE_URL + "/images/common/notificationIcon.svg"}
        alt="notification"
      />
      {
      isClicked && 
      <DetectClickOutside targetRef={modalRef} clickOutside={()=>setIsClicked(false)}>
          <Notification/>
      </DetectClickOutside>
      }
    </div>
  );
};

export default AgentNotificationWidget;
