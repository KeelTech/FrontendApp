import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';
import { primaryFont } from '@constants'

export const fileUpload = css`
    opacity:0;
    width:100%;
    height:100%;
    cursor:pointer
`
export const fileUploadWrapper = css`
    width:95px;
    height:95px;
    background-image:url("${ASSETS_BASE_URL}/images/common/file.svg");
    background-color:transparent;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
`
export const submitButtonWrapper = css`
    min-height:60px;
    padding-top:15px;
    display:flex;
    justify-content:center;
    max-width:88vw
`

export const selectedFileText = css`
    font-family: ${primaryFont};
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
    top:15%;
    width:90vw;
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
    max-height: 600px;
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
export const submitButton = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px 9px;
    position: absolute;
    width: 230px ;
    height: 40px;
    background-color: #363B64;
    color:white;
    border:none;
    border-radius: 6.74px;
    cursor:pointer;
    margin-right:auto;
    @media(max-width: ${mobileScreenWidth}){
        width: 72vw;
        font-size:14px;
        height: 32px;
    };
`
export const fileData = css`
    width: 100%;
    display: flex;
    height: 60px;
    justify-content: center;
    margin-top:15px;
`
