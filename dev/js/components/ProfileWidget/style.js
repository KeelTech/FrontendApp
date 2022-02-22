import { css } from "@emotion/css";
import { mobileScreenWidth } from "@constants";

export const container = css`
  background: #dbdbdb;
  position: relative;
  margin-left: 11px;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4267b2;
  border-radius: 4px;
  background: #fcfcfc;
  cursor: pointer;
  display: none;
  @media(min-width: ${mobileScreenWidth}){
    display: block;
  }
`;

export const profile = css`
  color: #363b64;
  cursor: default;
  z-index: 99;
  background-color: #fcfcfc;
  position: absolute;
  top: 56px;
  right: -12px;
  width: 300px;
  height: auto;
  box-shadow: -10px 10px 64px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (max-width: ${mobileScreenWidth}) {
    width: 250px;
  }
  &:before {
    content: "";
    position: absolute;
    top: -20px;
    right: 20px;
    border: 10px solid;
    border-color: transparent transparent #fcfcfc transparent;
    border-radius: 1px;
  }
`;

export const info = css`
  margin: 28px 28px 5px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid #f3f2ef;

  img {
    margin: auto;
    height: 76px;
    width: 76px;
    background: #dbdbdb;
    border-radius: 20px;
  }
  h2 {
    margin: 0;
    margin-top: 14px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    margin-bottom:0px;
  }
  h3 {
    margin: 0;
    margin-bottom: 14px;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    color: #a098ae;
  }
`;

export const links = css`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0 0 0;
  div {
    margin-bottom: 12px;
    cursor:pointer;
    // &:hover{
    //   background:gray;
    // }
  }
  img {
    float: left;
    margin-right: 10px;
  }
  span {
    color: #343A40;
    font-weight: 500;
    font-size: 14px;
  }
`;
