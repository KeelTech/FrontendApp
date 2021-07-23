import { css } from "@emotion/css";
import { primaryFont, mobileScreenWidth } from "@constants";

export const container = css`
    display: flex;
    overflow-x: hidden;
    min-width: 100vw;
    min-height: 100vh;
    font-family: ${primaryFont};
`;

export const main = css`
  width: 100%;
  background: #FFFFFF;
  `;

export const head = css`
  display: flex;
`;
export const content = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  span {
    color: #363b64;
    margin-top: 50px;
    font-size: 24.0465px;
    line-height: 29px;
  }
  button {
    border: none;
    cursor: pointer;
    padding: 10px 14px;
    background: #212529;
    box-shadow: 0px 11px 28px rgba(191, 21, 108, 0.05);
    border-radius: 10px;
    margin: 0;
    margin-top: 25px;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: #fcfcfc;
  }
  button:hover{
    ${'' /* background: #fcfcfc;
    color: #212529;
    border: 2px solid #212529; */}
    box-shadow: 2px 2px 2px 0px #212529;
  }
  @media (max-width: ${mobileScreenWidth}) {
    top: 15%;
    img {
      width: 264px;
      height: 144px;
    }
    span {
      margin-top: 32px;
      font-size: 16px;
      line-height: 19px;
    }
    button {
      box-shadow: 0px 7px 18px rgba(191, 21, 108, 0.05);
      padding: 6px 8px;
      border-radius: 6px;
      margin-top: 16px;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;
