import { css } from '@emotion/css';
import { inputField } from '@constants';

export const container = css`
    height: 100%;
    background: #FCFCFC;
    box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    border-radius: 4px;
    padding-top: 24px;
    .header{
        display: flex;
        padding: 0px 28px;
        padding-bottom: 18px;
        .profile{
            background: #DBDBDB;
            border-radius: 14px;
            height: 42px;
            width: 42px;
            margin-right: 16px;
        }
        .close{
            display: none;
        }
        .nameSection{
            display: flex;
            flex-direction: column;
            .name{
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #363B64;
            }
            .user{
                display: flex;
                align-items: center;
            }
            .activeUser{
                background: #4CBC9A;
                border-radius: 50%;
                height: 11px;
                width: 11px;
                margin-right: 5px;
            }
            .status{
                font-size: 12px;
                line-height: 18px;
                color: #A098AE;
            }
        }
    }
`
export const chatWidget = props=>css`
    border-bottom: 1px solid #EBEBEB;
    border-top: 1px solid #EBEBEB;
    padding: 19px 28px;
    overflow: auto;
    height: calc(100% - 160px);
    ${props.floatingChat && `
        padding: 13px 21px;
        height: calc(100% - 136px);
        z-index: 10;
    `};
}
`
export const msgWidget = props =>css`
    display: flex;
    padding: 19px 22px;
    .chatbox{
        // border: 2px solid #DBDBDB;
        box-sizing: border-box;
        // border-radius: 14px;
        display: flex;
        width: 100%;
        // padding: 9px 10px;
        align-items: center;
        justify-content: space-between;
    }
    input{
        font-size: 14px;
    line-height: 18px;
    color: #A098AE;
    min-width: 100px;
    background: #FCFCFC;
    border: 1px solid #DBDBDB;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 12px;
        ${inputField};
    }
    .sendWidget{
        display: flex;
        align-items: center;
        margin-left:10px;
    }
    .attachment{
        height: 17px;
        width: 17px;
        margin-right: 14px;
        cursor: pointer;
    }
    .sendBtn{
        display: flex;
        padding: 10px 16px;
        background: #4267B2;
        border-radius: 4px;
        font-size: 12px;
        line-height: 18px;
        color: #FCFCFC;
        align-items: center;
        cursor: pointer;
        height: 100%;
        font-weight: 600;
        img{
            // margin-left: 6px;
            height: 16px;
            width: 16px;
        }
    }
    ${props.floatingChat && `
        padding: 14px 20px;
        .chatbox{
            border-radius: 10px;
            padding: 5px;
        }
        input{
            border: 0px;
            font-size: 12px;
            line-height: 18px;
            min-width: 100px;
        }
        .attachment{
            height: 16px;
            width: 14px;
            margin-right: 8px;
        }
        .sendBtn{
            padding: 8px 13px;
            border-radius: 10px;
            font-size: 12px;
            line-height: 18px;
            img{
                height: 10px;
                width: 10px;
            }
        }
    `};
`

export const chatBox = props=>css`
    .msgTime{
        font-size: 10px;
        line-height: 17px;
        color: #A098AE;
        display: inline-block;
        margin-left: 10px;
    }
    .sender{
        display: flex;
        justify-content: flex-end;
        margin-bottom:10px;
    }
    .receiver .msg{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .receiver .chatMsg{
        font-size: 12px;
        line-height: 18px;
        color: #495057;
        margin-bottom: 10px;
        padding: 10px 17px;
        background: #EBEBEB;
        border-radius: 4px;
        display: inline-block;
        
    }
    .receiver .msgTime{
        margin-left: 10px;
    }
    .sender .msg{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .sender .chatMsg{
        font-size: 12px;
    line-height: 18px;
    margin-bottom: 10px;
    padding: 10px 17px;
    border-radius: 4px;
    background: #DEE2E6;
    color: #495057;
    display: inline-block;
    font-weight: 500;  
    }
    .sender .msgTime{
        margin-right: 10px;
    }
    ${props.floatingChat &&`
        .msgTime{
            font-size: 10px;
            line-height: 15px;
            display: inline-block;
            margin-left: 4px;
        }
        .receiver .chatMsg, .sender .chatMsg{
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 4px;
            padding: 12px 8px;
            border-radius: 10px;
        }`
    }
`

export const mobileChatView = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    border-radius: 0px;
    padding-top: 16px;
    z-index: 10;
    .header{
        padding: 0px 21px;
        padding-bottom: 12px;
        .close{
            display: block;
            height: 24px;
            width: 24px;
            cursor: pointer;
            margin-left: 20px;
            display: block;
            position: absolute;
            top: 14px;
            right: 20px;
        }
        .profile{
            height: 40px;
            width: 37px;
            margin-right: 11px;
        }
        .nameSection{
            display: flex;
            flex-direction: column;
            .name{
                font-weight: 600;
                font-size: 20px;
                line-height: 30px;
            }
            .user{
                display: flex;
                align-items: center;
            }
            .activeUser{
                height: 7px;
                width: 7px;
                margin-right: 4px;
            }
            .status{
                font-size: 12px;
                line-height: 18px;
            }
        }
    }
`