import { css } from '@emotion/css';
import { primaryFont } from '@constants';

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
    background: #f8f9fa;
    border-radius: 10px;
    width: 45%;
    height: 16%;
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
    background: #212529;
    box-shadow: 0px 11.2949px 28.2373px rgba(191, 21, 108, 0.05);
    border-radius: 5px;
    width: 124px;
    height: 34px;
    padding: 9.03593px 13.5539px;
    color: #fcfcfc;
    cursor: pointer;
  }
  .docButton {
    background: #212529;
    box-shadow: 0px 11.2949px 28.2373px rgba(191, 21, 108, 0.05);
    border-radius: 5px;
    width: 124px;
    height: 34px;
    padding: 9.03593px 13.5539px;
    color: #fcfcfc;
    cursor: pointer;
  }
  .meetingInfoWrapper {
    background: #f8f9fa;
    border-radius: 10px;
    width: 45%;
    height: 6%;
    margin-top: 2%;
  }
  .meetingInfoFlexWrapper {
    display: flex;
    flex-direction: row;
  }
  .meetingTextWrapper {
    display: flex;
    flex-direction: column;
  }
  .meetingHeader {
    font-family: Inter;
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 0px;
    margin-left: 15px;
    line-height: 15px;
  }
  .meetingDateWrapper {
    display: flex;
    flex-direction: row;
  }
  .calendarImg {
    margin-left: 15px;
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
  .joinBtn {
    background: #212529;
    box-shadow: 0px 11.2949px 28.2373px rgba(191, 21, 108, 0.05);
    border-radius: 5px;
    padding: 9.03593px 13.5539px;
    color: #fcfcfc;
    height: 37px;
    margin-left: 30%;
    width: 20%;
    margin-top: 2%;
    cursor: pointer;
  }
  .scheduleBtn {
    background: #212529;
    box-shadow: 0px 11.2949px 28.2373px rgba(191, 21, 108, 0.05);
    border-radius: 5px;
    padding: 9.03593px 13.5539px;
    color: #fcfcfc;
    height: 37px;
    width: 20%;
    margin-top: 2%;
    cursor: pointer;
  }
`;
