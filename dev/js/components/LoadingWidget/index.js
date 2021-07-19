import React from 'react';
import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    position: fixed;
    .overlay{
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #C4C4C4;
        opacity: 0.3;
    }
    .loader{
        position: fixed;
        left: 49%;
        top: 47%;
        animation: rotate 3s infinite linear;
        img{
            height: 70px;
            width: 70px;
        }
    }
    @keyframes rotate{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    @media(max-width: ${tabScreenWidth}){
        display: flex;
    }
`

const CustomSelect = ({})=>{

    return(
        <div className={container}>
            <div className="loader">
                <img className="icon" src={ASSETS_BASE_URL+"/images/common/loading.png"} alt="...loading"/>
            </div>
            {/* <div className="overlay"></div> */}
        </div>
    )
}

export default CustomSelect;