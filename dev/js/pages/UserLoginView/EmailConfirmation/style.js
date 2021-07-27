import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const style = (props) => css`
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  .container {
    width: 50vw;
    @media (max-width: ${tabScreenWidth}) {
      width: 100vw;
    }
    .keel-logo {
      margin-top: 30px;
      margin-left: 40px;
      cursor: pointer;
      @media (max-width: ${tabScreenWidth}) {
        max-width: 120px;
      }
    }
    .header-text {
      display: flex;
      justify-content: center;
      margin-top: 6%;
      font-size: 28px;
      line-height: 27px;
      letter-spacing: 0.05em;
      color: #181818;
      font-weight: 700;
    }
    @media (max-width: ${tabScreenWidth}) {
      .header-text {
        font-size: 20px;
      }
    }
    .sub-heading {
      display: flex;
      justify-content: center;
      margin-top: 6%;
      font-size: 28px;
      font-family: Poppins;
      line-height: 27px;
      letter-spacing: 0.05em;
      color: #181818;
      font-weight: 700;
    }
    @media (max-width: ${tabScreenWidth}) {
      .sub-heading {
        font-size: 15px;
      }
    }
    .form-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 5%;
    }
    .login-email-input {
      display: flex;
      justify-content: center;
      margin-top: 4%;
      margin-bottom: 1%;
      width: 450px;
      height: 70px;
      background: #f6f5fa;
      border-radius: 20px;
      border-color: #f6f5fa;
      border: none;
      padding-left: 40px;
      font-size: 20px;
      :focus {
        outline: none;
      }
      ::placeholder {
        font-family: Poppins;
        font-size: 20px;
      }
    }
    .email-fail-msg {
      display: flex;
      justify-content: center;
      color: red;
      font-size: 20px;
      margin-top: 40px;
      line-height: 2rem;
    }
    .email-success-msg {
      color: #1d733d;
      margin-left: 15%;
      font-size: 15px;
      margin-top: 40px;
      margin-right: 14%;
      line-height: 2rem;
    }
    .emailSuccessBtnMsg {
      color: #1d733d;
      display: flex;
      justify-content: center;
      font-size: 15px;
      margin-top: 40px;
      margin-right: 40px;
      line-height: 2rem;
      @media (max-width: ${tabScreenWidth}) {
        margin-right: 0px;
      }
    }
    .BtnLink {
      display: flex;
      justify-content: center;
      text-decoration: none;
    }
    .LinkBtn {
      border-radius: 8%;
      background: black;
      color: white;
      height: 35px;
      width: 147px;
      cursor: pointer;
      margin-right: 20px;
      @media (max-width: ${tabScreenWidth}) {
        margin-right: 0px;
      }
    }
    .timerMsg {
      color: #1d733d;
      display: flex;
      justify-content: center;
      margin-right: 40px;
      font-size: 15px;
      margin-top: 40px;
      line-height: 2rem;
      @media (max-width: ${tabScreenWidth}) {
        margin-right: 0px;
      }
    }
    .timer {
      color: #333;
      margin-left: 5px;
      margin-right: 5px;
    }
    @media (max-width: ${tabScreenWidth}) {
      .email-success-msg {
        width: 75%;
      }
      .email-fail-msg {
        width: 75%;
        margin-left: 12%;
      }
    }
    .submit-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4%;
      margin-left: 3%;
      background: #ef4f4f;
      width: 450px;
      height: 70px;
      border-radius: 20px;
      font-family: Poppins sans-serif;
      font-size: 20px;
      border: none;
      color: #fffdfd;
      font-weight: bolder;
      cursor: pointer;
    }
    @media (max-width: ${tabScreenWidth}) {
      .login-email-input {
        width: 300px;
        height: 40px;
        font-size: 15px;
        ::placeholder {
          font-size: 10px;
        }
      }
      .submit-button {
        width: 300px;
        height: 40px;
        font-size: 15px;
      }
    }
  }
  .passport-image {
    width: 50vw;
    height: 100vh;
    overflow: hidden;
  }
  @media (max-width: ${tabScreenWidth}) {
    .passport-image {
      width: 0;
    }
  }
`;

export const Loader = css`
  position: absolute;
  display: flex;
  left: 25%;
  top: 40%;
  justify-content: center;
  align-items: center;
  @media (max-width: ${tabScreenWidth}) {
    left: 45%;
  }
`;
