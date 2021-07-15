import React, { Fragment } from "react";
import Header from "@components/Header";
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
import {head} from "./style.js";
import MobileViewList from './MobileViewList'

const CustomerView = () => {
  return (
    <Fragment>
      <div className="mainView">
        <Header headerText="All Customers">
          <div className={head}>
            <NotificationWidget />
            <ProfileWidget />
          </div>
        </Header>
        <div>
        <MobileViewList />
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerView;
