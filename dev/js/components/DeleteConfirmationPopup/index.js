import React, { useRef, useEffect, Fragment } from 'react';
import { css } from '@emotion/css';
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import CustomButton from '@components/CustomButton';
import { tabScreenWidth } from '@constants';

export const container = css`
    position: relative;
    .popupCont{
        position: fixed;
        z-index: 99;
        top: 0;
        bottom: 0;
        display: flex;
        left: 0;
        right: 0;
        justify-content: center;
        align-items: center;
    }
    .documentInfo{
        background: #FFF;
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 340px;
    }
    .alert{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #FDE284;
        padding: 4px;
        height: 70px;
        width: 70px;
        margin-bottom: 20px
    }
    .alertIcon{
        padding: 16px 0px;
    }
    .alertText{
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #3A3F67;
        padding: 0px 16px 20px 0px;
        display: inline-block;
    }
    .deleteCta{
        display: flex;
        width: 100%;
    }
    .delAction{
        flex: 1;
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
        .documentInfo{
            padding: 16px;
            max-width: 280px;
        }
        .alert{
            padding: 4px;
            height: 40px;
            width: 40px;
            margin-bottom: 20px
        }
        .alertIcon{
            padding: 16px 0px;
            width: 24px;
        }
        .alertText{
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #3A3F67;
            padding: 0px 16px 20px 0px;
            display: inline-block;
        }
    }
`

export const overlay = css`{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	background: rgb(0 0 0 / 0.8);
	height: 100vh;
	.overlay{
		width: 100%;
		height: 100%;
	}
	.cross{
		top: 16px;
		right: 24px;
		position: absolute;
	}
}`

const CustomPopup = ({ deletePopupHandler=()=>{}, togglePopup, heading, cta })=>{

    const bodyRef = useRef();

    useEffect(()=>{
        document.body.style.overflow="hidden";
        return ()=>{
            document.body.style.overflow="";
        }
    },[])

    return(
        <div className={container + " " + "overLayPopUp fixedThis"}>
            {/* <div className={overlay}></div> */}
            <div className="popupCont">
                <div className="documentInfo" ref={bodyRef}>
                <DetectClickOutside targetRef={bodyRef} clickOutside={togglePopup}>
                    <Fragment>
                        <span className="alert"><img className="alertIcon" src={ASSETS_BASE_URL+"/images/common/alertIcon.svg"} alt="open"/></span>
                        
                        <span className="alertText">{heading?heading:'Are you sure you want to delete this document?'}</span>
                        <div className="deleteCta">
                            <div className="delAction">
                                <CustomButton text="Cancel" clickHandler={togglePopup} margin="0px 8px 0px 0px" padding="10px 16px" borderRadius="16px" backgroundColor="#212529" fontSize="12px" mFontSize="12px" mpadding="10px" borderRadius="4px"/>
                            </div>
                            <div className="delAction">
                                <CustomButton text={cta?cta:"Delete"} clickHandler={deletePopupHandler} margin="0px" padding="10px 16px" borderRadius="16px" backgroundColor="#CF3030" fontSize="12px" mFontSize="12px" mpadding="10px" borderRadius="4px"/>    
                            </div>                        
                        </div>
                    </Fragment>
                </DetectClickOutside>
                    
                </div>
            </div>
        </div>
    )
}

export default CustomPopup;