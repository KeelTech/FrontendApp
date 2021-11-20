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
import { getCountryList } from '@actions';
import { body } from '../style.js';
import { container } from './style.js';

const CustomerView = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { fullProfileInfo, fullProfileLoading, userInfo = {}, countryList=[] } = taskInfo;
    const isProfileExist = userInfo && userInfo.profile_exists;

    // const parsed = queryString.parse(props.location.search);
    // const shortProfile = parsed && parsed.type=='profile';
    useEffect(() => {
        if(!countryList.length){
            getCountryList({}, dispatch);
        }
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
                {/* <div className="subHeaderTop">
                    <div className="headerContent">
                    <img className="img-fluid keelTopLogo" src={ASSETS_BASE_URL + "/images/common/keelIcon.svg"} alt="home" onClick={()=>history.push('/')} />
                        <ProfileWidget />
                    </div>
                </div> */}
                {/* <Header headerText={isProfileExist ? "Profile" : ""}>
                    
                </Header> */}
                <div className="customerView">
                    {
                        !isProfileExist ?
                            <CreateShortProfile />
                            : <CreateProfile {...props}/>
                    }

                </div>
            </div>
        </div>
    )
}

export default CustomerView;