import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateProfile from '@components/CreateProfile';
import CreateShortProfile from '@components/CreateProfile/CreateShortProfile.js';
import { SET_MENUBAR_STATE } from '@constants/types';
import { getCountryList } from '@actions';
import { body } from '../style.js';
import { container } from './style.js';

const CustomerView = (props) => {
    const dispatch = useDispatch();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { userInfo = {}, countryList=[] } = taskInfo;
    const isProfileExist = userInfo && userInfo.profile_exists;

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