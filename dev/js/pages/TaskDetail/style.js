import { css } from '@emotion/css';
import { inputField, tabScreenWidth } from '@constants';

export const container = css`
    position: relative;
    background: #FCFCFC;
    border-radius: 20px;
    padding: 33px 40px;
    height: 100%;
    overflow-y: auto;
    .statusCont{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 23px;
    }
    .statusText{
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #A098AE;
    }
    .status{
        display: inline-block;
        top: 35px;
        right: 47px;
        color: #FCFCFC;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        padding: 2px 8px;
        background: #CF3030;
        border-radius: 5px;
    }
    .taskName{
        img{
            width: 15px;
            height: 13px;
            margin-right: 8px;
        }
        display: flex;
        align-items: center;
        color: #A098AE;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 12px;
    }
    .dueDate{
        font-size: 18px;
        line-height: 27px;
        color: #363B64;
    }
    .signDoc{
        display: flex;
        font-weight: 600;
        font-size: 20px;
        padding-bottom: 50px;
        color: #363B64;
        .backBtn{
            display: none;
        }
    }
    .member{
        display: flex;
        position: relative;
        span{
            z-index: 1;
            display: inline-block;
            display: flex;
            font-weight: 600;
            font-size: 20px;
            line-height: 39px;
            color: #363B64;
            min-width: 40px;
            min-height: 40px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: #BCBCD8;
        }
    }
    .mobileView{
        display: none;
        margin-left: 12px;
    }
    .taskStatus{
        display: none;
    }
    @media(max-width: ${tabScreenWidth}){
        background: unset;
        padding: 0px;
        .statusCont{
            display: none;
        }
        .status{
            font-size: 10px;
            line-height: 15px;
            padding: 2px 4px;
        }
        .mobileView{
            display: block;
        }
        .taskName{
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 4px;
        }
        .signDoc{
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            padding: 0px;
            .backBtn{
                display: block;
                color: #A098AE;
                font-size: 12px;
                line-height: 18px;
                border: 1px solid #A098AE;
                border-radius: 8px;
                padding: 8px 12px;
                cursor: pointer;
            }
        }
        .taskStatus{
            display: inline-block;
            margin-top: 8px;
            border-radius: 8px;
            border: 1px solid #A098AE;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            color: #A098AE;
            padding: 4px 6px;
        }
        .member{
            span{
                height: 28px;
                width: 28px;
                font-weight: 600;
                font-size: 14px;
                line-height: 21px;
            }
        }
        .dueDate{
            font-size: 10px;
            line-height: 15px;
        }
    }
`

export const memberCard = props=>css`
    position: absolute;
    left: ${props.val*28}px;
    z-index: ${props.val};
    background: ${props.bgcolor} !important;
    @media(max-width: ${tabScreenWidth}){
        left: ${props.val*28}px;
    }
`

export const taskStatus = css`
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
    .view{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const discussionSection = css`
    margin-top: 46px;
    .discussionTxt{
        font-size: 18px;
        line-height: 27px;
        color: #363B64;
        display: inline-block;
    }
    @media(max-width: ${tabScreenWidth}){
        margin-top: 20px;
        .discussionTxt{
            font-size: 12px;
            line-height: 18px;
        }
    }
`
export const attachmentSection = css`
    margin-top: 46px;
    .attachmentHeader{
        display: flex;
        justify-content: space-between;
    }
    .attachmentList{
        display: flex;
        flex-wrap: wrap;
    }
    @media(max-width: ${tabScreenWidth}){
        margin-top: 20px;
    }
`

export const checklistSection = props=> css`
    margin-top: 46px;
    width: 100%;
    .progress{
        margin-top: 20px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
    }
    .progressNo{
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #363B64;
        padding-right: 8px;
    }
    .percent{
        position: relative;
        width: 100%;
        border-radius: 6px;
        background: #ECECF1;
        height: 6px;
        &:after{
            content: '';
            position: absolute;
            left: 0px;
            border-radius: 6px;
            height: 6px;
            width: ${props.progress};
            background: #363B64;
        }
    }
    .item{
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        img{
            margin-right: 8px;
            width: 18px;
            height: 18px;
        }
        .checkedText{
            font-size: 18px;
            line-height: 27px;
            color: #363B64;
        }
    }
    .checkedItem{
        .checkedText{
            color: #A098AE;
            position: relative;
            &:after{
                content: '';
                position: absolute;
                height: 1px;
                top: 50%;
                left: 0px;
                width: 100%;
                background: #A098AE;
            }
        }
    }
    @media(max-width: ${tabScreenWidth}){
        margin-top: 20px;
        .progressNo{
            font-size: 10px;
            line-height: 15px;
        }
        .item{
            .checkedText{
                font-size: 12px;
                line-height: 18px;
            }
        }
    }
`

export const messageSection = css`
    margin-top: 46px;
    .msgView{
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
        &:last-child{
            margin-bottom: 0px;
        }
        input{
            ${inputField};
            width: 100%;
            padding: 10px;
            font-size: 14px;
            line-height: 21px;
            border: 0.5px solid #A098AE;
            border-radius: 10px;
        }
    }
    .profile{
        margin-right: 8px;
        min-height: 40px;
        min-width: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #363B64;
        font-size: 18px;
        line-height: 27px;
        color: #DBDBDB;
    }
    .info{
        display: flex;
        align-items: center;
    }
    .name{
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #363B64;
    }
    .time{
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #A098AE;
        padding-left: 6px;
    }
    .msg{
        margin-top: 6px;
        font-size: 14px;
        line-height: 21px;
        color: #363B64
    }
    @media(max-width: ${tabScreenWidth}){
        margin-top: 20px;
        .profile{
            width: 28px;
            height: 28px;
            font-size: 14px;
            line-height: 21px;
        }
        input{
            font-size: 12px;
        }
        .msg{
            font-size: 12px;
            line-height: 18px;
        }
    }
`

export const taskMobileCont = css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 26px;
    overflow-y: auto;
    padding-bottom: 200px;
    .taskInfo{
        width: 50%;
        overflow-y: auto;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 20px;
        margin: 0px;
        .taskInfo{
            display: none;
        }
    }   
`