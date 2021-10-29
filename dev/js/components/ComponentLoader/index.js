import React from 'react';
import { css } from '@emotion/css';

export const container = css`
.shineSimmer {
    background: #ffffff;
    background-image: linear-gradient(to right, #ffffff 0%, #fafafa 20%, #ffffff 40%, #ffffff 100%);
    background-repeat: no-repeat;
    background-size: cover; 
    display: inline-block;
    position: absolute;
    top:0px;
    left:0px;
    height:100%;
    width:100%;
    box-shadow: inset 0px 0px 2px 0px #d1d1d1;
    border-radius: 4px;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: forwards; 
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;
    }
@-webkit-keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
    
    100% {
      background-position: 468px 0; 
    }
  }
`;

const ComponentLoader = ()=>{

    return(
        <div className={container}>
            <div className="shineSimmer">
            </div>
        </div>
    )
}

export default ComponentLoader;