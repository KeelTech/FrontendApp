import { css } from '@emotion/css';
import { inputField, tabScreenWidth, textAreaPlaceholder } from '@constants';

export const container = css`
    background: #FCFCFC;
    border-radius: 10px;
    padding: 22px;
    max-width: 100%;
    h2{
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        color: #363B64;
        margin: 0px;
        margin-bottom: 12px;
    }
    .formView{
        margin-top: 12px;
    }
    .field{
        margin-top: 18px;
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
    input{
        ${inputField};
        background: #F6F5FA;
        border: 1px solid #A098AE;
        border-radius: 10px;
        width: 100%;
        padding: 8px;
        font-size: 12px;
        line-height: 18px;
        color: #363B64;
    }
    textarea{
        width: 100%;
        border: 1px solid #A098AE;
        background: #F6F5FA;
        font-size: 12px;
        line-height: 18px;
        color: #A098AE;
        padding: 8px;
    }
    ${textAreaPlaceholder({color: '#A098AE'})};
    @media(max-width: ${tabScreenWidth}){
        background: unset;
        padding: 0px;
        h2{
            font-size: 20px;
            line-height: 30px;
        }
        .taskName{
            img{
                height: 14px;
                width: 14px;
            }
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 10px;
        }
        input{
            font-size: 10px;
            line-height: 14px;
        }
        .hideMobile{
            display: none;
        }
        .view{
            margin-bottom: 12px;
        }
    }
`

export const taskStatus = css`
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    .view{
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    @media(max-width: ${tabScreenWidth}){
        margin-top: 26px;
        flex-wrap: wrap;
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
            border-radius: 4px;
        }
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
        font-size: 8px;
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
    @media(max-width: ${tabScreenWidth}){
        margin-top: 26px;
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

export const checkListCont = css`
    margin-top: 18px;
    .checklist{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    input{
        ${inputField};
        margin: 8px 0px;
    }
    .checklistCta{
        display: flex;
    }
    .item{
        display: flex;
        align-items: flex-start;
        margin-bottom: 4px;
        justify-content: space-between;
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
        .delete{
            cursor: pointer;
        }
    }
    .checkItem{
        display: flex;
        align-items: flex-start;
    }
    .checkedItem{
        .checkedText{
            color: #A098AE;
            position: relative;
            text-decoration: line-through;
        }
    }
    @media(max-width: ${tabScreenWidth}){
        margin-top: 26px;
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

export const attachmentCont = css`
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media(max-width: ${tabScreenWidth}){
        margin-top: 26px;
    }
`
export const cta = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    @media(max-width: ${tabScreenWidth}){
        margin-top: 26px;
    }
`