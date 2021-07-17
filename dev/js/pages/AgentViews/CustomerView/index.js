import React, { useEffect, Fragment } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from "@components/Header";
import NotificationWidget from "@components/NotificationWidget";
import ProfileWidget from "@components/ProfileWidget";
import { getCaseList } from '@actions';
import { SET_AGENT_MENUBAR_STATE } from '@constants/types';
import {head} from "./style.js";
import MobileViewList from './MobileViewList'

const CustomerView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(()=>{
    getCaseList({}, dispatch, (resp, err)=>{
      if(resp){
        console.log(resp);
      }
    })
  },[]);

  useEffect(()=>{
    dispatch(
        {
            type: SET_AGENT_MENUBAR_STATE,
            payload: {
                activeWidget: 'customer'
            }
        }
    )
  },[])

  const handleCustomerClick = (caseId)=>{
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
        <MobileViewList handleCustomerClick={handleCustomerClick}/>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerView;
