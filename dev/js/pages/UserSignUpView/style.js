import { css } from '@emotion/css';

export const style = (props) => css`
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  .passport-image {
    position: relative;
    width: 50vw;
    overflow: hidden;
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
      top: 90px;
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
      top: 215px;
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
      top: 295px;
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
      top: 375px;
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
      top: 495px;
      border-radius: 20px;
      font-family: Poppins sans-serif;
      font-size: 20px;
      border: none;
      color: #fffdfd;
      font-weight: bolder;
      cursor: pointer;
      opacity: 0.6;
       transition: 0.5s;
       :hover{
         opacity: 1;
         background: #ef4f4f;
       }
    }
    .password-validation {
      position: absolute;
      right: 485px;
      top: 435px;
      font-family: Poppins sans-serif;
      font-size: 15px;
      color: #ef4f4f;
    }
    .login-divider {
      position: absolute;
      top: 630px;
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
      top: 685px;
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
      transition: 0.5s;
      :hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
    .linkedin-button {
      position: absolute;
      top: 685px;
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
      transition: 0.5s;
      :hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
    .signup-divider {
      position: absolute;
      top: 800px;
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
      top: 875px;
      border-radius: 20px;
      border: 1px solid #ef4f4f;
      font-family: Poppins sans-serif;
      font-size: 20px;
      color: #ef4f4f;
      font-weight: bolder;
      line-height: 22px;
      cursor: pointer;
      transition: 0.5s;
       :hover{
        opacity: 1;
        background: #ef4f4f;
        color: #fffdfd;
        font-weight: bolder;
       }
    }
  }
`;

export const googleButtonStyle = {
  position: 'absolute',
  top: '685px',
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
