import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cx } from '@emotion/css';
import { useHistory } from 'react-router-dom';
import { SET_MENUBAR_STATE, SET_AGENT_MENUBAR_STATE } from '@constants/types';
import STORAGE from '@helpers/storage';
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import { logoutUser } from '@actions';
import { leftBarCont, container, menuOptions, mobileView} from './style.js';

const LeftMenuBar = ({ isMobileView, toggleMenuBar, isAgent })=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector(state=>state.COMMON);
    const { activeWidget, agentActiveWidget } = state;

    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={} } = taskInfo;
    const { profile={} } = userInfo;
    const { first_name='' } = profile;
    const isProfileExist = userInfo && userInfo.profile_exists;

    const agentInfo = useSelector(state=>state.AGENT_STORE);
    const { agentProfile={} } = agentInfo;
    const { agent_profile={} } = agentProfile;
    const { full_name='' } = agent_profile;
    const [showLoader, setLoader] = useState(false);

    useEffect(()=>{

        return ()=>{
            setLoader(false);
        }
    },[])

    const handleMenuOptionsClick = (value)=>{
        if(isProfileExist){
            dispatch(
                {
                    type: SET_MENUBAR_STATE,
                    payload: {
                        activeWidget: value
                    }
                }
            )
            history.push(`/${value}`);
        }
    }

    const handleAgentMenuOptionsClick = (value)=>{
        dispatch(
            {
                type: SET_AGENT_MENUBAR_STATE,
                payload: {
                    activeWidget: value
                }
            }
        )
        history.push(`/agent/${value}`);
    }

    const handleLogout = ()=>{
        setLoader(true);
        logoutUser({}, ()=>{}, (res, error)=>{
            STORAGE.deleteAuth().then((resp)=>{
                dispatch({
                    type: 'LOGOUT_USER',
                })
                setTimeout(()=>{
                    setLoader(false);
                    history.push('/');
                },2000)
            })
        });
    }

    const mainClass = cx({
        [container]: true,
        [mobileView]: isMobileView
    })

    const widgetClass = cx({
        widget: true,
        disableWidget: !isProfileExist
    })

    return(
        <div className={leftBarCont + " " + "sideBarMainContainer"}>
            {
                isMobileView && <div className="overlay"></div>
            }
            {showLoader && <div className={loaderView}><LoadingWidget/></div> }
            <div className={mainClass + " " + "mobileSideMenu"}>
                <div className="openWidgetView">
                    <div className="widgetView">
                        <div className="homeWidget">
                            <div className="bgForUser"></div>
                            <div className="userDetailsSidebar">
                                <div className="userContent">
                                    <img className="img-fluid" src={ASSETS_BASE_URL+"/images/common/Avatar_blue.svg"} alt="user" />
                                    <div className="userDetailsMain">
                                        <h5>{first_name||full_name}</h5>
                                        {/* <p><strong>98%</strong>Profile Completed</p> */}
                                        {
                                            isAgent?null:<button onClick={()=>history.push('/profile')}>Update Profile</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* <img className="homeIcon" src={ASSETS_BASE_URL+"/images/common/keelIcon.svg"} alt="home" onClick={()=>history.push('/')}/> */}
                            <img className="crossIcon" src={ASSETS_BASE_URL+"/images/common/x_white.svg"} alt="home" onClick={toggleMenuBar}/>
                        </div>
                        <div className={menuOptions + ' '+ "menuOPT" }>
                            <div className="menuItemSr">
                            {
                                isAgent?
                                <Fragment>
                                    <div className={`widget ${agentActiveWidget==='dashboard'?'activeWidget':''}`} onClick={()=>handleAgentMenuOptionsClick('dashboard')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/dashboardIcons.svg"} alt="home"/>
                                        <span className="heading">Dashboard</span>
                                    </div>
                                    <div className={`widget ${agentActiveWidget==='customer'?'activeWidget':''}`} onClick={()=>handleAgentMenuOptionsClick('customer')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/customer.svg"} alt="tasks"/>
                                        <span className="heading">Customers</span>
                                    </div>
                                    {/* <div className={`widget ${activeWidget==='billing'?'activeWidget':''}`} onClick={()=>handleAgentMenuOptionsClick('billing')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/billingIcon.svg"} alt="billing"/>
                                        <span className="heading">Billing</span>
                                    </div> */}
                                </Fragment>
                                :<Fragment>
                                    <div className={`${widgetClass} ${activeWidget==='dashboard'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('dashboard')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/dashboardIcons.svg"} alt="home"/>
                                        <span className="heading">Dashboard</span>
                                    </div>
                                    <div className={`${widgetClass} ${activeWidget==='tasks'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('tasks')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/tasks.svg"} alt="tasks"/>
                                        <span className="heading">Tasks</span>
                                    </div>
                                    {/* <div className={`widget ${activeWidget==='profile'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('profile')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/customer.svg"} alt="profile"/>
                                        <span className="heading">Customer</span>
                                    </div> */}
                                    <div className={`${widgetClass} ${activeWidget==='vault'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('vault')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/valutIcon.svg"} alt="documents"/>
                                        <span className="heading">Document Vault</span>
                                    </div>
                                    <div className={`${widgetClass} ${activeWidget==='billing'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('billing')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/billingIcon.svg"} alt="billing"/>
                                        <span className="heading">Billing</span>
                                    </div>
                                </Fragment>
                            }
                            <div className={`widget ${activeWidget==='logout'?'activeWidget':''}`} onClick={handleLogout}>
                                <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/logoutIcon.svg"} alt="logout"/>
                                <span className="heading">Logout</span>
                            </div>
                            </div>
                            <div className="degreeWidget">
                                <img src={ASSETS_BASE_URL+"/images/leftmenubar/degreeIcon.svg"} alt="degree"/>
                                <span>Immigration</span>
                                <span>Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftMenuBar;