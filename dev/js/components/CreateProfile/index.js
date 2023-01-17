import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import { getFullUserProfile, getCountryList } from '@actions';

import { container } from './style.js';
import ProfileEntry from './ProfileEntry.js';

const Index = (props)=>{
    console.log("hello", props);
    const [activeTab, setActiveTab] = useState("self");
    const dispatch = useDispatch();

    const { isProfileView = false } = props;
    let editID = '';
    if (props && props.match && props.match.params) {
        editID = props.match.params.id;
    }

    const taskInfo = useSelector(state => state.TASK_INFO);
    const { fullProfileInfo, countryList = [], fullProfileLoading} = taskInfo;

    useEffect(() => {
        if (!editID || !(fullProfileInfo && fullProfileInfo.profile)) {
            getFullUserProfile({}, dispatch);
        }
        if (!countryList.length) {
            getCountryList({}, dispatch);
        }
    }, [])


    const handleTabClick = (val)=>{
        setActiveTab(val);
    }

    return (
        <div className={container}>
            {
                isProfileView?
                <div className="completeInfoWrapperADD userCompleteInfo">
                    <div className='hisTabs'>
                        <ul>
                        <li className={activeTab=="self"?"tabsAct":''} onClick={()=>handleTabClick("self")}>Self</li>
                        <li className={activeTab=="spouse"?"tabsAct":''} onClick={()=>handleTabClick("spouse")}>Spouse</li>
                        </ul>
                    </div>
                </div>
                :null
            }
            {
                fullProfileLoading ? <div className={loaderView}><LoadingWidget /></div> :
                <ProfileEntry editID={editID} isProfileView={isProfileView} taskInfo={taskInfo} type={activeTab}/>
            }
        </div>
    )
}

export default Index;