import { useEffect, Fragment } from 'react';
import React from 'react';

const PopupOverlay = ({ handleCloseClick=()=>{}, showPopup=false, children=<Fragment></Fragment> })=>{

    useEffect(()=>{
        if(showPopup){
            document.body.style.overflow ="hidden";
        }

        return ()=>{
            if(showPopup){
                document.body.style.overflow ="";
            }
        }
    },[showPopup])

    return(
        <div className={`commonPopUpOverlay ${showPopup?'':'d-none'}`}>
                
            <div className="commonPopUpConten">
                <img className="closePop" src={ASSETS_BASE_URL + '/images/common/crossIcon.svg'} alt="time" onClick={handleCloseClick}/>
                {children}
            </div>
        </div>
    )
}

export default PopupOverlay;
