import { css } from '@emotion/css';

export const style = (props) => css`
  min-height: 100vh;
  display: flex;
  .passport-image {
    position: relative;
    width: 50vw;
    .bg-image {
      position: absolute;
      width: 50vw;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .logo {
      position: absolute;
      margin-top: 30px;
      margin-left: 40px;
      z-index: 3;
    }
  }
  .container {
    width: 50vw;
    font-family: Poppins;
    .header-text {
      position: absolute;
      right: 280px;
      top: 110px;
      font-size: 28px;
      line-height: 27px;
      letter-spacing: 0.05em;
      color: #181818;
      font-weight: 700;
    }
    input[type='email'] {
      position: absolute;
      width: 450px;
      height: 70px;
      right: 195px;
      top: 235px;
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
    .password-field {
      position: absolute;
      width: 450px;
      height: 70px;
      right: 195px;
      top: 315px;
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
    .confirm-password-field {
      position: absolute;
      width: 450px;
      height: 70px;
      right: 195px;
      top: 395px;
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
    .log-in-button {
      position: absolute;
      background: #ef4f4f;
      width: 450px;
      height: 70px;
      right: 170px;
      top: 515px;
      border-radius: 20px;
      font-family: Poppins sans-serif;
      font-size: 20px;
      border: none;
      color: #fffdfd;
      font-weight: bolder;
      cursor: pointer;
    }
    .password-validation {
      position: absolute;
      right: 485px;
      top: 455px;
      font-family: Poppins sans-serif;
      font-size: 15px;
      color: #ef4f4f;
    }
    .login-divider {
      position: absolute;
      top: 650px;
      right: 190px;
      width: 25%;
      color: #959595;
      text-align: center;
      border-bottom: 1px solid #000;
      line-height: 0.1em;
      margin: 10px 0 20px;
      font-size: 25px;
      font-family: Poppins;
    }
    .login-divider span {
      background: #fff;
      padding: 0 10px;
    }
    .facebook-button {
      position: absolute;
      top: 705px;
      width: 100px;
      height: 70px;
      right: 175px;
      background: #4267b2;
      border-radius: 10px;
      color: #ffffff;
      border: none;
      font-size: 40px;
      cursor: pointer;
      font-family: Poppins;
    }
    .linkedin-button {
      position: absolute;
      top: 705px;
      width: 100px;
      height: 70px;
      right: 510px;
      background: #0077b5;
      border-radius: 10px;
      color: #ffffff;
      border: none;
      font-size: 40px;
      cursor: pointer;
      font-weight: 900;
    }
    .signup-divider {
      position: absolute;
      top: 820px;
      right: 190px;
      width: 25%;
      text-align: center;
      border-bottom: 1px solid #000;
      line-height: 0.1em;
      margin: 10px 0 20px;
      font-size: 25px;
      font-family: Poppins;
      color: #959595;
    }
    .signup-divider span {
      background: #fff;
      padding: 0 10px;
    }
    .sign-up-button {
      position: absolute;
      background: #fffdfd;
      width: 450px;
      height: 70px;
      right: 170px;
      top: 895px;
      border-radius: 20px;
      border: 1px solid #ef4f4f;
      font-family: Poppins sans-serif;
      font-size: 20px;
      color: #ef4f4f;
      font-weight: bolder;
      line-height: 22px;
      cursor: pointer;
    }
  }
`;

export const googleButtonStyle = {
  position: 'absolute',
  top: '705px',
  width: '100px',
  height: '70px',
  right: '340px',
  background: '#4285F4',
  borderRadius: '10px',
  color: '#FFFFFF',
  border: 'none',
  fontSize: '40px',
  cursor: 'pointer',
};
