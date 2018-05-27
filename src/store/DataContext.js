import React, { Component } from 'react';

import frutas from './../data/index';

export const DataContext = React.createContext();

const frutasComQuantidade = frutas.map(fruta => {
  return { ...fruta, quantidade: 1 };
});

class DataProvider extends Component {
  state = {
    produtos: [...frutasComQuantidade],
    // produtos: [...frutas],
    carrinhoAberto: false,
    produtosNoCarrinho: []
  };

  toggleCarrinho = () => {
    this.setState({ carrinhoAberto: !this.state.carrinhoAberto });
  };

  adicionarCarrinho = id => {
    const { produtos, produtosNoCarrinho } = this.state;

    const produtoExiste = produtosNoCarrinho.filter(fruta => id === fruta.id);

    if (produtoExiste.length > 0) {
      const index = produtosNoCarrinho.findIndex(
        obj => obj.id === produtoExiste[0].id
      );

      const restanteDosProdutos = produtosNoCarrinho.filter(
        fruta => fruta.id !== produtoExiste[0].id
      );

      const copiaDoProdutoExistente = Object.assign(
        {},
        produtosNoCarrinho[index]
      );
      copiaDoProdutoExistente.quantidade += 1;

      this.setState({
        produtosNoCarrinho: [
          ...restanteDosProdutos,
          { ...copiaDoProdutoExistente }
        ]
      });
    } else {
      const filtrarProdutos = produtos.filter(produto => id === produto.id);
      this.setState({
        produtosNoCarrinho: [
          ...this.state.produtosNoCarrinho,
          ...filtrarProdutos
        ]
      });
    }
  };

  removerCarrinho = id => {
    const { produtosNoCarrinho } = this.state;
    const filtrarProdutos = produtosNoCarrinho.filter(
      produto => id !== produto.id
    );

    this.setState({
      produtosNoCarrinho: [...filtrarProdutos]
    });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          state: this.state,
          toggleCarrinho: this.toggleCarrinho,
          adicionarCarrinho: this.adicionarCarrinho,
          removerCarrinho: this.removerCarrinho
        }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
