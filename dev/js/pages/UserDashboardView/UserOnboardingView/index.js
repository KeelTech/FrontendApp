import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '@components/Header';
import ProfileWidget from '@components/ProfileWidget';
import { body } from '../style.js';

const UserOnboardingView = ()=>{
    const history = useHistory();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={}, userInfoLoading } = taskInfo;
    const { profile={} } = userInfo;
    const { first_name='' } = profile;

    return(
    <div className={body + '    ' + 'p-relative pt-5'}>
        <div className="mainView">
            <div className="subHeaderTop">
                {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} /> */}
                {/* <NotificationWidget /> */}
                <ProfileWidget />
            </div>
            <Header headerText="">
                <div className="headerView">
                    {/* <div className={scheduleCallCta}>
                        <span>Schedule Call</span>
                        <img src={ASSETS_BASE_URL + "/images/common/callIcon.svg"} alt="home" />
                    </div> */}
                </div>
            </Header>
            <div className="planSelectionScreen">
                <div className="dashMainHeading">
                    <h2>Welcome {first_name}</h2>
                    <div className="breadCrumb">
                        <a>Dashboard</a>
                    </div>
                </div>
                <div className="schCallSection">
                    <p>Schedule a free call and check how Keel can help you in your immigration journey.</p>
                    <button>Schedule Call</button>
                </div>
                <div className="planCardSection">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="planCards">
                                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step1.svg"} />
                                <div className="plnCardCont">
                                    <h5>Schedule Calls  </h5>
                                    <p>Get on a video call with licensed immigration consultant.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="planCards">
                                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step2.svg"} />
                                <div className="plnCardCont">
                                    <h5>Live Chat  </h5>
                                    <p>Uninterrupted chat with consultant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="planCards">
                                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/step3.svg"} />
                                <div className="plnCardCont">
                                    <h5>End to end support  </h5>
                                    <p>Get a dedicated customer success manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="planPurchase">
                        <p>Upgrade now for one on one video calls, unlimited chats and premium support.</p>
                        <button onClick={()=>history.push('/billing')}>Upgrade Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default UserOnboardingView;