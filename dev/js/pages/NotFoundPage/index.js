import React, { Fragment } from "react";
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
import Header from "@components/Header";
import { container,main, head, content} from "./style.js";
import LeftMenuBar from '@components/LeftMenuBar';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <Fragment>
    <div className={container}>
    <LeftMenuBar />
      <div className={main}>
        <Header>
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
    </Fragment>
  );
};

export default NotFoundPage;
