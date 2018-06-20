import * as React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return(
    <header>
      <h1>
        <a href="javascript:;">Loja de Produtos Inusitados</a>
      </h1>

      <button>Carrinho (0)</button>
    </header>
  );
}

export default Header;