import React from 'react';
import { css } from '@emotion/css';
import { tabScreenWidth, inputField } from '@constants';

export const container = props => css`
    position: relative;
    display: flex;
    margin-bottom: ${props.marginBottom};
    align-items: center;
    .label{
        display: inline-block;
        min-width: 240px;
        font-size: ${props.labelFontSize};
        color: ${props.labelFontColor};
        font-weight: ${props.labelFontWeight};
    }
    input{
        width: 100%;
        ${inputField};
        border: 1px solid #CED4DA;
        border-radius: 4px;
        padding: ${props.padding};
        font-size: ${props.fontSize};
        color: ${props.fontColor};
        background: ${props.bgColor};
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
        flex-direction: column;
        .label{
            margin-bottom: 6px;
        }
    }
`

const CustomInput = ({changeHandler=()=>{}, isDate=false, type, value, bgColor='#FFF', label, labelFontColor='#212529', labelFontSize="14px", labelFontWeight="bold", fontColor="#ABB5BE", fontSize="14px", padding="8px 16px", placeholder="Enter Value", marginBottom="20px"})=>{

    return(
        <div className={container({fontColor, bgColor, fontSize, padding, labelFontColor, labelFontSize, labelFontWeight, marginBottom})}>
            {
                label?<span className="label">{label}</span>:null
            }
            {
                isDate?<input type="date" onChange={(e)=>changeHandler(new Date(e.target.value), type)}/>
                :<input type="text" value={value} placeholder={placeholder} onChange={(e)=>changeHandler(e.target.value, type)}/>
            }
        </div>
    )
}

export default CustomInput;