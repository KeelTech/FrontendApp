import { css } from '@emotion/css';
import { primaryFont } from '@constants';
import { tabScreenWidth } from '@constants';

export const body = css`
  background: rgba(252, 252, 252, 0.5);
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  .head {
    display: flex;
  }
  .basicInfo {
    background: #fcfcfc;
    border-radius: 10px;
    padding: 20px 0px;
    @media (max-width: ${tabScreenWidth}) {
      margin-top: 2%;
    }
  }
  .infoWrapper {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .userImage {
    border-radius: 10px;
    height: 70px;
    width: 70px;
    margin-left: 20px;
  }
  .userInfoHeaderWrapper {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    font-family: Inter;
  }
  .userName {
    margin-bottom: 8px;
    margin-top: 0px;
  }
  .flexWrapper {
    display: flex;
    flex-direction: row;
  }
  .navigationImg {
    height: 15px;
  }
  .visaPackage {
    font-size: 15px;
    margin-bottom: 8px;
    margin-top: 0px;
    margin-left: 5px;
    line-height: 15px;
  }
  .listImg {
    height: 15px;
  }
  .taskDetails {
    margin-top: 0px;
    font-size: 15px;
    line-height: 15px;
    margin-left: 5px;
  }
  .buttonWrapper {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
  }
  .taskButton {
    background: #363b64;
    box-shadow: 0px 11.2949px 28.2373px rgba(191, 21, 108, 0.05);
    border-radius: 5px;
    width: 124px;
    height: 34px;
    padding: 9.03593px 13.5539px;
    color: #fcfcfc;
    cursor: pointer;
    @media (max-width: ${tabScreenWidth}) {
      height: 30px;
      width: 110px;
      font-size: 9px;
    }
  }
  .docButton {
    background: #363b64;
    box-shadow: 0px 11.2949px 28.2373px rgba(191, 21, 108, 0.05);
    border-radius: 5px;
    width: 124px;
    height: 34px;
    padding: 9.03593px 13.5539px;
    color: #fcfcfc;
    cursor: pointer;
    @media (max-width: ${tabScreenWidth}) {
      height: 30px;
      width: 110px;
      font-size: 9px;
    }
  }
  .meetingInfoWrapper {
    background: #fcfcfc;
    border-radius: 10px;
    margin: 16px 0px;
    padding: 16px;
    @media (max-width: ${tabScreenWidth}) {
    }
  }
  .meetingInfoFlexWrapper {
    display: flex;
    flex-direction: row;
    margin-top: 6px;
    @media (max-width: ${tabScreenWidth}) {
      flex-direction: column;
      margin-top: 0px;
    }
  }
  .meetingTextWrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: ${tabScreenWidth}) {
      width: 100%;
    }
  }
  .meetingHeader {
    font-family: Inter;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0px;
    line-height: 15px;
  }
  .meetingDateWrapper {
    display: flex;
    flex-direction: row;
  }
  .calendarImg {
    height: 14px;
    margin-top: 5px;
  }
  .meetingDate {
    font-family: Inter;
    font-weight: 600;
    font-size: 12px;
    margin-top: 5px;
    margin-left: 6px;
    line-height: 15px;
  }
  .meetingBtnWrapper {
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    @media (max-width: ${tabScreenWidth}) {
      margin-left: 20px;
    }
  }
  .joinBtn {
    background: #363b64;
    box-shadow: 0px 11.2949px 28.2373px rgba(191, 21, 108, 0.05);
    border-radius: 5px;
    padding: 9.03593px 13.5539px;
    color: #fcfcfc;
    height: 37px;
    width: 150px;
    margin-top: 2%;
    cursor: pointer;
    @media (max-width: ${tabScreenWidth}) {
      height: 30px;
      width: 110px;
      font-size: 9px;
    }
  }
  .scheduleBtn {
    background: #363b64;
    box-shadow: 0px 11.2949px 28.2373px rgba(191, 21, 108, 0.05);
    border-radius: 5px;
    padding: 9.03593px 13.5539px;
    color: #fcfcfc;
    height: 37px;
    width: 150px;
    margin-top: 2%;
    cursor: pointer;
    @media (max-width: ${tabScreenWidth}) {
      height: 30px;
      width: 110px;
      font-size: 9px;
    }
  }
  .completeInfoWrapper {
    background: #fcfcfc;
    border-radius: 10px;
    margin-top: 2%;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    @media (max-width: ${tabScreenWidth}) {
    }
  }
  .keyWrapper {
    display: flex;
    flex-direction: column;
    width: 30%;
    color: #363b64;
    margin-left: 2%;
    font-weight: 900;
    font-size: 20px;
  }
  .valueWrapper {
    display: flex;
    flex-direction: column;
    font-family: Inter;
    width: 70%;
    font-size: 20px;
  }
`;


export const container = css`
  display: flex;
  .leftWidget{
    width: 60%;
    padding-right: 20px;
  }
  .chat{
    width: 38%;
    max-height: 700px;
  }
  @media(max-width: ${tabScreenWidth}){
    .chat{
        display: none;
    }
    .leftWidget{
      width: 100%;
      padding: 0px 20px;
    }
}
`