import { css } from '@emotion/css';
import { tabScreenWidth, inputField } from '@constants';

export const mainCont = css`
    @media(min-width: ${tabScreenWidth}){
        height: 100vh;
        overflow: hidden;
    }
`

export const container = css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 26px;
    height: calc(100vh - 180px);
    .taskInfo{
        width: 60%;
        overflow-y: hidden;
    }
    input{
        ${inputField};
        background: #F6F5FA;
        border: 1px solid #A098AE;
        border-radius: 10px;
        width: 100%;
        padding: 8px 4px;
        font-size: 12px;
        line-height: 18px;
        color: #4267B2;
    }
    @media(max-width: ${tabScreenWidth}){
        padding: 20px;
        margin: 0px;
        .taskInfo{
            display: none;
        }
    }
`

export const tasksView = css`
    padding-right: 22px;
    max-width: 40%;
    min-width: 40%;
    height: 100%;
    .tasksCta{
        display: flex;
        align-items: center;
        // flex-wrap: wrap;
        border: 1px solid #4267b2;
        border-radius: 4px;
        margin-bottom: 10px;
        overflow:hidden;
    }
    .cta{
        cursor: pointer;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    color: #5a5d5f;
    text-align: center;
    margin-bottom: 8px;
    background: #E7EFF8;
    font-weight: 600;
    padding: 5px 5px;
    border-radius: 4px;
    margin: 0;
    border: none;
    }
    .ctaActive{
        color: #4267B2;
    background: white;
    border-radius:0px;
    }
    .taskList{
        overflow-y: auto;
        height: calc(100vh - 290px);
        padding:5px;
    }
    .emptyData{
        margin-top: 16px;
    }
    @media(max-width: ${tabScreenWidth}){
        margin: 0px;
        width: 100%;
        max-width: 100%;
        height: 100%;
        padding-bottom: 84px;
        padding-right: 0px;
        .cta{
            // padding: 5px 21px;
            // border-radius: 4px;
            // margin: 0px 8px 8px 0px;
        }
        .taskList{
            max-height: 100%;
            overflow-y: hidden;
            padding-bottom: 40px;
        }
    }
`