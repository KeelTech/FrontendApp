import { css } from '@emotion/css';
import { primaryFont } from '@constants';

export const head = css`
display: flex;
`;

export const lists = css`
font-family: ${primaryFont};
margin: 6px 20px;
padding: 12px 16px;
background-color: #FCFCFC;
border-radius: 10px;
list-style: none;
`;

export const keys = css`
display: inline-block;
margin: 0;
color:#363B64;
font-weight: 700;
font-size: 12px;
line-height: 18px;
width: 86px
`;

export const values = css`
display: inline-block;
margin: 0;
color:#363B64;
font-weight: 400;
font-size: 12px;
line-height: 18px;
`;

export const status = css`
display: inline-block;
margin: 0;
text-align: center;
border-radius: 3px;
padding: 2px 8px;
background: #CF3030;
font-weight: 500;
font-size: 10px;
line-height: 15px;
color: #FCFCFC;
`;







