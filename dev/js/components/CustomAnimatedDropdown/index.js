import React, { useState, useRef } from 'react';
import { css } from '@emotion/css';
import { inputField, tabScreenWidth } from '@constants';
import DetectClickOutside from '@helpers/DetectClickOutside.js';

export const container = css`
    position: relative;
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: space-between;
    align-items: center;
    min-width: 100px;
    margin-top:4px;
    input{
        ${inputField};
        border: 1px solid #090909;
        -webkit-transition: all 0.4s ease-in;
        transition: all 0.4s ease-in;
        width: 300px;
        border-radius: 4px;
        padding: 4px 5px;
        font-size: 14px;
        color: #3a3f67;
        font-weight: 500;
        &:focus{
            outline: none;
            border: 1px solid #090909;
            // border: 0px;
        }
    }
    .selectedOptionVal{
        border: 2px solid #4267b2!important;
        transition: all 0.4s ease-in;
    }
    .customMultiDrop h4 {
        font-size: 16px;
        margin: 5px 0;
        padding: 8px 10px;
        background: #dee2e6;
        // color: #4267b2;
    }
    .optionList{
        position: absolute;
        top: 36px;
        background: #FFF;
        max-height: 350px;
        width: 300px;
        overflow-y: auto;
        overflow-x: hidden;
        // padding: 8px;
        box-shadow: 4px 4px 8px #d8dce4;
    }
    span{
        display: block;
        padding: 10px;
        white-space: break-spaces;
        font-size:14px;
        &:hover{
            background: #EBEBEB;
        }
    }
    .selectedItem{
        background: #EBEBEB;
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
        // padding: 5px 20px;
        font-size: 14px;
        input{
            font-size: 12px;
            width: 240px;
        }
        .optionList{
            width: 240px;
        }
    }
`

const CustomAnimatedDropdown = ({ options, handleSelect, selectedProgam })=>{

    const optionListRef = useRef();
    const [showOptions, setOptionsVisibility] = useState(false);
    
    const toggleList = ()=>{
        setOptionsVisibility(val=>!val);
    }

    return(
        <div className={container} ref={optionListRef}>
            <input className={showOptions?'selectedOptionVal':''} type="text" value={selectedProgam} onClick={toggleList}/>
            {
                showOptions && options && Object.values(options).length &&
                <div className="optionList">
                    <DetectClickOutside targetRef={optionListRef} clickOutside={toggleList}>
                    {
                        Object.values(options).map((programCategory, categoryKey)=>{
                            const { name, subCategory } = programCategory;
                            return <div className="customMultiDrop" key={categoryKey}>
                                <h4>{name}</h4>
                                {
                                    subCategory.map((state, key) => {
                                        const { choice } = state;
                                        return <span className={choice==selectedProgam?'selectedItem':''} value={choice} key={key} onClick={()=>{
                                            handleSelect(choice);
                                            toggleList();
                                        }}>{choice}</span>
                                    })
                                }
                            </div>
                        })
                    }
                    </DetectClickOutside>
                </div>
            }
        </div>
    )
}

export default CustomAnimatedDropdown;