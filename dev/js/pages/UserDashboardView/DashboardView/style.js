import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 26px;
    padding-bottom: 200px;
    .chat{
        width: 60%;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 20px;
        margin: 0px;
        .chat{
            display: none;
        }
    }
`

export const pendingTasks = css`
    max-width: 429px;
    padding-right: 22px;
    max-width: 40%;
    min-width: 40%;
    height: 100%;
    .taskList{
        margin-top: 20px;
        overflow-y: auto;
        max-height: calc(100% - 120px);
    }
    .taskHeading{
        width: 100%;
        font-size: 24px;
        line-height: 36px;
        color: #363B64;
        text-align: center;
        margin-bottom: 8px;
        border-bottom: 1px solid #CCCCCC;
    }
    .moreTasks{
        display: flex;
        margin-top: 8px;
        font-weight: 600;
        background: #363B64;
        border-radius: 20px;
        text-align: center;
        padding: 16px 0px;
        color: #FCFCFC;
        justify-content: center;
        cursor: pointer;
    }
    @media(max-width: ${tabScreenWidth}){
        margin: 0px;
        width: 100%;
        max-width: 100%;
        height: 100%;
        padding-bottom: 84px;
        .taskHeading{
            text-align: start;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }
        .allTasks{
            display: flex;
            margin-top: 10px;
            justify-content: center;
        }
        .moreTasks{
            display: flex;
            background: #363B64;
            border-radius: 20px;
            text-align: center;
            padding: 5px 76px;
            color: #FCFCFC;
            justify-content: center;
        }
    }
`
export const scheduleCallCta = css`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 16px 58px;
    background: #363B64;
    border-radius: 20px;
    color: #FCFCFC;
    span{
        margin-right: 10px;
        color: #FCFCFC;
        font-weight: 600;
        font-size: 18px;
    }
    img{
        height: 21px;
        width: 21px;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 6px 15px;
        margin-right: 13px;
        border-radius: 10px;
        height: 40px;
        span{
            font-size: 14px;
            line-height: 21px;
        }
        img{
            width: 10px;
            height: 10px;
        }
    }
`

export const body = css`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .mainView{
        width: 100%;
    }
`

export const upcomingSchedules = css`
    min-width: 240px;
    min-height: 100vh;
    background: grey;
    display: none;
    @media(min-width: 1200px){
        display: none;
    }
`