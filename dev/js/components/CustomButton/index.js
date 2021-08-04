import React from 'react';
import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = props => css`
    cursor: pointer;
    margin: ${props.margin};
    padding: ${props.padding};
    background: ${props.backgroundColor};
    border-radius: ${props.borderRadius};
    color: ${props.fontColor};
    font-weight: ${props.fontWeight};
    font-size: ${props.fontSize};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .ctaIcon{
        height: 24px;
        width: 24px;
        margin-left: 6px;
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
        font-size: ${props.mFontSize?props.mFontSize:props.fontSize};
        padding: ${props.mpadding};
    }
`

const CustomButton = ({text="", iconHeight="20px", mpadding="10px", clickHandler=()=>{}, borderRadius="10px", backgroundColor="#363B64", fontColor="#FCFCFC", fontSize="12px", fontWeight="bold", padding="10px 30px", margin="", mFontSize="", icon })=>{

    return(
        <div className={container({borderRadius, iconHeight, mpadding, backgroundColor, fontColor, fontSize, fontWeight, padding, margin, mFontSize})} onClick={clickHandler}>
            <span>{text}</span>
            {
                icon?<img src={icon} className="ctaIcon"/>:null
            }
        </div>
    )
}

export default CustomButton;