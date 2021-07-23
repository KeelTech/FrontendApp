import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

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
    font-family: Poppins;
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
    margin-top: 26px;
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
    font-family: 'Poppins';
  }
  .date {
    justify-content: flex-start;
    padding-left: 25px;
    font-size: 10px;
    font-family: Poppins;
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
  a {
    justify-content: flex-start;
    margin-left: 7%;
    margin-bottom: 9%;
  }
  @media (max-width: ${tabScreenWidth}) {
    a {
      margin-left: 20%;
    }
  }
`;

// export const menuBar = css`
//   position: absolute;
//   z-index: 1;
//   padding: 6px;
//   background: #363b64;
//   border-radius: 5px;
//   @media (max-width: ${tabScreenWidth}) {
//     margin-left: 50px;
//     margin-top: 25px;
//   }
//   span {
//     display: block;
//     font-weight: 600;
//     font-size: 12px;
//     line-height: 18px;
//     color: #fffdfd;
//     border-bottom: 1px solid #a098ae;
//     padding: 1px 0px;
//     cursor: pointer;
//     &:last-child {
//       border: 0px;
//     }
//   }
//   &:after {
//     content: '';
//     width: 0;
//     height: 0;
//     position: absolute;
//     top: -8px;
//     right: 14px;
//     border-left: 6px solid transparent;
//     border-right: 6px solid transparent;
//     border-bottom: 10px solid #363b64;
//   }
// `;
