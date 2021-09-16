import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const container = css`
    width: 100%;
    .rotateAcordion{
        transform: rotate(180deg);
    }
`
export const progressBar = css`
.desktopProgressBar {
    display: flex;
}

.leftPorgressBar {
    width: 120px;
}

.userFormsMainContainer {
    // padding: 12px;
    max-width: 500px;
    flex-shrink: 0;
    // width: 100%;
    // background: white;
    // border-radius: 4px;
    // box-shadow: 4px 4px 8px #d8dce4;
}
    
.userFormsMainContainer h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
}

.formWrapper {
    margin-bottom: 26px;
}

.formWrapper label {
    font-size: 12px;
    color:  #0A071B;
    margin-bottom: 4px;
    display: inline-block;
    font-weight:500;
}
.errorMsg, .hideMsg{
    display: block;
    margin: 0;
    padding: 0;
    margin-top: 2px;
    font-size: 12px;
    color: red;
}
.otpMessage{
    display: block;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: red;
}
.hideMsg{
    // visibility: hidden;
    display:none;
}
.inpCont input, textarea {
    width: 100%;
    border: 1px solid #CED4DA;
    min-height: 36px;
    padding: 5px 10px;
    border-radius: 4px;
    font-size:14px;
}
.showError input, .showError textarea{
    border: 1px solid red;
}
.inpCont {
    position: relative;
}

.formWrapper label sup {
    color: red;
}

.formWrapper.inpMobile .inpCont select {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #F3F5F6;
    padding: 0 4px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid #CED4DA;
}

.formWrapper.inpMobile input {
    padding-left: 61px;
}

.formWrapper .selectBox {
    position: relative;
}

.formWrapper .selectBox select {
    width: 100%;
    border: 1px solid #CED4DA;
    // min-height: 44px;
    padding: 5px 10px;
    border-radius: 4px;
}
.btnCont{
    margin-top:30px;
}
.btnCont button {
    color: white;
    background: #466CAD;
    border: none;
    padding: 5px 10px;
    // min-height: 44px;
    border-radius: 4px;
    min-width: 120px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-right:5px;
}
@import url(https://fonts.googleapis.com/css?family=Roboto:700);

body {
  background-color: #2979FF;
  font-family: 'Roboto', sans-serif;
  
}

.container {
  width: 100%;
  color: white;
  background: #2979FF;
  font-family: 'Roboto', sans-serif;
  margin-top: 20%;
}

.progressbar {
    counter-reset: step;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.progressbar li {
    position: relative;
    list-style: none;
    margin: 30px 0;
}

/* Circles */
.progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 40px;
    height: 40px;
    display: block;
    text-align: center;
    margin: 0 auto 0px auto;
    border-radius: 50%;
    background-color: #bfbfbf;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.progressbar li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #bfbfbf;
    top: -20px;
    left: 0px;
    right: 0;
    margin: auto;
    z-index: 1;
    transform: rotate(
90deg
);
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active:before {
    background: #466CAD;
    color: white;
}

.progressbar li.active + li:after {
    background: #466CAD;
}
.formsScroll {
    height: calc(100vh - 380px);
    overflow: auto;
    padding: 12px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 20px;
    }
}
.multipleWidgetWrapper{
    width: 100%;
}
.sendOtPBtn{
    margin: 0px !important;
    margin-top: 4px !important;
}
.mg8{
    margin-top: 30px;
}
.noVerified{
    margin: 4px 0px;
    color: green;
    font-size: 12px;
}
`

export const formView = css`
    background: #F8F9FA;
    border-radius: 4px;
    height: 100%;
    overflow-y: auto;
    .formView{
        padding: 24px 20px 20px 20px;
    }
    .cta{
        display: flex;
        position: fixed;
        left: 0;
        padding: 8px 20px;
        bottom: 0px;
        width: 100%;
        justify-content: center;
    }
    .formHeading{
        font-weight: 600;
        font-size: 16px;
        color: #3A3F67;
    }
    .formFields{
        background: #FFFFFF;
        border-radius: 4px;
        padding: 34px 24px;
        margin-top: 12px;
    }
`
