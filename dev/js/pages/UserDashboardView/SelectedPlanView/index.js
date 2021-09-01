import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@components/Header';
import ProfileWidget from '@components/ProfileWidget';
import SelectedPlanView from './SelectedPlanView.js'
import { body } from '../style.js';

const PlanDetail = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={}, userInfoLoading } = taskInfo;
    const { profile={} } = userInfo;
    const { first_name='' } = profile;
    const planData = [
        {
            id: 1,
            actualPrice:  '$199',
            dealPrice: '$0',
            isAcive: true,
            planName: 'Free Plan'
        },
        {
            id: 2,
            actualPrice:  '$599',
            dealPrice: '$299',
            isPopular: true,
            isAcive: false,
            planName: 'Premium Plan'
        },
        {
            id: 3,
            actualPrice:  '$299',
            dealPrice: '$199',
            isAcive: false,
            planName: 'Calling Plan'
        }
    ]
    const [selectedUpgradePlan, setUpgradePlan] = useState(planData[0]);

    const planClick = (planInfo)=>{
        if(planInfo && planInfo.isAcive){

        }else{
            setUpgradePlan(planInfo);
        }
    }

    const redirectDashboard = ()=>{
        history.push('/');
    }

    return(
    <div className={body + '    ' + 'p-relative pt-5'}>
        <div className="mainView mainSectionTopSpace">
            <div className="subHeaderTop">
            <div className="headerContent">
            <img className="img-fluid keelTopLogo" src={ASSETS_BASE_URL + "/images/common/keelIcon.svg"} alt="home" onClick={()=>history.push('/')} />
                {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} /> */}
                {/* <NotificationWidget /> */}
                <ProfileWidget />
                </div>
            </div>
            <Header headerText="">
                <div className="headerView">
                    {/* <div className={scheduleCallCta}>
                        <span>Schedule Call</span>
                        <img src={ASSETS_BASE_URL + "/images/common/callIcon.svg"} alt="home" />
                    </div> */}
                </div>
            </Header>
            <SelectedPlanView selectedUpgradePlan={selectedUpgradePlan} redirectDashboard={redirectDashboard} first_name={first_name} planClick={planClick} history={history}/>
        </div>
    </div>
    )
}

export default PlanDetail;