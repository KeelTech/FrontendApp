import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from "@components/Header";
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import { getCaseList } from '@actions';
import { SET_AGENT_MENUBAR_STATE } from '@constants/types';
import { head, view } from "./style.js";
import DesktopViewList from './DesktopViewList'
import MobileViewList from './MobileViewList'

const CustomerView = () => {
  const dispatch = useDispatch();
  const agentStore = useSelector((store) => store.AGENT_STORE);
  const { caseList, caseListLoading } = agentStore || {};
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
    history.push(`/agent/customer/${caseId}`);
  }

  return (
    <Fragment>
      <div className="mainView mainSectionTopSpace">
      {/* <Header headerText="Dashboard" isAgent>
      </Header> */}
        <div className={view + " " + "tableMainContainer agentPadding"}>
          {
              caseListLoading?<div className={loaderView + " " + "tableInnerCont"}><LoadingWidget/></div>
              :<Fragment>
                <div className="desktopView">
                  <DesktopViewList handleCustomerClick={handleCustomerClick} caseList={caseList} />
                  {/* <div className="paginationBtn">
                    <button className="prevBtn">
                    <img className="img-fluid" src={ASSETS_BASE_URL+"/images/common/vector.svg"} alt="pagination" />
                    </button>
                    <ul>
                      <li><span className="active">1</span></li>
                      <li><span>2</span></li>
                      <li><span>3</span></li>
                    </ul>
                    <button className="nxtBtn">
                    <img className="img-fluid" src={ASSETS_BASE_URL+"/images/common/vector.svg"} alt="pagination" />
                    </button>
                  </div> */}
                </div>
                <div className="mobileView">
                  <MobileViewList handleCustomerClick={handleCustomerClick} caseList={caseList} />
                </div>
              </Fragment>
          }
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerView;
