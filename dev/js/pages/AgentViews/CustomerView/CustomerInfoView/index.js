import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FloatingChatWidget from '@components/FloatingChatWidget';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import ChatWidget from '@components/ChatWidget';
import Header from '@components/Header';
import LoadingWidget from "@components/LoadingWidget";
import { getCaseDetail } from "@actions";
import InfoList from './InfoList';
import { body, container } from './style';

function CustomerInfoView(props) {
  const dispatch = useDispatch();
  const taskInfo = useSelector((store) => store.TASK_INFO);
  const { caseDetails, caseDetailLoading } = taskInfo || {};

  const agentInfo = useSelector(state=>state.AGENT_STORE);
  const { agentProfile={} } = agentInfo;
  const { agent_profile={} } = agentProfile;
  const { id='', user="" } = agent_profile;

  let caseId = '';
  if (props && props.match && props.match.params) {
    caseId = props.match.params.caseId;
  }
  const history = useHistory();

  const redirectToTask = () => {
    history.push(`/agent/tasks/${caseId}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const dataParams = { customerId: caseId };
    getCaseDetail(dataParams, dispatch);
  }, [])


  const {
    case_details = {},
    user_details = {},
    user_qualifications = [],
    task_count = null,
  } = caseDetails;

  const { first_name, last_name } = user_details;
  const { display_id, plan } = case_details;
  return (
    <div className={body}>
      <div className="mainView mainSectionTopSpace">
        {/* <Header headerText="Customer Details" isAgent>
          <div className="head">
            <NotificationWidget />
            <ProfileWidget />
          </div>
        </Header> */}
      </div>
      {caseDetailLoading ? (
        <div>
          <LoadingWidget />
        </div>
      ) : (
        <div className="main-container customerMainContainer agentPadding">
          <div className="leftBar">
            <div className="basicInfoADD customerDetails">
              <div className="infoWrapper">
                <img className="img-fluid userProfileXn" src={ASSETS_BASE_URL + "/images/common/Avatar_blue.svg"} alt="user" />
                <div className="userInfoHeaderWrapper">
                  <h3 className="userName">
                    {first_name} {last_name}
                  </h3>
                  <div className="flexWrapper">
                    <img
                      className="tagImg"
                      src={ASSETS_BASE_URL + "/images/common/tagIcon.svg"}
                      alt="list"
                    />
                    <p className="visaPackage">{plan}</p>
                  </div>
                  <div className="flexWrapper">
                    <img
                      className="listImg"
                      src={ASSETS_BASE_URL + "/images/common/list.svg"}
                      alt="list"
                    />
                    <p className="taskDetails">{task_count} Task Pending for review</p>
                  </div>
                </div>
              </div>
              <div className="buttonWrapper">
                <button className="taskButton" onClick={redirectToTask}>Tasks</button>
                {/* <button className="docButton">Documents</button> */}
              </div>
            </div>
            {/* <div className="meetingInfoWrapperADD meetingNewAd">
              <div className="meetingInfoFlexWrapper">
                <div className="meetingTextWrapper">
                  <p className="meetingHeader">This title is for the meeting</p>
                  <div className="meetingDateWrapper">
                    <img
                      className="calendarImg"
                      src={ASSETS_BASE_URL + "/images/common/calendarIcon.svg"}
                      alt="calender"
                    />
                    <p className="meetingDate">8:30pm, 28th March, 2021</p>
                  </div>
                </div>
                <div className="meetingBtnWrapper">
                  <button className="joinBtn">Join Meeting</button>
                  <button className="scheduleBtn">Reschedule</button>
                </div>
              </div>
            </div> */}
            <div className="completeInfoWrapperADD userCompleteInfo">
              <InfoList info={caseDetails} />
            </div>
          </div>
          <div className="chat">
            {caseId && user ? <ChatWidget caseId={caseId} currentUserId={user} chatHeaderName={first_name}/> : ""}
          </div>
        </div>
      )}
      {caseId && user ? <FloatingChatWidget caseId={caseId} currentUserId={user} chatHeaderName={first_name}/> : ""}
    </div>
  );
}

export default CustomerInfoView;
