import * as React from 'react';
import '../styles/Cart.scss';
import { IProduct } from '../types';

export interface ICartProps {
  items: IProduct[];
  total: number;
  removeProduct?: () => void;
}

export default function Cart({ items, total, removeProduct = (product: IProduct) => {/* */} }: ICartProps){
  return(
    <section className="cart">
      <h3>Meu Carrinho</h3>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            items.length > 0 ?
            items.map(
              (item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
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