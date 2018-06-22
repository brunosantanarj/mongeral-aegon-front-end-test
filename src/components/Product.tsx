import * as React from 'react';
import '../styles/Product.scss';

export interface IProductProps {
  image: string,
  name: string,
  price: number,
  onAddProduct: () => void;
}

const Product = ({ image, name, price, onAddProduct }: IProductProps) => {
  return(
    <li className="product">
      <h2 className="name">{name}</h2>
      <img src={image} alt={name} />
      <p className="price">R${price}</p>
      <button onClick={onAddProduct}>Comprar</button>
    </li>
  );
}

export default Product;