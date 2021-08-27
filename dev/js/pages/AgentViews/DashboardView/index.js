import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "@components/Header";
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
import { SET_AGENT_MENUBAR_STATE } from "@constants/types";
import { getAgentDetails } from '@actions';
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import CustomToaster from '@components/CustomToaster';
import { header, wrapper, container,mobileView, rightBar, widgets } from "./style.js";
import UpcomingSchedule from "@components/UpcomingSchedule";
const CompletedImg = `${ASSETS_BASE_URL}/images/AgentDashboard/completed.svg`;
const PendingImg = `${ASSETS_BASE_URL}/images/AgentDashboard/pending.svg`;
const RevenueImg = `${ASSETS_BASE_URL}/images/AgentDashboard/revenue.svg`;
const ReviewImg = `${ASSETS_BASE_URL}/images/AgentDashboard/review.svg`;

const AgentDashboardView = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [toasterInfo, setToasterInfo] = useState({
    isVisible: false,
    isError: false,
    isSuccess: false,
    msg: ''
  })
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    dispatch({
      type: SET_AGENT_MENUBAR_STATE,
      payload: {
        activeWidget: "dashboard",
      },
    });
    getAgentDetails({}, dispatch, (resp, err)=>{
      setLoading(false);
      if(resp){
        setDashboardData(resp);
      }else{
        updateTaskStatus(false, true, 'Failed to fetch Data');
      }
    })
  }, []);

  const updateTaskStatus = (success, error, errorMsg='Failed, Try again later', msg='Comment Added Successfully')=>{
    if(success){
        setToasterInfo({
            isVisible: true,
            isSuccess: true,
            isError: false,
            msg: msg
        })
    }else if(error){
        setToasterInfo({
            isVisible: true,
            isSuccess: false,
            isError: true,
            msg: errorMsg
        })
    }
    setTimeout(() => {
        hideToaster();
    }, 1000);
  }

  const hideToaster = ()=>{
    setToasterInfo({
        isVisible: false
    })
  }

  const { cases_count={} } = dashboardData||{};
  const { booked_count, in_progress_count, completed_count, earnings_count, task_count } = cases_count;
  return (
    <div className="mainView">
      <Header headerText="Dashboard" isAgent>
        <div className={header}>
          <NotificationWidget />
          <ProfileWidget />
        </div>
      </Header>
      <div className={wrapper}>
        <div className={container}>
          {
              loading && <div className={loaderView}><LoadingWidget/></div>
          }
          <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
          <div className="performance">
            {/* <div className="intro">
              <span className="profileName">Hi Shubh!</span>
              <span className="meetingTxt">
                You have 9 meetings to attend in this week & you have 15 tasks
                to review.{" "}
              </span>
              <span className="showTasks">Show Tasks</span>
            </div> */}
            <div className={widgets}>
              <div
                className="widget widget1"
                style={{ backgroundImage: `url(${PendingImg})` }}
              >
                <div className="cover">
                  <span className="no">{booked_count}</span>
                  <span className="value">New</span>
                  <span className="value">Applications</span>
                </div>
              </div>
              <div
                className="widget widget2"
                style={{ backgroundImage: `url(${ReviewImg})` }}
              >
                <div className="cover progressADD">
                  <span className="no">{in_progress_count||0}</span>
                  <span className="value">In Progress</span>
                  <span className="value">Applications</span>
                </div>
              </div>
              <div
                className="widget widget3"
                style={{ backgroundImage: `url(${CompletedImg})` }}
              >
                <div className="cover completed">
                  <span className="no">{completed_count||0}</span>
                  <span className="value">Completed</span>
                  <span className="value">Applications</span>
                </div>
              </div>
              <div
                className="widget widget4"
                style={{ backgroundImage: `url(${RevenueImg})` }}
              >
                <div className="cover revenue">
                  <span className="no">{earnings_count}</span>
                  <span className="value">Total</span>
                  <span className="value">Applications</span>
                </div>
              </div>
            </div>
          </div>
          <div className={mobileView}>
            <UpcomingSchedule />
          </div>
          <div className="graph"></div>
        </div>

        <div className={rightBar}>
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default AgentDashboardView;
