import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const wrapper = css`
  background: #fcfcfc;
  width: 280px;
  height: 230px;
  box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  border-radius: 14px;
  margin-left: 5%;
  margin-top: 5%;
  .header {
    position: relative;
    /* top: 20px; */
    left: 25px;
    font-family: Poppins;
    font-weight: 900;
    font-size: 18px;
    line-height: 27px;
    color: #363b64;
  }
  .date {
    position: relative;
    left: 25px;
    font-family: Poppins;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #a098ae;
  }
  .content {
    margin-left: 8%;
    width: 235px;
    height: 100px;
    background: rgba(54, 59, 100, 0.1);
    border-radius: 8px;
  }
`;
