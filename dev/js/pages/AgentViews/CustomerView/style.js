import { css } from "@emotion/css";
import { primaryFont } from "@constants";

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
  .key{
    display: inline-block;
    margin: 0;
    color: #363b64;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    width: 90px;
  }
  .value{
    display: inline-block;
    margin: 0;
    color: #363b64;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
  .status{
    display: inline-block;
    margin: 0;
    border-radius: 3px;
    padding: 2px 8px;
    background: #cf3030;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #fcfcfc;
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
  background: #CF3030;
  border-radius: 5px;
  outline: none;
    border: none;
    cursor:pointer
}
`
  ;
