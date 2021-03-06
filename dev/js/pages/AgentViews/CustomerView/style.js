import { css } from "@emotion/css";
import { primaryFont, tabScreenWidth } from "@constants";

export const head = css`
  display: flex;
`;

export const lists = css`
  font-family: ${primaryFont};
  margin: 6px 20px;
  cursor: pointer;
  list-style: none;
  background: #FFFFFF;
box-shadow: 4px 4px 8px #D8DCE4;
border-radius: 4px;
padding: 12px 12px;
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
    margin-top: 4px;
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