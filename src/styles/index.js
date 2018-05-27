import styled, { css } from 'react-emotion';

import colors from './../styles/colors';
import { mq } from './../styles/utils';

export const Container = styled('div')`
  width: 90%;
  max-width: 1200px;
  margin: 0px auto;
`;

export const BotaoPrimario = css`
  align-items: center;
  background: ${colors.cinza};
  border-radius: 50px;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  text-transform: uppercase;
  padding: 12px 20px;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

export const BotaoAdicionarCarrinho = css`
  background: ${colors.verde};

  &:hover {
    background: ${colors.verdeClaro};
  }
`;

export const BotaoHero = css`
  background: white;
  color: ${colors.verde};
  font-size: calc(2vw + 14px);
  font-weight: 900;

  ${mq.small(`font-size: 24px;`)};
`;
