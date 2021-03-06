import { css } from "@emotion/css";
import { primaryFont } from "@constants";

export const container = css`
  background-color: #f5f7fa;
  width: 100%;
  height: 100%;
  position: relative;
  // border: 1px solid #4267b2;
  box-sizing: border-box;
  // border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background: white;
    border-radius: 4px;
  span {
    font-family: ${primaryFont};
    display:none;
    position: relative;
    margin: 10px 20px;
    // top: 68%;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #363b64;
  }
`;
