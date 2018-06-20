import * as React from 'react';
import products from '../data/products.json';
import Product, { IProductProps } from './Product';

const ProductsList = () => {
  return(
    <>
      {
        products.map((product: IProductProps) => (
          <Product
            available={product.available}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))
      }
    </>
  );
}

export default ProductsList;