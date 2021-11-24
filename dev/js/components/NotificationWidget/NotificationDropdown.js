import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { notification, header, content, content__list, message } from "./style";

const NotificationDropdown = () => {
  const taskInfo = useSelector(state=>state.TASK_INFO);
  const { notificationList=[] } = taskInfo;

  const history = useHistory();

  const clickHandler = (val)=>{
      const { category, case_id } = val;
      if(category=='TASKS'){
          history.push('/tasks');
      }else if(category=='DOCUMENT'){
          history.push('/vault');
      }else if(category=='CHATS'){
          history.push('/');
      }else if(category=='HOME'){
          history.push('/');
      }
  }

  return (
    <div className={notification}>
      <div className={header}>
        <h2>NOTIFICATIONS</h2>
        {/* ============ static content dropdown  */}

        {/* <button>Mark as read</button> */}
      </div>
      <div>
        <div className="pushNotification">
          {
            notificationList.slice(0, 3).map((val)=>{
              const { id, seen, text } = val;
              return <div className={`pushCards ${seen?'':'clickedPush'}`} key={id} onClick={()=>clickHandler(val)}>
              <div className="icoContent">
                <div className="notifyIcon">
                  <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/video.svg"} alt="video" />
                </div>
                <div className="pushContent">
                  <h2>{text}</h2>
                  {/* <p>5 mins ago</p> */}
                </div>
              </div>
              {/* <button className="pushNotifyBtn">Join Meeting</button> */}
            </div>
            })
          }
        </div>
        {
          notificationList.length>2?<div onClick={()=>history.push('/notification')}>View all</div>:null
        }
      </div>
      {/* ============ static content dropdown  */}
    </div>
  );
};

export default NotificationDropdown;
