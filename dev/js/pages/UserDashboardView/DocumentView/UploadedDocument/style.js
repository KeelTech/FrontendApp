import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const wrapper = css`
  background: #fcfcfc;
  width: 280px;
  height: 200px;
  box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  border-radius: 14px;
  margin-left: 5%;
  margin-top: 5%;
  overflow: hidden;
  .header {
    display: flex;
  }
  .title {
    position: absolute;
    margin-left: 20px;
    font-family: Poppins;
    font-style: bold;
    font-weight: 900;
    font-size: 25px;
    line-height: 27px;
    color: #363b64;
  }
  .dotMenu {
    position: absolute;
    margin-left: 13%;
    margin-top: 36px;
    cursor: pointer;
    height: 9px;
  }
  .date {
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    margin-top: 45px;
  }
  .date p {
    font-family: Poppins;
    font-weight: 600;
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

export const menuBar = css`
  position: absolute;
  margin-top: 55px;
  margin-left: 199px;
  z-index: 1;
  padding: 6px;
  background: #363b64;
  border-radius: 5px;
  span {
    display: block;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #fffdfd;
    border-bottom: 1px solid #a098ae;
    padding: 1px 0px;
    cursor: pointer;
    &:last-child {
      border: 0px;
    }
  }
  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    right: 14px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 10px solid #363b64;
  }
`;
