import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';

export const card = props=>css`
    background: #FCFCFC;
    border-radius: 20px;
    padding: 12px 26px;
    margin-bottom: 14px;
    ${props.isView && `
        cursor: pointer;
        border: 3px solid #FCFCFC;
    `}
    ${props.active && `
        border: 3px solid #363B64;
    `}
    &:last-child{
        margin-bottom: 0px;
    }
    .text{
        margin-bottom: 6px;
        font-size: 12px;
        line-height: 18px;
        color: #363B64;
    }
    .optionList{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .timePeriod{
            display: flex;
            align-items: center;
        }
        .calendar{
            height: 13px;
            width: 13px;
            margin-right: 12px;
        }
        .date{
            font-size: 10px;
            line-height: 15px;
            color: #A098AE;
        }
        .status{
            background: #CF3030;
            border-radius: 4px;
            padding: 2px 6px;
            font-weight: 500;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #FCFCFC;
        }
    }
    @media(max-width: ${mobileScreenWidth}){
        padding: 9px 15px;
        margin-bottom: 8px;
        .optionList{
            .calendar{
                height: 11px;
                width: 11px;
                margin-right: 6px;
            }
            .date{
                font-size: 10px;
                line-height: 15px;
            }
            .status{
                font-size: 10px;
                line-height: 15px;
                padding: 2px 5px;
                border-radius: 3px;
            }
        }
    }
`