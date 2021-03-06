import React from "react";
import { useHistory } from 'react-router-dom';
import { getNameInitialHelper } from '@helpers/utils';
import ComponentLoader from '@components/ComponentLoader';
import { notification, header } from "./style";

const Notification = ({agentNotificationData, agentNotificationLoading}) => {
  const history = useHistory();

  const clickHandler = (case_id)=>{
    history.push(`/agent/customer/${case_id}`);
  }

  return (
    <div className={notification + " " + "testify"}>
      <div className={header}>
        <h2>MESSAGES</h2>
      </div>
      <div className="dropNotification agentNotification">
        {
          agentNotificationLoading && agentNotificationData && agentNotificationData.length==0?
          <div className='pushCards'>
            <ComponentLoader/>
          </div>
          :null
        }
        {
          agentNotificationData.map((val, key)=>{
            const { user_details, chat_details, case_id } = val;
            const { user_name, email } = user_details;
            const { new_message, message, sent_date, sent_by } = chat_details;
            return <div key={key} className={`pushCards ${new_message?'':'clickedPush'}`} onClick={()=>clickHandler(case_id)}>
              <div className="icoContent">
                <div className="notifyIcon">
                  <p>{getNameInitialHelper(user_name)}</p>
                </div>
                <div className="pushContent">
                  <h2>{user_name}</h2>
                  <p numberOfLines={1}>{email!=sent_by?<strong className="sendRecvHead">You : </strong>:null } { message.length < 35? message: `${message.substring(0, 32)}...` }</p>  
                  <p className="msgTime notifyTime">{(new Date(sent_date)).toLocaleString()}</p>
                </div>
              </div>
            </div>
          })
        }
        {
            !agentNotificationLoading && agentNotificationData.length==0?
            <p className="emptyNotification">No New Messages</p>
            :null
        }
      </div>
    </div>
  );
};

export default Notification;
