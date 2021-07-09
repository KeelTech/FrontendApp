import { css } from '@emotion/css';
import { inputField, tabScreenWidth } from '@constants';
import { primaryFont } from '@constants';

export const container = css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 26px;
    height: calc(100% - 160px);
    .performance{
        display: flex;
        align-items: flex-start;
    }
    .intro{
        padding: 22px 36px;
        background: #FCFCFC;
        border-radius: 14px;
        .profileName{
            display: block;
            font-size: 36px;
            line-height: 48px;
            color: #363B64;
            margin-bottom: 3px;
        }
        .meetingTxt{
            display: block;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 28px;
        }
        .showTasks{
            display: block;
            background: #363B64;
            border-radius: 10px;
            font-size: 18px;
            line-height: 27px;
            color: #FCFCFC;
            width: 100%;
            text-align: center;
            font-weight: bold;
        }
    }
    .graph{
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

export const rightBar = css`
    min-width: 430px;
    min-height: 100vh;
    margin-top: 30px;
    padding: 0px 22px;
    display: none;
    @media(min-width: 1200px){
        display: block;
        .headerView{
            display: flex;
            justify-content: flex-end;
        }
    }
`

export const widgets = css`
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;
    .widget{
        min-width: 250px;
        min-height: 150px;
        background-size: cover;
        padding: 18px;
        span{
            display: block;
            text-align: right;
        }
        .no{
            font-size: 36px;
            line-height: 38px;
            color: #1F20AD;
            margin-bottom: 4px;
        }
        .value{
            font-size: 18px;
            line-height: 27px;
            color: #363B64;
        }
    }
    .cover{

    }
`