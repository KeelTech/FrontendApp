import { css } from '@emotion/css'
import { tabScreenWidth } from '@constants';

export const leftBarCont = css`
    .overlay{
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #C4C4C4;
        opacity: 0.3;
    }
`

export const container = css`
    position: relative;
    min-width: 354px;
    z-index: 2;
    top: 0;
    height: 100vh;
    display: flex;
    .openWidgetView{
        position: relative;
        padding: 34px 46px;
        min-height: 100vh;
        border-right: 2px solid #EBEBEB;
        background: #FCFCFC;
    }
    .widgetView{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .homeWidget{
        display: flex;
        width: 100%;
        margin-bottom: 52px;
    }
    .homeIcon{
        width: 157px;
        height: 50px;
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
    .widget{
        display: flex;
        cursor: pointer;
        align-items: center;
        padding: 15px 27px;
        margin-bottom: 8px;
        .icon{
            width: 33px;
            height: 33px;
            max-width: 33px;
            min-width: 33px;
        }
        .heading{
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #A098AE;
            margin-left: 27px;
        }
    }
    .degreeWidget{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        margin-left: 27px;
        background: #363B64;
        box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
        border-radius: 20px;
        padding: 26px 36px;
        font-weight: 700;
        img{
            margin-bottom: 8px;
            height: 20px;
            width: 35px;
        }
        span{
            font-size: 18px;
            line-height: 27px;
            color: #FFFDFD;
        }
    }
    .activeWidget{
        background: #FCFCFC;
        box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
        border-radius: 20px;
        .icon{
            filter: brightness(0.5) !important;
        }
    }
`

export const mobileView = css`
    position: absolute !important;
    display: block !important;
    min-width: 200px;
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
        background: #363B64;
        box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
        border-radius: 20px;
        padding: 20px 28px;
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