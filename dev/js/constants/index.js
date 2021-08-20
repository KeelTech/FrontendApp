import { css } from '@emotion/css';

export const primaryFont = "inherit";
export const mobileScreenWidth = "600px";
export const tabScreenWidth = "1100px";

export const inputField = css`
    :focus{
        outline: none;
    }
    :placeholder{
        color: #A098AE;
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #A098AE;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: #A098AE;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: #A098AE;
    }
    :-moz-placeholder { /* Firefox 18- */
        color: #A098AE;
    }
`

export const textAreaPlaceholder = props => css`
    ::placeholder{
        color: ${props.color};     
    }
    textarea::-webkit-input-placeholder {
        color: ${props.color};
    }

    textarea:-moz-placeholder { /* Firefox 18- */
        color: ${props.color};  
    }

    textarea::-moz-placeholder {  /* Firefox 19+ */
        color: ${props.color};  
    }

    textarea:-ms-input-placeholder {
        color: ${props.color};  
    }

    textarea::placeholder {
        color: ${props.color};
    }
`

export const loaderView = css`
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    justify-content: center;
    align-items: center;
    @media(max-width: ${tabScreenWidth}){
        top: calc(50% - 100px);
    }    
`

export const isMobileView = ()=>{

    if(typeof document==="object" && document.body.clientWidth){
        return document.body.clientWidth<=1100
    }
    return false;
}


