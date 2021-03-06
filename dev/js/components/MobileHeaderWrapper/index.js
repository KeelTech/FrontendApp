import React, { Fragment } from 'react';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import { container, body, mobileScrollView } from '@pages/UserDashboardView/style.js';
import { mobileCont } from './style.js';

const MobileHeaderWrapper = (props)=>{
    const { isAgent=false } = props;
    return(
        <Fragment>
            <div className={`${body} ${mobileScrollView}` + '    ' + 'p-relative pt-5'}>
                <div className="mainView mainSectionTopSpace">
                    <Header headerText="" isAgent={isAgent}>
                        <div className="headerView">
                            <NotificationWidget/>
                            <ProfileWidget/>
                        </div>
                    </Header>
                    <div className={mobileCont}>
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MobileHeaderWrapper;