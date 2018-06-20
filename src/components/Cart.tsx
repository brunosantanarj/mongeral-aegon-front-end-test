import * as React from 'react';
import '../styles/Cart.scss';

const Cart = () => {
  return(
    <section className="cart">
      <h3>Meu Carrinho</h3>
      <table>
        <tr>
          <th>Produto</th>
          <th>Qntd</th>
          <th>Preço</th>
        </tr>

        <tr>
          <td>2x Nome do produto 1</td>
          <td>2</td>
          <td>R$300,00</td>
        </tr>

        <tr>
          <td colSpan={2}>Total</td>
          <td>R$600,00</td>
        </tr>
      </table>
    </section>
  );
}

export default Cart;