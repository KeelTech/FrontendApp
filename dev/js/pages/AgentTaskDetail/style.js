import { css } from '@emotion/css';
import { inputField, tabScreenWidth } from '@constants';

export const container = css`
position: relative;
background: white;
box-shadow: 2px 2px 8px #eae8ee;
border-radius: 4px;
padding: 12px;
height: 100%;
overflow-y: auto;
width: 100%;
    .loadingScrn{
        position: absolute;
        display: flex;
        left: 50%;
        top: 50%;
        justify-content: center;
        align-items: center;
    }
    .submitCta{
        margin: 20px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        bottom: 100px;
    }
    .statusCont{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 12px;
    }
    .statusText{
        font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #4267b2;
    border: 1px solid #4267b2;
    padding: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
    }
    .status{
        display: inline-block;
        top: 35px;
        right: 47px;
        color: #FCFCFC;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
    text-transform: uppercase;
        padding: 2px 8px;
        color: #CF3030;
    border: 1px solid #CF3030;
    background: #F5D6D6;
        border-radius: 2px;
    }
    .taskName{
        img{
            width: 12px;
            height: 12px;
            margin-right: 4px;
        }
        display: flex;
        align-items: center;
        color: #212529;
        font-weight: 600;
        font-size: 10px;
        line-height: 15px;
        margin-bottom: 8px;
    }
    .dueDate{
        font-size: 12px;
        line-height: 18px;
        color: #363B64;
    }
    .signDoc{
        display: flex;
        font-weight: 600;
        font-size: 14px;
        color: #363B64;
        .backBtn{
            display: none;
        }
        input{
            ${inputField};
            border: 1px solid #A098AE;
            border-radius: 4px;
            width: 100%;
            padding: 8px !important;
            font-size: 12px;
            line-height: 18px;
            color: #363B64;
            background: #FFF;
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
            font-size: 16px;
            line-height: 24px;
            color: #363B64;
            min-width: 33px;
            min-height: 33px;
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
        // background: unset;
        // padding: 0px 4px;
        .topTaskHead {
            &.forAgent{
                flex-wrap:wrap;
            }
        }
        .statusCont{
            // display: none;
            width:100%;
            flex-shrink:0;
        }
        .loadingScrn{
            top: calc(50% - 100px);
        }
        .status{
            font-size: 10px;
            line-height: 14px;
    text-transform: uppercase;
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
                width: 70px;
                flex-shrink: 0;
                margin-left: auto;
                margin-bottom: 12px;
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
    display: flex;
    flex-wrap: wrap;
    .view{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
    }
    input{
        ${inputField};
        background: #F6F5FA;
        border: 1px solid #A098AE;
        border-radius: 4px;
        width: 100%;
        padding: 8px !important;
        font-size: 12px;
        line-height: 18px;
        color: #363B64;
    }
    @media(max-width: ${tabScreenWidth}){
        .hideMobile{
            display: none;
        }
    }
`

export const discussionSection = css`
    margin-top: 30px;
    .discussionTxt{
        display: block;
        textarea{
            width: 100%;
            border: 1px solid #A098AE;
            background: #F6F5FA;
            font-size: 12px;
            line-height: 18px;
            color: #A098AE;
            padding: 8px;
        }
    }
    @media(max-width: ${tabScreenWidth}){
        margin-top: 16px;
        .discussionTxt{
            font-size: 12px;
            line-height: 18px;
        }
    }
`
export const attachmentSection = css`
    margin-top: 30px;
    .attachmentHeader{
        display: flex;
        justify-content: space-between;
    }
    .attachmentList{
        display: flex;
        flex-wrap: wrap;
    }
    .addAttachment{
        cursor: pointer;
    }
    @media(max-width: ${tabScreenWidth}){
        margin-top: 20px;
    }
`

export const checklistSection = props=> css`
    margin-top: 30px;
    width: 100%;
    .checklist{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .delete{
        cursor: pointer;
    }
    input{
        ${inputField};
        margin: 8px 0px;
        width: 100%;
        padding: 8px;
        font-size: 10px;
        line-height: 15px;
        border: 0.5px solid #A098AE;
        border-radius: 7px;
    }
    .checklistCta{
        display: flex;
    }
    .progress{
        margin-top: 16px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        padding: 0 5px;
    }
    .progressNo{
        font-size: 10px;
        line-height: 12px;
        display: flex;
        align-items: center;
        color: #000000;
        font-weight:500;
        padding-right: 5px;
    }
    .checkItem{
        display: flex;
        align-items: flex-start;
    }
    .percent{
        position: relative;
        width: calc(100% - 30px);
        border-radius: 6px;
        background: #f3f2ef;
        height: 6px;
        &:after{
            content: '';
            position: absolute;
            left: 0px;
            border-radius: 6px;
            height: 6px;
            width: ${props.progress};
            background: #4caf50;
        }
    }
    .item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
        img{
            margin-right: 4px;
            width: 16px;
            height: 16px;
        }
        .checkedText{
            font-size: 12px;
            line-height: 18px;
            color: #363B64;
        }
    }
    .checkedItem{
        .checkedText{
            color: #A098AE;
            position: relative;
            text-decoration: line-through;
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
    margin-top: 30px;
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
            padding: 8px;
            font-size: 10px;
            line-height: 15px;
            border: 0.5px solid #A098AE;
            border-radius:47px;
        }
    }
    .commentSection{
        width: 100%;
    }
    .msgSection{
        display : flex;
        justify-content: space-between;
        align-items: flex-start;
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
    .info{
        display: flex;
        align-items: center;
    }
    .name{
        font-weight: 600;
        font-size: 10px;
        line-height: 16px;
        color: #363B64;
    }
    .time{
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        color: #A098AE;
        padding-left: 4px;
    }
    .msg{
        margin-top: 4px;
        font-size: 10px;
        line-height: 15px;
        color: #363B64
    }
    .deleteTask{
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
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