import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    background: #FFFFFF;
    .customerView{
        display: flex;
        width: 100%;
        height: calc(100% - 200px);
        padding: 0px 26px;
    }
    @media(max-width: ${tabScreenWidth}){
        .customerView{
            padding: 20px;
            margin: 0px;
        }
    }
`

