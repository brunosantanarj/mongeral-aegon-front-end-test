import * as React from 'react';
import Cart from '../containers/Cart';
import logo from '../images/logo.jpg';
import '../styles/Header.scss';

const Header = () => {
  return(
    <header>
      <h1>
        <a href="javascript:;">
          <img className="logo" src={logo} alt="Loja de Produtos Inusitados" />
        </a>
      </h1>

      <button className="cart-button">Carrinho</button>
      <Cart />
    </header>
  );
}

export default Header;