import { css } from '@emotion/css';
import { inputField } from '@constants';

export const container = css`
    height: 100%;
    background: #FCFCFC;
    box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    border-radius: 20px;
    padding-top: 32px;
    .header{
        display: flex;
        padding: 0px 42px;
        padding-bottom: 27px;
        .profile{
            background: #DBDBDB;
            border-radius: 20px;
            height: 64px;
            width: 64px;
            margin-right: 24px;
        }
        .close{
            display: none;
        }
        .nameSection{
            display: flex;
            flex-direction: column;
            .name{
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                color: #363B64;
            }
            .user{
                display: flex;
                align-items: center;
            }
            .activeUser{
                background: #4CBC9A;
                border-radius: 50%;
                height: 16px;
                width: 16px;
                margin-right: 8px;
            }
            .status{
                font-size: 18px;
                line-height: 27px;
                color: #A098AE;
            }
        }
    }
`
export const chatWidget = props=>css`
    border-bottom: 1px solid #EBEBEB;
    border-top: 1px solid #EBEBEB;
    padding: 29px 42px;
    overflow: auto;
    height: calc(100% - 230px);
    ${props.floatingChat && `
        padding: 13px 21px;
        height: calc(100% - 136px);
        z-index: 10;
    `};
}
`
export const msgWidget = props =>css`
    display: flex;
    padding: 29px 34px;
    .chatbox{
        border: 2px solid #DBDBDB;
        box-sizing: border-box;
        border-radius: 20px;
        display: flex;
        width: 100%;
        padding: 9px 10px;
        align-items: center;
        justify-content: space-between;
    }
    input{
        border: 0px;
        font-size: 18px;
        line-height: 27px;
        color: #A098AE;
        min-width: 100px;
        ${inputField};
    }
    .sendWidget{
        display: flex;
        align-items: center;
    }
    .attachment{
        height: 27px;
        width: 27px;
        margin-right: 20px;
        cursor: pointer;
    }
    .sendBtn{
        display: flex;
        padding: 13px 25px;
        background: #363B64;
        border-radius: 20px;
        font-size: 18px;
        line-height: 27px;
        color: #FCFCFC;
        align-items: center;
        cursor: pointer;
        font-weight: 600;
        img{
            margin-left: 8px;
            height: 23px;
            width: 23px;
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
        font-size: 14px;
        line-height: 26px;
        color: #A098AE;
        display: inline-block;
        margin-left: 12px;
    }
    .sender{
        display: flex;
        justify-content: flex-end;
    }
    .receiver .msg{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .receiver .chatMsg{
        font-size: 18px;
        line-height: 27px;
        color: #363B64;
        margin-bottom: 14px;
        padding: 15px 26px;
        background: #EBEBEB;
        border-radius: 20px;
        display: inline-block;
        
    }
    .receiver .msgTime{
        margin-left: 12px;
    }
    .sender .msg{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .sender .chatMsg{
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 14px;
        padding: 15px 26px;
        border-radius: 20px;
        background: #363B64;
        color: #FCFCFC;
        display: inline-block;   
    }
    .sender .msgTime{
        margin-right: 12px;
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