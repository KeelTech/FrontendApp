import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    width: 100%;
`
export const progressBar = css`
    
`

export const formView = css`
    background: #F8F9FA;
    border-radius: 10px;
    height: 100%;
    overflow-y: auto;
    .formView{
        padding: 24px 20px 20px 20px;
    }
    .cta{
        display: flex;
        position: fixed;
        left: 0;
        padding: 8px 20px;
        bottom: 0px;
        width: 100%;
        justify-content: center;
    }
    .formHeading{
        font-weight: 600;
        font-size: 16px;
        color: #3A3F67;
    }
    .formFields{
        background: #FFFFFF;
        border-radius: 10px;
        padding: 34px 24px;
        margin-top: 12px;
    }
`
