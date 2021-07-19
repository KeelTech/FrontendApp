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
    @media(max-width: ${tabScreenWidth}){
        display: flex;
        font-size: ${props.mFontSize?props.mFontSize:props.fontSize};
    }
`

const CustomButton = ({text="", clickHandler=()=>{}, borderRadius="10px", backgroundColor="#363B64", fontColor="#FCFCFC", fontSize="12px", fontWeight="bold", padding="10px 30px", margin="", mFontSize=""})=>{

    return(
        <div className={container({borderRadius, backgroundColor, fontColor, fontSize, fontWeight, padding, margin, mFontSize})} onClick={clickHandler}>
            {text}
        </div>
    )
}

export default CustomButton;