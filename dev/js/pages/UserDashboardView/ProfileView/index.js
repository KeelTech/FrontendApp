import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CreateProfile from '@components/CreateProfile/';
import { SET_MENUBAR_STATE } from '@constants/types';
import { body } from '../style.js';
import { container } from './style.js';

const CustomerView = (props) => {
    const dispatch = useDispatch();

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
                <div className="customerView">
                    <CreateProfile isProfileView {...props} />
                </div>
            </div>
        </div>
    )
}

export default CustomerView;