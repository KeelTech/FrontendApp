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
      color: red;
      font-size: 15px;
    }
    .email-success-msg {
      display: flex;
      color: green;
      font-size: 15px;
    }
    @media (max-width: ${tabScreenWidth}) {
      .email-success-msg {
        font-size: 12px;
        width: 70%;
        line-height: 1rem;
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
