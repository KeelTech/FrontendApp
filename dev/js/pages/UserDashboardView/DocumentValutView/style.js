import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    width: 100%;
    padding: 0px 26px;
    .documentList{
        overflow-y: auto;
        margin-top: 36px;
        display: flex;
        flex-wrap: wrap;
        overflow-x: hidden;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 20px;
        margin: 0px;
    }
`

export const filters = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .documentCta{
        display: flex;
        align-items: center;
    }
    .uploadBy{
        display: flex;
        align-items: center;
        .btn{
            font-weight: 500;
            font-size: 20px;
            line-height: 36px;
            color: #363B64;
            padding-right: 12px;
        }
    }
    .searchBar{
        padding-right: 16px;
    }

`