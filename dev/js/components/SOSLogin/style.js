import { css } from '@emotion/css';
import { tabScreenWidth } from '@constants';

export const loader = css`
  position: absolute;
  display: flex;
  left: 25%;
  top: 40%;
  justify-content: center;
  align-items: center;
  @media (max-width: ${tabScreenWidth}) {
    left: 45%;
  }
`;