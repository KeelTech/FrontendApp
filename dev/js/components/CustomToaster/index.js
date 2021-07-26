
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
        cursor: pointer;
    }
    
`
export const toasterMsg = props =>css`
    position: fixed;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    right: 40px;
    top: ${props.isVisible?'118px':'-200px'};
    transition: all 0.6s ease-out;
    z-index: 99;
    @media(max-width: ${tabScreenWidth}){
        justify-content: center;
        right: 0;
        top: ${props.isVisible?'10px':'-200px'};
    }
`
//Plz use this type of state in your Component to render toaster
// const [toasterInfo, setToasterInfo] = useState({
//     isVisible: false,
//     isError: false,
//     isSuccess: false,
//     msg: ''
// })

const CustomToaster = ({ msg="", hideToaster=()=>{}, isError, isVisible, isSuccess, fontColor="#152536", fontSize="12px", padding="20px", backgroundColor="#E9ECEF", border="1px solid #DEE2E6"  })=>{
    let fontC = fontColor;
    let bgColor = backgroundColor;
    let borderVal = border;
    if(isError){
        fontC='#842029';
        bgColor ='#F8D7DA';
        borderVal = '1px solid #F1AEB5'
    }else if(isSuccess){
        fontC='#0F5132';
        bgColor ='#D1E7DD';
        borderVal = '1px solid #75B798'
    }
    return(
        <div className={toasterMsg({isVisible})}>
            <div className={container({fontColor: fontC, fontSize, padding, border: borderVal, backgroundColor: bgColor})}>
                <div className="toaster">
                    <span>{msg}</span>
                    <img className="icon" src={ASSETS_BASE_URL+"/images/common/crossIcon.svg"} alt="close" onClick={hideToaster}/>
                </div>
            </div>
        </div>
        
    )
}

export default CustomToaster;