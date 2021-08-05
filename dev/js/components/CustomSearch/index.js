import React from 'react';
import { css } from '@emotion/css';
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
    input{
        ${inputField};
        font-size: ${props.fontSize};
        border: 0px;
    }
    .searchBox{
        display: flex;
        .searchIcon{
            height: 32px;
            width: 32px;
            padding-right: 6px;
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

const CustomSearch = ({placeholder="Search Documents", value="", border="0px" ,handleChange=()=>{}, borderRadius="8px", backgroundColor="#FFF", fontColor="#363B64", fontSize="16px", fontWeight="normal", padding="10px 24px", margin="4px 0px"})=>{

    return(
        <div className={container({border, borderRadius, backgroundColor, fontColor, fontSize, fontWeight, padding, margin})}>

            <div className="searchBox">
                <img className="searchIcon" src={ASSETS_BASE_URL+"/images/common/search.svg"} alt="open"/>
                <input type="text" placeholder={placeholder} value={value} onChange={(e)=>handleChange(e.target.value)}/>
            </div>
        </div>
    )
}

export default CustomSearch;