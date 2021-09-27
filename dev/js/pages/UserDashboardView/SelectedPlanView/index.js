import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@components/Header';
import ProfileWidget from '@components/ProfileWidget';
import { getPlanDetail } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import SelectedPlanView from './SelectedPlanView.js'
import { body } from '../style.js';

const PlanDetail = (props)=>{
    let planId = '';
    if(props && props.match && props.match.params.id){
        planId = props.match.params.id;
    }

    const dispatch = useDispatch();
    const history = useHistory();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={}, userInfoLoading } = taskInfo;
    const { profile={} } = userInfo;
    const { first_name='' } = profile;

    const [selectedUpgradePlan, setUpgradePlan] = useState({});

    const redirectDashboard = ()=>{
        history.push('/');
    }

    useEffect(()=>{
        getPlanDetail({id: planId}, dispatch, (resp, err)=>{
            if(resp){
                setUpgradePlan(resp);
            }
        })
    },[])

    return(
    <div className={body + '    ' + 'p-relative pt-5'}>
        <div className="mainView mainSectionTopSpace">
            <div className="subHeaderTop">
            <div className="headerContent">
            <img className="img-fluid keelTopLogo" src={ASSETS_BASE_URL + "/images/common/keelIcon.svg"} alt="home" onClick={()=>history.push('/')} />
                <ProfileWidget />
                </div>
            </div>
            <Header headerText="">
                <div className="headerView">
                </div>
            </Header>
            {
                selectedUpgradePlan && selectedUpgradePlan.id?<SelectedPlanView selectedUpgradePlan={selectedUpgradePlan} redirectDashboard={redirectDashboard} first_name={first_name} planId={planId}/>
                :<LoadingWidget/>
            }
        </div>
    </div>
    )
}

export default PlanDetail;