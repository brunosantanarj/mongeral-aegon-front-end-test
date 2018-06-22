import * as React from 'react';
import logo from '../images/logo.jpg';
import '../styles/Header.scss';

const Header = () => {
  return(
    <header>
      <h1>
        <a href="javascript:;">
          <img src={logo} alt="Loja de Produtos Inusitados" />
        </a>
      </h1>

      <button>Carrinho (0)</button>
    </header>
  );
}

export default Header;