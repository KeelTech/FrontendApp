import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@components/Header';
import ProfileWidget from '@components/ProfileWidget';
import LoadingWidget from '@components/LoadingWidget';
import { getPlanList, getPendingPaymentIndent } from '@actions';
import PlanList from './PlanList.js';
import { body } from '../style.js';

const BillingView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { userInfo = {}, userInfoLoading } = taskInfo;
    const { profile = {}, cases = {} } = userInfo;
    const { first_name = '' } = profile;

    const [loading, setLoading] = useState(false);

    const [planListData, setPlanList] = useState([]);
    const [pendingPayment, setPendingPayment] = useState([]);
    const [pendingPaymentLoaded, setPaymentLoading] = useState(true);

    const planClick = (planInfo) => {
        if (planInfo && planInfo.isAcive) {

        } else {
            history.push(`/plan/detail/${planInfo.id}`);
            //setUpgradePlan(planInfo);
        }
    }

    const refetchPaymentList = () => {
        getPendingPaymentIndent({}, dispatch, (resp, err) => {
            if (resp && resp.message && resp.message.length) {
                setPendingPayment(resp.message);
            }
            setPaymentLoading(false);
        })
    }

    useEffect(() => {
        setLoading(true);
        getPlanList({}, dispatch, (resp, err) => {
            setLoading(false);
            if (resp) {
                setPlanList(resp);
            }
        })
        refetchPaymentList();
    }, [])

    return (
        <div className={body + '    ' + 'p-relative pt-5'}>
            <div className="mainView mainSectionTopSpace">
                {/* <div className="subHeaderTop">
                    <div className="headerContent">
                        <img className="img-fluid keelTopLogo" src={ASSETS_BASE_URL + "/images/common/keelIcon.svg"} alt="home" onClick={() => history.push('/')} />
                        <ProfileWidget />
                    </div>
                </div> */}
                <Header headerText="">
                    <div className="headerView">
                        {/* <div className={scheduleCallCta}>
                        <span>Schedule Call</span>
                        <img src={ASSETS_BASE_URL + "/images/common/callIcon.svg"} alt="home" />
                    </div> */}
                    </div>
                </Header>
                {
                    pendingPaymentLoaded || loading ? <LoadingWidget /> : <PlanList first_name={first_name} planClick={planClick} planData={planListData} pendingPayment={pendingPayment} caseInfo={cases} refetchPaymentList={refetchPaymentList} />
                }
            </div>
        </div>
    )
}

export default BillingView;