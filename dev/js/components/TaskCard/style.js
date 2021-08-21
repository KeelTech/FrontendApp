import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';

export const card = props=>css`
    background: white;
    padding: 12px 26px;
    box-shadow: 2px 2px 8px #eae8ee;
    border-radius: 4px;
    margin-bottom: 14px;
    ${props.isView && `
        cursor: pointer;
        // border: 1px solid #FCFCFC;
    `}
    ${props.active && `
        border: 1px solid #4267B2;
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
            background: #f44336;
    border-radius: 4px;
    padding: 1px 6px;
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