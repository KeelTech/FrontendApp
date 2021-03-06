import { css } from '@emotion/css';
import { primaryFont } from '@constants';

export const container = css`
    overflow-x: hidden;
    display: flex;
    // background: #DFEAF4;
    // min-width: 100vw;
    min-height: 100vh;
    font-family: ${primaryFont};
    &:after{
        content: '';
        height: 400px;
        width: 400px;
        border-radius: 50%;
        left: 108px;
        top: -100px;
        z-index: 10;
        background: rgba(254, 152, 116, 0.25);
        filter: blur(200px);
        position: fixed;
        display: none;
    }
`

export const body = css`
    // background: rgba(252, 252, 252, 0.5);
    display: flex;
    width: 100%;
    .mainView{
        width: 100%;
        background: #f3f2ef;
        margin-top:8px;
    }
    .headerView{
        display: flex;
        align-items: center;
    }
`

export const mobileScrollView = css`
    height: unset;
`