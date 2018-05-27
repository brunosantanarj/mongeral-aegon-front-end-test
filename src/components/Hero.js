import React from 'react';
import styled, { css } from 'react-emotion';

import Pera from './../images/pera.png';
import * as S from './../styles/index';
import colors from './../styles/colors';
import { mq } from './../styles/utils';
import { BotaoPrimario, BotaoHero } from './../styles/index';

const HeroStyled = styled('div')`
  width: 100vw;
  background: ${colors.amarelo};
  padding: 100px 0 30px;

  & > div {
    ${mq.medium(`
      height: 100%;
      align-items: center;
      display: flex;
      justify-content: space-around;
    `)};
  }
`;

const TextContent = styled('div')`
  text-align: center;
  max-width: 400px;
  margin: 0px auto;

  ${mq.medium(`
    width: 55%;
    max-width: unset;
    text-align: left;
  `)};

  h1 {
    font-size: calc(3vw + 20px);
    font-weight: 900;
    line-height: 1;
    margin: 0;

    ${mq.small(`font-size: calc(2vw + 20px);`)};
    ${mq.medium(`font-size: 60px`)};
  }

  p {
    margin: 15px 0;
    ${mq.medium(`
      font-size: 25px;
      margin-top: 15px;
    `)};
  }
`;

const ImageContent = styled('div')`
  width: 35%;
  display: none;

  img {
    width: 100%;
    height: auto;
  }

  ${mq.medium(`display: block;`)};
`;

const Hero = () => (
  <HeroStyled>
    <S.Container>
      <TextContent>
        <h1>Loja muito bacana!</h1>
        <p>
          Loja muito legal que vende coisas, compre nessa loja, vale muito a
          pena, sérião!
        </p>
        <a
          href="/"
          className={css`
            ${BotaoPrimario} ${BotaoHero};
          `}>
          Botão de ação!
        </a>
      </TextContent>
      <ImageContent>
        <img src={Pera} alt="Pêra" />
      </ImageContent>
    </S.Container>
  </HeroStyled>
);

export default Hero;
