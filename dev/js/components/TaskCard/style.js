import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';

export const card = css`
    background: #FCFCFC;
    box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    border-radius: 20px;
    padding: 17px 40px;
    margin-bottom: 20px;
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