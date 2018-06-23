import { combineReducers } from 'redux';
import { IStoreState } from '../types';
import cart, { getAddedIds, getQuantity } from './cart'
import products, { getProduct } from './products'

export default combineReducers({
  cart,
  products
});

export function getTotal(state: IStoreState) {
  return getAddedIds(state.cart).reduce((total, id) =>
      total + getProduct(state.products, id).price * getQuantity(state.cart, id), 0).toFixed(2)
}

export function getCartProducts(state: IStoreState) {
  return getAddedIds(state.cart).map((id: number) => ({
    ...getProduct(state.products, id),
    quantity: getQuantity(state.cart, id)
  }))
}