import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    display: flex;
    padding: 12px;
    margin-right: 10px;
    margin-bottom: 12px;
    align-items: center;
    border: 2px solid #EAEAEF;
    border-radius: 8px;
    position: relative;
    .docIcon{
        padding: 11px;
        background: #ECECF1;
        border-radius: 8px;
        margin-right: 17px;
    }
    .docx{
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #363B64;
    }
    .dotMenu{
        position: absolute;
        right: 8px;
        top: 8px;
        cursor: pointer;
    }
    @media(max-width: ${tabScreenWidth}){
        .docx{
            font-size: 12px;
            line-height: 18px;
        }
        .docIcon{
            height: 36px;
            width: 36px;
            padding: 8px;
        }
    }
`

export const menuBar = css`
    position: absolute;
    z-index: 1;
    top: 26px;
    right: 0px;
    padding: 6px;
    background: #363B64;
    border-radius: 5px;
    span{
        display: block;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #FFFDFD;
        border-bottom: 1px solid #A098AE;
        padding: 2px 0px;
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


    }

`