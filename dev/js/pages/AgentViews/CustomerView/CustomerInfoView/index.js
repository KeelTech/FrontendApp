import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

  let caseId = '';
  if(props && props.match && props.match.params){
      caseId = props.match.params.caseId;
  }
  const history = useHistory();
  
  const redirectToTask = ()=>{
    history.push(`/agent/tasks/${caseId}`);
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
    const dataParams = { customerId: caseId };
    getCaseDetail(dataParams, dispatch);
  },[])

  
  const {
    case_details = {},
    user_details = {},
    user_qualifications = [],
    task_count = null,
  } = caseDetails;

  const { first_name, last_name} = user_details;
  const { display_id, plan} = case_details;

  return (
    <div className={body}>
      <div className="mainView">
        <Header headerText="Customer Details" isAgent>
          <div className="head">
            <NotificationWidget />
            <ProfileWidget />
          </div>
        </Header>
      </div>
      {caseDetailLoading ? (
        <div>
          <LoadingWidget />
        </div>
      ) : (
        <React.Fragment>
          <div className="basicInfo">
            <div className="infoWrapper">
              {/* <img className="userImage" /> */}
              <div className="userInfoHeaderWrapper">
                <h3 className="userName">
                  {first_name} {last_name} (#{display_id})
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
          {/* <div className="meetingInfoWrapper">
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
          <div className="completeInfoWrapper">
            <InfoList info={caseDetails}/>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default CustomerInfoView;
