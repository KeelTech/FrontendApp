import { css } from '@emotion/css';
import { mobileScreenWidth } from '@constants';
import { primaryFont } from '@constants'

export const container = css`
    position: relative;
    background: white;
    padding: 24px 20px;
    border-radius: 4px;
    box-shadow: 2px 2px 8px #d8dce4;
    margin: 0px 20px 20px 0px;
    .topRow{
        display: flex;
        justify-content: space-between;
    }
    .details{
        display: flex;
        flex-direction: column;
        .name{
            font-weight: 600;
            font-size: 12px;
            color: #363B64;
        }
        .docDate{
            color: #A098AE;
            font-size: 10px;
        }
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