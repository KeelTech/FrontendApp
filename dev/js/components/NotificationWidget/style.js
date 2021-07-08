import { css } from '@emotion/css';

export const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 40px;
    width: 37px;
    position: relative;
    background: #FCFCFC;
    box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    border-radius: 10px;
    img{
        width: 13px;
        height: 18px;
    }
    &:after{
        content: '';
        position: absolute;
        background: #FE9874;
        height: 5px;
        width: 5px;
        right: 8px;
        top: 6px;
        border-radius: 50%;
    }
`