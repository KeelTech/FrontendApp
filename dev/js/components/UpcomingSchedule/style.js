import { css } from "@emotion/css";
import { mobileScreenWidth } from "@constants";
import { primaryFont } from "@constants";

export const upcoming = css`
  font-weight: bold;
  font-size: 18px;
  font-family: ${primaryFont};
  line-height: 27px;
  color: #363b64;
  background: #fcfcfc;
  border-radius: 14px;
  padding: 12px 0px;
  width: 100%;
  box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  text-align: center;
  .calendar {
    width: 100%;
    padding-top: 30px;
  }
  @media (max-width: ${mobileScreenWidth}) {
    display: inline;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    background: inherit;
    border-radius: 0;
  }
`;

export const schedule = css`
  ul {
    margin: 20px 0px;
    padding: 0;
    list-style: none;
  }
  li {
    margin-bottom: 10px;
    background: #fcfcfc;
    box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    border-radius: 20px;
    padding: 10px 32px;
  }
  .message {
    font-size: 16px;
    line-height: 20px;
    color: #363b64;
    font-family: ${primaryFont};
  }
  .time {
    margin-top: 6px;
    img {
      width: 16px;
      height: 16px;
      float: left;
      margin-right: 4px;
    }

    span {
      font-size: 12px;
      color: #a098ae;
      position: relative;
      top: -2px;
      font-family: ${primaryFont};
    }
  }
  @media(max-width: ${mobileScreenWidth}){
    li {
      padding: 10px 16px;
    }

      .message {
        font-size: 12px;
        line-height: 18px;
      }
      .time {
        margin-top: 2px;
        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
        }
        span {
          font-size: 10px;
          line-height: 15px;
          top: -4px;
        }
  }
`;
