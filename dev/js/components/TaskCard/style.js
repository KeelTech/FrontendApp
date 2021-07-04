import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';

export const card = props=>css`
    background: #FCFCFC;
    border-radius: 20px;
    padding: 17px 40px;
    margin-bottom: 20px;
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
        margin-bottom: 8px;
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
            height: 20px;
            width: 20px;
            margin-right: 18px;
        }
        .date{
            font-size: 14px;
            line-height: 21px;
            color: #A098AE;
        }
        .status{
            background: #CF3030;
            border-radius: 5px;
            padding: 2px 6px;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
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