import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const floatingChat = css`
    position: fixed;
    
    cursor: pointer;
    bottom: 16px;
    right: 20px;
    padding: 8px;
    background: #CF3030;
    border-radius: 50%;
    display: none;
    img{
        height: 32px;
        width: 32px;
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
    }
`