import { css } from '@emotion/css';
import { tabScreenWidth, inputField } from '@constants';

export const container = css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 26px;
    height: calc(100% - 160px);
    .taskInfo{
        width: 60%;
        overflow-y: auto;
    }
    input{
        ${inputField};
        background: #F6F5FA;
        border: 1px solid #A098AE;
        border-radius: 10px;
        width: 100%;
        padding: 8px 4px;
        font-size: 12px;
        line-height: 18px;
        color: #363B64;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 20px;
        margin: 0px;
        .taskInfo{
            display: none;
        }
    }
`

export const tasksView = css`
    padding-right: 22px;
    max-width: 40%;
    min-width: 40%;
    height: 100%;
    .tasksCta{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .cta{
        margin: 0px 16px 16px 0px;
        padding: 10px 26px;
        border: 3px solid #363B64;
        color: #FCFCFC;
        border-radius: 10px;
        color: #363B64;
        font-size: 12px;
        line-height: 18px;
        border: 3px solid #363B64;
        cursor: pointer;
    }
    .ctaActive{
        color: #363B64;
        background: #363B64;
        color: #FCFCFC;
    }
    .taskList{
        overflow-y: auto;
        max-height: calc(100% - 120px);
    }
    @media(max-width: ${tabScreenWidth}){
        margin: 0px;
        width: 100%;
        max-width: 100%;
        height: 100%;
        padding-bottom: 84px;
        padding-right: 0px;
        .cta{
            padding: 5px 21px;
            border-radius: 10px;
            margin: 0px 8px 8px 0px;
        }
        .taskList{
            max-height: 100%;
        }
    }
`