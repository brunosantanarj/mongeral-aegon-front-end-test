import * as React from 'react';
import '../styles/Product.scss';

export interface IProductProps {
  name: string,
  price: number,
  onAddProduct: () => void;
}

const Product = ({ name, price, onAddProduct }: IProductProps) => {
  return(
    <li className="product">
      <h2>{name}</h2>
      <p>R${price}</p>
      <button onClick={onAddProduct}>Comprar</button>
    </li>
  );
}

export default Product;