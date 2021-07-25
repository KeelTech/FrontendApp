import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from "@components/Header";
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
import { getCaseList } from '@actions';
import { SET_AGENT_MENUBAR_STATE } from '@constants/types';
import { head } from "./style.js";
import DesktopViewList from './DesktopViewList'
import MobileViewList from './MobileViewList'
import { isMobileView } from '@constants';

const CustomerView = () => {
  const dispatch = useDispatch();
  const agentStore = useSelector((store) => store.AGENT_STORE);
  const { caseList } = agentStore || {};
  const history = useHistory();
  useEffect(() => {
    getCaseList({}, dispatch);
  }, []);

  useEffect(() => {
    dispatch(
      {
        type: SET_AGENT_MENUBAR_STATE,
        payload: {
          activeWidget: 'customer'
        }
      }
    )
  }, [])

  const handleCustomerClick = (caseId) => {
    history.push(`/agent/tasks/${caseId}`)
  }

  return (
    <Fragment>
      <div className="mainView">
        <Header headerText="All Customers" isAgent>
          <div className={head}>
            <NotificationWidget />
            <ProfileWidget />
          </div>
        </Header>
        <div>
          {
            isMobileView && <DesktopViewList handleCustomerClick={handleCustomerClick} caseList={caseList} />
          }
        </div>
        <div>
          {
            !isMobileView && <MobileViewList handleCustomerClick={handleCustomerClick} caseList={caseList} />
          }
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerView;
