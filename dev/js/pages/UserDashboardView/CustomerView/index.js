import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const queryString = require('query-string');
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import CreateProfile from '@components/CreateProfile';
import CreateShortProfile from '@components/CreateProfile/CreateShortProfile.js';
import { SET_MENUBAR_STATE } from '@constants/types';
import { body } from '../style.js';
import { container } from './style.js';

const CustomerView = (props)=>{
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { fullProfileInfo, fullProfileLoading, userInfo={} } = taskInfo;
    const isProfileExist = userInfo && userInfo.profile_exists;
    // const parsed = queryString.parse(props.location.search);
    // const shortProfile = parsed && parsed.type=='profile';
    useEffect(()=>{
        dispatch(
            {
                type: SET_MENUBAR_STATE,
                payload: {
                    activeWidget: 'profile'
                }
            }
        )
    },[])

    return(
        <div className={`${body} ${container}` + '    ' + 'p-relative pt-5'}>
            <div className="mainView">
            <div className="subHeaderTop">
                    {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} /> */}
                    {/* <NotificationWidget /> */}
                    <ProfileWidget />
                </div>
                <Header headerText="Profile">
                    <div className="headerView">
                        {/* <NotificationWidget/> */}
                        {/* <ProfileWidget/> */}
                    </div>
                </Header>
                <div className="customerView">
                    {
                        !isProfileExist?
                        <CreateShortProfile/>
                        :<CreateProfile/>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default CustomerView;