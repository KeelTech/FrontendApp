import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const style = (props) => css`
.loginRightImg{
  background-image:url('../assets/images/Login/login.png');
  background-size:cover;
  height: 100%;
}
height:100%;
  // min-height: 100vh;
  // display: flex;
  // overflow: hidden;
  // .passport-image {
  //   width: 50vw;
  //   height: 100vh;
  //   overflow: hidden;
  // }
  // @media (max-width: ${tabScreenWidth}) {
  //   .passport-image {
  //     width: 0vw;
  //   }
  // }
  // .container {
  //   width: 50vw;
  //   @media (max-width: ${tabScreenWidth}) {
  //     width: 100vw;
  //   }
  //   .logo {
  //     margin-top: 30px;
  //     margin-left: 40px;
  //     cursor: pointer;
  //     @media (max-width: ${tabScreenWidth}) {
  //       max-width: 120px;
  //     }
  //   }
  //   .header-text {
  //     display: flex;
  //     justify-content: center;
  //     font-size: 28px;
  //     line-height: 27px;
  //     letter-spacing: 0.05em;
  //     color: #181818;
  //     font-weight: 700;
  //   }
  //   @media (max-width: ${tabScreenWidth}) {
  //     .header-text {
  //       font-size: 20px;
  //     }
  //   }
  //   .form-wrapper {
  //     display: flex;
  //     justify-content: center;
  //     flex-direction: column;
  //     align-items: center;
  //     margin-top: 5%;
  //   }
  //   input[type='email'] {
  //     display: flex;
  //     justify-content: center;
  //     margin-top: 4%;
  //     margin-bottom: 1%;
  //     width: 450px;
  //     height: 70px;
  //     background: #f6f5fa;
  //     border-radius: 20px;
  //     border-color: #f6f5fa;
  //     border: none;
  //     padding-left: 40px;
  //     font-size: 20px;
  //     :focus {
  //       outline: none;
  //     }
  //     ::placeholder {
  //       font-family: Poppins;
  //       font-size: 20px;
  //     }
  //   }
  //   .password-field {
  //     display: flex;
  //     justify-content: center;
  //     width: 450px;
  //     height: 70px;
  //     background: #f6f5fa;
  //     margin-bottom: 1%;
  //     border-radius: 20px;
  //     border-color: #f6f5fa;
  //     border: none;
  //     font-size: 20px;
  //     padding-left: 40px;
  //     :focus {
  //       outline: none;
  //     }
  //     ::placeholder {
  //       font-family: Poppins;
  //       font-size: 20px;
  //     }
  //   }
  //   .confirm-password-field {
  //     display: flex;
  //     justify-content: center;
  //     width: 450px;
  //     height: 70px;
  //     background: #f6f5fa;
  //     border-radius: 20px;
  //     border-color: #f6f5fa;
  //     border: none;
  //     font-size: 20px;
  //     padding-left: 40px;
  //     :focus {
  //       outline: none;
  //     }
  //     ::placeholder {
  //       font-family: Poppins;
  //       font-size: 20px;
  //     }
  //   }
  //   .log-in-button {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     margin-top: 4%;
  //     margin-left: 3%;
  //     background: #ef4f4f;
  //     width: 450px;
  //     height: 70px;
  //     border-radius: 20px;
  //     font-family: Poppins sans-serif;
  //     font-size: 20px;
  //     border: none;
  //     color: #fffdfd;
  //     font-weight: bolder;
  //     cursor: pointer;
  //   }
  //   @media (max-width: ${tabScreenWidth}) {
  //     input[type='email'] {
  //       width: 300px;
  //       height: 40px;
  //       font-size: 15px;
  //       ::placeholder {
  //         font-size: 10px;
  //       }
  //     }
  //     input[type='password'] {
  //       width: 300px;
  //       height: 40px;
  //       font-size: 15px;
  //       ::placeholder {
  //         font-size: 10px;
  //       }
  //     }
  //     .log-in-button {
  //       width: 300px;
  //       height: 40px;
  //       font-size: 15px;
  //     }
  //   }
  //   .password-validation {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     margin-right: 30%;
  //     font-family: Poppins sans-serif;
  //     font-size: 15px;
  //     color: #ef4f4f;
  //   }
  //   @media (max-width: ${tabScreenWidth}) {
  //     .password-validation {
  //       font-size: 14px;
  //     }
  //   }
  //   .login-divider {
  //     width: 50%;
  //     color: #959595;
  //     text-align: center;
  //     border-bottom: 1px solid #000;
  //     line-height: 0.1em;
  //     margin-top: 5%;
  //     margin-left: 25%;
  //     font-size: 15px;
  //     font-family: Poppins;
  //   }
  //   .login-divider span {
  //     background: #fff;
  //     padding: 0 10px;
  //   }
  //   @media (max-width: ${tabScreenWidth}) {
  //     .login-divider {
  //       width: 50%;
  //       font-size: 10px;
  //     }
  //   }
  //   .social-button-wrapper {
  //     display: flex;
  //     margin-top: 3%;
  //     justify-content: center;
  //     @media (max-width: ${tabScreenWidth}) {
  //       justify-content: space-evenly;
  //     }
  //   }
  //   .google-button {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     width: 100px;
  //     height: 70px;
  //     background: #ffffff;
  //     border-radius: 10px;
  //     color: #ffffff;
  //     border-color: #f6f5fa;
  //     font-size: 40px;
  //     cursor: pointer;
  //     margin-right: 60px;
  //     margin-left: 25px;
  //     transition: 0.5s;
  //     :hover {
  //       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  //         0 6px 20px 0 rgba(0, 0, 0, 0.19);
  //     }
  //   }
  //   .google-button-image {
  //     height: 70%;
  //   }
  //   .facebook-button {
  //     width: 100px;
  //     height: 70px;
  //     background: #4267b2;
  //     border-radius: 10px;
  //     color: #ffffff;
  //     border: none;
  //     font-size: 40px;
  //     cursor: pointer;
  //     font-family: Poppins;
  //     transition: 0.5s;
  //     margin-left: 75px;
  //     :hover {
  //       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  //         0 6px 20px 0 rgba(0, 0, 0, 0.19);
  //     }
  //   }
  //   /* .linkedin-button {
  //     width: 100px;
  //     height: 70px;
  //     background: #0077b5;
  //     border-radius: 10px;
  //     color: #ffffff;
  //     border: none;
  //     font-size: 40px;
  //     cursor: pointer;
  //     font-weight: 900;
  //     margin-right: 130px;
  //     transition: 0.5s;
  //     :hover {
  //       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  //         0 6px 20px 0 rgba(0, 0, 0, 0.19);
  //     }
  //   } */
  //   @media (max-width: ${tabScreenWidth}) {
  //     .google-button {
  //       font-size: 20px;
  //       height: 40px;
  //       width: 60px;
  //       margin-right: 0px;
  //       margin-left: 35px;
  //     }
  //     .facebook-button {
  //       font-size: 30px;
  //       height: 40px;
  //       width: 60px;
  //       margin-left: 0px;
  //       margin-right: 35px;
  //     }
  //     /* .linkedin-button {
  //       font-size: 30px;
  //       height: 40px;
  //       width: 60px;
  //     } */
  //   }
  //   .signup-divider {
  //     width: 50%;
  //     text-align: center;
  //     border-bottom: 1px solid #000;
  //     line-height: 0.1em;
  //     margin-left: 25%;
  //     margin-top: 5%;
  //     font-size: 15px;
  //     font-family: Poppins;
  //     color: #959595;
  //   }
  //   .signup-divider span {
  //     background: #fff;
  //     padding: 0 10px;
  //   }
  //   @media (max-width: ${tabScreenWidth}) {
  //     .signup-divider {
  //       width: 50%;
  //       font-size: 10px;
  //     }
  //   }
  //   .signup-button-wrapper {
  //     display: flex;
  //     justify-content: center;
  //     text-decoration: none;
  //   }
  //   .sign-up-button {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     background: #fffdfd;
  //     width: 450px;
  //     height: 70px;
  //     margin-top: 4%;
  //     margin-left: 3%;
  //     border-radius: 20px;
  //     border: 1px solid #ef4f4f;
  //     font-family: Poppins sans-serif;
  //     font-size: 20px;
  //     color: #ef4f4f;
  //     font-weight: bolder;
  //     line-height: 22px;
  //     cursor: pointer;
  //     transition: 0.5s;
  //     :hover {
  //       opacity: 1;
  //       background: #ef4f4f;
  //       color: #fffdfd;
  //       font-weight: bolder;
  //     }
  //   }
  //   @media (max-width: ${tabScreenWidth}) {
  //     .sign-up-button {
  //       width: 300px;
  //       height: 40px;
  //     }
  //   }
  // }
`;

export const Loader = css`
  position: absolute;
  display: flex;
  left: 72%;
  top: 40%;
  justify-content: center;
  align-items: center;
  @media (max-width: ${tabScreenWidth}) {
    left: 45%;
  }
`;
