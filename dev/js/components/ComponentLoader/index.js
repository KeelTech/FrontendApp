import React from 'react';
import { css } from '@emotion/css';

export const container = css`
    .loader-for-chat-div{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: #000000ed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;   
    }
    .loader-for-chat {
        position: relative;
    }
    .loader-for-chat span {
        position: absolute;
        display: block;
        bottom: 0;
        width: 9px;
        height: 5px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.1);
        -webkit-animation: loader-for-chat 2s infinite ease-in-out;
        animation: loader-for-chat 2s infinite ease-in-out;
    }

    .loader-for-chat span:nth-child(2) {
        left: 11px;
        -webkit-animation-delay: 200ms;
        animation-delay: 200ms;
    }

    .loader-for-chat span:nth-child(3) {
        left: 22px;
        -webkit-animation-delay: 400ms;
        animation-delay: 400ms;
    }

    .loader-for-chat span:nth-child(4) {
        left: 33px;
        -webkit-animation-delay: 600ms;
        animation-delay: 600ms;
    }

    .loader-for-chat span:nth-child(5) {
        left: 44px;
        -webkit-animation-delay: 800ms;
        animation-delay: 800ms;
    }

    .loader-for-chat span:nth-child(6) {
        left: 55px;
        -webkit-animation-delay: 1000ms;
        animation-delay: 1000ms;
    }

    @-webkit-keyframes loader-for-chat {
        0% {
            height: 5px;
            -webkit-transform: translateY(0);
            transform: translateY(0);
            background: rgba(0, 0, 0, 0.1);
        }
        25% {
            height: 30px;
            -webkit-transform: translateY(15px);
            transform: translateY(15px);
            background: rgb(17 31 225);
        }
        50%,
        100% {
            height: 5px;
            -webkit-transform: translateY(0);
            transform: translateY(0);
            background: rgba(0, 0, 0, 0.1);
        }
    }

    @keyframes loader-for-chat {
        0% {
            height: 5px;
            -webkit-transform: translateY(0);
            transform: translateY(0);
            background: rgba(0, 0, 0, 0.1);
        }
        25% {
            height: 30px;
            -webkit-transform: translateY(15px);
            transform: translateY(15px);
            background: #9198f3;
        }
        50%, 100% {
            height: 5px;
            -webkit-transform: translateY(0);
            transform: translateY(0);
            background: rgba(0, 0, 0, 0.1);
        }
    }
`;

const ComponentLoader = ()=>{

    return(
        <div className={container}>
            <div className="loader-for-chat-div">
                <div className='loader-for-chat'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default ComponentLoader;