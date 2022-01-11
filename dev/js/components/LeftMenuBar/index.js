import React, { useState, useEffect, Fragment, useMemo } from 'react';
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
    const { userInfo={}, planComponents=[] } = taskInfo;
    const { profile={}, cases={} } = userInfo;
    const { plan ={}} = cases;
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
            toggleMenuBar();
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
        toggleMenuBar();
        history.push(`/agent/${value}`);
    }

    const handleLogout = ()=>{
        setLoader(true);
        logoutUser({}, ()=>{}, (res, error)=>{
            STORAGE.deleteAuth().then((resp)=>{
                dispatch({
                    type: 'RESET_USER_INFO',
                })
                dispatch({
                    type: 'RESET_AGENT_PROFILE',
                })
                dispatch({
                    type: 'RESET_LOGIN_DATA',
                })
                setTimeout(()=>{
                    setLoader(false);
                    history.push('/');
                },2000)
            })
        });
    }

    const showOptions = useMemo(()=>{
        let showTasks = false;
        let showDocuments = false;
        let showChat = false;
        let showCalendly = false;
        let showBilling = false;
        planComponents.map((val)=>{
            const { name='' } = val;
            if(name=="TASKS"){
                showTasks = true;
            }else if(name=='DOCUMENTS'){
                showDocuments = true;
            }else if(name=='CHAT'){
                showChat = true;
            }else if(name=='CALENDLY'){
                showCalendly = true;
            }else if(name=='BILLING'){
                showBilling = true;
            }
        })
        return { showTasks, showDocuments, showChat, showCalendly, showBilling };
    },[planComponents])

    const mainClass = cx({
        [container]: true,
        [mobileView]: isMobileView
    })

    const widgetClass = cx({
        widget: true,
        disableWidget: !isProfileExist
    })

    const { showTasks, showDocuments, showChat, showCalendly, showBilling } = showOptions;
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
                                </Fragment>
                                :<Fragment>
                                    <div className={`${widgetClass} ${activeWidget==='dashboard'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('dashboard')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/dashboardIcons.svg"} alt="home"/>
                                        <span className="heading">Dashboard</span>
                                    </div>
                                    {
                                        showTasks?
                                        <div className={`${widgetClass} ${activeWidget==='tasks'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('tasks')}>
                                            <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/tasks.svg"} alt="tasks"/>
                                            <span className="heading">Tasks</span>
                                        </div>
                                        :null
                                    }
                                    
                                    {/* <div className={`widget ${activeWidget==='profile'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('profile')}>
                                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/customer.svg"} alt="profile"/>
                                        <span className="heading">Customer</span>
                                    </div> */}
                                    {
                                        showDocuments?
                                        <div className={`${widgetClass} ${activeWidget==='vault'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('vault')}>
                                            <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/valutIcon.svg"} alt="documents"/>
                                            <span className="heading">Document Vault</span>
                                        </div>
                                        :null
                                    }
                                    {
                                        showBilling?
                                        <div className={`${widgetClass} ${activeWidget==='billing'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('billing')}>
                                            <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/billingIcon.svg"} alt="billing"/>
                                            <span className="heading">Billing</span>
                                        </div>
                                        :null
                                    }
                                </Fragment>
                            }
                            <div className={`widget ${activeWidget==='logout'?'activeWidget':''}`} onClick={handleLogout}>
                                <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/logoutIcon.svg"} alt="logout"/>
                                <span className="heading">Logout</span>
                            </div>
                            </div>
                            {
                                isAgent?null
                                :<div className="degreeWidget">
                                    <img src={ASSETS_BASE_URL+"/images/leftmenubar/degreeIcon.svg"} alt="degree"/>
                                    {
                                        plan && plan.id?<span>{plan.name||''}</span>
                                        :<Fragment>
                                            <span>Immigration</span>
                                            <span>Consultation</span>
                                        </Fragment>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftMenuBar;