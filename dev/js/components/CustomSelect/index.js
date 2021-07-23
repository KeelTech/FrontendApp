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
        border: 1px solid #A098AE;
        min-width: 100px;
    }
    .optionList{
        position: absolute;
        background: #FCFCFC;
        right: 0px;
        top: 34px;
        width: 100%;
        border: 1px solid #A098AE;
        span{
            display: block;
            cursor: pointer;
            padding: 8px;
            border-bottom: 1px solid #A098AE;
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

const CustomSelect = ({options=[], defaultOption={}, clickHandler=()=>{}, borderRadius="5px", backgroundColor="#F6F5FA", fontColor="#A098AE", fontSize="10px", fontWeight="bold", padding="10px", margin=""})=>{
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
        <div className={container({borderRadius, backgroundColor, fontColor, fontSize, fontWeight, padding, margin})} ref={optionListRef}>
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