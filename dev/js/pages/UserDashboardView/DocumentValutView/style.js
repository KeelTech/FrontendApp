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
        border-radius: 4px;
        // border: 1px solid #e0dfdc;
        // background:white;
        // box-shadow: 4px 4px 8px #D8DCE4;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 20px;
        margin: 0px;
        .documentList{
            justify-content: center;
            margin-top: 20px;
        }
    }
    .documentList.addingListCont {
        display: flex;
        flex-flow: inherit;
        gap: 25px;
    }
    .listDocCont {
        width: 100%;
        display: flex;
        flex-flow: wrap;
    }
    
    .newListContainer {
        width: 214px;
        background: white;
        flex-shrink: 0;
        padding: 8px;
        background: white;
        border-radius: 4px;
        border: 1px solid #e8e8e8;
        height:min-content;
        
    }
    
    .newListContainer h4 {
        font-size: 14px;
        font-weight: 400;
        margin-top:5px;
    }
    
    .newListContainer ul li h6 {
        font-size: 11px;
        margin-bottom: 0px;
        font-weight: 500;
    }
    
    .newListContainer ul li p {
        font-size: 10px;
        color: #898888;
        margin-bottom: 0px;
    }
    .newListContainer li p img {
        width: 15px;
    }
    
    .newListContainer ul {
        padding-left: 0px;
        overflow: auto;
        list-style:none;
    }
    
    .newListContainer li {
        padding: 4px 0;
        display: flex;
    align-items: center;
    gap: 5px;
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
    .mobileDropDown{
        display: none;
    }
    .searchBar{
        padding-right: 16px;
    }
    @media(max-width:${tabScreenWidth}){
        flex-direction: column;
        align-items: flex-start;
        .uploadBy{
            display: none;
        }
        .uploadCTA{
            // display: none;
            width: 100%;
            flex-shrink: 0;
            margin-top: 10px;
        }
        .documentCta{
            width: 100%;
            flex-wrap:wrap;
        }
        .searchBar{
            padding: 0px;
            width: 100%;
        }
        .mobileDropDown{
            display: flex;
            margin-top: 20px;
            align-items: center;
            .btn{
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #363B64;
                padding-right: 8px;
            }
        }
    }
`

export const uploadMobileCta = css`
    display: none;
    @media(max-width: ${tabScreenWidth}){
        display: block;
    }
`