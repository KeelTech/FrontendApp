import React from "react";
import { useSelector } from 'react-redux';
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
import Header from "@components/Header";
import { container,main, head, content} from "./style.js";
import LeftMenuBar from '@components/LeftMenuBar';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();
  const LOGIN_STATE = useSelector(state=>state.LOGIN);
  const { isAgent, IsloggedIn } = LOGIN_STATE;

  return (
    <div className={container}>
      {
        IsloggedIn?<LeftMenuBar isAgent={isAgent}/>:null
      }
      <div className={main}>
        <Header isAgent={isAgent}>
          <div className={head}>
            <NotificationWidget />
            <ProfileWidget />
          </div>
        </Header>
        <div className={content}>
          <img src={ASSETS_BASE_URL + "/images/common/NotFoundIcon.svg"} alt="404"></img>
          <span>Sorry! We couldn’t find this page.</span>
          <button onClick={()=>history.push('/')}>Redirect to dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
