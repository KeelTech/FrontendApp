import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

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
    justify-content: space-around;
    height: 40px;
  }
  .uploadText {
    font-size: 25px;
    line-height: 2.5rem;
    font-family: Poppins;
  }
  .uploadedBy {
    display: flex;
  }
  .optionsMenu {
    border-radius: 10px;
    width: 130px;
    padding-left: 10px;
    font-size: 14px;
    margin-left: 15px;
    border: none;
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
  }
  .searchDocs::placeholder {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 27px;
  }
  .uploadButton {
    border-radius: 15px;
    margin-left: 5%;
    width: 250px;
    background: #363b64;
    cursor: pointer;
    color: #ffff;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: ${tabScreenWidth}) {
    .uploadSection {
      flex-direction: column;
      align-items: center;
      margin-top: 17%;
    }
    .uploadText {
      font-size: 17px;
    }
    .optionsMenu {
      margin-top: 10px;
      height: 17px;
    }
    .searchDocsWrapper {
      margin-top: 5%;
    }
    .searchDocs::placeholder {
      font-size: 10px;
    }
    .uploadButton {
      margin-top: 5%;
      font-size: 14px;
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
      margin-top: 15%;
    }
  }
`;
