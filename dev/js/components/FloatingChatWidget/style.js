import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const floatingChat = css`
    position: fixed;
    
    cursor: pointer;
    bottom: 16px;
    right: 20px;
    padding: 8px;
    // background: #f44336;
    border-radius: 50%;
    display: none;
    img{
        height: 42px;
        width: 42px;
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
    }
`