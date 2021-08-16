import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import Header from '@components/Header';
import LoadingWidget from '@components/LoadingWidget'
import { body } from './style';
import InfoList from './InfoList';
import { getCaseDetail } from '@actions';

function CustomerInfoView() {
  const dispatch = useDispatch();
  const taskInfo = useSelector((store)=>store.TASK_INFO);
  const {caseDetails, caseDetailLoading} = taskInfo||{};
  
  useEffect(()=>{
    const dataParams = { customerId: "bc6df72f-91aa-4382-b2e4-370ca785afdc"};
    getCaseDetail(dataParams, dispatch);
  },[]);
   console.log(caseDetails);
  const {case_details = {}, user_details={}, user_qualifications = [] } = caseDetails;
  const {fullname} = user_details;
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
      {caseDetailLoading?<div><LoadingWidget/></div>
      :<React.Fragment>
      <div className="basicInfo">
        <div className="infoWrapper">
          <img
            className="userImage"
          />
          <div className="userInfoHeaderWrapper">
            <h3 className="userName">{fullname}</h3>
            <div className="flexWrapper">
              <img
                className="tagImg"
                src={ASSETS_BASE_URL + '/images/common/tagIcon.svg'}
                alt="list"
              />
              <p className="visaPackage">Express Entry</p>
            </div>
            <div className="flexWrapper">
              <img
                className="listImg"
                src={ASSETS_BASE_URL + '/images/common/list.svg'}
                alt="list"
              />
              <p className="taskDetails">23 Task Pending for review</p>
            </div>
          </div>
        </div>
        <div className="buttonWrapper">
          <button className="taskButton">Tasks</button>
          <button className="docButton">Documents</button>
        </div>
      </div>
      <div className="meetingInfoWrapper">
        <div className="meetingInfoFlexWrapper">
          <div className="meetingTextWrapper">
            <p className="meetingHeader">This title is for the meeting</p>
            <div className="meetingDateWrapper">
              <img
                className="calendarImg"
                src={ASSETS_BASE_URL + '/images/common/calendarIcon.svg'}
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
      </div>
      <div className="completeInfoWrapper">
      <InfoList info = {caseDetails}/>
      </div>
      </React.Fragment>
      }
    </div>
  );
}

export default CustomerInfoView;
