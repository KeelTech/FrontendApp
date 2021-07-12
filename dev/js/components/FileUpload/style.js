import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';

export const fileUpload = css`
    opacity:0;
    width:100%;
    height:100%;
    cursor:pointer
`
export const fileUploadWrapper = css`
    width:95px;
    height:95px;
    background-image:url("./../../../assets/images/common/file.svg");
    background-color:transparent;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
`

export const ddContainer = css`
    background: #FCFCFC;
    box-shadow: 0px 6.74px 16.85px rgba(191, 21, 108, 0.05);
    border-radius: 6.74px;
    width: 230px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    @media(max-width: ${mobileScreenWidth}){
        width: 100%;
        font-size:14px;
    };
`
export const ddContainerItem = css`
    background: #FCFCFC;
    border: none;
    width: 100%;
    border-bottom:0.8px solid #EAEAEF;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    cursor:pointer;
    :hover{
        border:none;
        background: none;
        outline:none;
    }
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

export const ddContainerItemHeader = css`
    background: #FCFCFC;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #A098AE;
    padding-top:3px;
    cursor:pointer;
    outline:none;
`
export const selectedFileText = css`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #363B64;
`
export const alignCenter = css`
    display:flex;
    justify-content:center;
    align-items:center
`

export const outerShell = css`
    background: white;
    position:absolute;
    top:25%;
    width:80vw;
    max-width: 890px;
    box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    text-align:center;
    border-radius: 8px;
    z-index:99;
`
export const innerShell = css`
    background: #EAEAEF;
    text-align:center;
    padding:20px;
    border-radius: 8px;
    padding-top:40px;
    margin:4%;
    max-height: 300px;
`
export const closeWrapper = css`
    float: right;
    width:4%;
    font-size: 20px;
    font-weight: bold;
    color:#363B64;
    cursor:pointer;
    @media(max-width: ${mobileScreenWidth}){
        font-size: 12px;
    };
`
export const chevronDown = css`
    width:24px;
    height:24px;
    text-align: center;
    background-color:transparent;
    background-repeat: no-repeat;
`
export const fileButton = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px 9px;
    position: absolute;
    width: 200px ;
    height: 50px;
    background-color: #363B64;
    color:white;
    border:none;
    border-radius: 20px;
    cursor:pointer;
    margin-right:auto;
`
export const fileData = css`
    width: 100%;
    display: flex;
    height: 60px;
    justify-content: center;
    margin-top:15px;
`
export const optionMenu = css`
    height: 32px;
    font-size: 17px;
    border: none;
    background: #FCFCFC;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #A098AE;
    padding-top: 3px;
    cursor: pointer;
    outline:none;
    :after {
        position: absolute;
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
    }
    :hover{
        border:none;
        background-color: none;
        outline:none;
    }
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

