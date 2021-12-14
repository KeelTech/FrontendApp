import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    display: flex;
    padding: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    align-items: center;
    border: 1px solid #EAEAEF;
    border-radius: 5px;
    position: relative;
    .docIcon{
        padding: 8px;
        background: #ECECF1;
        border-radius: 5px;
        margin-right: 13px;
    }
    .docx{
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        color: #363B64;
    }
    .dotMenu{
        position: absolute;
        right: 8px;
        top: 8px;
        cursor: pointer;
    }
    @media(max-width: ${tabScreenWidth}){
        .docx{
            font-size: 12px;
            line-height: 18px;
        }
        .docIcon{
            height: 36px;
            width: 36px;
            padding: 8px;
        }
    }
`