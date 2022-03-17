import { css } from '@emotion/css';

export const container = css`
    --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    --msger-bg: #fff;
    --border: 2px solid #ddd;
    --left-msg-bg: #ececec;
    --right-msg-bg: #DEDEDE;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: var(--body-bg);
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    .msger {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        width: 100%;
        max-width: 867px;
        margin: 25px 10px;
        height: calc(100% - 50px);
        border: var(--border);
        border-radius: 5px;
        background: var(--msger-bg);
        box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
    }
    
    .msger-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: var(--border);
        background: #eee;
        color: #666;
    }
    
    .msger-chat {
        flex: 1;
        overflow-y: auto;
        padding: 10px;
    }
    .msger-chat::-webkit-scrollbar {
        width: 6px;
    }
    .msger-chat::-webkit-scrollbar-track {
        background: #ddd;
    }
    .msger-chat::-webkit-scrollbar-thumb {
        background: #bdbdbd;
    }
    .msg {
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
    }
    .msg:last-of-type {
        margin: 0;
    }
    .msg.right-msg{
        .msg-img{
        background-image:url("../../../../assets/images/common/chatAv.svg");
    }
}
    .msg-img {
        flex-shrink:0;
        width: 50px;
        height: 50px;
        margin-right: 10px;
        background: #ddd;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
    }
    .msg-bubble {
        max-width: 450px;
        padding: 15px;
        border-radius: 15px;
        background: var(--left-msg-bg);
    }
    .msg-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .msg-info-name {
        margin-right: 10px;
        font-weight: 600;
    }
    .msg-info-time {
        font-size: 0.85em;
    }
    
    .left-msg .msg-bubble {
        border-bottom-left-radius: 0;
    }
    
    .right-msg {
        flex-direction: row-reverse;
    }
    .right-msg .msg-bubble {
        background: var(--right-msg-bg);
        color: black;
        border-bottom-right-radius: 0;
    }
    .right-msg .msg-img {
        margin: 0 0 0 10px;
    }
    
    .msger-inputarea {
        display: flex;
        padding: 10px;
        border-top: var(--border);
        background: #eee;
    }
    .msger-inputarea * {
        padding: 10px;
        border: none;
        border-radius: 3px;
        font-size: 1em;
    }
    .msger-input {
        flex: 1;
        background: #ddd;
    }
    .msger-send-btn {
        margin-left: 10px;
        background: rgb(0, 196, 65);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.23s;
    }
    .msger-send-btn:hover {
        background: rgb(0, 180, 50);
    }
    
    .msger-chat {
        background-color: #fcfcfe;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1016%26quot%3b)' fill='none'%3e%3cuse xlink:href='%23SvgjsSymbol1023' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1023' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1016'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1019'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1018'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1020'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1021'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1017'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1022'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1023'%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='30' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='30' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='30' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='30' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='30' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='90' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='90' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='90' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='90' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='90' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='90' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='150' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='150' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='150' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='150' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='150' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='150' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='150' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='210' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='210' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='210' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='210' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='270' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='270' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='270' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='270' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='270' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='330' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='330' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='330' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='330' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='330' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='330' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='390' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='390' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='390' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='390' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='390' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='450' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='450' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='450' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='450' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='450' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='450' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='510' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='510' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='510' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='510' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='570' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='630' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='630' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='630' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='630' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='690' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='690' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='690' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");  
    }  
    
    
    
        .chooseOpt {
            // margin: 30px 0;
        }
        
        .chooseOpt h5 {
            font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
    line-height: 24px;  
        }
        
        .chooseOpt button {
            max-width:50%;
            border:1px solid #FD5B5B;
            min-width: 150px;
            margin: 0 2px;
            color: #FD5B5B;
            background: white;
            
            padding: 8px 5px;
            border-radius: 5px;
            font-family: inherit;
            text-transform: uppercase;
            transition: all .3s ease;
            &:hover{
                background:#FD5B5B;
                color:white;
            }
        }
        
        .nameInp {
            position: relative;
            margin-top: 10px;
        }
        
        .nameInp input {
            width: 100%;
            border: 2px solid #FD5B5B;
            border-radius: 5px;
            padding: 10px 35px 10px 10px;
        }
        
        .nameInp svg {
            fill: #FD5B5B;
            position: absolute;
            right: 6px;
            top: 0;
            bottom: 0;
            margin: auto;
        }
      
        .gridbtns{
            display:flex;
            flex-wrap:wrap;
        }
        .chooseOpt .gridbtns button {
            width: 25%;
            height: 100%;
            min-height: auto;
            font-size:14px;
        }
        
        :root {
            --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            --msger-bg: #fff;
            --border: 2px solid #ddd;
            --left-msg-bg: #ececec;
            --right-msg-bg: #DEDEDE;
        }
        
        html {
            box-sizing: border-box;
        }
        
        *,
        *:before,
        *:after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        }
        
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: var(--body-bg);
            font-family: 'Poppins', sans-serif;
        }
        
        .msger {
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;
            width: 100%;
            max-width: 867px;
            margin: 25px 10px;
            height: calc(100% - 50px);
            border: var(--border);
            border-radius: 5px;
            background: var(--msger-bg);
            box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
        }
        
        .msger-header {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: var(--border);
            background: #eee;
            color: #666;
        }
        
        .msger-chat {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
        }
        .msger-chat::-webkit-scrollbar {
            width: 6px;
        }
        .msger-chat::-webkit-scrollbar-track {
            background: #ddd;
        }
        .msger-chat::-webkit-scrollbar-thumb {
            background: #bdbdbd;
        }
        .msg {
            display: flex;
            align-items: flex-start;
            margin-bottom: 10px;
        }
        .msg:last-of-type {
            margin: 0;
        }
        .msg-img {
            flex-shrink:0;
            width: 50px;
            height: 50px;
            margin-right: 10px;
            background: #ddd;
            background-repeat: no-repeat;
            background-position: center;
            background-size: auto;
        background-image:url("../../../../assets/images/common/keel.svg");
            border-radius: 50%;
        }
        .msg-bubble {
            max-width: 450px;
            padding: 15px;
            border-radius: 15px;
            background: var(--left-msg-bg);
        }
        .msg-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .msg-info-name {
            margin-right: 10px;
            font-weight: 600;
        }
        .msg-info-time {
            font-size: 0.85em;
        }
        
        .left-msg .msg-bubble {
            border-bottom-left-radius: 0;
        }
        
        .right-msg {
            flex-direction: row-reverse;
        }
        .right-msg .msg-bubble {
            background: var(--right-msg-bg);
            color: black;
            border-bottom-right-radius: 0;
        }
        .right-msg .msg-img {
            margin: 0 0 0 10px;
        }
        
        .msger-inputarea {
            display: flex;
            padding: 10px;
            border-top: var(--border);
            background: #eee;
        }
        .msger-inputarea * {
            padding: 10px;
            border: none;
            border-radius: 3px;
            font-size: 1em;
        }
        .msger-input {
            flex: 1;
            background: #ddd;
        }
        .msger-send-btn {
            margin-left: 10px;
            background: rgb(0, 196, 65);
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.23s;
        }
        .msger-send-btn:hover {
            background: rgb(0, 180, 50);
        }
        
        .msger-chat {
            background-color: #fcfcfe;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1016%26quot%3b)' fill='none'%3e%3cuse xlink:href='%23SvgjsSymbol1023' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1023' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1016'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1019'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1018'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1020'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1021'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1017'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1022'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1023'%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='30' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='30' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='30' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='30' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='30' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='30' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='90' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='90' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='90' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='90' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='90' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='90' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='90' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='150' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='150' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='150' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='150' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='150' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='150' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='150' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='150' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='210' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='210' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='210' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='210' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='210' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='270' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='270' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='270' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='270' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='270' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='270' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='330' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='330' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='330' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='330' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='330' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='330' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='330' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='390' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='390' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='390' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='390' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='390' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='390' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='450' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='450' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='450' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='450' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='450' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='450' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='450' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='510' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='510' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='510' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='510' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='510' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='570' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='570' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='570' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='630' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1019' x='630' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='630' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='630' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='630' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='30' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='90' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='150' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='210' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1021' x='690' y='270' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1022' x='690' y='330' stroke='rgba(28%2c 83%2c 142%2c 0.08)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='390' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1017' x='690' y='450' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1018' x='690' y='510' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1020' x='690' y='570' stroke='rgba(28%2c 83%2c 142%2c 0.08)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");  
        }  
        
        
        
            .chooseOpt {
                // margin: 30px 0;
                // padding-left:60px;
            }
            
            // .chooseOpt h5 {
            //     font-weight: 600;
            //     font-size: 16px;
            //     margin-bottom: 5px;
            // }
            
            .chooseOpt button {
                max-width:50%;
                border:1px solid #FD5B5B;
                min-width: 150px;
                margin: 0 2px;
                color: #FD5B5B;
                background: white;
                
                padding: 8px 5px;
                border-radius: 5px;
                font-family: inherit;
                text-transform: uppercase;
                font-size:14px;
                transition: all .3s ease;
                &:hover{
                    background:#FD5B5B;
                    color:white;
                }
            }
            
            .nameInp {
                position: relative;
                margin-top: 10px;
            }
            
            .nameInp input {
                width: 100%;
                border: 2px solid #FD5B5B;
                border-radius: 5px;
                padding: 10px 35px 10px 10px;
                outline:none;
            }
            
            .nameInp svg {
                fill: #FD5B5B;
                position: absolute;
                right: 6px;
                top: 0;
                bottom: 0;
                margin: auto;
            }
          
            
            .chooseOpt .gridbtns button {
                width: 25%;
                margin: 5px;
                height: auto;
            }
            .listingChat {
                padding: 0 30px;
                margin-top: 10px;
            }
            
            .listingChat li {
                font-size: 12px;
                padding: 5px 0px;
            }
            /* The container */
.containerInput {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  p{
    font-size:14px;
}
}
.submitCht{
    background: #FD5B5B;
    font-size: 14px;
    padding: 8px 16px;
    margin-top: 18px;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
}

/* Hide the browser's default checkbox */
.containerInput input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fcfcfe;
  border: 1px solid #FD5B5B;
  
}

/* On mouse-over, add a grey background color */
.containerInput:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.containerInput input:checked ~ .checkmark {
  background-color: #FD5B5B;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.containerInput input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.containerInput .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
@media (max-width:767px){
    .chooseOpt .gridbtns button{
        font-size:12px;
    }
    .msger-chat{
        font-size:12px;
    }
    .chooseOpt.selectedBtnQus button {
        font-size: 12px;
    }
    .chooseOpt h5{
        font-size:12px !important;
        line-height:20px;
    }
    .msg.left-msg .chooseOpt .gridbtns button {
        font-size: 12px;
        width: 100%;
        max-width: 100%;
    }
    c {}

main.msger-chat .msg-img {
    width: 35px;
    height: 35px;
    background-size: contain;
}

main.msger-chat .msg.left-msg .msg-img {
    background-size: 80% !important;
}
span.checkmark {
    height: 20px !important;
    width: 20px !important;
}


.containerInput input:checked~.checkmark:after {top: 3px;left: 7px;}
}
`