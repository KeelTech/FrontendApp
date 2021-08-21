import { css } from "@emotion/css";
import { primaryFont, tabScreenWidth } from "@constants";

export const head = css`
  display: flex;
`;

export const lists = css`
  font-family: ${primaryFont};
  margin: 6px 20px;
  padding: 12px 16px;
  background-color: #fcfcfc;
  border-radius: 10px;
  list-style: none;
`;

export const customer = css`
    display: flex;
    flex-direction: row;
    width: 100%;
  .key{
    margin: 0;
    color: #363b64;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    width: 90px;
  }
  .value{
    margin: 0;
    color: #363b64;
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
  }
  .status{
    margin: 0;
    border-radius: 3px;
    padding: 2px 8px;
    color: #CF3030;
    border: 1px solid #CF3030;
    background: #F5D6D6;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    // color: #fcfcfc;
  }
`

export const greenBtnClass = css`
  font-family: ${primaryFont};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FCFCFC;
  background: #10B759;
  border-radius: 5px;
  outline: none;
    border: none;
    cursor:pointer
}
`
export const redBtnClass = css`
  font-family: ${primaryFont};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FCFCFC;
  background: #f44336;
  border-radius: 5px;
  outline: none;
    border: none;
    cursor:pointer
}
`
  ;


export const view = css`
  .desktopView{
    display: block
  }
  .mobileView{
    display: none;
  }
  @media(max-width: ${tabScreenWidth}){
    .mobileView{
      display: block;
    }
    .desktopView{
      display: none
    }
  }
`