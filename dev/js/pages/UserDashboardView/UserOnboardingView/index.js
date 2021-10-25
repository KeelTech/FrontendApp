import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '@components/Header';
import ComponentLoader from '@components/ComponentLoader';
import { body } from '../style.js';

const UserOnboardingView = ({ calendlyURL, showCalendly, showBilling, planLoaded }) => {
    const history = useHistory();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { userInfo = {}, userInfoLoading } = taskInfo;
    const { profile = {} } = userInfo;
    const { first_name = '' } = profile;

    const scheduleCall = () => {
        if (calendlyURL) {
            Calendly.initPopupWidget({ url: calendlyURL });
        }
    }

    return (
        <div className={body + '    ' + 'p-relative pt-5'}>
            <div className="mainView mainSectionTopSpace">
                <Header headerText="">
                    <div className="headerView">
                    </div>
                </Header>
                <div className="planSelectionScreen">
                    <div className="dashMainHeading">
                        <h2>Welcome {first_name}</h2>
                        <div className="breadCrumb">
                            <a>Dashboard</a>
                        </div>
                    </div>
                    {
                        !planLoaded?<ComponentLoader/>:null
                    }
                    {
                        planLoaded && showCalendly?<div className="schCallSection">
                            <p>Schedule a free call to know how Keel can help you in your immigration journey.</p>
                            <button onClick={scheduleCall}>Schedule Call</button>
                        </div>:null
                    }
                    
                    <div className="planCardSection">
                        <div className="row">
                            <div className="col-md-4 col-12 mb-4">
                                <div className="planCards">
                                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step1.svg"} />
                                    <div className="plnCardCont">
                                        <h5>Schedule Calls  </h5>
                                        <p>Get on a video call with licensed immigration consultant.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mb-4">
                                <div className="planCards">
                                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step2.svg"} />
                                    <div className="plnCardCont">
                                        <h5>Live Chat  </h5>
                                        <p>Uninterrupted chat with Licensed consultant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mb-4">
                                <div className="planCards">
                                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step3.svg"} />
                                    <div className="plnCardCont">
                                        <h5>End to end support  </h5>
                                        <p>We handhold you throughout the process</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="planPurchase">
                            <p>Upgrade for one on one call, unlimited chats, and premium support.</p>
                            {
                                showBilling?<button onClick={() => history.push('/billing')}>Upgrade Now</button>:null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserOnboardingView;