import { css } from "@emotion/css";
import { primaryFont } from "@constants";
import { tabScreenWidth } from "@constants";

export const body = css`
  // background: rgba(252, 252, 252, 0.5);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  @media (max-width: ${tabScreenWidth}) {
    max-height: 100%;
  }
  .head {
    display: flex;
  }
  .basicInfo {
    background: #fcfcfc;
    border-radius: 4px;
    box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    width: 60%;
    margin-left: 3%;
    margin-top: 1%;
    padding-bottom: 10px;
    @media (max-width: ${tabScreenWidth}) {
      margin-top: 16px;
      width: 90%;
    }
  }
  .infoWrapper {
    display: flex;
    flex-direction: row;
    margin-top: 12px;
  }
  ${'' /* .userImage {
    border-radius: 4px;
    height: 55px;
    width: 55px;
    margin-left: 12px;
    @media (max-width: ${tabScreenWidth}) {
      width: 46px;
      height: 46px;
    }
  } */}
  .userInfoHeaderWrapper {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    font-family: ${primaryFont};
  }
  .userName {
    font-weight: 600;
    font-size: 14px;
    color: #3a3f67;
    margin-bottom: 8px;
    margin-top: 0px;
    @media (max-width: ${tabScreenWidth}) {
      font-size: 12px;
      margin-bottom: 2px;
    }
  }
  .flexWrapper {
    display: flex;
    flex-direction: row;
  }
  .tagImg {
    margin-bottom: 4px;
    @media (max-width: ${tabScreenWidth}) {
      margin-bottom: 1px;
    }
  }
  .visaPackage {
    font-size: 12px;
    color: #3a3f67;
    margin-bottom: 4px;
    margin-top: -1px;
    margin-left: 4px;
    @media (max-width: ${tabScreenWidth}) {
      font-size: 10px;
      margin-bottom: 1px;    
      margin-top: 0px;
    }
  }
  .listImg {
    width: 12px;
    height: 12px;
  }
  .taskDetails {
    margin-top: -2.5px;
    font-size: 12px;
    color: #3a3f67;
    margin-left: 4px;
    @media (max-width: ${tabScreenWidth}) {
      font-size: 10px;
      margin-top: -1px;
    }
  }
  .buttonWrapper {
    display: flex;
    flex-direction: row;
    // margin-left: 12px;
    margin-top: 0;
    flex-wrap:wrap;
  }
  .taskButton {
    border: none;
    margin-top: 6px;
    margin-right: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 14px;
    background: #363b64;
    box-shadow: 0px 11px 28px rgba(191, 21, 108, 0.05);
    border-radius: 4px;
    height: 34px;
    color: #fcfcfc;
    cursor: pointer;
    font-weight: 500;
    text-align: center;
    @media (max-width: ${tabScreenWidth}) {
      height: 28px;
      border-radius: 5px;
      padding: 10px 10px;
      font-size: 12px;
      margin-right: 6px;
    }
  }
  .docButton {
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #363b64;
    box-shadow: 0px 11px 28px rgba(191, 21, 108, 0.05);
    border-radius: 4px;
    width: 124px;
    height: 34px;
    padding: 10px 14px;
    color: #fcfcfc;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    @media (max-width: ${tabScreenWidth}) {
      height: 28px;
      width: 84px;
      border-radius: 5px;
      font-size: 12px;
    }
  }
  .meetingInfoWrapper {
    background: #fcfcfc;
    border-radius: 4px;
    box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    width: 60%;
    margin-top: 10px;
    margin-left: 3%;
    padding-bottom: 6px;
    @media (max-width: ${tabScreenWidth}) {
      width: 90%;
      margin-top: 14px;
      padding-bottom: 12px;
    }
  }
  .meetingInfoFlexWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    font-family: ${primaryFont};
    font-weight: 600;
    font-size: 12px;
    color: #3a3f67;
    margin-bottom: 0px;
    margin-left: 14px;
  }
  .meetingDateWrapper {
    display: flex;
    flex-direction: row;
  }
  .calendarImg {
    margin-left: 14px;
    height: 12px;
    width: 12px;
    margin-top: 2px;
  }
  .meetingDate {
    font-family: ${primaryFont};
    font-size: 12px;
    margin-top: 2px;
    margin-left: 4px;
    color: #3a3f67;
    @media (max-width: ${tabScreenWidth}) {
      font-size: 10px;
    }
  }
  .meetingBtnWrapper {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    @media (max-width: ${tabScreenWidth}) {
      margin-left: 0px;
      margin-top: 10px;
    }
  }
  .joinBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background: #363b64;
    box-shadow: 0px 11px 28px rgba(191, 21, 108, 0.05);
    border-radius: 4px;
    padding: 10px 14px;
    color: #fcfcfc;
    height: 34px;
    width: 124px;
    cursor: pointer;
    margin-right: 8px;
    font-weight: 600;
    @media (max-width: ${tabScreenWidth}) {
      height: 28px;
      width: 94px;
      border-radius: 5px;
      font-size: 12px;
      padding: 10px 10px;
      margin-right: 6px;
    }
  }
  .scheduleBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background: #363b64;
    box-shadow: 0px 11px 28px rgba(191, 21, 108, 0.05);
    border-radius: 4px;
    padding: 10px 14px;
    color: #fcfcfc;
    height: 34px;
    width: 124px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    @media (max-width: ${tabScreenWidth}) {
      height: 28px;
      width: 90px;
      border-radius: 5px;
      font-size: 12px;
    }
  }
  .completeInfoWrapper {
    background: #fcfcfc;
    border-radius: 4px;
    box-shadow: 0px 14px 34px rgba(191, 21, 108, 0.05);
    height: 42%;
    width: 60%;
    margin-top: 16px;
    margin-left: 3%;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    @media (max-width: ${tabScreenWidth}) {
      width: 90%;
      margin-top: 14px;
      height: auto;
      overflow-y: visible;
      margin-bottom: 16px;
    }
  }
  .main-container{
    display: flex;
  }
  .chat{
    min-width: 40%;
  }
  .leftBar{
    width: calc(60% - 15px);
    margin-right: 15px;
  }
  @media (max-width: ${tabScreenWidth}) {
    .chat{
      display: none;
    }
    .leftBar{
      width: 100%;
      margin:auto;
    }
  }
  
`;

export const list = css`
  font-family: ${primaryFont};
  margin: 0;
  padding: 10px 14px;
  list-style: none;
  width: 100%;
  .infofield {
    display: flex;
    flex-direction: row;
    width: 100%;
    @media (max-width: ${tabScreenWidth}) {
      flex-direction: column;
      border-bottom: 1px solid #ededed;
    border-top: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-left: 3px solid #4267b2;
    margin-bottom: 20px;
    padding-left: 10px;
    }
    .key {
      width: 120px;
      margin: 0;
      color: #363b64 !important;
      font-weight: 600;
      font-size: 14px;
      // padding-bottom: 16px;
      margin-right: 24px;
      @media (max-width: ${tabScreenWidth}) {
        font-size: 12px;
        padding-bottom: 1px;
      }
    }
    .value {
      width: 440px;
      margin: 0;
      color: #363b64;
      font-size: 14px;
      @media (max-width: ${tabScreenWidth}) {
        width: 100%;
        font-size: 12px;
        // padding-bottom: 6px;
      }
    }
  }
`;