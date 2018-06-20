import * as React from 'react';
import '../styles/Product.scss';

export interface IProductProps {
  available: number;
  id: number;
  name: string;
  price: number;
}

const Product = ({ available, id, name, price }: IProductProps) => {
  return(
    <li className="product">
      <h2>{name}</h2>
      <p>R${price}</p>
      <p>Disponível: {available}</p>
      <button>Comprar</button>
    </li>
  );
}

export default Product;