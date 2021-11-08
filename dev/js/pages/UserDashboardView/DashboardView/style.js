import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 26px;
    height: calc(100% - 30px);
    .chat{
        width: 60%;
        max-width:500px;
        // box-shadow: 2px 2px 8px #D8DCE4;
        height: 100%;
        // border-radius: 4px;
    }
    .onboardingView{
        max-height: 400px;
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
    margin-right: 22px;
    max-width: 40%;
    min-width: 40%;
    height: 100%;
    .taskList{
        margin-top: 14px;
        overflow-y: auto;
        max-height: calc(100vh - 240px);
        // box-shadow: 2px 2px 8px #eae8ee;
    border-radius: 4px;
    padding:5px;
    }
    .taskHeading{
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        color: #6C757D;
        text-align: center;
        margin-bottom: 8px;
        background: #E7EFF8;
        font-weight: 600;
        padding: 10px 5px;
        border-radius: 4px;
        border: 1px solid #0000004d;
    }
    .moreTasks{
        display: flex;
        margin-top: 8px;
        font-weight: 600;
        background: #4267B2;
        border-radius: 4px;
        text-align: center;
        padding: 12px 0px;
        color: #FCFCFC;
        justify-content: center;
        cursor: pointer;
        font-size: 12px;
        line-height: 18px;
    }
    @media(max-width: ${tabScreenWidth}){
        margin: 0px;
        width: 100%;
        max-width: 100%;
        // height: calc(100% - 80px);
        height:100%;
        // overflow-y:auto;
        // padding-bottom: 84px;
        padding-right: 0px;
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
            background: #4267B2;
            border-radius: 4px;
            text-align: center;
            padding: 8px 76px;
            color: #FCFCFC;
            justify-content: center;
            width:100%
        }
    }
    
`
export const scheduleCallCta = css`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 11px 38px;
    background: #4267B2;
    border-radius: 4px;
    color: #FCFCFC;
    span{
        margin-right: 10px;
        color: #FCFCFC;
        font-weight: 600;
        font-size: 11px;
    }
    img{
        height: 14px;
        width: 14px;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 6px 15px;
        margin-right: 13px;
        border-radius: 4px;
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

export const upcomingSchedules = css`
    // min-width: 240px;
    // min-height: 100vh;
    margin-top: 40px;
    padding: 0px 12px;
    display: none;
    background: white;
    height: fit-content;
    padding-bottom:20px;
    min-height: 340px;
    max-height:calc(100vh - 120px);
    border-radius: 4px;
    box-shadow: 2px 2px 8px #d8dce4;
    border: 1px solid #e0dfdc;
    @media(min-width: 1200px){
        display: block;
        .headerView{
            display: flex;
            justify-content: flex-end;
        }
        .upcomingTitle{
            margin-bottom: 8px;
            font-size: 12px;
            line-height: 18px;
            .taskSch{
                
            }
        }
        .upcoming{
            display: flex;
            margin-top: 26px;
            margin-bottom: 14px;
            span{
                display: inline-block;
                cursor: pointer;
                width: 100%;
                font-size: 14px;
                line-height: 24px;
                color: #6C757D;
                text-align: center;
                margin-bottom: 8px;
                background: #E7EFF8;
                font-weight: 500;
                padding: 10px 5px;
                border-radius: 4px;
                border: 1px solid white;
            }
        }
        .info{
            margin-top: 20px;
            font-size: 18px;
            line-height: 27px;
            color: #363B64;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 2px 8px #d8dce4;
            border-radius: 4px;
            padding: 8px;
        }
        .taskSch {display: flex;}
        .taskName{
            display: flex;
            align-items: self-end;
            margin-bottom: 5px;
            img{
                height: 12px;
                width: 12px;
                margin-right: 8px;
                margin-top: 3px;
            }
            span{
                font-size: 10px;
                line-height: 15px;
                color: #A098AE;
            }
        }
    }
`