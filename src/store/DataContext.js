import React, { Component } from 'react';

import frutas from './../data/index';

export const DataContext = React.createContext();

const frutasComQuantidade = frutas.map(fruta => {
  return { ...fruta, quantidade: 1 };
});

class DataProvider extends Component {
  state = {
    produtos: [...frutasComQuantidade],
    carrinhoAberto: false,
    produtosNoCarrinho: [],
    valorTotal: 0
  };

  calculaTotal = () => {
    const converteValor = valor => {
      const removeCifrao = valor.replace('R$ ', '');
      const resultado = parseFloat(removeCifrao.replace(',', '.'), 10);
      return resultado;
    };
    const total = this.state.produtosNoCarrinho.reduce((a, b) => {
      return a + converteValor(b.valor);
    }, 0);

    return total.toString().replace('.', ',');
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

      this.setState(
        {
          produtosNoCarrinho: [
            ...restanteDosProdutos,
            { ...copiaDoProdutoExistente }
          ]
        },
        () => this.setState({ valorTotal: this.calculaTotal() })
      );
    } else {
      const filtrarProdutos = produtos.filter(produto => id === produto.id);
      this.setState(
        {
          produtosNoCarrinho: [
            ...this.state.produtosNoCarrinho,
            ...filtrarProdutos
          ]
        },
        () => this.setState({ valorTotal: this.calculaTotal() })
      );
    }
  };

  removerCarrinho = id => {
    const { produtosNoCarrinho } = this.state;
    const filtrarProdutos = produtosNoCarrinho.filter(
      produto => id !== produto.id
    );

    this.setState(
      {
        produtosNoCarrinho: [...filtrarProdutos]
      },
      () => this.setState({ valorTotal: this.calculaTotal() })
    );
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
