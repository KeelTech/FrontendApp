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
    const parsed = queryString.parse(props.location.search);
    const shortProfile = parsed && parsed.type=='profile';
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
        <div className={`${body} ${container}`}>
            <div className="mainView">
                <Header headerText="Profile">
                    <div className="headerView">
                        <NotificationWidget/>
                        <ProfileWidget/>
                    </div>
                </Header>
                <div className="customerView">
                    {
                        shortProfile?
                        <CreateShortProfile/>
                        :<CreateProfile/>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default CustomerView;