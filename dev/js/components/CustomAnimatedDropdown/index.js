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
    input{
        ${inputField};
        border: 0px;
        border-bottom: 2px solid grey;
        transition: all 0.4s ease-in;
        width: 300px;
        &:focus{
            outline: none;
            border: 0px;
        }
    }
    .selectedOptionVal{
        border-bottom: 2px solid blue !important;
        transition: all 0.4s ease-in;
    }
    .optionList{
        position: absolute;
        top: 36px;
        background: #FFF;
        max-height: 350px;
        width: 300px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    span{
        display: block;
        padding: 10px;
        white-space: break-spaces;
        &:hover{
            background: #EBEBEB;
        }
    }
    .selectedItem{
        background: #EBEBEB;
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
        padding: 5px 20px;
        font-size: 14px;
        input{
            font-size: 14px;
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
                            return <div className="" key={categoryKey}>
                                <p>{name}</p>
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