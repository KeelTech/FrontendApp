import { css } from "@emotion/css";
import { primaryFont } from "@constants";

export const container = css`
  background-color: #f5f7fa;
  width: 100%;
  position: relative;
  border: 1px solid #363b64;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: ${primaryFont};
    position: absolute;
    margin: 0px 20%;
    top: 68%;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #363b64;
  }
`;
