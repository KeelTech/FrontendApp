import { css } from '@emotion/css'
import { primaryFont, tabScreenWidth } from '@constants';

export const container = css`
    width: 100%;
`
export const desktopView = css`
    margin: 30px 26px;
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
        font-size: 24px;
        line-height: 36px;
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