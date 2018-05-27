import React, { Fragment } from 'react';
import styled from 'react-emotion';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { DataContext } from './../store/DataContext';
import colors from '../styles/colors';

const CarrinhoOverlay = styled('div')`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  transition: all 0.25s ease-in-out;
  top: 0;
  left: 0;
  z-index: 5;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 0;
  }
`;

const CarrinhoMenu = styled('div')`
  width: 90%;
  max-width: 450px;
  height: 100vh;
  background: white;
  overflow-y: auto;
  position: fixed;
  transition: all 0.25s ease-in-out;
  top: 0;
  right: 0;
  z-index: 6;

  &.slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  &.slide-enter.slide-enter-active {
    transform: translateX(0);
    opacity: 1;
  }

  &.slide-exit {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const Fechar = styled('button')`
  background: none;
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
  padding: 20px 20px;
`;

const CarrinhoItem = styled('div')`
  display: flex;
  align-items: center;
  padding: 15px 0;
  transition: all 0.15s ease-in-out;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.cinzaClaro};
  }

  &.fadeSlide-enter {
    transform: translateX(20%);
    opacity: 0;
  }

  &.fadeSlide-enter.fadeSlide-enter-active {
    transform: translateX(0);
    opacity: 1;
  }

  &.fadeSlide-exit {
    transform: translateX(20%);
    opacity: 0;
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

const Total = styled('div')`
  width: 100%;
  align-items: center;
  background: ${colors.verde};
  color: white;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  margin-top: 58px;
  padding: 20px 10px;
`;

const Carrinho = () => (
  <DataContext.Consumer>
    {({ state, toggleCarrinho, removerCarrinho }) => (
      <CSSTransition
        in={state.carrinhoAberto}
        timeout={250}
        classNames="fade"
        mountOnEnter
        unmountOnExit>
        {animation => (
          <CarrinhoOverlay>
            <CSSTransition
              in={animation === 'entered'}
              timeout={250}
              classNames="slide"
              mountOnEnter
              unmountOnExit>
              <CarrinhoMenu>
                <Fechar onClick={toggleCarrinho}>Fechar</Fechar>

                {state.produtosNoCarrinho.length > 0 ? (
                  <Fragment>
                    <Total>Total: R$ {state.valorTotal}</Total>
                    <CarrinhoLista>
                      <TransitionGroup>
                        {state.produtosNoCarrinho.map(fruta => (
                          <CSSTransition
                            key={fruta.id}
                            timeout={150}
                            classNames="fadeSlide">
                            <CarrinhoItem key={fruta.id}>
                              <CarrinhoImagem>
                                <img src={fruta.imagem} alt={fruta.nome} />
                              </CarrinhoImagem>
                              <CarrinhoTexto>
                                <h3>
                                  {fruta.nome} X {fruta.quantidade}
                                </h3>
                                <p>{fruta.valor}</p>
                                <Remover
                                  onClick={() => removerCarrinho(fruta.id)}>
                                  Remover
                                </Remover>
                              </CarrinhoTexto>
                            </CarrinhoItem>
                          </CSSTransition>
                        ))}
                      </TransitionGroup>
                    </CarrinhoLista>
                  </Fragment>
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
            </CSSTransition>
          </CarrinhoOverlay>
        )}
      </CSSTransition>
    )}
  </DataContext.Consumer>
);

export default Carrinho;
