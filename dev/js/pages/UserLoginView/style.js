import { css } from '@emotion/css';

export const style = (props) => css`
  min-height: 100vh;
  display: flex;
  .container {
    width: 50vw;
    .keel-logo {
      position: absolute;
      margin-top: 30px;
      margin-left: 40px;
    }
    .header-text {
      position: absolute;
      left: 280px;
      top: 130px;
      font-family: Poppins;
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
      left: 195px;
      top: 255px;
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
    input[type='password'] {
      position: absolute;
      width: 450px;
      height: 70px;
      left: 195px;
      top: 335px;
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
      left: 195px;
      top: 455px;
      border-radius: 20px;
      font-family: Poppins sans-serif;
      font-size: 20px;
      border: none;
      color: #fffdfd;
      font-weight: bolder;
      cursor: pointer;
    }
    .password-reset {
      position: absolute;
      left: 185px;
      top: 530px;
      font-size: medium;
      font-family: Poppins;
      margin-left: 95px;
      color: #959595;
    }
    .login-divider {
      position: absolute;
      top: 590px;
      left: 190px;
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
      top: 645px;
      width: 100px;
      height: 70px;
      left: 195px;
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
      top: 645px;
      width: 100px;
      height: 70px;
      left: 530px;
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
      top: 760px;
      left: 190px;
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
      left: 195px;
      top: 835px;
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
  .passport-image {
    width: 50vw;
  }
`;

export const googleButtonStyle = {
  position: 'absolute',
  top: '645px',
  width: '100px',
  height: '70px',
  left: '360px',
  background: '#4285F4',
  borderRadius: '10px',
  color: '#FFFFFF',
  border: 'none',
  fontSize: '40px',
  cursor: 'pointer',
};
