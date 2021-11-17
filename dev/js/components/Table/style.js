import { css } from '@emotion/css';

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