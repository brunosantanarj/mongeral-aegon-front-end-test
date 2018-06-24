import * as React from 'react';
import '../styles/ProductsList.scss';
import { IProduct } from '../types';
import Product from './Product';

export interface IProps {
  addToCart: (productId: number) => void;
}

const ProductsList = ({ products, addToCart }: any) => {
  return(
    <section>
      <ul className="products-list">
        {
          products.map((product: IProduct, index: number) => (
            <Product
              key={index}
              image={product.image}
              inventory={product.inventory}
              name={product.name}
              price={product.price}
              onAddProduct={() => addToCart(product.id)}
            />
          ))
        }
      </ul>
    </section>
  );
}

export default ProductsList;