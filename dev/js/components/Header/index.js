import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { string } from 'prop-types';
import LeftMenuBar from '@components/LeftMenuBar';
import { container, desktopView, mobileView, mobileHeading } from './style.js';

const Header = (props)=>{
    const LOGIN_STATE = useSelector(state=>state.LOGIN);
    const { IsloggedIn } = LOGIN_STATE;
  
    const [showMobileMenuBar, setMobileMenuBar] = useState(false);
    const { headerText, isAgent=false } = props;

    const toggleMenuBar = ()=>{
        setMobileMenuBar(val=>!val);
    }

    return(
        <div className={container}>
            {/* <div className={desktopView}>
                <span className="heading">{headerText}</span>
                {props.children}
            </div> */}
            {
                IsloggedIn?
                <div className={mobileView}>
                    <img className="homeIcon mobileHamburger" src={ASSETS_BASE_URL+"/images/leftmenubar/hamburgerMenu.svg"} alt="home" onClick={toggleMenuBar}/>
                    <div className="rightView">
                        {props.children}
                    </div>
                </div>
                :null
            }
            
            {/* <div className={mobileHeading}>
                {headerText}
                </div> */}
            {
                showMobileMenuBar && IsloggedIn && <LeftMenuBar isMobileView toggleMenuBar={toggleMenuBar} isAgent={isAgent}/>
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