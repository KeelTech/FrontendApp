import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const Background = css`
  left: 54%;
  top: 18%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
  box-shadow: 0 5px 16px rgb(0 0 0 / 20%);
  .ModalWrapper {
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 16px rgb(0 0 0 / 20%);
    background: #fffefe;
    color: #000;
    display: flex;
    position: relative;
    z-index: 10;
    border-radius: 10px;
  }
  .ModalContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    h3 {
      font-size: 16px;
      padding: 20px 20px;
      line-height: 1.5rem;
      font-family: 'Poppins';
    }
    button {
      padding: 10px 24px;
      background: #141414;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
`;
