import React from 'react';
import styled from 'react-emotion';

import { DataContext } from './../store/DataContext';
import colors from '../styles/colors';

const CarrinhoOverlay = styled('div')`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const CarrinhoMenu = styled('div')`
  width: 90%;
  max-width: 450px;
  height: 100vh;
  background: white;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6;
`;

const Fechar = styled('button')`
  border: none;
  cursor: pointer;
  font-size: 15px;
  padding: 0;
  position: absolute;
  top: 20px;
  right: 20px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

const Vazio = styled('div')`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  text-align: center;

  p {
    width: 100%;
    margin: 0;
  }

  span {
    font-size: 35px;
  }
`;

const CarrinhoLista = styled('div')`
  padding: 50px 20px;
`;

const CarrinhoItem = styled('div')`
  display: flex;
  align-items: center;
  padding: 15px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.cinzaClaro};
  }
`;

const CarrinhoImagem = styled('div')`
  width: 40%;

  img {
    width: 100%;
    height: auto;
  }
`;

const CarrinhoTexto = styled('div')`
  h3 {
    color: ${colors.verde};
    margin: 0;
  }

  p {
    font-weight: 700;
    margin: 0;
  }
`;

const Remover = styled('button')`
  background: none;
  border: 1px solid ${colors.cinzaClaro};
  color: ${colors.cinzaClaro};
  cursor: pointer;
  font-size: 14px;
  margin-top: 8px;
  padding: 6px 10px;
  text-transform: uppercase;

  &:hover {
    border: 1px solid ${colors.cinza};
    color: ${colors.cinza};
  }

  &:focus {
    outline: none;
  }
`;

const Carrinho = () => (
  <DataContext.Consumer>
    {({ state, toggleCarrinho, removerCarrinho }) =>
      state.carrinhoAberto ? (
        <CarrinhoOverlay>
          <CarrinhoMenu>
            <Fechar onClick={toggleCarrinho}>Fechar</Fechar>

            {state.produtosNoCarrinho.length > 0 ? (
              <CarrinhoLista>
                {state.produtosNoCarrinho.map(fruta => (
                  <CarrinhoItem key={fruta.id}>
                    <CarrinhoImagem>
                      <img src={fruta.imagem} alt={fruta.nome} />
                    </CarrinhoImagem>
                    <CarrinhoTexto>
                      <h3>
                        {fruta.nome} X {fruta.quantidade}
                      </h3>
                      <p>{fruta.valor}</p>
                      <Remover onClick={() => removerCarrinho(fruta.id)}>
                        Remover
                      </Remover>
                    </CarrinhoTexto>
                  </CarrinhoItem>
                ))}
              </CarrinhoLista>
            ) : (
              <Vazio>
                <div>
                  <span role="img" aria-label="Carinha apreensiva">
                    😰
                  </span>
                  <p>O carrinho está vázio!</p>
                </div>
              </Vazio>
            )}
          </CarrinhoMenu>
        </CarrinhoOverlay>
      ) : null
    }
  </DataContext.Consumer>
);

export default Carrinho;
