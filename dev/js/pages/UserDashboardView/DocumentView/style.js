import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';
import { primaryFont } from '@constants';

export const body = css`
  background: rgba(252, 252, 252, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  .mainView {
    width: 100%;
    background: rgba(252, 252, 252, 0.5);
  }
  .headerView {
    display: flex;
    align-items: center;
  }
  .uploadSection {
    display: flex;
    justify-content: space-between;
    height: 40px;
  }
  .uploadText {
    font-size: 25px;
    line-height: 2.5rem;
    font-family: ${primaryFont};
  }
  .uploadedBy {
    display: flex;
    margin-left: 75px;
  }
  .optionsMenu {
    border-radius: 10px;
    width: 130px;
    padding-left: 10px;
    font-size: 14px;
    margin-left: 15px;
    border: none;
    outline: none;
  }
  .searchUploadWrapper {
    display: flex;
    margin-right: 50px;
  }
  .searchDocsWrapper {
    display: flex;
  }
  .searchDocs {
    border-radius: 15px;
    width: 280px;
    background: #fcfcfc;
    border: none;
    padding-left: 5%;
    outline: none;
  }
  .searchDocs::placeholder {
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 27px;
  }
  .uploadButton {
    border-radius: 15px;
    margin-left: 5%;
    width: 280px;
    background: #363b64;
    cursor: pointer;
    color: #ffff;
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: ${tabScreenWidth}) {
    .uploadSection {
      flex-direction: column-reverse;
      align-items: center;
      margin-top: 30%;
    }
    .uploadText {
      font-size: 17px;
    }
    .optionsMenu {
      margin-top: 10px;
      height: 17px;
    }
    .searchUploadWrapper {
      display: flex;
      flex-direction: column-reverse;
      width: 109%;
    }
    .searchDocsWrapper {
      margin-top: 5%;
      width: 100%;
    }
    .searchDocs {
      padding: 7px 10px;
      border-radius: 10px;
      width: 100%;
      margin-left: 8%;
      margin-top: 10%;
    }
    .uploadedBy {
      width: 100%;
      margin-left: 5%;
    }
    .searchDocs::placeholder {
      font-size: 15px;
    }
    .uploadButton {
      font-size: 14px;
      background: #363b64;
      border-radius: 10px;
      width: 40%;
      margin-left: 35%;
    }
  }
  .uploadedDocsWrapper {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-left: 4%;
    margin-top: 5%;
  }
  @media (max-width: ${tabScreenWidth}) {
    .uploadedDocsWrapper {
      grid-template-columns: 50% 50%;
      margin-top: 2%;
      margin-left: 1%;
    }
  }
  .noDocsHeader {
    position: absolute;
    left: 30%;
    @media (max-width: ${tabScreenWidth}) {
      left: 5%;
    }
  }
`;

export const loaderModalView = css`
  position: absolute;
  display: flex;
  left: 57%;
  top: 34%;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media (max-width: ${tabScreenWidth}) {
    left: 20%;
    top: 20%;
  }
`;

export const fileUploadModal = css`
  position: absolute;
  display: flex;
  left: 50%;
  top: 20%;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media (max-width: ${tabScreenWidth}) {
  }
`;
