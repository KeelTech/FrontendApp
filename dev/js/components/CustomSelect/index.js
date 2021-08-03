import React, { useState, useRef } from 'react';
import { css } from '@emotion/css';
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { tabScreenWidth } from '@constants';

export const container = props => css`
    position: relative;
    .selectedOption{
        display: flex;
        cursor: pointer;
        position: relative;
        justify-content: space-between;
        align-items: center;
        margin: ${props.margin};
        padding: ${props.padding};
        background: ${props.backgroundColor};
        border-radius: ${props.borderRadius};
        color: ${props.fontColor};
        font-weight: ${props.fontWeight};
        font-size: ${props.fontSize};
        border: ${props.border};
        min-width: 100px;
    }
    .optionList{
        position: absolute;
        background: #FCFCFC;
        z-index: 50;
        right: 0px;
        top: 48px;
        width: 100%;
        border: ${props.border};
        span{
            display: block;
            cursor: pointer;
            padding: 8px;
            border-bottom: ${props.borderBottom};
            color: ${props.fontColor};
            font-weight: ${props.fontWeight};
            font-size: ${props.fontSize};
            &:hover{
                background: #F6F5FA;
            }
            &:last-child{
                border-bottom: 0px;                
            }
        }
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
    }
`

const CustomSelect = ({border="0px" ,options=[], defaultOption={}, clickHandler=()=>{}, borderRadius="8px", backgroundColor="#FFF", fontColor="#363B64", fontSize="16px", fontWeight="normal", padding="10px 16px", margin="4px 0px", borderBottom="0.8px solid #EAEAEF"})=>{
    const [showOptions, setOptionsVisibility] = useState(false);
    const [selectedOption, setOptions] = useState(defaultOption);

    const optionListRef = useRef();

    const toggleOptionList = ()=>{
        setOptionsVisibility(val=>!val)
    }

    const handleSelect = (val)=>{
        setOptions(val);
        setOptionsVisibility(false);
        clickHandler(val);
    }
    return(
        <div className={container({border, borderBottom, borderRadius, backgroundColor, fontColor, fontSize, fontWeight, padding, margin})} ref={optionListRef}>
            <div className="selectedOption" onClick={toggleOptionList}>
                <span>{selectedOption.val}</span>
                <img className="icon" src={ASSETS_BASE_URL+"/images/common/arrowDown.svg"} alt="open"/>
            </div>
            {
                showOptions && 
                <div className="optionList">
                    <DetectClickOutside targetRef={optionListRef} clickOutside={toggleOptionList}>
                    {
                        options.map((val, key)=>{
                            return <span key={key} onClick={()=>handleSelect(val)}>{val.val}</span>
                        })
                    }
                    </DetectClickOutside>
                </div>
            }
        </div>
    )
}

export default CustomSelect;