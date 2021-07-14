import { css } from "@emotion/css";
import { mobileScreenWidth } from "@constants";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 40px;
  width: 37px;
  position: relative;
  background: #fcfcfc;
  box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  border-radius: 10px;
  img {
    width: 13px;
    height: 18px;
  }
  &:after {
    content: "";
    position: absolute;
    background: #fe9874;
    height: 5px;
    width: 5px;
    right: 8px;
    top: 6px;
    border-radius: 50%;
  }
`;

export const notification = css`
  color: #363b64;
  cursor: default;
  z-index: 99;
  background-color: #fcfcfc;
  position: absolute;
  top: 56px;
  right: -55px;
  width: 400px;
  height: auto;
  box-shadow: -10px 10px 64px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (max-width: ${mobileScreenWidth}) {
    width: 300px;
  }
  &:before {
    content: "";
    position: absolute;
    top: -20px;
    right: 64px;
    border: 10px solid;
    border-color: transparent transparent #fcfcfc transparent;
    border-radius: 1px;
  }
`;

export const header = css`
  display: flex;
  padding: 22px 0;
  margin: 0 22px;
  justify-content: space-between;
  border-bottom: 2px solid #e0e7ff;
  h2 {
    font-size: 16px;
    margin: 0;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: inherit;
  }
`;

export const content = css`
  padding: 0 22px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const content__list = css`
  display: flex;
  justify-content: space-between;
  height: 54px;
  border-bottom: 2px solid #e0e7ff;
  padding-top: 22px;
  &:last-child {
    border-bottom: 0;
  }
  span {
    font-size: 10px;
    vertical-align: top;
    font-weight: 400;
    color: #a098ae;
  }
  @media (max-width: ${mobileScreenWidth}) {
    padding-bottom: 40px;
  }
`;

export const message = css`
  width: 300px;
  img {
    float: left;
    width: 32px;
    height: 16px;
    background-color: #e0e7ff;
    border-radius: 50%;
  }
  p {
    font-size: 14px;
    margin: 0;
    margin-left: 40px;
    font-weight: 400;
  }
  @media (max-width: ${mobileScreenWidth}) {
    width: 180px;
  }
`;
