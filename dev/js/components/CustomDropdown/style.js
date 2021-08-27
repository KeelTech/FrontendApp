import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';
import { primaryFont } from '@constants'

export const ddContainer = css`
    background: #FCFCFC;
    box-shadow: 0px 6.74px 16.85px rgba(191, 21, 108, 0.05);
    border-radius: 6.74px;
    border: 1px solid #e0dfdc;
    width: 230px;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;


    @media(max-width: ${mobileScreenWidth}){
        width: 100%;
        font-size:14px;
        height: 32px;
    };
`
export const ddContainerItem = css`
    background: #FCFCFC;
    border: none;
    width: 100%;
    border-top:0.8px solid #EAEAEF;
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    cursor:pointer;
    color: #363B64;
    text-align:left;
    margin-right:0px;
    :hover{
       
        background: white;
        outline:none;
        background-color:#EAEAEF
    }
    :focus{
        
        background: none;
        outline:none;
        background-color:#EAEAEF
    }
    :active{
        
        background: none;
        outline:none;
        background-color:#EAEAEF
    }
`

export const ddContainerItemHeader = css`
background: #FCFCFC;
border: none;
width: 100%;
font-family: ${primaryFont};
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 27px;
cursor:pointer;
color: #A098AE;
text-align:left;
background-image:url("${ASSETS_BASE_URL}/images/common/chevron-down.svg");
background-repeat: no-repeat;
background-position: right;
margin-right:0px;
:hover{
    
    outline:none;
}
:focus{
    
    outline:none;
}
:active{
    
    outline:none;
}
    
`
export const optionMenu = css`
    border: none;
    background: #FCFCFC;
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #A098AE;
    padding-top: 3px;
    cursor: pointer;
    outline:none;
    max-height: 150px;
    overflow-y: auto;
    position: absolute;
    z-index: 99;
    ::-webkit-scrollbar {
        width: 7px;
    }
    
    ::-webkit-scrollbar-track {
        
        border-radius: 7px;
    }
     
    ::-webkit-scrollbar-thumb {
        background-color: #EAEAEF; 
        border-radius: 7px;
    }
    @media(max-width: ${mobileScreenWidth}){
        padding-top:0px;
    };
    :focus{
        border:none;
        background: none;
        outline:none;
    }
    :active{
        border:none;
        background: none;
        outline:none;
    }
`

export const innerWrapper = css`
    padding: 5px;
    position: relative;
`