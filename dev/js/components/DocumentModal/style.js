import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';
import { primaryFont } from '@constants'

export const container = css`
    display: flex;
    background: #FCFCFC;
`
export const menuBar = css`
    position: absolute;
    z-index: 1;
    top: 44px;
    right: 6px;
    padding: 6px;
    background: #363B64;
    border-radius: 5px;
    span{
        display: block;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #FFFDFD;
        border-bottom: 1px solid #A098AE;
        padding: 1px 0px;
        cursor: pointer;
        &:last-child{
            border: 0px;
        }
    }
    &:after{
        content: '';
        width: 0; 
        height: 0; 
        position: absolute;
        top: -8px;
        right: 14px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 10px solid #363B64;
    }
}`