import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const style = css`
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
    .form-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 5%;
    }
    input {
      margin-top: 4%;
      display: flex;
      justify-content: center;
      width: 450px;
      height: 70px;
      background: #f6f5fa;
      border-radius: 20px;
      border-color: #f6f5fa;
      border: none;
      font-size: 20px;
      padding-left: 40px;
      :focus {
        outline: none;
      }
      ::placeholder {
        font-family: Poppins;
        font-size: 20px;
      }
    }
    @media (max-width: ${tabScreenWidth}) {
      input {
        width: 300px;
        height: 40px;
        font-size: 15px;
        ::placeholder {
          font-size: 10px;
        }
      }
    }
    .password-match {
      display: flex;
      font-family: Poppins sans-serif;
      font-size: 15px;
      color: #ef4f4f;
    }
    .password-success {
      display: flex;
      font-family: Poppins sans-serif;
      font-size: 15px;
      color: green;
    }
    @media (max-width: ${tabScreenWidth}) {
      .password-match {
        font-size: 14px;
      }
      .password-success {
        font-size: 14px;
        width: 70%;
      }
    }
    .reset-pass-button {
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
      .reset-pass-button {
        width: 300px;
        height: 40px;
        font-size: 15px;
      }
    }
  }
  .globe-image {
    width: 50vw;
    height: 100vh;
    overflow: hidden;
  }
  @media (max-width: ${tabScreenWidth}) {
    .globe-image {
      width: 0;
    }
  }
`;
