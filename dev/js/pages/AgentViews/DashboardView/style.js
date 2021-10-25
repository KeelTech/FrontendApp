import { css } from "@emotion/css";
import { mobileScreenWidth } from "@constants";
import { primaryFont } from "@constants";

export const header = css`
  display: flex;
  justify-content: flex-end;
`;

export const wrapper = css`
  display: flex;
  width: 100%;
  @media (max-width: ${mobileScreenWidth}) {
    display: block;
  }
`;

export const container = css`
  display: flex;
  width: 70%;
  height: 100%;
  padding: 0px 26px;
  ${"" /* height: calc(100% - 160px); */}
  flex-direction: column;
  .performance {
    display: flex;
    align-items: flex-start;
  }
  // .intro {
  //   padding: 22px 20px;
  //   background: #fcfcfc;
  //   box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  //   border-radius: 20px;
  //   width: 54%;
  //   height:236px;
  //   .profileName {
  //     display: block;
  //     font-weight: bold;
  //     font-size: 30px;
  //     line-height: 66px;
  //     color: #363b64;
  //     margin-bottom: 3px;
  //     font-family: ${primaryFont};
  //   }
  //   .meetingTxt {
  //     display: block;
  //     color: #363b64;
  //     font-size: 16px;
  //     line-height: 18px;
  //     margin-bottom: 20px;
  //     font-family: ${primaryFont};
  //   }
  //   .showTasks {
  //     display: block;
  //     background: #363b64;
  //     padding: 6px;
  //     margin-left: -6px;
  //     box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  //     font-size: 16px;
  //     line-height: 27px;
  //     border-radius: 4px;
  //     color: #fcfcfc;
  //     width: 100%;
  //     text-align: center;
  //     font-weight: bold;    
  //     font-family: ${primaryFont};
  //   }
  // }
  .graph {
    width: 60%;
  }

  @media (max-width: ${mobileScreenWidth}) {
    width: 100%;
    margin-top: 12px;
    padding: 0px 20px;
    .performance {
      display: block;
    }
    // .intro {
    //   background: rgba(252, 252, 252, 0.5);
    //   box-shadow: none;
    //   border-radius: 0px;
    //   width: 100%;
    //   padding: 0;
    //   height:auto;
    //   .profileName {
    //     font-size: 20px;
    //     line-height: 24px;
    //     color: #363b64;
    //     margin-bottom: 6px;
    //   }
    //   .meetingTxt {
    //     display: block;
    //     color: #363b64;
    //     font-size: 14px;
    //     line-height: 18px;
    //     margin-bottom: 10px;
    //   }
    //   .showTasks {
    //     padding: 10px 14px;
    //     margin-left: 0px;
    //     box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
    //     border-radius: 4px;
    //     font-weight: 600;
    //     font-size: 14px;
    //     line-height: 21px;
    //     width: 110px;
    //   }
    // }
  }
`;

export const mobileView = css`
  display: none;
  margin-top: 20px;
  @media (max-width: ${mobileScreenWidth}) {
    display: block;
  }
`;

export const rightBar = css`
  width: 28%;
  @media (max-width: ${mobileScreenWidth}) {
    display: none;
  }
`;

export const widgets = css`
  margin-left: 16px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .widget {
    width: 46%;
    height: 120px;
    margin: 0px 8px 16px 8px;
    padding: 18px;
    border-radius: 4px;
    box-shadow: 2px 2px 8px #d8dce4;
    font-weight: bold;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    span {
      display: block;
      text-align: right;
    }
    .no {
      font-size: 24px;
      margin-bottom: 4px;
      font-family: ${primaryFont};
    }
    .value {
      font-size: 16px;
      color: #363b64;
      font-family: ${primaryFont};
    }
  }
  .widget1 {
    background: #8686ea;
    background-size: cover;
  }
  .widget2 {
    background: #f6d998;
    background-size: cover;
  }
  .widget3 {
    background: #a5fc9c;
    background-size: cover;
  }
  .widget4 {
    background: #71f4aa;
    background-size: cover;
  }
  .cover {
    .no {
      color: #1f20ad;
    }
  }
  .progress {
    .no {
      color: #bc8710;
    }
  }
  .completed {
    .no {
      color: #108604;
    }
  }
  .revenue {
    .no {
      color: #097236;
    }
  }
  @media (max-width: ${mobileScreenWidth}) {
    margin: 0;
    margin-top: 16px;
    .widget {
      width: 47%;
      height: 90px;
      margin: 0px 8px 8px 0px;
      border-radius: 15px;
      box-shadow: 0px 10px 28px rgba(191, 21, 108, 0.05);
      background-size: cover;
      .no {
        font-size: 26px;
        margin-bottom: 0;
      }
      .value {
        font-size: 14px;
      }
    }
  }
`;
