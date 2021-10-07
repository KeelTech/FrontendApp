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
  .info{
    cursor: pointer;
    margin-top: 20px;
    font-size: 18px;
    line-height: 27px;
    color: #363B64;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 8px #d8dce4;
    border-radius: 4px;
    padding: 8px;
    background: #FFF;
  }
  .taskSch {
    display: flex;
    justify-content: space-around;
  }
  .taskName{
    display: flex;
    align-items: self-end;
    margin-bottom: 5px;
    img{
        height: 12px;
        width: 12px;
        margin-right: 8px;
        margin-top: 3px;
    }
    span{
        font-size: 10px;
        line-height: 15px;
        color: #A098AE;
    }
  }
`;

export const calendarSelected = css`
  width: 100%;
  position: relative;  
  margin: 0px;
  &:after{
      content:'';
      position: absolute;
      background: blue;
      width: 10px;
      height: 10px;
      display: flex;
      border-radius: 100%;
      justify-content: center;
      top: 2px;
      right: 10px;
    }
`
