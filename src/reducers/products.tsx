import { combineReducers } from 'redux';
import { ShoppingAction } from '../actions';
import { ADD_PRODUCT, GET_PRODUCTS } from '../constants';
import { IProduct, IProductState } from '../types';

export function products(state: IProduct, action: ShoppingAction) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        inventory: state.inventory - 1
      };
    default:
      return state;
  }
}

function byId(state: IProduct[] = [], action: ShoppingAction){
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj: {}, product: IProduct) => {
          obj[product.id] = product;
          return obj;
        }, {})
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        };
      }
      return state;
  }
}

function visibleIds(state: number[] = [], action: ShoppingAction) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products.map((product: IProduct) => product.id);
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getProduct(state: IProductState, id: number) {
  return state.byId[id];
}

export function getVisibleProducts(state: IProductState) {
  return state.visibleIds.map((id: number) => getProduct(state, id));
} 