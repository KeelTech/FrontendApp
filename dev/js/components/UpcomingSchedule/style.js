import { css } from "@emotion/css";
import { mobileScreenWidth } from "@constants";
import { primaryFont } from "@constants";

export const upcoming = css`
font-weight: bold;
font-size: 16px;
font-family: inherit;
line-height: 24px;
color: #ffffff;
background: rgb(34, 193, 195);
background: linear-gradient( 
38deg
, rgba(34, 193, 195, 1) 0%, rgba(66, 103, 178, 1) 100%);
border: 1px solid #c7c7c5;
border-radius: 4px;
padding: 8px 0px;
width: 100%;
text-align: center;
box-shadow: 2px 2px 8px #d8dce4;
  .calendar {
    width: 100%;
    padding-top: 30px;
  }
  @media (max-width: ${mobileScreenWidth}) {
    background: rgb(34, 193, 195);
background: linear-gradient( 
38deg
, rgba(34, 193, 195, 1) 0%, rgba(66, 103, 178, 1) 100%);
border: 1px solid #c7c7c5;
    text-align:  center;
    font-size: 14px;
    line-height: 24px;
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
    background: white;
    box-shadow: 2px 2px 8px #d8dce4;
    border-radius: 4px;
    border: 1px solid #e0dfdc;
    padding: 10px 12px;
  }
  .message {
    font-size: 14px;
    font-weight:400;
    line-height: 20px;
    color: #363b64;
    font-family: ${primaryFont};
  }
  .time {
    display: flex;
    margin-top: 10px;
    img {
      width: 16px;
      height: 16px;
      float: left;
      margin-right: 4px;
    }

    span {
      font-size: 12px;
      color: #4267B2;
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
