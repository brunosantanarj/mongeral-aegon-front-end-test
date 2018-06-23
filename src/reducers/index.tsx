import { combineReducers } from 'redux';
import { IStoreState } from '../types';
import cart, { getAddedIds, getQuantity } from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
});

export function getTotal(state: IStoreState) {
  return getAddedIds(state.cart).reduce((total, id) =>
      total + fromProducts.getProduct(state.products, id).price * getQuantity(state.cart, id), 0).toFixed(2)
}

export function getCartProducts(state: IStoreState) {
  return getAddedIds(state.cart).map((id: number) => ({
    ...fromProducts.getProduct(state.products, id),
    quantity: getQuantity(state.cart, id)
  }))
}