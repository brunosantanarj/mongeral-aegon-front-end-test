import * as React from 'react';
import '../styles/Cart.scss';
import { IProduct } from '../types';

export interface ICartProps {
  products: IProduct[];
  total: number;
}

export default function Cart({ products, total }: any){
  return(
    <section className="cart">
      <h3>Meu Carrinho</h3>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 ?
            products.map(
              (product: any, index: number) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>R${product.price}</td>
                </tr>
              )
            ) : <tr><td>Não existem produtos no seu carrinho!</td></tr>
          }
          <tr>
            <td colSpan={2}>Total</td>
            <td>R${total}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}