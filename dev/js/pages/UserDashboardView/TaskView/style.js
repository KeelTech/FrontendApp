import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 26px;
    padding-bottom: 200px;
    .taskInfo{
        width: 50%;
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
    max-width: 50%;
    min-width: 50%;
    height: 100%;
    .tasksCta{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .cta{
        margin: 0px 16px 16px 0px;
        padding: 16px 36px;
        border: 3px solid #363B64;
        color: #FCFCFC;
        border-radius: 16px;
        color: #363B64;
        border: 3px solid #363B64;
        cursor: pointer;
    }
    .ctaActive{
        color: #363B64;
        background: #363B64;
        color: #FCFCFC;
    }
    .taskList{
        margin-top: 20px;
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
    }
`