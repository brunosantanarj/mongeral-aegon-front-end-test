import * as React from 'react';
import '../styles/Cart.scss';
import { IProduct } from '../types';

export interface ICartProps {
  items: IProduct[];
  total: number;
  removeProduct: (product: IProduct) => void;
}

export default function Cart({ items, total, removeProduct }: ICartProps){
  return(
    <section className="cart">
      <h3>Meu Carrinho</h3>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {
            items.length > 0 ?
            items.map(
              (product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td><button onClick={() => removeProduct(product)}>Remover</button></td>
                </tr>
              )
            ) : <tr><td>Não existem produtos no seu carrinho!</td></tr>
          }
          <tr>
            <td>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}