import * as React from 'react';

export interface IProductProps {
  available: number;
  id: number;
  name: string;
  price: number;
}

const Product = ({ available, id, name, price }: IProductProps) => {
  return(
    <li>
      {`${available}, ${id}, ${name}, ${price}`}
    </li>
  );
}

export default Product;