import React, { useState } from 'react';
import { string } from 'prop-types';
import LeftMenuBar from '@components/LeftMenuBar';
import { container, desktopView, mobileView, mobileHeading } from './style.js';

const Header = (props)=>{
    const [showMobileMenuBar, setMobileMenuBar] = useState(false);

    const { headerText } = props;

    const toggleMenuBar = ()=>{
        setMobileMenuBar(val=>!val);
    }

    return(
        <div className={container}>
            <div className={desktopView}>
                <span className="heading">{headerText}</span>
                {props.children}
            </div>

            <div className={mobileView}>
                <img className="homeIcon" src={ASSETS_BASE_URL+"/images/leftmenubar/hamburgerMenu.svg"} alt="home" onClick={toggleMenuBar}/>
                <div className="rightView">
                    {props.children}
                    <div className="notification">
                        <img src={ASSETS_BASE_URL+"/images/common/notificationIcon.svg"} alt="notification" onClick={()=>{}}/>
                    </div>
                    <div className="profile">

                    </div>
                </div>
            </div>
            <div className={mobileHeading}>{headerText}</div>
            {
                showMobileMenuBar && <LeftMenuBar isMobileView toggleMenuBar={toggleMenuBar}/>
            }
        </div>
    )
}

Header.propTypes = {
    headerText: string.isRequired
}

Header.defaultProps = {
    headerText: ''
}

export default Header