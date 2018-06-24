import * as React from 'react';
import '../styles/Cart.scss';
import { IProduct } from '../types';

export interface ICartProps {
  products: IProduct[],
  total: number,
  removeProduct: (productId: number, quantity: number) => void; 
}

export default function Cart({ products, total, removeProduct }: any){
  return(
    <section className="cart">
      <h3>Meu Carrinho</h3>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(
              (product: any, index: number) => (
                product.quantity > 0 ?
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>R${product.price}</td>
                    <td><button onClick={() => removeProduct(product.id, product.quantity)}>Remover</button></td>
                  </tr> : null
              )
            )
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