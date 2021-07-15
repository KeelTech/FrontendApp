import { css } from '@emotion/css';
import { inputField, tabScreenWidth, textAreaPlaceholder } from '@constants';

export const container = css`
    background: #FCFCFC;
    border-radius: 10px;
    padding: 22px;
    h2{
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        color: #363B64;
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
        color: #A098AE;
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
        .taskName{
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 4px;
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
            border-radius: 7px;
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

export const checkListCont = css`
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const attachmentCont = css`
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
export const cta = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`