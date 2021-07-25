
import React from 'react';
import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

const container = props => css`
    display: flex;
    .toaster{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${props.padding};
        font-size: ${props.fontSize};
        font-color: ${props.fontColor};
        background: ${props.backgroundColor};
        border: ${props.border};
        border-radius: 8px;
        min-width: 260px;
    }
    .icon{
        height: 12px;
        width: 12px;
        margin-left: 30px;
    }
    
`
export const toasterMsg = props =>css`
    position: fixed;
    display: flex;
    justify-content: flex-end;
    top: 118px;
    width: 100%;
    right: 40px;
    transition: all 2s ease-out;
    @media(max-width: ${tabScreenWidth}){
        justify-content: center;
        right: 0;
        top: 10px;
    }
`

const CustomToaster = ({ msg="", isError, isVisible, isSuccess, fontColor="#152536", fontSize="12px", padding="20px", backgroundColor="#E9ECEF", border="1px solid #DEE2E6"  })=>{
    
    if(isError){

    }else if(isSuccess){

    }
    //console.log(isVi)
    return(
        <div className={toasterMsg({isVisible: true})}>
            {
                isVisible?
                <div className={container({fontColor, fontSize, padding, border, backgroundColor})}>
                    <div className="toaster">
                        <span>{msg}</span>
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/crossIcon.svg"} alt="task"/>
                    </div>
                </div>
                :null
            }
        </div>
        
    )
}

export default CustomToaster;