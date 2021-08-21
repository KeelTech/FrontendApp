import { css } from '@emotion/css';
import { inputField, tabScreenWidth } from '@constants';

export const container = css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    .msgView{
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
        width: 100%;
    }
    input{
        ${inputField};
        width: 100%;
        padding: 8px;
        font-size: 10px;
        line-height: 15px;
        border: 0.5px solid #A098AE;
        border-radius: 4px;
    }
    .profile{
        margin-right: 6px;
        min-height: 26px;
        min-width: 26px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #363B64;
        font-size: 12px;
        line-height: 18px;
        color: #DBDBDB;
    }
    @media(max-width: ${tabScreenWidth}){
        input{
            font-size: 12px;
        }
        .profile{
            width: 28px;
            height: 28px;
            font-size: 14px;
            line-height: 21px;
        }
    }
`