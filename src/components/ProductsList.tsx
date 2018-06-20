import * as React from 'react';
import products from '../data/products.json';
import '../styles/ProductsList.scss';
import Product, { IProductProps } from './Product';

const ProductsList = () => {
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
          products.map((product: IProductProps) => (
            <Product
              key={product.id}
              available={product.available}
              id={product.id}
              name={product.name}
              price={product.price}
            />
          ))
        }
      </ul>
    </section>
  );
}

export default ProductsList;