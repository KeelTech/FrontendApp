import React, { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/css';
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { tabScreenWidth, inputField } from '@constants';

export const container = props => css`
    position: relative;
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
    width: 100%;
    input{
        ${inputField};
        font-size: ${props.fontSize};
        border: 0px;
        width: 100%;
    }
    .searchBox{
        display: flex;
        width: 100%;
        .searchIcon{
            height: 32px;
            width: 32px;
            padding-right: 6px;
        }
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
        padding: 5px 20px;
        font-size: 14px;
        input{
            font-size: 14px;
        }
    }
`

const CustomSearchSelect = ({placeholder="Search", value='', border="0px" ,handleChange=()=>{}, borderRadius="8px", backgroundColor="#FFF", fontColor="#363B64", fontSize="16px", fontWeight="normal", padding="10px 24px", margin="4px 0px", borderBottom="0.8px solid #EAEAEF", minHeight="30px", options=[]})=>{
console.log(`value for ${placeholder} ${value}`);
    const[searchField, selectedVal] = useState(value);
    const[allOptions, setOptions] = useState(options);
    const [showOptions, setOptionsVisibility] = useState(false);

    const optionListRef = useRef();

    useEffect(()=>{
        setOptions(options);
    },[options]);

    const toggleOptionList = ()=>{
        setOptionsVisibility(val=>!val)
        selectedVal(value);
    }

    const handleSelect = (val)=>{
        selectedVal(val.name);
        setOptionsVisibility(false);
        handleChange(val);
    }

    const onChange = (searchValue)=>{
        selectedVal(searchValue);
        try{
            let filterList = [];
            options.map((optionVal)=>{
                const { name:val } = optionVal;
                let name = val.toLowerCase();
                let searchString = searchValue.toLowerCase();
                if(name.includes(searchString)){
                    let index = name.indexOf(searchString);
                    filterList.push({
                        ...optionVal,
                        rank: index
                    })
                }
            })
            filterList = filterList.sort((x,y)=>{
                return x.rank-y.rank
            })
            setOptions(filterList);
        }catch(e) {
            console.log(e);
        }
    }

    return(
        <div className={container({border, minHeight, borderRadius, backgroundColor, fontColor, fontSize, fontWeight, padding, margin, borderBottom}) + " " + "customDropSearch"} ref={optionListRef}>

            <div className="searchBox">
                <img className="searchIcon" src={ASSETS_BASE_URL+"/images/common/search.svg"} alt="open"/>
                <input type="text" autoComplete="new-password" placeholder={placeholder} value={searchField} onChange={(e)=>onChange(e.target.value)} onFocus={toggleOptionList}/>
            </div>
            {
                showOptions &&
                <div className="optionList">
                    <DetectClickOutside targetRef={optionListRef} clickOutside={toggleOptionList}>
                    {
                        allOptions.map((val, key)=>{
                            return <span key={key} onClick={()=>handleSelect(val)}>{val.name}</span>
                        })
                    }
                    </DetectClickOutside>
                </div>
            }
        </div>
    )
}

export default CustomSearchSelect;