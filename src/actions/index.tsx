import { Dispatch } from 'react-redux';
import * as constants from '../constants';
import { IProduct } from "../types";

export interface IAddProduct {
    productId: number,
    type: constants.ADD_PRODUCT
}

export interface IGetProducts {
  products: IProduct[],
  type: constants.GET_PRODUCTS
}

export type ShoppingAction = IAddProduct & IGetProducts;

export function getProducts(products: IProduct[]) {
  return {
    products,
    type: constants.GET_PRODUCTS,
  }
}

export function addToCart(productId: number) {
  return (dispatch: Dispatch, getState: any)   => {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addProduct(productId))
    }
  }
}

function addProduct(productId: number) {
  return {
    productId,
    type: constants.ADD_PRODUCT,
  } 
}