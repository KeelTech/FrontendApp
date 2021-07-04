import React, { useState } from 'react';
import { cx } from '@emotion/css';
import { leftBarCont, container, menuOptions, mobileView} from './style.js';

const LeftMenuBar = ({ isMobileView, toggleMenuBar })=>{
    const [activeWidget, setWidget] = useState('dashboard');
    const handleMenuOptionsClick = (value)=>{
        setWidget(value);
    }

    const mainClass = cx({
        [container]: true,
        [mobileView]: isMobileView
    })

    return(
        <div className={leftBarCont}>
            {
                isMobileView && <div className="overlay"></div>
            }
            <div className={mainClass}>
                <div className="openWidgetView">
                    <div className="widgetView">
                        <div className="homeWidget">
                            <img className="homeIcon" src={ASSETS_BASE_URL+"/images/common/keelIcon.svg"} alt="home"/>
                            <img className="crossIcon" src={ASSETS_BASE_URL+"/images/common/crossIcon.svg"} alt="home" onClick={toggleMenuBar}/>
                        </div>
                        <div className={menuOptions}>
                            <div className={`widget ${activeWidget==='dashboard'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('dashboard')}>
                                <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/dashboardIcons.svg"} alt="home"/>
                                <span className="heading">Dashboard</span>
                            </div>
                            <div className={`widget ${activeWidget==='tasks'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('tasks')}>
                                <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/tasks.svg"} alt="tasks"/>
                                <span className="heading">Tasks</span>
                            </div>
                            <div className={`widget ${activeWidget==='vault'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('vault')}>
                                <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/valutIcon.svg"} alt="documents"/>
                                <span className="heading">Document Vault</span>
                            </div>
                            <div className={`widget ${activeWidget==='billing'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('billing')}>
                                <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/billingIcon.svg"} alt="billing"/>
                                <span className="heading">Billing</span>
                            </div>
                            <div className={`widget ${activeWidget==='logout'?'activeWidget':''}`} onClick={()=>handleMenuOptionsClick('logout')}>
                                <img className="icon" src={ASSETS_BASE_URL+"/images/leftmenubar/logoutIcon.svg"} alt="logout"/>
                                <span className="heading">Logout</span>
                            </div>
                            <div className="degreeWidget">
                                <img src={ASSETS_BASE_URL+"/images/leftmenubar/degreeIcon.svg"} alt="degree"/>
                                <span>Study Permit</span>
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