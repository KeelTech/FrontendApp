import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { readNotification, toggleNotificationChat } from '@actions';
import { renderNotificationIcons } from '@helpers/utils';
import { isMobileView } from '@constants';
import { notification, header, content, content__list, message } from "./style";

const NotificationDropdown = () => {
  const taskInfo = useSelector(state=>state.TASK_INFO);
  const { notificationList=[] } = taskInfo;
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandler = (val)=>{
    const { category, id } = val;
    readNotification({id}, null, ()=>{
        if(category=='TASKS'){
            history.push('/tasks');
        }else if(category=='DOCUMENT'){
            history.push('/vault');
        }else if(category=='CHATS'){
            if(isMobileView()){
                toggleNotificationChat({value: true}, dispatch);   
            }else{
                history.push('/');
            }
        }else if(category=='HOME'){
            history.push('/');
        }
    })
  }

  return (
    <div className={notification + " " + "testify"}>
      <div className={header}>
        <h2>NOTIFICATIONS</h2>
        {/* ============ static content dropdown  */}

        {/* <button>Mark as read</button> */}
      </div>
      <div className="dropNotification">
        <div className="pushNotification">
          {
            notificationList.slice(0, 3).map((val)=>{
              const { id, seen, text } = val;
              const icon = renderNotificationIcons(val);
              return <div className={`pushCards ${seen?'clickedPush':''}`} key={id} onClick={()=>clickHandler(val)}>
              <div className="icoContent">
                <div className="notifyIcon">
                  <img className="img-fluid" src={icon} alt="video" />
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
          notificationList.length>2?<div className="viewAllNotify" onClick={()=>history.push('/notification')}>View all</div>:null
        }
      </div>
      {/* ============ static content dropdown  */}
    </div>
  );
};

export default NotificationDropdown;
