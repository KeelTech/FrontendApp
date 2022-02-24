import React, { useRef, useState, useMemo } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { isMobileView } from '@constants';
import Notification from "./Notification.js";
import { container } from "./style.js";

const AgentNotificationWidget = () => {
  const history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef();
  const agentTaskInfo = useSelector(state=>state.AGENT_STORE);
  const { agentNotificationLoading, agentNotificationData } = agentTaskInfo;

  const isHighlighted = useMemo(()=>{
    if(agentNotificationData && agentNotificationData.length){
      const activeMsg = agentNotificationData.filter((val)=>{
        const { chat_details } = val;
        if(chat_details && chat_details.new_message){
          return true
        }
      })
      return activeMsg.length!==0;
    }
    return false;
  },[agentNotificationData])

  return (
    <div className={container} ref={modalRef} onClick={() => {
      if(isMobileView()){
        history.push('/agent/notification')
      }else{
        setIsClicked(!isClicked);
      }
      
    }}>
      <img
        src={isHighlighted?`${ASSETS_BASE_URL}/images/messanger_highlighted.svg`:`${ASSETS_BASE_URL}/images/messenger_center_z.svg`}
        alt="notification"
      />
      {
      isClicked && 
      <DetectClickOutside targetRef={modalRef} clickOutside={()=>setIsClicked(false)}>
          <Notification agentNotificationLoading={agentNotificationLoading} agentNotificationData={agentNotificationData}/>
      </DetectClickOutside>
      }
    </div>
  );
};

export default AgentNotificationWidget;
