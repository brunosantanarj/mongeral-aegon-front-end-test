import * as React from 'react';

export interface IProductProps {
  available: number;
  id: number;
  name: string;
  price: number;
}

const Product = ({ available, id, name, price }: IProductProps) => {
  return(
    <>
      {`${available}, ${id}, ${name}, ${price}`}
    </>
  );
}

export default Product;