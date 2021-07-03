import { css } from '@emotion/css'
import { primaryFont, mobileScreenWidth, tabScreenWidth } from '@constants';

export const container = css`
    width: 100%;
`
export const desktopView = css`
    margin: 50px 26px;
    font-family: ${primaryFont};
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 124px;
    display: none;
    @media(min-width: ${tabScreenWidth}){
        display: flex;
    }
    .heading{
        font-weight: bold;
        font-size: 36px;
        line-height: 54px;
        color: #363B64;
        justify-content: space-between;
    }
`

export const mobileView = css`
    display: none;
    padding: 18px 21px;
    .homeIcon{
        cursor: pointer;
    }
    .rightView{
        display: flex;
        align-items: center;
    }
    .notification{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 40px;
        width: 37px;
        position: relative;
        background: #FCFCFC;
        box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
        border-radius: 10px;
        img{
            width: 13px;
            height: 18px;
        }
        &:after{
            content: '';
            position: absolute;
            background: #FE9874;
            height: 5px;
            width: 5px;
            right: 8px;
            top: 6px;
            border-radius: 50%;
        }
    }
    .profile{
        margin-left: 11px;
        height: 40px;
        width: 37px;
        background: #FCFCFC;
        border-radius: 10px;
        cursor: pointer;
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
        justify-content: space-between;
    }
`

export const mobileHeading = css`
    display: none;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #363B64;
    padding-left: 20px;
    @media(max-width: ${tabScreenWidth}){
        display: flex;
    }
`