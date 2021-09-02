import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@components/Header';
import ProfileWidget from '@components/ProfileWidget';
import CreateProfile from '@components/CreateProfile/';
import { SET_MENUBAR_STATE } from '@constants/types';
import { body } from '../style.js';
import { container } from './style.js';

const CustomerView = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { fullProfileInfo, fullProfileLoading, userInfo = {} } = taskInfo;
    const isProfileExist = userInfo && userInfo.profile_exists;

    useEffect(() => {
        dispatch(
            {
                type: SET_MENUBAR_STATE,
                payload: {
                    activeWidget: 'profile'
                }
            }
        )
    }, [])

    return (
        <div className={`${body} ${container}` + '    ' + 'p-relative pt-5'}>
            <div className="mainView mainSectionTopSpace">
                <div className="subHeaderTop">
                    <div className="headerContent">
                    <img className="img-fluid keelTopLogo" src={ASSETS_BASE_URL + "/images/common/keelIcon.svg"} alt="home" onClick={()=>history.push('/')} />

                        {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} /> */}
                        {/* <NotificationWidget /> */}
                        <ProfileWidget />
                    </div>
                </div>
                <Header headerText={isProfileExist ? "Profile" : ""}>
                    <div className="headerView">
                        {/* <NotificationWidget/> */}
                        {/* <ProfileWidget/> */}
                    </div>
                </Header>
                <div className="customerView">
                    <CreateProfile isProfileView {...props}/>
                </div>
            </div>
        </div>
    )
}

export default CustomerView;