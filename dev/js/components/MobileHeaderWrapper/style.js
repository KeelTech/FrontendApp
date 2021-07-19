import { css } from '@emotion/css';
import { inputField, tabScreenWidth } from '@constants';

export const mobileCont = css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 26px;
    overflow-y: auto;
    padding-bottom: 200px;
    .taskInfo{
        width: 50%;
        overflow-y: auto;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 20px;
        padding-top: 0px;
        margin: 0px;
        .taskInfo{
            display: none;
        }
    }   
`