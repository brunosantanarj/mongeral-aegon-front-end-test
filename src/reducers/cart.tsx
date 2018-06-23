import { ShoppingAction } from '../actions';
import { ADD_PRODUCT } from '../constants';
import { ICartState } from '../types';

const initialState: ICartState = {
  idOnCart: [],
  quantityById: []
}

function idOnCart(state: number[] = initialState.idOnCart, action: ShoppingAction) {
    const { productId, type } = action;
    
    switch (type) {
      case ADD_PRODUCT:
        return state.indexOf(productId) !== -1 ? state : [...state, productId];

      default:
        return state;
    }
  }
  
function quantityById (state: number[] = initialState.quantityById, action: ShoppingAction) {
  switch (action.type) {
    case ADD_PRODUCT:
      const { productId } = action
      
      return {...state, [productId]: (state[productId] || 0) + 1 };

    default:
      return state;
  }
}

export function getQuantity(state: ICartState, productId: number) {
  return state.quantityById[productId] || 0;
}

export function getAddedIds(state: ICartState) {
  return state.idOnCart;
}

export default function cart(state: ICartState = initialState, action: ShoppingAction) {
  return {
    idOnCart: idOnCart(state.idOnCart, action),
    quantityById: quantityById(state.quantityById, action)
  }
}