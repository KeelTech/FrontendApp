import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const wrapper = css`
  background: #fcfcfc;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 1px;
  margin-left: inherit;
  margin-top: inherit;
  margin-right: 60px;
  background: #fcfcfc;
  box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  border-radius: 14px;
  .title {
    grid-column: 1/2;
    padding-left: 20px;
    margin-bottom: 0px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    line-height: 27px;
    color: #363b64;
  }
  .dotMenu {
    margin-top: 26px;
    justify-self: end;
    margin-right: 15px;
  }
  .date {
    grid-column: 1/4;
    padding-left: 25px;
    font-size: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #a098ae;
  }
  button {
    cursor: pointer;
  }
  a {
    margin-left: 14%;
    margin-bottom: 9%;
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
