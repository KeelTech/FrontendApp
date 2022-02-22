import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getNameInitialHelper } from '@helpers/utils';
import { isMobileView } from '@constants'; 
import { notification, header } from "./style";

const Notification = () => {
  const history = useHistory();
  const agentTaskInfo = useSelector(state=>state.AGENT_STORE);
  const { agentNotificationData } = agentTaskInfo;

  const clickHandler = (case_id)=>{
    history.push(`/agent/customer/${case_id}`);
  }

  return (
    <div className={notification + " " + "testify"}>
      <div className={header}>
        <h2>NOTIFICATIONS</h2>
      </div>
      <div className="dropNotification">
        {
          agentNotificationData.map((val, key)=>{
            const { user_details, chat_details, case_id } = val;
            const { user_name } = user_details;
            const { new_message, last_message } = chat_details;
            return <div key={key} className={`pushCards ${new_message?'':'clickedPush'}`} onClick={()=>clickHandler(case_id)}>
              <div className="icoContent">
                <div className="notifyIcon">
                  <p>{getNameInitialHelper(user_name)}</p>
                </div>
                <div className="pushContent">
                  <h2>{user_name}</h2>
                  <p>{last_message}</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Notification;
