import { css } from '@emotion/css'
import { tabScreenWidth } from '@constants';

export const leftBarCont = css`
    background: white;
    z-index: 10;
    box-shadow: 2px 2px 8px #d8dce4;
    height: fit-content;
    position: sticky;
    top: 90px;
    border-radius: 4px;
    border: 1px solid #e0dfdc;
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000000c9;
    }
`

export const container = css`
    position: relative;
    min-width: 210px;
    z-index: 9;
    top: 0;
    // height: 100vh;
    display: flex;
    // background: rgba(252,252,252,0.5);
    .openWidgetView{
        position: relative;
    /* padding: 30px 32px; */
    padding-right: 0px;
    // min-height: 100vh;
    width: 100%;
    }
    .widgetView{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        // padding-top: 60px;
    }
    .homeWidget{
        // display: flex;
        width: 100%;
        // padding: 20px 10px 0 25px;
        margin-bottom: 30px;
    }
    .homeIcon{
        width: 104px;
        height: 37px;
        cursor: pointer;
    }
    .crossIcon{
        display: none;
    }
    @media(max-width: ${tabScreenWidth}){
        display: none;
    }
`

export const menuOptions = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    .widget{
        display: flex;
        cursor: pointer;
        align-items: center;
        padding: 10px 17px;
        margin-bottom: 8px;
        padding: 12px 8px 12px 25px;
        position: relative;
        .icon{
            width: 20px;
            height: 20px;
            max-width: 20px;
            min-width: 20px;
            filter: brightness(.5) !important;
        }
        .heading{
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: #343A40;
            margin-left: 17px;
        }
    }
    .disableWidget{
        cursor: unset;
        opacity: 0.4;
    }
    .degreeWidget{
        display: flex;
        flex-direction: column;
        align-items: center;
        // margin-top: 35px;
        // margin-left: 17px;
        margin: 10px 20px;
        background: #4267B2;
        box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
        border-radius: 4px;
        padding: 10px 16px;
        font-weight: 700;
        img{
            margin-bottom: 8px;
            height: 20px;
            width: 35px;
        }
        span{
            font-size: 12px;
            line-height: 18px;
            color: #FFFDFD;
        }
    }
    .activeWidget{
        background: #FCFCFC;
        // box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
        // border-radius: 13px;
        .icon{
            filter: brightness(1) !important;
        }
        .heading{
            color: #4267B2;
        }
        &:before{
            content: '';
            position: absolute;
            width: 6px;
            height: 100%;
            background: #4267B2;
            left: 0;
            border-radius: 20px;
        }
    }
`

export const mobileView = css`
    position: absolute !important;
    display: block !important;
    min-width: 200px;
    background: rgba(252,252,252);
    .openWidgetView{
        position: relative;
        padding: 21px 14px;
        border: 0px;
    }
    .widgetView{
        align-items: flex-start;
    }
    .homeWidget{
        justify-content: space-between;
        align-items: center;
        // padding: 20px 10px 0 25px;
        margin-bottom: 28px;
    }
    .homeIcon{
        width: 102px;
        height: 32px;
    }
    .crossIcon{
        display: block;
        width: 24px;
        cursor: pointer;
    }
    .widget{
        padding: 12px 21px;
    }
    .icon{
        width: 26px;
        height: 26px;
        max-width: 26px;
        min-width: 26px;
        filter: brightness(.5) !important;
    }
    .heading{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        margin-left: 21px;
    }
    .degreeWidget{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        margin-left: 27px;
        background: #4267B2;
        box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
        border-radius: 4px;
        padding: 10px 16px;
        font-weight: 700;
        img{
            margin-bottom: 8px;
            height: 20px;
            width: 35px;
        }
        span{
            font-size: 13px;
            line-height: 21px;
        }
    }
`