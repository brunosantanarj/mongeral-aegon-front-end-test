import React from 'react';
import styled, { css } from 'react-emotion';

import { DataContext } from './../store/DataContext';

import { mq } from './../styles/utils';
import { BotaoPrimario, BotaoAdicionarCarrinho } from './../styles/index';
import colors from './../styles/colors';

const ListStyled = styled('div')`
  width: 90%;
  max-width: 1200px;
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  grid-template-columns: 1fr;
  margin: 0px auto;
  padding: 50px 0;

  ${mq.medium(`grid-template-columns: 1fr 1fr;`)};
  ${mq.large(`grid-template-columns: 1fr 1fr 1fr;`)};
`;

const Item = styled('div')`
  text-align: center;
`;

const ItemFoto = styled('div')`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

const ItemText = styled('div')`
  h2 {
    color: ${colors.verde};
    font-size: calc(20px + 0.5vw);
    font-weight: 700;
    margin: 10px 0 10px 0;
  }

  p {
    margin: 0;
  }
`;

const ItemValor = styled('div')`
  font-size: calc(16px + 0.1vw);
  font-weight: 700;
  margin: 10px 0;
`;

const Shoplist = () => (
  <ListStyled>
    <DataContext.Consumer>
      {({ state, adicionarCarrinho }) =>
        state.produtos.map(fruta => (
          <Item key={fruta.id}>
            <ItemFoto>
              <img src={fruta.imagem} alt={fruta.nome} />
            </ItemFoto>
            <ItemText>
              <h2>{fruta.nome}</h2>
              <p>{fruta.texto}</p>
              <ItemValor>{fruta.valor}</ItemValor>
            </ItemText>
            <button
              onClick={() => adicionarCarrinho(fruta.id)}
              className={css`
                ${BotaoPrimario} ${BotaoAdicionarCarrinho};
              `}>
              Adicionar
            </button>
          </Item>
        ))
      }
    </DataContext.Consumer>
  </ListStyled>
);

export default Shoplist;
