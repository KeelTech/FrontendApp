import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';
import { primaryFont } from '@constants';

export const wrapper = css`
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  margin-left: inherit;
  margin-top: inherit;
  margin-right: 60px;
  background: #fcfcfc;
  box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  border-radius: 14px;
  @media (max-width: ${tabScreenWidth}) {
    margin-right: 30px;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .title {
    justify-content: flex-start;
    width: 100%;
    padding-left: 20px;
    margin-bottom: 0px;
    font-family: ${primaryFont};
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    line-height: 27px;
    color: #363b64;
  }
  @media (max-width: ${tabScreenWidth}) {
    .title {
      font-size: 10px;
    }
  }
  .dotMenu {
    margin-top: 20px;
    justify-content: flex-end;
    margin-right: 15px;
    cursor: pointer;
    border: none;
    background: none;
  }
  @media (max-width: ${tabScreenWidth}) {
    .dotMenu {
      margin-top: 20px;
    }
  }
  .modalHeaderText {
    font-size: 16px;
    padding: 20px 20px;
    line-height: 1.5rem;
    font-family: ${primaryFont};
  }
  .date {
    justify-content: flex-start;
    padding-left: 25px;
    font-size: 10px;
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #a098ae;
  }
  @media (max-width: ${tabScreenWidth}) {
    .date {
      padding-left: 20px;
    }
  }
  .docButton {
    display: flex;
    margin-left: 15px;
    border: none;
    background: none;
    cursor: pointer;
    color: red;
    :hover {
      text-decoration: underline;
      color: black;
    }
  }
  .docIcon {
    margin-top: 5%;
    margin-right: 5%;
  }
  .pdfTitle {
    margin-top: 7%;
  }
`;
