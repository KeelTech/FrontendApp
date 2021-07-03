import { css } from '@emotion/css';

export const primaryFont = "'Poppins', sans-serif";
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


