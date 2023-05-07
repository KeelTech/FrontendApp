import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "@components/Header";
import { SET_AGENT_MENUBAR_STATE } from "@constants/types";
import { getAgentDetails, getAgentSchedule } from '@actions';
import CustomToaster from '@components/CustomToaster';
import { header, wrapper, container, mobileView, rightBar, widgets } from "./style.js";
import UpcomingSchedule from "@components/UpcomingSchedule";
import ComponentLoader from '@components/ComponentLoader';

const CompletedImg = `${ASSETS_BASE_URL}/images/common/completed.svg`;
const PendingImg = `${ASSETS_BASE_URL}/images/common/pending.svg`;
const RevenueImg = `${ASSETS_BASE_URL}/images/common/revenue.svg`;
const ReviewImg = `${ASSETS_BASE_URL}/images/common/review.svg`;

const AgentDashboardView = () => {
  const dispatch = useDispatch();
  const agentInfo = useSelector(state => state.AGENT_STORE);
  const { agentProfile = {}, agentScheduleDetails = [] } = agentInfo;
  const { agent_profile = {} } = agentProfile;
  const { full_name = '' } = agent_profile;

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
    getAgentDetails({}, dispatch, (resp, err) => {
      setLoading(false);
      if (resp) {
        setDashboardData(resp);
      } else {
        updateTaskStatus(false, true, 'Failed to fetch Data');
      }
    })
    getAgentSchedule({}, dispatch);
  }, []);

  const updateTaskStatus = (success, error, errorMsg = 'Failed, Try again later', msg = 'Comment Added Successfully') => {
    if (success) {
      setToasterInfo({
        isVisible: true,
        isSuccess: true,
        isError: false,
        msg: msg
      })
    } else if (error) {
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

  const hideToaster = () => {
    setToasterInfo({
      isVisible: false
    })
  }

  const { cases_count = {} } = dashboardData || {};
  const { booked_count, in_progress_count, completed_count, earnings_count, task_count } = cases_count;
  return (
    <div className="mainView mainSectionTopSpace">
      {/* <Header headerText="Dashboard" isAgent>
      </Header> */}
      <div className={wrapper + " " + "consultDash agentPadding"}>
        <div className={container + " " + "consultDasLoad"}>
          <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
          <div className="performance">
            <div className="intro">
              <span className="profileName">Hi {full_name}!</span>
              {
                agentScheduleDetails.length ?
                  <span className="meetingTxt">
                    You have {agentScheduleDetails.length} meetings to attend in this week & you have 15 tasks
                    to review.{" "}
                  </span>
                  : null
              }
              {/* <span className="showTasks">Show Tasks</span> */}
            </div>
            {
            loading?
            <div className={widgets + " " + "consultWidgets"}>
              <ComponentLoader/>
            </div>:
            <div className={widgets + " " + "consultWidgets"}>
              <div className="widgetCardMain">
                <div className="widgetImg">
                  <img className="img-fluid" src={PendingImg} />
                </div>
                <div className="widgetContent default">
                  <div className="cover">
                    <span className="no">{booked_count}</span>
                    <span className="value">New Applications</span>
                  </div>
                </div>
              </div>
              <div className="widgetCardMain inProg">
                <div className="widgetImg">
                  <img className="img-fluid" src={ReviewImg} />
                </div>
                <div className="widgetContent">
                  <div className="cover">
                    <span className="no">{in_progress_count || 0}</span>
                    <span className="value">In Progress Applications</span>
                  </div>
                </div>
              </div>
              <div className="widgetCardMain checkIn">
                <div className="widgetImg">
                  <img className="img-fluid" src={CompletedImg} />
                </div>
                <div className="widgetContent">
                  <div className="cover">
                    {/*{completed_count || 0}*/}
                    <span className="no">87</span>
                    <span className="value">Completed Applications</span>
                  </div>
                </div>
              </div>
              <div className="widgetCardMain totalRevenue">
                <div className="widgetImg">
                  <img className="img-fluid" src={RevenueImg} />
                </div>
                <div className="widgetContent">
                  <div className="cover">
                    {/*earnings_count*/}
                    <span className="no">{booked_count+in_progress_count+87}</span>
                    <span className="value">Total Applications</span>
                  </div>
                </div>
              </div>
            </div>
          }
          </div>
          <div className={mobileView}>
            <UpcomingSchedule agentScheduleDetails={agentScheduleDetails} />
          </div>
          <div className="graph"></div>
        </div>

        <div className={rightBar}>
          <UpcomingSchedule agentScheduleDetails={agentScheduleDetails} />
        </div>
      </div>
    </div>
  );
};

export default AgentDashboardView;
