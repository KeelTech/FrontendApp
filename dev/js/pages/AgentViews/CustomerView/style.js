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

export const headerClass = css`
    height: 47px;
    
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    border-collapse: separate;
`

export const headerRowClass = css`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: #FCFCFC; 
    margin:10px;
    padding:10px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px; 
`
export const tableClass = css`
    border-collapse:separate;
    border-radius:10px;
    -moz-border-radius:10px;
    border-spacing: 0 9px;
    margin: 20px;
    overflow-x:scroll;
    min-width:875px;
    width: 100%;
    padding-right: 40px;
`
export const rowClass = css`
    background-color:white;
    height:40px;
`
export const rowItemClass = css`
    background-color:white;
    text-align: left;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 44px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #363B64;
    :first-child{
        border-radius:10px 0px 0px 10px;
    }
    :last-child{
        border-radius:0px 10px 10px 0px;
    }
`
export const rowItemClassEmpty = css`
    background-color:white;
    text-align: left;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #363B64;
    border-radius:10px;
    text-align:center
`
export const hrClass = css`
    
    background: #363B64;
    text-align: left;
    padding: 10px 20px;
    :first-child{
        border-radius:10px 0px 0px 10px;
    }
    :last-child{
        border-radius:0px 10px 10px 0px;
    }
`
export const actionItemColor = props=>css`
    background: ${props.colorFormat};
    border: 1px solid #4891d1;
    color: #4891d1;
    position: relative;
    font-size: 12px;
    border-radius: 25px;
    text-align: center;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    overflow: hidden;
    box-shadow: 1px 1px 3px #cbcbcb;
`