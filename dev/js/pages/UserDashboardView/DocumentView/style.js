import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const body = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .mainView {
    width: 100%;
  }
  .notification {
    display: flex;
    margin-left: 25%;
  }
  .user-info {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1em;
    margin-left: 4%;
  }
  .user-name {
    font-size: 15px;
    font-weight: 300;
  }
  .user-package {
    font-size: 11px;
    color: #a098ae;
  }
  .user {
    margin-right: 10px;
    height: 40px;
    background: grey;
    width: 35px;
    border-radius: 10px;
  }
  .upload-section {
    display: flex;
  }
  .uploaded-by {
    display: flex;
    margin-left: 5%;
  }
  .upload-text {
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;
  }
  .options-menu {
    border-radius: 10px;
    width: 130px;
    height: 32px;
    padding-left: 10px;
    font-size: 17px;
    margin-left: 10px;
    border: none;
  }
  .search-docs-wrapper {
    display: flex;
    margin-left: 30%;
  }
  .search-icon {
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;
  }

  .search-docs {
    border-radius: 15px;
    width: 280px;
    height: 48px;
    background: #fcfcfc;
    border: none;
  }
  .search-docs::placeholder {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 27px;
    padding-left: 20%;
  }
  .upload-docs {
    display: flex;
    margin-left: 3%;
  }
  .upload-button {
    border-radius: 15px;
    width: 250px;
    height: 48px;
    background: #363b64;
    color: #ffff;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    padding-right: 28px;
  }
  .upload-icon {
    position: absolute;
    margin-left: 205px;
    margin-top: 10px;
  }
  .uploaded-docs-wrapper {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-left: 4%;
    margin-top: 5%;
  }
`;
