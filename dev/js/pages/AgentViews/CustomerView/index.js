import React, { Fragment } from "react";
import Header from "@components/Header";
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
import {head} from "./style.js";
import MobileViewList from './MobileViewList'
// const CompletedImg = `${ASSETS_BASE_URL}/images/AgentDashboard/completed.svg`;
// const PendingImg = `${ASSETS_BASE_URL}/images/AgentDashboard/pending.svg`;
// const RevenueImg = `${ASSETS_BASE_URL}/images/AgentDashboard/revenue.svg`;
// const ReviewImg = `${ASSETS_BASE_URL}/images/AgentDashboard/review.svg`;
// import DatePicker from "@components/DatePicker";

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
        <p>Search bar</p>
        <MobileViewList />
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerView;
