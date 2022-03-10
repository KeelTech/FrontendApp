import React, { useRef, useState, useMemo } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { isMobileView } from '@constants';
import NotificationDropdown from "./NotificationDropdown.js";
import { container } from "./style.js";

const NotificationWidget = () => {
  const history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef();
  const taskInfo = useSelector(state => state.TASK_INFO);
  const { notificationList = [],  recentNotification } = taskInfo;

  const isVisible = useMemo(()=>{
    let visible = false;
    if(notificationList.filter(x=>!x.seen).length){
      visible = true;
    }
    if(recentNotification && recentNotification.text){
      if(!recentNotification.seen){
        visible = true;
      }
    }
    return visible;
  },[notificationList, recentNotification])

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
        isVisible?<span className='tick'></span>:null
      }
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
