import * as React from 'react';
import products from '../data/products.json';
import '../styles/ProductsList.scss';
import { IProduct } from '../types';
import Product from './Product';

export interface IProps {
  addProduct: (product: IProduct) => void;
}

const ProductsList = ({ addProduct }: IProps) => {
  return(
    <section>
      <div className="order-by">
        <label htmlFor="order">Ordernar por:</label>
        <select id="order">
          <option>Mais barato</option>
          <option>Mais caro</option>
          <option>Nome</option>
        </select>
      </div>
      <ul className="products-list">
        {
          products.map((product: IProduct, index: number) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              onAddProduct={() => addProduct(product)}
            />
          ))
        }
      </ul>
    </section>
  );
}

export default ProductsList;