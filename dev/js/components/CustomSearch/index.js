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
    text-transform:${props.texTransform}
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

const CustomSearch = ({placeholder="Search Documents", value="" ,handleChange=()=>{}, borderRadius="4px", backgroundColor="#FFF", fontColor="#363B64", fontSize="14px", fontWeight="500", padding="10px 24px", margin="4px 0px",border= "1px solid #e0dfdc", texTransform= "uppercase"})=>{

    return(
        <div className={container({border, borderRadius, backgroundColor, fontColor, fontSize, fontWeight, padding, margin,texTransform})}>

            <div className="searchBox">
                <img className="searchIcon" src={ASSETS_BASE_URL+"/images/common/search.svg"} alt="open"/>
                <input type="text" placeholder={placeholder} value={value} onChange={(e)=>handleChange(e.target.value)}/>
            </div>
        </div>
    )
}

export default CustomSearch;