import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';
import { primaryFont } from '@constants'

export const container = css`
    position: relative;
    background: white;
    padding: 15px 18px;
    border-radius: 4px;
    box-shadow: 4px 4px 8px #D8DCE4;
    margin: 0px 20px 20px 0px;
    word-break: break-word;
    width: 260px;
    .topRow{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px dashed #343A40;
    }
    .docHeading{
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;
        color: #343A40;
        padding-right: 3px;
    }
    .bottomRow{
        display: flex;
        flex-direction: column;
        padding-top: 10px;
    }
    .name{
        font-weight: 600;
        font-size: 16px;
        color: #363B64;
    }
    .docDate{
        color: #6C757D;
        font-size: 10px;
        margin-bottom: 6px;
    }
    .docTime{
        font-size: 10px;
    }
    .dotMenu{
        height: 24px;
        margin-top: 4px;
        width: 24px;
        cursor: pointer;
    }
    .docOverlay{
        margin-top: 12px;
        background: rgba(54, 59, 100, 0.1);
        border-radius: 8px;
        min-width: 200px;
        min-height: 80px;
    }
    @media(max-width: ${mobileScreenWidth}){
        margin: 0px 12px 12px 0px;
        .details{
            .name{
                font-size: 10px;
            }
            .docDate{
                font-size: 6px;
            }
        }
        .dotMenu{
            width: 24px;
        }
        .docOverlay{
            margin-top: 12px;
            background: rgba(54, 59, 100, 0.1);
            border-radius: 8px;
            min-width: 100px;
            min-height: 60px;
        }
    }
`