import React, { Fragment } from "react";
import Header from "@components/Header";

import DatePicker from "@components/DatePicker";
import { container, rightBar, widgets } from "./style.js";
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
const CompletedImg = `${ASSETS_BASE_URL}/images/AgentDashboard/completed.svg`;
const PendingImg = `${ASSETS_BASE_URL}/images/AgentDashboard/pending.svg`;
const RevenueImg = `${ASSETS_BASE_URL}/images/AgentDashboard/revenue.svg`;
const ReviewImg = `${ASSETS_BASE_URL}/images/AgentDashboard/review.svg`;

const CustomerView = () => {
  return (
    <Fragment>
      <div className="mainView">
        <Header headerText="Dashboard">
          <div>
            <NotificationWidget />
            <ProfileWidget />
          </div>
        </Header>
        <div>Jayant
        
        
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerView;
