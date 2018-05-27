import React from 'react';
import styled from 'react-emotion';

import { DataContext } from './../store/DataContext';

import { mq } from './../styles/utils';
import colors from './../styles/colors';
import Logo from './../ui/logo';

const HeaderStyled = styled('header')`
  width: 100%;
  height: 80px;
  align-items: center;
  background: ${colors.amarelo};
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;

  ${mq.medium(`padding: 0 80px;`)};
`;

const Carrinho = styled('button')`
  width: 40px;
  height: 40px;
  align-items: center;
  background: white;
  border: none;
  border-radius: 100px;
  display: flex;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  justify-content: center;
  padding: 0;
  text-align: center;

  &:hover {
    background: ${colors.cinzaClaro};
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const Header = () => (
  <DataContext.Consumer>
    {({ state, toggleCarrinho }) => (
      <HeaderStyled>
        <Logo />
        <Carrinho onClick={toggleCarrinho}>
          {state.produtosNoCarrinho ? state.produtosNoCarrinho.length : 0}
        </Carrinho>
      </HeaderStyled>
    )}
  </DataContext.Consumer>
);

export default Header;
